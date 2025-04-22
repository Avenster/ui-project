import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category?: string;
  aspectRatio?: number; // For controlling image dimensions
}

interface MasonryGalleryProps {
  images: GalleryImage[];
  columns?: number;
}

export default function MasonryGallery({ 
  images = [], 
  columns = 3 
}: MasonryGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  // Create column arrays for masonry layout
  const columnArray = Array.from({ length: columns }, () => [] as GalleryImage[]);
  
  // Distribute images across columns
  images.forEach((image, index) => {
    const columnIndex = index % columns;
    columnArray[columnIndex].push(image);
  });

  if (!images || images.length === 0) {
    return (
      <div className="min-h-[300px] bg-zinc-950 rounded-xl flex items-center justify-center">
        <p className="text-zinc-500">No images to display</p>
      </div>
    );
  }
  
  return (
    <div className="w-full bg-zinc-950 rounded-xl p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {columnArray.map((column, colIndex) => (
          <div key={`column-${colIndex}`} className="flex flex-col gap-4 md:gap-6">
            {column.map((image) => (
              <motion.div
                key={image.id}
                className="relative overflow-hidden rounded-xl group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: colIndex * 0.1 }}
                layoutId={`image-${image.id}`}
                onClick={() => setSelectedImage(image)}
              >
                <motion.div 
                  className="aspect-square lg:aspect-auto lg:h-auto"
                  whileHover={{ 
                    scale: 1.05, 
                    zIndex: 20,
                    transition: { duration: 0.3 } 
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Image overlay with title */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.h3
                    className="text-white font-medium text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {image.title}
                  </motion.h3>
                  
                  {image.category && (
                    <motion.span 
                      className="text-zinc-300 text-sm"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.05 }}
                    >
                      {image.category}
                    </motion.span>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 z-10"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            
            <motion.div 
              className="relative max-w-4xl max-h-full w-full overflow-hidden"
              layoutId={`image-${selectedImage.id}`}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              
              <motion.div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-white text-2xl font-bold">{selectedImage.title}</h2>
                {selectedImage.category && (
                  <p className="text-zinc-300">{selectedImage.category}</p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}