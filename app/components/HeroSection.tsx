import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-black min-h-screen text-white font-sans overflow-hidden">
      {/* Background grid pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0zNiAxOGMxLjIgMCAyLjEgMS4xIDEuOSAyLjNsLS4zIDEuOUMzNi41IDI0LjQgMzQuNiAyNiAzMi40IDI2SDMwdjZoNGMxLjEgMCAyIC45IDIgMnYySDI0di0yYzAtMS4xLjktMiAyLTJoNHYtNmgtMi40Yy0yLjIgMC00LjEtMS42LTQuNC0zLjhsLS4zLTEuOWMtLjItMS4yLjctMi4zIDEuOS0yLjNIMzZ6Ii8+PC9nPjwvc3ZnPg==')]"></div>
      </div> */}

      {/* Navbar */}
     

      {/* Hero Content */}
      <div className="relative z-10 pt-16 md:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="max-w-2xl">
            {/* Small Promo Button */}
            <div className="inline-flex items-center mb-6 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
              <span>Introducing Template System</span>
              <ChevronRight size={14} className="ml-1" />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Make your websites look <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">10x awesome</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Copy paste the most trending components and use them in your 
              websites without having to worry about styling and animations.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors">
                Browse Components
              </button>
              <button className="px-6 py-3 bg-black border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-colors">
                Custom Components
              </button>
            </div>
            
            {/* Tech stack */}
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <svg width="24" height="24" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
                  <path d="M108.35 36.9991C96.3309 36.9991 86.6021 46.7279 86.6021 58.7471C86.6021 70.7661 96.3309 80.4951 108.35 80.4951C120.369 80.4951 130.098 70.7661 130.098 58.7471C130.098 46.7279 120.369 36.9991 108.35 36.9991ZM56.4844 131.223C50.4753 131.223 45.5995 136.099 45.5995 142.108C45.5995 148.117 50.4753 152.993 56.4844 152.993C62.4936 152.993 67.3692 148.117 67.3692 142.108C67.3692 136.099 62.4936 131.223 56.4844 131.223ZM56.4844 40.399C50.4753 40.399 45.5995 45.2746 45.5995 51.2838C45.5995 57.293 50.4753 62.1686 56.4844 62.1686C62.4936 62.1686 67.3692 57.293 67.3692 51.2838C67.3692 45.2746 62.4936 40.399 56.4844 40.399ZM92.5618 89.6323C86.5526 89.6323 81.6768 94.5081 81.6768 100.517C81.6768 106.526 86.5526 111.402 92.5618 111.402C98.571 111.402 103.447 106.526 103.447 100.517C103.447 94.5081 98.571 89.6323 92.5618 89.6323ZM128.639 131.223C122.63 131.223 117.754 136.099 117.754 142.108C117.754 148.117 122.63 152.993 128.639 152.993C134.648 152.993 139.524 148.117 139.524 142.108C139.524 136.099 134.648 131.223 128.639 131.223Z" fill="currentColor"/>
                </svg>
                <span>Next.js</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
                  <path d="M12 10.9C11.4 10.9 10.9 11.4 10.9 12C10.9 12.6 11.4 13.1 12 13.1C12.6 13.1 13.1 12.6 13.1 12C13.1 11.4 12.6 10.9 12 10.9ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM14.2 14.2L6 17.5L9.3 9.3L17.5 6L14.2 14.2Z" fill="currentColor"/>
                </svg>
                <span>React</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="currentColor"/>
                </svg>
                <span>TailwindCSS</span>
              </div>
            </div>
          </div>
          
          {/* Right side with demo components */}
          <div className="mt-12 lg:mt-0 w-full lg:w-auto">
            <div className="relative">
              {/* Component Preview 1 */}
              <div className="absolute -top-24 right-0 w-72 h-48 bg-gray-900 rounded-lg border border-white/5 shadow-xl transform rotate-2 z-10 overflow-hidden">
                <div className="p-4">
                  <h3 className="text-white text-lg font-medium mb-2">Beautify your website</h3>
                  <p className="text-gray-400 text-sm">With AvensterUI, you can build great looking websites within minutes.</p>
                </div>
                <div className="absolute bottom-0 right-0 w-full h-12 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              
              {/* Component Preview 2 */}
              <div className="absolute -top-4 right-64 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-white/10 shadow-lg flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="text-4xl mb-2">&gt;</div>
                  <p className="text-white font-medium">Hover over me</p>
                </div>
              </div>
              
              {/* Component Preview 3 */}
              <div className="absolute top-32 right-16 w-80 h-56 bg-white rounded-lg shadow-2xl overflow-hidden">
                <div className="bg-gray-100 p-3 flex items-center justify-between">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-500">AvensterUI Demo</div>
                </div>
                <div className="p-4 text-black">
                  <h3 className="font-medium mb-2">Build world class websites</h3>
                  <p className="text-sm text-gray-600 mb-4">Access an array of professionally designed components and layouts</p>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purple glow effect */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-purple-500/10 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-pink-500/10 filter blur-3xl"></div>
    </div>
  );
};



export default HeroSection;