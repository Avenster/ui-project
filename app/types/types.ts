// types.ts
import {  ComponentType } from 'react';

export interface Component {
  id: string;
  name: string;
  isNew: boolean;
  category: string;
  description: string;
  component: ComponentType<any>;
  code: string;
  installation: string;
  tags: string[];
}

export type ViewMode = 'preview' | 'code';

// Component registry that maps component names to their actual React components
export const componentRegistry: { [key: string]: Component } = {
  'sticky-button': {
    id: 'sticky-button',
    name: 'Sticky Button',
    isNew: false, 
    category: 'Effects',
    description: "A sleek button that sticks to the viewport as the user scrolls, ensuring it's always accessible for important actions.",
    component: null, // This will be imported and set properly
    code: `import React from 'react';

const Stickybutton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        className="bg-black text-white px-4 py-2 rounded-full 
                  shadow-lg hover:bg-gray-800 transition-all
                  flex items-center space-x-2 border border-white/10"
      >
        <span>Take Action</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};

export default Stickybutton;`,
    installation: `npm install @ui-components/sticky-button

// In your component:
import { StickyButton } from '@ui-components/sticky-button';

// Then use it in your JSX:
<StickyButton 
  text="Take Action" 
  position="bottom-right"
/>`,
    tags: ["React", "CSS", "Tailwind"]
  },
  'macbook-modal': {
    id: 'macbook-modal',
    name: 'Macbook Modal',
    isNew: false, 
    category: 'Animations',
    description: "An elegant modal that resembles a Macbook, perfect for showcasing screenshots or presenting content in a device frame.",
    component: null, // This will be imported and set properly
    code: `import React from 'react';

const Macbook = () => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
      <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px]">
        <img src="/mac-content.png" className="h-full w-full object-cover" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Content inside Macbook screen */}
      </div>
      <div className="relative mx-auto bg-gray-700 rounded-b-xl h-[15px] max-w-[351px] md:h-[25px] md:max-w-[597px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[4px] w-[78px] md:h-[8px] md:w-[134px] bg-gray-800 rounded-b-lg"></div>
      </div>
    </div>
  );
};

export default Macbook;`,
    installation: `npm install @ui-components/macbook-modal

// In your component:
import { MacbookModal } from '@ui-components/macbook-modal';

// Then use it in your JSX:
<MacbookModal>
  <YourContent />
</MacbookModal>`,
    tags: ["React", "Framer Motion"]
  },
  'vertical-scroll-gallery': {
    id: 'vertical-scroll-gallery',
    name: 'Vertical Scroll Gallery',
    isNew: true, 
    category: 'Effects',
    description: "A smooth vertical scrolling gallery that reveals images as users scroll through the page, creating an engaging browsing experience.",
    component: null, // This will be imported and set properly
    code: `import React, { useRef, useEffect } from 'react';

const VerticalScrollGallary = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      // Animation logic here
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-4">
      {[1, 2, 3, 4, 5].map((item) => (
        <div 
          key={item}
          className="h-64 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg flex items-center justify-center"
        >
          <span className="text-white text-2xl">Gallery Item {item}</span>
        </div>
      ))}
    </div>
  );
};

export default VerticalScrollGallary;`,
    installation: `npm install @ui-components/vertical-scroll-gallery

// In your component:
import { VerticalScrollGallery } from '@ui-components/vertical-scroll-gallery';

// Then use it in your JSX:
<VerticalScrollGallery 
  images={['/image1.jpg', '/image2.jpg', '/image3.jpg']} 
  spacing={4}
/>`,
    tags: ["React", "Intersection Observer", "CSS"]
  },
  'reveal_card': {
    id: 'reveal_card',
    name: 'Reveal Card',
    isNew: true, 
    category: 'Effects',
    description: "A smooth vertical scrolling gallery that reveals images as users scroll through the page, creating an engaging browsing experience.",
    component: null, // This will be imported and set properly
    code: `import React, { useRef, useEffect } from 'react';

const VerticalScrollGallary = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      // Animation logic here
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-4">
      {[1, 2, 3, 4, 5].map((item) => (
        <div 
          key={item}
          className="h-64 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg flex items-center justify-center"
        >
          <span className="text-white text-2xl">Gallery Item {item}</span>
        </div>
      ))}
    </div>
  );
};

export default VerticalScrollGallary;`,
    installation: `npm install @ui-components/vertical-scroll-gallery

// In your component:
import { VerticalScrollGallery } from '@ui-components/vertical-scroll-gallery';

// Then use it in your JSX:
<VerticalScrollGallery 
  images={['/image1.jpg', '/image2.jpg', '/image3.jpg']} 
  spacing={4}
/>`,
    tags: ["React", "Intersection Observer", "CSS"]
  }
};