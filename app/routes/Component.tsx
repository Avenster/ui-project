import React, { useState, useEffect } from 'react';
import Navbar from '~/components/Navbar';
import { componentRegistry, Component } from '../types/types';
import ComponentSidebar from '~/components/ComponentSidebar';
import ComponentDetail from '~/components/ComponentDetails';
import LandingContent from '~/components/LandingContent';

// Import UI components to use in the registry
import Macbook from '~/ui/Macbook';
import Stickybutton from '~/ui/Stickybutton';
import VerticalScrollGallary from '~/ui/VerticalScrollGallary';
import Card from '~/ui/RevealCard';
const ComponentPage: React.FC = () => {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const [activeComponentId, setActiveComponentId] = useState<string | null>(null);
  const [isComponentsLoaded, setIsComponentsLoaded] = useState(false);
  
  // Initialize the registry with actual components
  useEffect(() => {
    try {
      // Set the actual React components to the registry
      componentRegistry['sticky-button'].component = Stickybutton;
      componentRegistry['macbook-modal'].component = Macbook;
      componentRegistry['vertical-scroll-gallery'].component = VerticalScrollGallary;
        componentRegistry['reveal_card'].component = Card;
      
      setIsComponentsLoaded(true);
    } catch (error) {
      console.error("Failed to initialize components:", error);
    }
  }, []);
  
  // Convert registry to array for the sidebar
  const components: Component[] = Object.values(componentRegistry).sort((a, b) => 
    a.name.localeCompare(b.name)
  );
  
  // Get the active component
  const activeComponent = activeComponentId ? componentRegistry[activeComponentId] : null;
  
  // Handle component selection
  const handleComponentSelect = (componentId: string) => {
    setActiveComponentId(componentId);
  };
  
  // Reset active component
  const handleCloseDetail = () => {
    setActiveComponentId(null);
  };

  if (!isComponentsLoaded) {
    return <div className="flex h-screen bg-black text-white items-center justify-center">Loading components...</div>;
  }

  return (
    <div className='flex flex-col h-screen w-full justify-center items-center font-inter'>
      <Navbar/>
      <div className="flex h-screen bg-black text-white/80 overflow-hidden max-w-9xl mx-auto w-full">
        
        {/* Sidebar */}
        <ComponentSidebar 
          components={components}
          activeComponentId={activeComponentId}
          setActiveComponentId={handleComponentSelect}
          hoveredComponent={hoveredComponent}
          setHoveredComponent={setHoveredComponent}
        />
        
        {/* Main content */}
        <div className="flex-1 overflow-auto bg-black font-inter p-6">
          {activeComponentId && activeComponent ? (
            <ComponentDetail 
              component={activeComponent} 
              onClose={handleCloseDetail} 
            />
          ) : (
            <LandingContent 
              componentRegistry={componentRegistry}
              onComponentSelect={handleComponentSelect} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;