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

export interface GalleryItem {
  id: string;
  title: string;
  artists: string[];
  coverImage: string;
  description?: string;
}

export interface ArtistInfo {
  name: string;
  image: string;
  bio?: string;
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
  },
  'masonry-gallery': {
    id: 'masonry-gallery',
    name: 'masonry-gallery',
    isNew: true, 
    category: 'Media',
    description: "A stylish and animated sidebar gallery component with a sleek dark theme. Perfect for showcasing media collections with artist information and interactive elements.",
    component: null, // This will be imported and set properly
    code: `import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryItem {
  id: string;
  title: string;
  artists: string[];
  coverImage: string;
  description?: string;
}

export interface ArtistInfo {
  name: string;
  image: string;
  bio?: string;
}

interface SidebarGalleryProps {
  items: GalleryItem[];
  defaultItem?: string;
  onItemSelect?: (item: GalleryItem) => void;
}

// Animation presets
const slideIn = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
  transition: { duration: 0.3 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 }
};

const scaleIn = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
  transition: { type: "spring", stiffness: 300, damping: 30 }
};

const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 }
};

export default function SidebarGallery({ 
  items, 
  defaultItem, 
  onItemSelect 
}: SidebarGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    if (items.length > 0) {
      const defaultSelection = defaultItem 
        ? items.find(item => item.id === defaultItem) 
        : items[0];
      
      if (defaultSelection) {
        setSelectedItem(defaultSelection);
      }
    }
  }, [items, defaultItem]);

  const handleItemSelect = (item: GalleryItem) => {
    setSelectedItem(item);
    if (onItemSelect) onItemSelect(item);
  };

  if (!selectedItem) return null;

  return (
    <div className="w-full max-w-md bg-zinc-950 text-white h-full overflow-hidden flex flex-col rounded-lg relative">
      {/* Header controls */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/50">
        <div className="flex items-center space-x-3">
          <motion.button 
            className="bg-zinc-800 p-2 rounded-full" 
            {...hoverScale}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
            </svg>
          </motion.button>
          <motion.h1 
            className="text-xl font-bold" 
            {...slideIn}
          >
            {selectedItem.title}
          </motion.h1>
        </div>
        <div className="flex items-center space-x-2">
          <motion.button 
            className="p-2 rounded-full hover:bg-zinc-800"
            {...hoverScale}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor" />
              <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" fill="currentColor" />
              <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" fill="currentColor" />
            </svg>
          </motion.button>
          <motion.button 
            className="p-2 rounded-full hover:bg-zinc-800"
            {...hoverScale}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 15L10 9L16 15L22 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div 
        className="relative aspect-square overflow-hidden"
        layoutId={\`hero-\${selectedItem.id}\`}
        {...scaleIn}
      >
        <img 
          src={selectedItem.coverImage} 
          alt={selectedItem.title}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/90"></div>
        
        {/* Centered title */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          {...fadeIn}
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            {selectedItem.title}
          </h1>
        </motion.div>
      </motion.div>

      {/* Item details */}
      <motion.div 
        className="p-5 flex items-center justify-between"
        {...slideIn}
      >
        <div>
          <h2 className="text-2xl font-bold mb-1">{selectedItem.title}</h2>
          <p className="text-zinc-400">{selectedItem.artists.join(", ")}</p>
        </div>
        <div className="flex space-x-3">
          <motion.button 
            className="p-2 rounded-full hover:bg-zinc-800"
            {...hoverScale}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="currentColor" />
            </svg>
          </motion.button>
          <motion.button 
            className="p-2 rounded-full bg-zinc-800"
            {...hoverScale}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15 8H9V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8Z" fill="currentColor" />
            </svg>
          </motion.button>
        </div>
      </motion.div>

      {/* Artist information */}
      <motion.div 
        className="p-5 pt-2"
        {...fadeIn}
      >
        <h3 className="text-lg font-semibold mb-3">About the artist</h3>
        <AnimatePresence>
          {selectedItem.artists.map((artist, index) => (
            <ArtistCard 
              key={artist}
              artist={{
                name: artist,
                image: \`https://source.unsplash.com/random/300x300?person=\${index}\`
              }}
              delay={index * 0.1}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Additional gallery items */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="p-5 pt-0 grid grid-cols-2 gap-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <h3 className="col-span-2 text-lg font-semibold mb-2">More from collection</h3>
            {items
              .filter(item => item.id !== selectedItem.id)
              .slice(0, 4)
              .map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="aspect-square rounded-md overflow-hidden cursor-pointer relative"
                  onClick={() => handleItemSelect(item)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: index * 0.1 } 
                  }}
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src={item.coverImage} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-colors flex items-center justify-center">
                    <p className="text-white font-medium text-sm">{item.title}</p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ArtistCardProps {
  artist: ArtistInfo;
  delay?: number;
}

function ArtistCard({ artist, delay = 0 }: ArtistCardProps) {
  return (
    <motion.div 
      className="flex items-center space-x-4 mb-4 last:mb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        transition: { delay } 
      }}
      exit={{ opacity: 0, x: -20 }}
    >
      <motion.div 
        className="w-16 h-16 rounded-md overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        <img 
          src={artist.image} 
          alt={artist.name}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div>
        <h4 className="text-lg font-medium">{artist.name}</h4>
        {artist.bio && <p className="text-zinc-400 text-sm">{artist.bio}</p>}
      </div>
    </motion.div>
  );
}`,
    installation: `npm install framer-motion

// In your component:
import { SidebarGallery } from '@ui-components/sidebar-gallery';

// Then use it in your JSX:
<SidebarGallery 
  items={[
    {
      id: "1",
      title: "Jhol",
      artists: ["Maanu", "Annural Khalid"],
      coverImage: "/path/to/image.jpg"
    },
    // More items...
  ]} 
  onItemSelect={(item) => console.log("Selected:", item.title)}
/>`,
    tags: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Animation"]
  },
  'bubbly-navbar': {
    id: 'bubbly-navbar',
    name: 'Bubbly Navbar',
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
};