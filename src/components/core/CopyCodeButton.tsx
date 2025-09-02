import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from './Button';
import { toast } from 'sonner';

interface CopyCodeButtonProps {
  code: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export function CopyCodeButton({ 
  code, 
  className, 
  variant = 'ghost',
  size = 'sm'
}: CopyCodeButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      toast.success('Code copied to clipboard!');
      
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy code');
    }
  };

  return (
    <Button 
      variant={variant}
      size={size}
      className={className}
      onClick={copyToClipboard}
    >
      {isCopied ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          Copied
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-2" />
          Copy Code
        </>
      )}
    </Button>
  );
}