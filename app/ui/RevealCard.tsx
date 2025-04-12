import { useState } from 'react';

export default function Card() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex items-center justify-center w-full  bg-black p-4">
      <div 
        className="relative w-72 h-72 cursor-pointer perspective-1000"
        onClick={handleClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div 
          className={`relative w-full h-full duration-700 preserve-3d transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          {/* Front of card */}
          <div 
            className={`absolute w-full h-full backface-hidden rounded-xl border border-white/10 text-white shadow-lg overflow-hidden ${isFlipped ? 'hidden' : ''}`}
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/d/3.jpg')" }} />
            <div className="absolute inset-0 bg-black opacity-90" />
            
            {/* Enhanced Shimmer effect */}
            <div className={`absolute inset-0 opacity-0 ${isHovering ? 'animate-shimmer' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full opacity-10 transform-gpu transition-transform duration-1500 ease-in-out animate-shimmer-move" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-pink-400/20 to-transparent -translate-y-full opacity-30 transform-gpu transition-transform duration-1500 ease-in-out animate-shimmer-move-vertical delay-300" />
            </div>
            
            <div className="grid grid-cols-6 grid-rows-6 h-full w-full opacity-10 absolute inset-0">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-white/10" />
              ))}
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <div className={`text-white text-4xl mb-4 transition-transform duration-300 ${isHovering ? 'scale-110' : ''}`}>&gt;</div>
              <p className="text-white text-xl">Hover over me</p>
              {isHovering && (
                <div className="absolute bottom-6 w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-400 rounded-full animate-pulse" />
              )}
            </div>
          </div>

          {/* Back of card */}
          <div 
            className={`absolute w-full h-full backface-hidden rounded-xl border border-white/10 overflow-hidden text-white p-6 shadow-lg rotate-y-180 ${isFlipped ? '' : 'hidden'}`}
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/api/placeholder/400/400')" }} />
            <div className="absolute inset-0 bg-black opacity-90" />
            
            <div className="h-full flex flex-col justify-between relative overflow-hidden z-10">
              {/* Gradient accent in corner */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-600 to-pink-400 rounded-full opacity-20 blur-xl" />
              
              <div className="relative">
                <h3 className="text-xl font-bold mb-2">Card Details</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-400 rounded-full mb-4" />
                <p className="text-gray-300 mb-4">This is the back of the card that appears when you click.</p>
              </div>
              
              <div className="space-y-3 relative">
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="w-2/3 h-full bg-gradient-to-r from-purple-600 to-pink-400 rounded-full" />
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="w-1/2 h-full bg-gradient-to-r from-purple-600 to-pink-400 rounded-full" />
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="w-1/3 h-full bg-gradient-to-r from-purple-600 to-pink-400 rounded-full" />
                </div>
              </div>
              
              <div className="text-right mt-4 relative">
                <span className="text-sm text-white/60">Click to flip back</span>
              </div>
            </div>
          </div>
        </div>

        {/* Flip animation particles */}
        {isFlipped && (
          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-600 rounded-full opacity-0 animate-particle-1" />
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-pink-400 rounded-full opacity-0 animate-particle-2" />
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-0 animate-particle-3" />
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-pink-500 rounded-full opacity-0 animate-particle-4" />
          </div>
        )}
      </div>

      {/* Custom Tailwind animations */}
      <style jsx>{`
        /* Custom animation keyframes */
        @keyframes shimmerMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes shimmerMoveVertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes particleMove1 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { transform: translate(-100%, -70px) scale(1); opacity: 0.8; }
          100% { transform: translate(-200%, -120px) scale(0); opacity: 0; }
        }

        @keyframes particleMove2 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { transform: translate(100%, -50px) scale(1); opacity: 0.8; }
          100% { transform: translate(200%, -100px) scale(0); opacity: 0; }
        }

        @keyframes particleMove3 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { transform: translate(-80%, 60px) scale(1); opacity: 0.8; }
          100% { transform: translate(-150%, 120px) scale(0); opacity: 0; }
        }

        @keyframes particleMove4 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { transform: translate(80%, 70px) scale(1); opacity: 0.8; }
          100% { transform: translate(180%, 150px) scale(0); opacity: 0; }
        }

        /* Custom animation classes */
        .animate-shimmer-move {
          animation: shimmerMove 2s infinite;
        }
        
        .animate-shimmer-move-vertical {
          animation: shimmerMoveVertical 2.5s infinite;
        }

        .animate-particle-1 {
          animation: particleMove1 1s ease-out forwards;
        }

        .animate-particle-2 {
          animation: particleMove2 1.2s ease-out forwards;
        }

        .animate-particle-3 {
          animation: particleMove3 0.9s ease-out forwards;
        }
        
        .animate-particle-4 {
          animation: particleMove4 1.1s ease-out forwards;
        }

        /* Custom transform classes */
        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}