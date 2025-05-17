import React from 'react';
import { CopyButton } from '@/components/ui/copy-button';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const InputComponents = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Input Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Beautiful form controls and input elements with modern styling.
          </p>
        </div>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Standard Input */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Standard Input</h3>
              <div className="mb-6">
                <Label htmlFor="standard-input" className="text-gray-300 mb-2">Username</Label>
                <Input id="standard-input" placeholder="Enter your username" />
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<div className="mb-6">
  <Label htmlFor="standard-input">Username</Label>
  <Input id="standard-input" placeholder="Enter your username" />
</div>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<div className="mb-6">
  <Label htmlFor="standard-input">Username</Label>
  <Input id="standard-input" placeholder="Enter your username" />
</div>`}</code>
                </pre>
              </div>
            </div>
            
            {/* Neo Input */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Neo Input</h3>
              <div className="mb-6">
                <Label htmlFor="neo-input" className="text-gray-300 mb-2">Email</Label>
                <input 
                  id="neo-input" 
                  className="neo-input w-full px-3 py-2 text-white" 
                  placeholder="Enter your email" 
                />
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<div className="mb-6">
  <Label htmlFor="neo-input">Email</Label>
  <input 
    id="neo-input" 
    className="neo-input w-full px-3 py-2 text-white" 
    placeholder="Enter your email" 
  />
</div>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<div className="mb-6">
  <Label htmlFor="neo-input">Email</Label>
  <input 
    id="neo-input" 
    className="neo-input w-full px-3 py-2 text-white" 
    placeholder="Enter your email" 
  />
</div>`}</code>
                </pre>
              </div>
            </div>
            
            {/* Textarea */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Textarea</h3>
              <div className="mb-6">
                <Label htmlFor="text-area" className="text-gray-300 mb-2">Message</Label>
                <Textarea id="text-area" placeholder="Type your message here" />
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<div className="mb-6">
  <Label htmlFor="text-area">Message</Label>
  <Textarea id="text-area" placeholder="Type your message here" />
</div>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<div className="mb-6">
  <Label htmlFor="text-area">Message</Label>
  <Textarea id="text-area" placeholder="Type your message here" />
</div>`}</code>
                </pre>
              </div>
            </div>
            
            {/* Input with Icon */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Input with Icon</h3>
              <div className="mb-6">
                <Label htmlFor="icon-input" className="text-gray-300 mb-2">Search</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <Input id="icon-input" className="pl-10" placeholder="Search..." />
                </div>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<div className="mb-6">
  <Label htmlFor="icon-input">Search</Label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
      </svg>
    </div>
    <Input id="icon-input" className="pl-10" placeholder="Search..." />
  </div>
</div>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<div className="mb-6">
  <Label htmlFor="icon-input">Search</Label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
      </svg>
    </div>
    <Input id="icon-input" className="pl-10" placeholder="Search..." />
  </div>
</div>`}</code>
                </pre>
              </div>
            </div>
            
            {/* OTP Input */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">OTP Input</h3>
              <div className="mb-6">
                <Label htmlFor="otp-input" className="text-gray-300 mb-2">Verification Code</Label>
                <div className="flex gap-2 mt-2">
                  {[0, 1, 2, 3].map((i) => (
                    <input
                      key={i}
                      className="w-12 h-12 text-center bg-black/30 border border-white/20 rounded-md text-white focus:border-neon-purple focus:outline-none"
                      maxLength={1}
                      placeholder="•"
                    />
                  ))}
                </div>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<div className="mb-6">
  <Label htmlFor="otp-input">Verification Code</Label>
  <div className="flex gap-2 mt-2">
    {[0, 1, 2, 3].map((i) => (
      <input
        key={i}
        className="w-12 h-12 text-center bg-black/30 border border-white/20 rounded-md text-white focus:border-neon-purple focus:outline-none"
        maxLength={1}
        placeholder="•"
      />
    ))}
  </div>
</div>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<div className="mb-6">
  <Label htmlFor="otp-input">Verification Code</Label>
  <div className="flex gap-2 mt-2">
    {[0, 1, 2, 3].map((i) => (
      <input
        key={i}
        className="w-12 h-12 text-center bg-black/30 border border-white/20 rounded-md text-white focus:border-neon-purple focus:outline-none"
        maxLength={1}
        placeholder="•"
      />
    ))}
  </div>
</div>`}</code>
                </pre>
              </div>
            </div>
            
            {/* Input with Validation */}
            <div className="bg-black/20 border border-white/10 rounded-lg p-6 relative group">
              <h3 className="text-xl font-semibold mb-4 text-white">Input with Validation</h3>
              <div className="mb-6">
                <Label htmlFor="validation-input" className="text-gray-300 mb-2">Password</Label>
                <Input id="validation-input" type="password" className="border-red-500" placeholder="Enter password" />
                <p className="text-red-500 text-xs mt-1">Password must be at least 8 characters long</p>
              </div>
              <div className="bg-black/80 rounded-md p-4 relative">
                <CopyButton 
                  code={`<div className="mb-6">
  <Label htmlFor="validation-input">Password</Label>
  <Input id="validation-input" type="password" className="border-red-500" placeholder="Enter password" />
  <p className="text-red-500 text-xs mt-1">Password must be at least 8 characters long</p>
</div>`} 
                />
                <pre className="text-gray-300 text-xs overflow-auto p-1">
                  <code>{`<div className="mb-6">
  <Label htmlFor="validation-input">Password</Label>
  <Input id="validation-input" type="password" className="border-red-500" placeholder="Enter password" />
  <p className="text-red-500 text-xs mt-1">Password must be at least 8 characters long</p>
</div>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default InputComponents;
