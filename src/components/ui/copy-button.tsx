
import React, { useState } from 'react';
import { Copy, CopyCheck } from 'lucide-react';
import { Button } from '@/components/core/Button';
import { toast } from 'sonner';

interface CopyButtonProps {
  code: string;
  className?: string;
}

export function CopyButton({ code, className }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      toast.success("Code copied to clipboard!");
      
      // Reset the copied state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy code");
    }
  };

  return (
    <Button 
      size="sm" 
      variant="ghost" 
      className={`gap-1 h-8 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 hover:bg-black/70 text-white ${className}`}
      onClick={copyToClipboard}
    >
      {isCopied ? <CopyCheck className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      <span className="text-xs">Copy Code</span>
    </Button>
  );
}
