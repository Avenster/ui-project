// LandingContent.tsx
import React from 'react';
import { Component } from '../types/types';
import ComponentCard from './ComponentCard';

interface LandingContentProps {
  componentRegistry: { [key: string]: Component };
  onComponentSelect: (componentId: string) => void;
}

const LandingContent: React.FC<LandingContentProps> = ({ componentRegistry, onComponentSelect }) => {
  const handleComponentClick = (componentId: string) => {
    onComponentSelect(componentId);
  };
  
  return (
    <>
      {/* Featured components */}
      <section className="mb-12">
        <h2 className="text-sm font-medium mb-5 text-white/80">Featured Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {['macbook-modal', 'sticky-button', 'vertical-scroll-gallery'].map((id) => {
            const component = componentRegistry[id];
            if (!component) return null;
            
            return (
              <ComponentCard 
                key={id}
                component={component}
                onClick={() => handleComponentClick(id)}
                featured={true}
              />
            );
          })}
        </div>
      </section>
      
      {/* All components */}
      <section>
        <h2 className="text-sm font-medium mb-5 text-white/80">All Components</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {Object.keys(componentRegistry).map((id) => {
            const component = componentRegistry[id];
            return (
              <ComponentCard 
                key={id}
                component={component}
                onClick={() => handleComponentClick(id)}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default LandingContent;