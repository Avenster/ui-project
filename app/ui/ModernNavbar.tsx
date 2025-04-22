import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, BookOpen, Search, BookMarked, User } from "lucide-react";

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { icon: <Home size={24} strokeWidth={1.5} />, label: "Home" },
    { icon: <BookOpen size={24} strokeWidth={1.5} />, label: "Browse" },
    { icon: <Search size={24} strokeWidth={1.5} />, label: "Search" },
    { icon: <BookMarked size={24} strokeWidth={1.5} />, label: "Collections" },
    { icon: <User size={24} strokeWidth={1.5} />, label: "Profile" },
  ];

  // Animation configuration for smoother transitions
  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 32,
    mass: 1.2,
  };

  return (
    <div className="fixed bottom-6 w-full flex justify-center z-50">
      {/* Collapsed State - Just a simple prompt */}
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="px-8 py-3 rounded-full bg-white/55 backdrop-blur-xl cursor-pointer shadow-lg"
            onClick={toggleMenu}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-black font-light tracking-wider text-sm">Tap to explore</span>
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={spring}
            className="px-4 py-5 rounded-3xl bg-white/35 backdrop-blur-xl shadow-xl flex flex-col items-center"
            style={{ width: "80px" }}
          >
            <div className="flex flex-col items-center justify-center gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    ...spring,
                    delay: 0.08 + index * 0.06,
                  }}
                  className="cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.14 }}
                    whileTap={{ scale: 0.96 }}
                    transition={spring}
                    className="p-3 text-black"
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Close button at the bottom (now separated) */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ ...spring, delay: 0.32 }}
            >
              <motion.button
                onClick={toggleMenu}
                className="rounded-full w-14 h-14 bg-black flex items-center justify-center border border-white/10"
                whileHover={{ scale: 1.13 }}
                whileTap={{ scale: 0.95 }}
                transition={spring}
              >
                <X size={16} className="text-white" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
        
      </AnimatePresence>
    </div>
  );
};

export default ModernNavbar;