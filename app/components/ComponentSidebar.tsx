// ComponentSidebar.tsx
import React from 'react';
import { Component } from '../types/types';

interface ComponentSidebarProps {
  components: Component[];
  activeComponentId: string | null;
  setActiveComponentId: (id: string) => void;
  hoveredComponent: string | null;
  setHoveredComponent: (name: string | null) => void;
}

const ComponentSidebar: React.FC<ComponentSidebarProps> = ({ 
  components, 
  activeComponentId, 
  setActiveComponentId, 
  setHoveredComponent 
}) => {
  const handleComponentClick = (componentId: string) => {
    setActiveComponentId(componentId);
  };
  
  return (
    <div className="w-60 h-full border-r border-white/10 bg-black flex flex-col">
      <div className="p-4 pt-5">
        {/* Alphabetical component list */}
        <div className="space-y-0.5 max-h-[calc(100vh-80px)] overflow-y-auto pr-2 custom-scrollbar">
          {components.map(component => (
            <div 
              key={component.id}
              className={`flex items-center py-1 px-2.5 rounded-md hover:bg-white/5 relative group text-white/70 hover:text-white/90 font-inter cursor-pointer ${
                activeComponentId === component.id ? 'bg-white/5 text-white/90' : ''
              }`}
              onMouseEnter={() => setHoveredComponent(component.name)}
              onMouseLeave={() => setHoveredComponent(null)}
              onClick={() => handleComponentClick(component.id)}
            >
              {/* Add left vertical line highlight when active */}
              <div 
                className={`absolute left-0 top-0 w-0.5 h-full bg-white opacity-0 transition-opacity duration-200 ${
                  activeComponentId === component.id ? 'opacity-100' : ''
                }`}
              ></div>
              
              <span className="flex-1 text-xs font-light">{component.name}</span>
              {component.isNew && (
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white/80 border border-purple-500/30">New</span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-auto p-3 border-t border-white/10">
        <div className="flex items-center justify-between text-white/50 text-[10px]">
          <a href="#" className="hover:text-white/80 transition">Docs</a>
          <a href="#" className="hover:text-white/80 transition">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ComponentSidebar;