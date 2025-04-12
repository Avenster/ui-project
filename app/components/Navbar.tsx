import  { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Check for user's system preference on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Dynamic theme classes
  const navbarBgClass = isDarkMode ? 'bg-black' : 'bg-white';
  const textColorClass = isDarkMode ? 'text-white' : 'text-black';
  const textMutedClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const borderClass = isDarkMode ? 'border-white/10' : 'border-gray-200';
  const hoverBgClass = isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100';
  const sidebarBgClass = isDarkMode ? 'bg-black' : 'bg-white';
  const sidebarBorderClass = isDarkMode ? 'border-white/5' : 'border-gray-200';
  const sidebarHoverClass = isDarkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100';

  return (
    <div className="relative w-full max-w-9xl">
      {/* Main Navbar */}
      <div className={`${navbarBgClass} ${textColorClass} w-full font-sans border-b ${borderClass}`}>
        <div className="max-w-9xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side with hamburger and logo */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleSidebar} 
                className={`p-1.5 border ${borderClass} rounded-lg ${hoverBgClass} transition-colors`}
                aria-label="Toggle sidebar"
              >
                <Menu size={20} />
              </button>
              
              <div className="flex items-center">
                <a href="/">
                <span className={`text-xl font-bold ${textColorClass}`}>
                  AvensterUI
                </span>
                </a>
              </div>
            </div>
            
            {/* Middle navigation */}
            <div className="hidden md:flex items-center space-x-8">
            <NavItem href="/component" text="Components" isDarkMode={isDarkMode} />
  <NavItem href="/docs" text="Documentation" isDarkMode={isDarkMode} />
  <NavItem href="/examples" text="Examples" isDarkMode={isDarkMode} />
  <NavItem href="/themes" text="Themes" isDarkMode={isDarkMode} />
            </div>
            
            {/* Right side items */}
            <div className="flex items-center space-x-4">
              {/* Theme toggle button */}
              <button 
                onClick={toggleTheme}
                className={`p-1.5 border ${borderClass} rounded-lg ${hoverBgClass} transition-colors`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <button className={`${textMutedClass} hover:${textColorClass} transition-colors text-sm`}>
                GitHub
              </button>
              <button className={`${textMutedClass} hover:${textColorClass} transition-colors text-sm`}>
                Discord
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sidebar - Fixed positioned */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 ${sidebarBgClass} border-r ${sidebarBorderClass} transition-transform duration-300 ease-in-out z-20`}>
        <div className={`h-16 flex items-center justify-between px-4 border-b ${sidebarBorderClass}`}>
          <span className={`text-lg font-medium ${textColorClass}`}>Navigation</span>
          <button onClick={toggleSidebar} className={`p-1 ${textMutedClass} hover:${textColorClass}`}>
            <X size={20} />
          </button>
        </div>
        
        <nav className="mt-4 px-2">
          <div className="space-y-1">
            <SidebarItem text="Getting Started" isDarkMode={isDarkMode} />
            <SidebarItem text="Components" isDarkMode={isDarkMode} />
            <SidebarItem text="Hooks" isDarkMode={isDarkMode} />
            <SidebarItem text="Layouts" isDarkMode={isDarkMode} />
            <SidebarItem text="Theming" isDarkMode={isDarkMode} />
            <SidebarItem text="Utilities" isDarkMode={isDarkMode} />
            <SidebarItem text="Examples" isDarkMode={isDarkMode} />
            <SidebarItem text="Documentation" isDarkMode={isDarkMode} />
          </div>
          
          <div className={`mt-8 pt-4 border-t ${sidebarBorderClass}`}>
            <div className={`px-2 text-xs font-semibold ${textMutedClass} uppercase tracking-wider`}>
              Resources
            </div>
            <div className="mt-2 space-y-1">
              <SidebarItem text="Installation" isDarkMode={isDarkMode} />
              <SidebarItem text="Changelog" isDarkMode={isDarkMode} />
              <SidebarItem text="Releases" isDarkMode={isDarkMode} />
            </div>
          </div>
        </nav>
      </div>
      
      {/* Backdrop for sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

const NavItem = ({ href,text, isDarkMode }) => {
  const textMutedClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const hoverTextClass = isDarkMode ? 'hover:text-white' : 'hover:text-black';
  
  return (
    <a href={href} className={`${textMutedClass} ${hoverTextClass} transition-colors text-sm`}>
      {text}
    </a>
  );
};

const SidebarItem = ({text, isDarkMode }) => {
  const textMutedClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const hoverTextClass = isDarkMode ? 'hover:text-white' : 'hover:text-black';
  const hoverBgClass = isDarkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100';
  
  return (
    <a href="/" className={`block px-3 py-2 rounded-md text-sm ${textMutedClass} ${hoverBgClass} ${hoverTextClass} transition-colors`}>
      {text}
    </a>
  );
};

export default Navbar;