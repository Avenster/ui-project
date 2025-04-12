import React, { useState, useCallback } from 'react';
import { X, Code, Play, Copy, Check, Book } from 'lucide-react';
import { Component, ViewMode } from '../types/types';

interface ComponentDetailProps {
  component: Component;
  onClose: () => void;
}

const ComponentDetail: React.FC<ComponentDetailProps> = ({ component, onClose }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('preview');
  const [copied, setCopied] = useState<boolean>(false);
  
  // Get the actual React component to render
  const ActiveComponent = component.component;
  
  // Copy code to clipboard
  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(component.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [component.code]);
  
  return (
    <div className="h-full w-full  overflow-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-lg font-medium text-white/90">{component.name}</h1>
          <p className="text-white/50 text-xs mt-1">{component.category}</p>
        </div>
        <button 
          className="text-white/60 hover:text-white/90 transition"
          onClick={onClose}
        >
          <X size={18} />
        </button>
      </div>
      
      {/* Tab navigation */}
      <div className="flex border-b border-white/10  overflow-hidden mb-6">
        <button 
          className={`px-4 py-2 text-xs font-medium flex items-center ${
            viewMode === 'preview' 
              ? 'text-white/90 border-b-2 border-white/70' 
              : 'text-white/50 hover:text-white/70'
          }`}
          onClick={() => setViewMode('preview')}
        >
          <Play size={14} className="mr-2" />
          Preview
        </button>
        <button 
          className={`px-4 py-2 text-xs font-medium flex items-center ${
            viewMode === 'code' 
              ? 'text-white/90 border-b-2 border-white/70' 
              : 'text-white/50 hover:text-white/70'
          }`}
          onClick={() => setViewMode('code')}
        >
          <Code size={14} className="mr-2" />
          Code
        </button>
      </div>
      
      {/* Actual component in preview mode, not an image */}
      {viewMode === 'preview' ? (
        <div className="border border-white/10  rounded-xl overflow-hidden bg-white/5 mb-6 min-h-[100px] flex items-center justify-center">
          {/* This renders the actual React component */}
          {ActiveComponent ? <ActiveComponent /> : <div>Loading component...</div>}
        </div>
      ) : (
        <div className="relative">
          <div className="bg-black/80  rounded-xl border border-white/10 p-4 font-mono text-xs text-white/70 overflow-auto mb-6">
            <button 
              onClick={copyToClipboard}
              className="absolute top-3 right-3 p-1.5 rounded-md bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
            <pre className="whitespace-pre-wrap break-all">{component.code}</pre>
          </div>
        </div>
      )}
      
      {/* Installation instructions */}
      <div className="mb-6">
        <h2 className="text-sm font-medium mb-3 text-white/80 flex items-center">
          <Book size={14} className="mr-2" />
          Installation
        </h2>
        <div className="bg-black/80 rounded-xl border border-white/10 p-4 font-mono text-xs text-white/70 overflow-auto">
          <pre className="whitespace-pre-wrap break-all">{component.installation}</pre>
        </div>
      </div>
      
      {/* Component description */}
      <div className="mb-6">
        <h2 className="text-sm font-medium mb-2 text-white/80">About this component</h2>
        <p className="text-white/60 text-xs">{component.description}</p>
      </div>
      
      {/* Tags */}
      <div className="mb-6">
        <h2 className="text-sm font-medium mb-2 text-white/80">Technologies</h2>
        <div className="flex gap-2">
          {component.tags?.map((tag, idx) => (
            <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;