import React from 'react';
import {
  Button,
  Card,
  Input,
  Modal,
  AuroraButton,
  LiquidButton,
  TiltCard,
  GlowCard,
  useToast
} from '@uiinfinity/components';

export function BasicUsageExample() {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "Success!",
      description: "Button clicked successfully",
    });
  };

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          UIinfinity Components Demo
        </h1>

        {/* Core Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Core Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4">Standard Button</h3>
              <Button onClick={handleButtonClick}>
                Click Me
              </Button>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4">Input Field</h3>
              <Input 
                placeholder="Enter your name"
                className="w-full"
              />
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4">Modal Trigger</h3>
              <Modal
                trigger={<Button>Open Modal</Button>}
                title="Example Modal"
                description="This is a sample modal from UIinfinity"
              >
                <div className="p-4">
                  <p className="text-gray-300">Modal content goes here!</p>
                </div>
              </Modal>
            </Card>
          </div>
        </section>

        {/* Special Effect Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Special Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4">Aurora Button</h3>
              <AuroraButton 
                className="px-6 py-3 text-white font-medium"
                onClick={handleButtonClick}
              >
                Aurora Effect
              </AuroraButton>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4">Liquid Button</h3>
              <LiquidButton 
                className="px-6 py-3 bg-blue-500 text-white"
                onClick={handleButtonClick}
              >
                Liquid Animation
              </LiquidButton>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4">Glow Card</h3>
              <GlowCard className="p-4 bg-gradient-to-r from-purple-500 to-pink-500">
                <p className="text-white font-medium">Glowing Card Effect</p>
              </GlowCard>
            </Card>
          </div>
        </section>

        {/* 3D Effects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">3D Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TiltCard className="w-full h-48 bg-gradient-to-br from-purple-500 to-pink-500">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">3D Tilt Card</h3>
                <p>Hover to see the 3D effect!</p>
              </div>
            </TiltCard>

            <TiltCard className="w-full h-48 bg-gradient-to-br from-blue-500 to-cyan-500">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">Another 3D Card</h3>
                <p>Move your mouse around!</p>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Form Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Form Example</h2>
          <Card className="p-6 bg-gray-800 border-gray-700 max-w-md mx-auto">
            <h3 className="text-lg font-medium text-white mb-4">Contact Form</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input 
                  placeholder="Your name"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  placeholder="Your message"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={4}
                />
              </div>
              <Button 
                type="submit"
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  toast({
                    title: "Message Sent!",
                    description: "Thank you for your message.",
                  });
                }}
              >
                Send Message
              </Button>
            </form>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default BasicUsageExample;
