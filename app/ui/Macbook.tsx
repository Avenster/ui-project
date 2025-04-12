import { useState, useRef, useEffect } from 'react';

export default function MacOSWindowEnhanced() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  // Initialize with default position
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  // Store the position before minimizing
  const [beforeMinimizePosition, setBeforeMinimizePosition] = useState({ x: 20, y: 20 });
  const windowRef = useRef(null);

  // Set correct position after component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const defaultPosition = { x: 20, y: window.innerHeight - 100 };
      setPosition(defaultPosition);
      setBeforeMinimizePosition(defaultPosition);
    }
  }, []);

  // Handle dragging
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const newPosition = {
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        };
        setPosition(newPosition);
        
        // If not minimized, also update the beforeMinimizePosition
        if (!isMinimized) {
          setBeforeMinimizePosition(newPosition);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, isMinimized]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMinimize = () => {
    // Save current position before minimizing
    if (!isMinimized) {
      setBeforeMinimizePosition(position);
    }
    
    // Move to bottom left when minimizing
    if (typeof window !== 'undefined') {
      setPosition({ x: 20, y: window.innerHeight - 100 });
    }
    
    setIsMinimized(true);
    setIsFullScreen(false);
  };

  const handleMaximize = () => {
    setIsFullScreen(!isFullScreen);
    setIsMinimized(false);
  };

  const handleDragStart = (e) => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const handleRestore = () => {
    // Restore to previous position when un-minimizing
    setPosition(beforeMinimizePosition);
    setIsMinimized(false);
  };

  if (!isVisible) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Window closed. Refresh to see again.
      </div>
    );
  }

  // Minimized view at bottom left
  if (isMinimized) {
    return (
      <div 
        ref={windowRef}
        className="fixed cursor-move shadow-2xl rounded-lg overflow-hidden border border-white/10 bg-gradient-to-r from-purple-900 to-pink-700 transition-all duration-300"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          width: '240px',
          zIndex: 9999
        }}
        onMouseDown={handleDragStart}
      >
        <div className="flex items-center justify-between p-2 bg-black border-b border-white/10">
          <div className="flex items-center space-x-1.5">
            <button 
              onClick={handleClose}
              className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none"
            />
            <button 
              onClick={handleRestore}
              className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none"
            />
          </div>
          <span className="text-xs font-medium text-white/80">My MacBook App</span>
          <div className="w-7"></div>
        </div>
        <div className="p-2 text-xs text-white/80">
          Minimized window - Click yellow button to restore
        </div>
      </div>
    );
  }

  // Full window view
  return (
    <div 
      ref={windowRef}
      className={`overflow-hidden bg-black border border-white/10 rounded-lg shadow-2xl transition-all duration-300 mb-10 ${
        isFullScreen ? 'fixed inset-0 w-full h-full rounded-none' : 'w-4/5 mx-auto mt-8'
      }`}
      style={
        !isFullScreen ? {
          maxWidth: '700px',
          maxHeight: '600px'
        } : {}
      }
    >
      {/* Title Bar */}
      <div 
        className="relative flex items-center h-10 border-b border-white/10 bg-black"
        onMouseDown={!isFullScreen ? handleDragStart : undefined}
        style={{ cursor: !isFullScreen ? 'move' : 'default' }}
      >
        {/* Window Controls */}
        <div className="flex items-center ml-3 space-x-2">
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="flex items-center justify-center w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none group"
          >
            <span className="hidden w-2 group-hover:block">
              <svg viewBox="0 0 10 10" className="w-2 h-2 text-red-900">
                <path d="M1,1 L9,9 M9,1 L1,9" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </button>
          
          {/* Minimize Button */}
          <button 
            onClick={handleMinimize}
            className="flex items-center justify-center w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none group"
          >
            <span className="hidden w-2 group-hover:block">
              <svg viewBox="0 0 10 10" className="w-2 h-2 text-yellow-900">
                <path d="M2,5 L8,5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </button>
          
          {/* Maximize Button */}
          <button 
            onClick={handleMaximize}
            className="flex items-center justify-center w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none group"
          >
            <span className="hidden w-2 group-hover:block">
              <svg viewBox="0 0 10 10" className="w-2 h-2 text-green-900">
                <path d="M2,2 L8,2 L8,8 L2,8 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </button>
        </div>
        
        {/* Window Title */}
        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white/80 pointer-events-none">
          My MacBook App
        </div>
      </div>
      
      {/* Menu Bar */}
      <div className="flex items-center h-8 px-4 space-x-6 text-xs bg-black/80 border-b border-white/10">
        <span className="text-white/70 cursor-pointer hover:text-pink-400 transition-colors">File</span>
        <span className="text-white/70 cursor-pointer hover:text-pink-400 transition-colors">Edit</span>
        <span className="text-white/70 cursor-pointer hover:text-pink-400 transition-colors">View</span>
        <span className="text-white/70 cursor-pointer hover:text-pink-400 transition-colors">Window</span>
        <span className="text-white/70 cursor-pointer hover:text-pink-400 transition-colors">Help</span>
      </div>
      
      {/* Content Area */}
      <div className="p-6 bg-black/95 h-64">
        <div className="bg-gradient-to-r from-purple-900 to-pink-700 p-6 rounded-lg mb-4">
          <h2 className="mb-2 text-lg font-bold text-white">Welcome to Enhanced Dark Mode</h2>
          <p className="text-white/90">
            Your custom macOS interface with drag functionality and minimized state
          </p>
        </div>
        
        <p className="mb-4 text-white/70">
          This window component has all the features you requested:
        </p>
        
        <ul className="mb-4 ml-5 text-white/70 list-disc">
          <li>Minimizes to bottom left corner</li>
          <li>Draggable in both full and minimized states</li>
          <li>Black and white theme with purple/pink gradient accents</li>
          <li>Functional close, minimize, and maximize buttons</li>
        </ul>
        
        <div className="p-4 bg-gray-900 rounded-md border border-white/10">
          <code className="text-sm text-pink-200">
            // Use this component for your project
          </code>
        </div>
      </div>
    </div>
  );
}