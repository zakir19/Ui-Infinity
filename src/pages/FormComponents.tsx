import React from 'react';
import Footer from '@/components/Footer';
import { CopyButton } from '@/components/ui/copy-button';
import { GlowingOrbInput } from '@/components/ui/glowing-orb-input';
import { NeonGridField } from '@/components/ui/neon-grid-field';
import { PrismSelect } from '@/components/ui/prism-select';
import { HoloToggleRing } from '@/components/ui/holo-toggle-ring';
import { PulseRadioCluster } from '@/components/ui/pulse-radio-cluster';
import { CrystalTextArea } from '@/components/ui/crystal-textarea';
import { VortexFormButton } from '@/components/ui/vortex-form-button';

const FormComponents = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Form Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Beautiful and functional form components for your web applications.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Glowing Orb Input */}
            <FormShowcase 
              title="Glowing Orb Input"
              description="A text input encased in a glowing 3D orb with pulsing neon effects"
              code={`import { GlowingOrbInput } from '@/components/ui/glowing-orb-input';

<GlowingOrbInput
  label="Username"
  placeholder="Enter your username"
  onChange={(value) => console.log(value)}
/>`}>
              <GlowingOrbInput
                label="Username"
                placeholder="Enter your username"
              />
            </FormShowcase>

            {/* Neon Grid Field */}
            <FormShowcase 
              title="Neon Grid Field"
              description="Text input on a 3D grid that tilts and glows with neon colors"
              code={`import { NeonGridField } from '@/components/ui/neon-grid-field';

<NeonGridField
  label="Email Address"
  placeholder="Enter your email"
  onChange={(value) => console.log(value)}
/>`}>
              <NeonGridField
                label="Email Address"
                placeholder="Enter your email"
              />
            </FormShowcase>

            {/* Prism Select */}
            <FormShowcase 
              title="Prism Select"
              description="Dropdown select shaped like a rotating 3D prism with neon highlights"
              code={`import { PrismSelect } from '@/components/ui/prism-select';

<PrismSelect
  label="Select Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' }
  ]}
  onChange={(value) => console.log(value)}
/>`}>
              <PrismSelect
                label="Select Country"
                options={[
                  { value: 'us', label: 'United States' },
                  { value: 'ca', label: 'Canada' },
                  { value: 'uk', label: 'United Kingdom' },
                  { value: 'au', label: 'Australia' }
                ]}
              />
            </FormShowcase>

            {/* Holo Toggle Ring */}
            <FormShowcase 
              title="Holo Toggle Ring"
              description="Toggle switch with a glowing 3D ring and floating neon sphere"
              code={`import { HoloToggleRing } from '@/components/ui/holo-toggle-ring';

<HoloToggleRing
  label="Enable notifications"
  onChange={(checked) => console.log(checked)}
/>`}>
              <HoloToggleRing
                label="Enable notifications"
              />
            </FormShowcase>

            {/* Pulse Radio Cluster */}
            <FormShowcase 
              title="Pulse Radio Cluster"
              description="Radio group as a constellation of glowing nodes with connecting light beams"
              code={`import { PulseRadioCluster } from '@/components/ui/pulse-radio-cluster';

<PulseRadioCluster
  label="Subscription Plan"
  options={[
    { value: 'basic', label: 'Basic Plan' },
    { value: 'pro', label: 'Pro Plan' },
    { value: 'enterprise', label: 'Enterprise' }
  ]}
  onChange={(value) => console.log(value)}
/>`}>
              <PulseRadioCluster
                label="Subscription Plan"
                options={[
                  { value: 'basic', label: 'Basic Plan' },
                  { value: 'pro', label: 'Pro Plan' },
                  { value: 'enterprise', label: 'Enterprise' }
                ]}
              />
            </FormShowcase>

            {/* Crystal TextArea */}
            <FormShowcase 
              title="Crystal TextArea"
              description="Textarea encased in a 3D crystal structure that refracts neon light"
              code={`import { CrystalTextArea } from '@/components/ui/crystal-textarea';

<CrystalTextArea
  label="Your Message"
  placeholder="Enter your message here..."
  rows={4}
  onChange={(value) => console.log(value)}
/>`}>
              <CrystalTextArea
                label="Your Message"
                placeholder="Enter your message here..."
                rows={4}
              />
            </FormShowcase>

            {/* Vortex Form Button */}
            <FormShowcase 
              title="Vortex Form Button"
              description="Submit button with a 3D vortex that swirls with neon energy"
              code={`import { VortexFormButton } from '@/components/ui/vortex-form-button';

<VortexFormButton
  type="submit"
  onClick={() => console.log('Form submitted!')}
>
  Submit Form
</VortexFormButton>`}>
              <VortexFormButton
                onClick={() => console.log('Form submitted!')}
              >
                Submit Form
              </VortexFormButton>
            </FormShowcase>

            {/* Keep existing components */}
            {/* ... keep existing code (Text Input, Email Input, Select Input, etc.) the same ... */}
            
            {/* Text Input */}
            <FormShowcase 
              title="Text Input"
              description="Standard text input field with label"
              code={`<div className="space-y-2">
  <label className="text-sm font-medium text-gray-300" htmlFor="name">
    Name
  </label>
  <input
    type="text"
    id="name"
    placeholder="Enter your name"
    className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent"
  />
</div>`}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent"
                />
              </div>
            </FormShowcase>

            {/* Email Input with Validation */}
            <FormShowcase 
              title="Email Input"
              description="Email input with validation styling"
              code={`<div className="space-y-2">
  <label className="text-sm font-medium text-gray-300" htmlFor="email">
    Email
  </label>
  <input
    type="email"
    id="email"
    placeholder="Enter your email"
    className="w-full px-4 py-2 rounded-md bg-black/20 border border-red-500 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
  />
  <p className="text-xs text-red-500 mt-1">Please enter a valid email address</p>
</div>`}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-black/20 border border-red-500 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <p className="text-xs text-red-500 mt-1">Please enter a valid email address</p>
              </div>
            </FormShowcase>
            
            {/* Select Input */}
            <FormShowcase 
              title="Select Input"
              description="Dropdown select component"
              code={`<div className="space-y-2">
  <label className="text-sm font-medium text-gray-300" htmlFor="country">
    Country
  </label>
  <select
    id="country"
    className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent appearance-none"
    style={{ backgroundImage: "url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\\")", 
      backgroundRepeat: "no-repeat", backgroundPosition: "right 0.5rem center", paddingRight: "2.5rem" }}
  >
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
    <option value="au">Australia</option>
  </select>
</div>`}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300" htmlFor="country">
                  Country
                </label>
                <select
                  id="country"
                  className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent appearance-none"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", 
                    backgroundRepeat: "no-repeat", backgroundPosition: "right 0.5rem center", paddingRight: "2.5rem" }}
                >
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                </select>
              </div>
            </FormShowcase>

            {/* Checkbox */}
            <FormShowcase 
              title="Checkbox"
              description="Interactive checkbox component"
              code={`<div className="space-y-3">
  <div className="flex items-center">
    <input
      type="checkbox"
      id="terms"
      className="w-4 h-4 rounded border-white/30 text-neon-purple focus:ring-neon-purple focus:ring-offset-0 focus:ring-offset-transparent bg-black/20"
    />
    <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
      I agree to the terms and conditions
    </label>
  </div>
  <div className="flex items-center">
    <input
      type="checkbox"
      id="marketing"
      className="w-4 h-4 rounded border-white/30 text-neon-purple focus:ring-neon-purple focus:ring-offset-0 focus:ring-offset-transparent bg-black/20"
      defaultChecked
    />
    <label htmlFor="marketing" className="ml-2 text-sm text-gray-300">
      Subscribe to marketing emails
    </label>
  </div>
</div>`}>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 rounded border-white/30 text-neon-purple focus:ring-neon-purple focus:ring-offset-0 focus:ring-offset-transparent bg-black/20"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                    I agree to the terms and conditions
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="marketing"
                    className="w-4 h-4 rounded border-white/30 text-neon-purple focus:ring-neon-purple focus:ring-offset-0 focus:ring-offset-transparent bg-black/20"
                    defaultChecked
                  />
                  <label htmlFor="marketing" className="ml-2 text-sm text-gray-300">
                    Subscribe to marketing emails
                  </label>
                </div>
              </div>
            </FormShowcase>

            {/* Radio Group */}
            <FormShowcase 
              title="Radio Group"
              description="Group of radio button options"
              code={`<div className="space-y-3">
  <label className="text-sm font-medium text-gray-300 block mb-2">
    Notification preference
  </label>
  <div className="space-y-2">
    <div className="flex items-center">
      <input
        type="radio"
        id="all"
        name="notification"
        value="all"
        className="w-4 h-4 border-white/30 text-neon-purple focus:ring-neon-purple focus:ring-offset-0 focus:ring-offset-transparent bg-black/20"
        defaultChecked
      />
      <label htmlFor="all" className="ml-2 text-sm text-gray-300">
        All notifications
      </label>
    </div>
    <div className="flex items-center">
      <input
        type="radio"
        id="important"
        name="notification"
        value="important"
        className="w-4 h-4 border-white/30 text-neon-purple focus:ring-neon-purple focus:ring-offset-0 focus:ring-offset-transparent bg-black/20"
      />
      <label htmlFor="important" className="ml-2 text-sm text-gray-300">
        Important only
      </label>
    </div>
    <div className="flex items-center">
      <input
        type="radio"
        id="none"
        name="notification"
        value="none"
        className="w-4 h-4 border-white/30 text-neon-purple focus:ring-neon-purple focus:ring-offset-0 focus:ring-offset-transparent bg-black/20"
      />
      <label htmlFor="none" className="ml-2 text-sm text-gray-300">
        No notifications
      </label>
    </div>
  </div>
</div>`}>
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300 block mb-2">
                  Notification preference
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="all"
                      name="notification"
                      value="all"
                      className="w-4 h-4 border-white/30 text-neon-purple focus:ring-neon-purple focus:ring-offset-0 focus:ring-offset-transparent bg-black/20"
                      defaultChecked
                    />
                    <label htmlFor="all" className="ml-2 text-sm text-gray-300">
                      All notifications
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="important"
                      name="notification"
                      value="important"
                      className="w-4 h-4 border-white/30 text-neon-purple focus:ring-neon-purple focus:ring-offset-0 focus:ring-offset-transparent bg-black/20"
                    />
                    <label htmlFor="important" className="ml-2 text-sm text-gray-300">
                      Important only
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="none"
                      name="notification"
                      value="none"
                      className="w-4 h-4 border-white/30 text-neon-purple focus:ring-neon-purple focus:ring-offset-0 focus:ring-offset-transparent bg-black/20"
                    />
                    <label htmlFor="none" className="ml-2 text-sm text-gray-300">
                      No notifications
                    </label>
                  </div>
                </div>
              </div>
            </FormShowcase>

            {/* Text Area */}
            <FormShowcase 
              title="Text Area"
              description="Multi-line text input field"
              code={`<div className="space-y-2">
  <label className="text-sm font-medium text-gray-300" htmlFor="message">
    Message
  </label>
  <textarea
    id="message"
    rows={4}
    placeholder="Enter your message"
    className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent"
  />
</div>`}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent"
                />
              </div>
            </FormShowcase>

            {/* Toggle / Switch */}
            <FormShowcase 
              title="Toggle Switch"
              description="On/Off toggle switch component"
              code={`<div className="flex items-center space-x-3">
  <div className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" id="toggle" className="sr-only peer" defaultChecked />
    <div className="w-11 h-6 bg-black/30 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neon-purple/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-purple"></div>
  </div>
  <label htmlFor="toggle" className="text-sm font-medium text-gray-300">
    Dark mode
  </label>
</div>`}>
              <div className="flex items-center space-x-3">
                <div className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" id="toggle" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-black/30 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neon-purple/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-purple"></div>
                </div>
                <label htmlFor="toggle" className="text-sm font-medium text-gray-300">
                  Dark mode
                </label>
              </div>
            </FormShowcase>

            {/* Form with Multiple Inputs */}
            <FormShowcase 
              title="Contact Form"
              description="Complete form with multiple input types"
              code={`<div className="space-y-4">
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300" htmlFor="firstName">
        First name
      </label>
      <input
        type="text"
        id="firstName"
        placeholder="First name"
        className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent"
      />
    </div>
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300" htmlFor="lastName">
        Last name
      </label>
      <input
        type="text"
        id="lastName"
        placeholder="Last name"
        className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent"
      />
    </div>
  </div>
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-300" htmlFor="contactEmail">
      Email
    </label>
    <input
      type="email"
      id="contactEmail"
      placeholder="your@email.com"
      className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent"
    />
  </div>
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-300" htmlFor="contactMessage">
      Message
    </label>
    <textarea
      id="contactMessage"
      rows={3}
      placeholder="Your message"
      className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent"
    />
  </div>
  <button className="w-full px-4 py-2 bg-neon-purple text-white rounded-md hover:bg-neon-purple/90 transition-colors">
    Send Message
  </button>
</div>`}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300" htmlFor="firstName">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First name"
                      className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300" htmlFor="lastName">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last name"
                      className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300" htmlFor="contactEmail">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300" htmlFor="contactMessage">
                    Message
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={3}
                    placeholder="Your message"
                    className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent"
                  />
                </div>
                <button className="w-full px-4 py-2 bg-neon-purple text-white rounded-md hover:bg-neon-purple/90 transition-colors">
                  Send Message
                </button>
              </div>
            </FormShowcase>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Usage</h2>
          <div className="glass-morphism p-6 rounded-xl overflow-hidden relative group">
            <CopyButton 
              code={`// Simple form with validation
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic
    // Submit data
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-class"
        />
      </div>
      
      {/* More form fields */}
      
      <button type="submit">Submit</button>
    </form>
  );
}`} 
              className="opacity-0 group-hover:opacity-100"
            />
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Simple form with validation
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic
    // Submit data
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-class"
        />
      </div>
      
      {/* More form fields */}
      
      <button type="submit">Submit</button>
    </form>
  );
}`}
            </pre>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const FormShowcase = ({ 
  title, 
  description, 
  children,
  code
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
  code: string;
}) => {
  return (
    <div className="glass-morphism rounded-xl overflow-hidden hover:border-neon-purple/30 transition-colors group relative">
      {/* Component info */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      {/* Component preview */}
      <div className="p-8 flex items-center justify-center bg-black/20 relative">
        <CopyButton code={code} className="opacity-0 group-hover:opacity-100" />
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormComponents;
