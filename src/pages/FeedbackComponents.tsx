
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { toast } from 'sonner';
import Footer from '@/components/Footer';

const FeedbackComponents = () => {
  const { toast: shadcnToast } = useToast();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Feedback Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Notification, alert, and feedback components to provide informative responses.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Toast Notification */}
            <FeedbackShowcase 
              title="Toast Notification"
              description="Non-disruptive notification banner">
              <div className="space-y-4">
                <button 
                  onClick={() => toast.success('Operation completed successfully!')}
                  className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  Show Success Toast
                </button>
                
                <button 
                  onClick={() => toast.error('An error occurred. Please try again.')}
                  className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  Show Error Toast
                </button>
                
                <button 
                  onClick={() => shadcnToast({
                    title: "Custom Toast",
                    description: "This is a custom toast notification using Shadcn's toast component",
                    variant: "default",
                  })}
                  className="w-full px-4 py-2 bg-neon-purple text-white rounded-md hover:bg-neon-purple/90 transition-colors"
                >
                  Show Custom Toast
                </button>
              </div>
            </FeedbackShowcase>

            {/* Alert Banner */}
            <FeedbackShowcase 
              title="Alert Banner"
              description="Contextual banner for important messages">
              <div className="space-y-3">
                <div className="bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-3 rounded-md flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium">Success Alert</h4>
                    <p className="text-sm opacity-90">Your changes have been saved successfully.</p>
                  </div>
                </div>
                
                <div className="bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-3 rounded-md flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium">Error Alert</h4>
                    <p className="text-sm opacity-90">There was a problem with your request.</p>
                  </div>
                </div>
                
                <div className="bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 px-4 py-3 rounded-md flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium">Warning Alert</h4>
                    <p className="text-sm opacity-90">Your account is about to expire.</p>
                  </div>
                </div>
              </div>
            </FeedbackShowcase>
            
            {/* Progress Bar */}
            <FeedbackShowcase 
              title="Progress Bar"
              description="Visual indicator of progress">
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Uploading file...</span>
                    <span className="text-neon-purple">75%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div className="bg-neon-purple h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Processing...</span>
                    <span className="text-neon-cyan">45%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div className="bg-neon-cyan h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Completed</span>
                    <span className="text-green-500">100%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </FeedbackShowcase>

            {/* Loading Spinner */}
            <FeedbackShowcase 
              title="Loading Spinner"
              description="Animated loading indicator">
              <div className="flex space-x-8">
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neon-purple"></div>
                  <span className="text-xs text-gray-400 mt-2">Border Spinner</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-4 border-white/10 border-t-neon-cyan"></div>
                  <span className="text-xs text-gray-400 mt-2">Circle Spinner</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-8 bg-neon-purple rounded-full animate-pulse"></div>
                    <div className="w-2 h-8 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-8 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="text-xs text-gray-400 mt-2">Pulse Bars</span>
                </div>
              </div>
            </FeedbackShowcase>

            {/* Badge & Chip */}
            <FeedbackShowcase 
              title="Badge & Chip"
              description="Compact status indicators and labels">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-neon-purple text-white">New</span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500 text-white">Completed</span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500 text-white">Pending</span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-500 text-white">Failed</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs font-medium rounded-md bg-white/10 text-white border border-white/20">Design</span>
                  <span className="px-2 py-1 text-xs font-medium rounded-md bg-white/10 text-white border border-white/20">
                    React
                    <button className="ml-1 text-white/60 hover:text-white">×</button>
                  </span>
                  <span className="px-2 py-1 text-xs font-medium rounded-md bg-white/10 text-white border border-white/20">
                    TypeScript
                    <button className="ml-1 text-white/60 hover:text-white">×</button>
                  </span>
                </div>
              </div>
            </FeedbackShowcase>

            {/* Form Validation */}
            <FeedbackShowcase 
              title="Form Validation"
              description="Real-time feedback for form inputs">
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300" htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    value="notanemail"
                    className="w-full px-4 py-2 rounded-md bg-black/20 border border-red-500 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <p className="text-xs text-red-500 mt-1">Please enter a valid email address</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300" htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value="pass123"
                    className="w-full px-4 py-2 rounded-md bg-black/20 border border-yellow-500 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <p className="text-xs text-yellow-500 mt-1">Password should be at least 8 characters long</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300" htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    value="johndoe"
                    className="w-full px-4 py-2 rounded-md bg-black/20 border border-green-500 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <p className="text-xs text-green-500 mt-1">Username is available</p>
                </div>
              </div>
            </FeedbackShowcase>

            {/* Skeleton Loader */}
            <FeedbackShowcase 
              title="Skeleton Loader"
              description="Placeholder loading state for content">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse"></div>
                    <div className="h-3 w-1/2 bg-white/10 rounded animate-pulse"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white/10 rounded animate-pulse"></div>
                  <div className="h-4 w-full bg-white/10 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 bg-white/10 rounded animate-pulse"></div>
                  <div className="h-16 bg-white/10 rounded animate-pulse"></div>
                  <div className="h-16 bg-white/10 rounded animate-pulse"></div>
                </div>
              </div>
            </FeedbackShowcase>

            {/* Empty State */}
            <FeedbackShowcase 
              title="Empty State"
              description="Placeholder for empty data with guidance">
              <div className="flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-neon-purple/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white mb-1">No projects found</h3>
                <p className="text-sm text-gray-400 mb-4">Get started by creating your first project</p>
                <button className="px-4 py-2 bg-neon-purple text-white rounded-md hover:bg-neon-purple/90 transition-colors">
                  Create Project
                </button>
              </div>
            </FeedbackShowcase>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Usage</h2>
          <div className="glass-morphism p-6 rounded-xl overflow-hidden">
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Using Toast Notifications
import { toast } from 'sonner';

// Show a basic toast
toast('This is a toast message');

// Success notification
toast.success('Operation completed successfully!');

// Error notification
toast.error('An error occurred. Please try again.');

// With action button
toast('Document created', {
  action: {
    label: 'Undo',
    onClick: () => {
      // Handle undo
    }
  }
});

// Progress bar example
function UploadComponent() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 300);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <span>Uploading...</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2.5">
        <div 
          className="bg-blue-500 h-2.5 rounded-full" 
          style={{ width: \`\${progress}%\` }}
        ></div>
      </div>
    </div>
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

const FeedbackShowcase = ({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode 
}) => {
  return (
    <div className="glass-morphism rounded-xl overflow-hidden hover:border-neon-purple/30 transition-colors">
      {/* Component info */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      {/* Component preview */}
      <div className="p-8 flex items-center justify-center bg-black/20">
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FeedbackComponents;
