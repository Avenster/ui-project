import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Component } from '../types/types';

interface ComponentCardProps {
  component: Component;
  onClick: () => void;
  featured?: boolean;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component, onClick, featured = false }) => {
  // Get the actual component to render
  const ComponentToRender = component.component;
  
  return (
    <div 
      className="rounded-xl overflow-hidden border border-white/10 bg-transparent hover:bg-white/[0.02] transition duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Rendering the actual React component */}
      <div className={`p-5 bg-white/5 ${featured ? 'h-100' : 'h-32'} flex items-center justify-center overflow-hidden`}>
        <div className={`${featured ? 'scale-75' : 'scale-[0.6]'} transform-gpu`}>
          {ComponentToRender ? <ComponentToRender /> : <div>Loading component...</div>}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xs font-medium mb-1.5 text-white/80 flex items-center">
          {component.name}
          {component.isNew && (
            <span className="ml-2 text-[9px] px-1.5 py-0.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white/80 border border-purple-500/30">
              New
            </span>
          )}
        </h3>
        <p className="text-white/60 text-[11px] mb-3 line-clamp-2">{component.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {component.tags.slice(0, featured ? undefined : 2).map((tag, idx) => (
              <span key={idx} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">
                {tag}
              </span>
            ))}
          </div>
          <ArrowRight size={12} className="text-white/40" />
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;