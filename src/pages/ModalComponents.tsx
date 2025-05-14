
import React, { useState } from 'react';
import Footer from '@/components/Footer';

const ModalComponents = () => {
  const [isStandardModalOpen, setIsStandardModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Modal Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Dialogs, drawers, and other modal interfaces for your web applications.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Modal */}
            <ModalShowcase 
              title="Standard Modal"
              description="Basic modal dialog with overlay">
              <button 
                onClick={() => setIsStandardModalOpen(true)}
                className="px-4 py-2 bg-neon-purple text-white rounded-md hover:bg-neon-purple/90 transition-colors"
              >
                Open Modal
              </button>

              {/* Modal */}
              {isStandardModalOpen && (
                <>
                  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setIsStandardModalOpen(false)} />
                  <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-6 rounded-lg glass-morphism border border-white/10 shadow-xl">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-medium text-white">Modal Title</h3>
                      <button 
                        onClick={() => setIsStandardModalOpen(false)}
                        className="text-gray-400 hover:text-white"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="py-4">
                      <p className="text-gray-300">
                        This is a standard modal dialog with an overlay backdrop. You can include any content here.
                      </p>
                    </div>
                    <div className="flex justify-end space-x-3 pt-4 border-t border-white/10">
                      <button 
                        onClick={() => setIsStandardModalOpen(false)}
                        className="px-4 py-2 bg-transparent text-gray-300 hover:text-white rounded-md"
                      >
                        Cancel
                      </button>
                      <button className="px-4 py-2 bg-neon-purple text-white rounded-md hover:bg-neon-purple/90 transition-colors">
                        Confirm
                      </button>
                    </div>
                  </div>
                </>
              )}
            </ModalShowcase>

            {/* Alert Modal */}
            <ModalShowcase 
              title="Alert Modal"
              description="Modal dialog for alerts and confirmations">
              <button 
                onClick={() => setIsAlertModalOpen(true)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Open Alert
              </button>

              {/* Alert Modal */}
              {isAlertModalOpen && (
                <>
                  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setIsAlertModalOpen(false)} />
                  <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-6 rounded-lg glass-morphism border border-red-500/30 shadow-xl">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 bg-red-500/20 p-2 rounded-full">
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-white">Confirm Deletion</h3>
                    </div>
                    <div className="py-4">
                      <p className="text-gray-300">
                        Are you sure you want to delete this item? This action cannot be undone.
                      </p>
                    </div>
                    <div className="flex justify-end space-x-3 pt-4">
                      <button 
                        onClick={() => setIsAlertModalOpen(false)}
                        className="px-4 py-2 bg-transparent text-gray-300 hover:text-white rounded-md"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={() => setIsAlertModalOpen(false)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              )}
            </ModalShowcase>
            
            {/* Side Drawer */}
            <ModalShowcase 
              title="Side Drawer"
              description="Sliding side panel for additional content">
              <button 
                onClick={() => setIsDrawerOpen(true)}
                className="px-4 py-2 bg-neon-cyan text-white rounded-md hover:bg-neon-cyan/90 transition-colors"
              >
                Open Drawer
              </button>

              {/* Drawer */}
              {isDrawerOpen && (
                <>
                  <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" 
                    onClick={() => setIsDrawerOpen(false)} 
                  />
                  <div className="fixed top-0 right-0 h-full w-full max-w-xs z-50 glass-morphism border-l border-white/10 shadow-xl">
                    <div className="flex justify-between items-center p-4 border-b border-white/10">
                      <h3 className="text-lg font-medium text-white">Drawer Title</h3>
                      <button 
                        onClick={() => setIsDrawerOpen(false)}
                        className="text-gray-400 hover:text-white"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="p-4">
                      <nav className="space-y-1">
                        <a href="#" className="block px-3 py-2 rounded-md bg-white/10 text-white">
                          Dashboard
                        </a>
                        <a href="#" className="block px-3 py-2 rounded-md hover:bg-white/5 text-gray-300">
                          Settings
                        </a>
                        <a href="#" className="block px-3 py-2 rounded-md hover:bg-white/5 text-gray-300">
                          Notifications
                        </a>
                        <a href="#" className="block px-3 py-2 rounded-md hover:bg-white/5 text-gray-300">
                          Profile
                        </a>
                      </nav>
                    </div>
                  </div>
                </>
              )}
            </ModalShowcase>

            {/* Tooltip */}
            <ModalShowcase 
              title="Tooltip"
              description="Hover tooltips for contextual information">
              <div className="flex justify-center">
                <div className="relative inline-block">
                  <button className="px-4 py-2 bg-white/10 text-white rounded-md border border-white/10 hover:bg-white/20 transition-colors">
                    Hover for Tooltip
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 px-3 py-2 text-sm text-center text-white glass-morphism rounded-md shadow-lg border border-white/10">
                    This is a tooltip with helpful information
                    <div className="absolute top-full left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 glass-morphism border-r border-b border-white/10"></div>
                  </div>
                </div>
              </div>
            </ModalShowcase>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Usage</h2>
          <div className="glass-morphism p-6 rounded-xl overflow-hidden">
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Basic Modal Implementation
import { useState } from 'react';

export function SimpleModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal content */}
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-6 rounded-lg glass-morphism">
            <h3>Modal Title</h3>
            <p>Modal content here...</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </>
      )}
    </>
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

const ModalShowcase = ({ 
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
      <div className="p-8 flex items-center justify-center bg-black/20 h-56">
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalComponents;
