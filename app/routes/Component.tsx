import React, { useState, useEffect } from 'react';
import Navbar from '~/components/Navbar';
import { json } from "@remix-run/node";
import { componentRegistry, Component } from '../types/types';
import ComponentSidebar from '~/components/ComponentSidebar';
import ComponentDetail from '~/components/ComponentDetails';
import { useLoaderData } from "@remix-run/react";
import LandingContent from '~/components/LandingContent';

// Import UI components to use in the registry
import Macbook from '~/ui/Macbook';
import Stickybutton from '~/ui/Stickybutton';
import VerticalScrollGallary from '~/ui/VerticalScrollGallary';
import Card from '~/ui/RevealCard';
// import SidebarGallery from '~/ui/SidebarGallery';
import type { GalleryImage } from "~/ui/MasonryGallery";
import MasonryGallery from "~/ui/MasonryGallery";
import ModernNavbar from '~/ui/ModernNavbar';



export async function loader() {
  // In a real app, this would be from your database
  const images: GalleryImage[] = [
    {
      id: "1",
      src: "/p1.jpg",
      title: "OpenAI announces nonprofit commission advisors",
      category: "Company",
      date: "Apr 15, 2025",
      description: "OpenAI has announced a new commission of advisors to help guide the company's nonprofit efforts."
    },
    {
      id: "2",
      src: "/p2.jpg",
      title: "BrowseComp: a benchmark for browsing agents",
      category: "Publication",
      date: "Apr 10, 2025",
      description: "A new benchmark for evaluating the performance of AI browsing agents."
    },
    {
      id: "3",
      src: "/p3.jpg",
      title: "PaperBench: Evaluating AI's Ability to Replicate AI Research",
      category: "Publication",
      date: "Apr 2, 2025",
      description: "A comprehensive benchmark for testing AI systems' ability to understand and replicate research papers."
    },
    {
      id: "4",
      src: "/p4.jpg",
      title: "New partnerships announced for responsible AI",
      category: "Announcement",
      date: "Mar 28, 2025",
      description: "Strategic partnerships to advance the development of responsible AI technologies."
    },
    {
      id: "5",
      src: "/p5.jpg",
      title: "The future of generative interfaces",
      category: "Research",
      date: "Mar 15, 2025",
      description: "Exploring how generative AI is transforming digital interfaces and user experiences."
    },
    {
      id: "6",
      src: "/p6.jpg",
      title: "AI and climate change: solutions for a sustainable future",
      category: "Publication",
      date: "Mar 8, 2025",
      description: "How artificial intelligence is helping address the challenges of climate change."
    }
  ];

  return json({ images });
}
const ComponentPage: React.FC = () => {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const [activeComponentId, setActiveComponentId] = useState<string | null>(null);
  const [isComponentsLoaded, setIsComponentsLoaded] = useState(false);
  const { images } = useLoaderData<typeof loader>();
  
  // Initialize the registry with actual components
  useEffect(() => {
    try {
      // Set the actual React components to the registry
      componentRegistry['sticky-button'].component = Stickybutton;
      componentRegistry['macbook-modal'].component = Macbook;
      componentRegistry['vertical-scroll-gallery'].component = VerticalScrollGallary;
        componentRegistry['reveal_card'].component = Card;
      componentRegistry['masonry-gallery'].component = () => <MasonryGallery images={images} />;
      componentRegistry['bubbly-navbar'].component = ModernNavbar;
      
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