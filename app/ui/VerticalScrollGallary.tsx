import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface ImageItem {
  id: string;
  title: string;
  description: string;
  category: string;
  src: string;
  width: number;
  height: number;
}

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  // Categories for filtering
  const categories = [
    { id: "all", name: "All" },
    { id: "ui", name: "UI Components" },
    { id: "backgrounds", name: "Backgrounds" },
    { id: "effects", name: "Effects" },
    { id: "animations", name: "Animations" },
  ];

  // Sample gallery items
  const galleryItems: ImageItem[] = [
    {
      id: "1",
      title: "Glass Morphism Card",
      description: "Modern transparent card with blur effect",
      category: "ui",
      src: "/images/glass-card.jpg",
      width: 1200,
      height: 800,
    },
    {
      id: "2",
      title: "Gradient Wave",
      description: "Smooth animated gradient background",
      category: "backgrounds",
      src: "/images/gradient-wave.jpg",
      width: 1200,
      height: 800,
    },
    {
      id: "3",
      title: "Dark Mode Toggle",
      description: "Elegant animation for theme switching",
      category: "ui",
      src: "/images/dark-toggle.jpg",
      width: 800,
      height: 1200,
    },
    {
      id: "4",
      title: "Particle Field",
      description: "Interactive particle background effect",
      category: "effects",
      src: "/images/particle-field.jpg",
      width: 1200,
      height: 800,
    },
    {
      id: "5",
      title: "Scroll Reveal",
      description: "Elements that animate on scroll",
      category: "animations",
      src: "/images/scroll-reveal.jpg",
      width: 800,
      height: 800,
    },
    {
      id: "6",
      title: "3D Button",
      description: "Button with depth and dimension",
      category: "ui",
      src: "/images/3d-button.jpg",
      width: 800,
      height: 800,
    },
    {
      id: "7",
      title: "Aurora Effect",
      description: "Northern lights inspired background",
      category: "backgrounds",
      src: "/images/aurora.jpg",
      width: 1200,
      height: 800,
    },
    {
      id: "8",
      title: "Magnetic Elements",
      description: "UI elements that follow cursor movement",
      category: "effects",
      src: "/images/magnetic.jpg",
      width: 800,
      height: 1200,
    },
    {
      id: "9",
      title: "Typewriter Text",
      description: "Text that types itself with a cursor",
      category: "animations",
      src: "/images/typewriter.jpg",
      width: 1200,
      height: 800,
    },
  ];

  // Filter images based on active category
  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  // Determine grid layout - adjust aspect ratio based on image dimensions
  const getSpanClass = (item: ImageItem) => {
    const ratio = item.width / item.height;
    if (ratio > 1.5) return "col-span-2"; // Very wide images
    if (ratio < 0.7) return "row-span-2"; // Very tall images
    return "";
  };

  return (
    <div className="min-h-screen bg-black text-white/80 font-inter pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 text-center"
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-light mb-3 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Design <span className="bg-gradient-to-r from-purple-400/90 to-pink-400/90 text-transparent bg-clip-text">Gallery</span>
          </motion.h1>
          <motion.p 
            className="text-white/60 text-sm max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Explore our collection of UI components, effects, and animations. 
            Each element is crafted with attention to detail and available for use in your projects.
          </motion.p>
        </motion.header>
        
        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-1.5 rounded-full text-xs transition-all ${
                activeCategory === category.id
                  ? "bg-white/10 border-white/20 text-white border"
                  : "bg-transparent border border-white/10 text-white/60 hover:border-white/20 hover:text-white/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Gallery grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className={`relative overflow-hidden rounded-xl border border-white/10 ${getSpanClass(item)}`}
                onMouseEnter={() => setHoveredImage(item.id)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => setSelectedImage(item)}
              >
                {/* Aspect ratio container */}
                <div 
                  className="h-0 bg-gray-900"
                  style={{ paddingBottom: `${(item.height / item.width) * 100}%` }}
                >
                  {/* Image */}
                  <motion.div
                    className="absolute inset-0 bg-gray-800 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="h-full w-full bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                      {/* We're using a colored div for demo purposes instead of real images */}
                      <div className="h-full w-full flex items-center justify-center">
                        {/* Replace with <img> for real implementation */}
                        <span className="text-white/20 text-xs">{item.title}</span>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredImage === item.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3 
                        className="text-sm font-medium text-white mb-1"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ 
                          y: hoveredImage === item.id ? 0 : 10, 
                          opacity: hoveredImage === item.id ? 1 : 0 
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p 
                        className="text-xs text-white/70"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ 
                          y: hoveredImage === item.id ? 0 : 10, 
                          opacity: hoveredImage === item.id ? 1 : 0 
                        }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {item.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 p-4 md:p-8 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-black border border-white/10 rounded-xl overflow-hidden max-w-4xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Image container with proper aspect ratio */}
                <div 
                  className="w-full bg-gray-800"
                  style={{ paddingBottom: `${(selectedImage.height / selectedImage.width) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10">
                    {/* Replace with actual image in real implementation */}
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="text-white/20 text-sm">{selectedImage.title}</span>
                    </div>
                  </div>
                </div>
                
                {/* Close button */}
                <button 
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white border border-white/20"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-white/90">{selectedImage.title}</h2>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70">
                    {categories.find(c => c.id === selectedImage.category)?.name || selectedImage.category}
                  </span>
                </div>
                <p className="text-sm text-white/70 mb-6">{selectedImage.description}</p>
                
                <div className="flex justify-between items-center">
                  <button className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Download
                  </button>
                  
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white/70">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white/70">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;