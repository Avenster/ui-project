import { useEffect, useRef, useState } from "react";

export default function PurpleButton() {
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const particlesContainerRef = useRef<HTMLDivElement>(null);
  const magneticEffectRef = useRef<HTMLDivElement>(null);
  const [originalText] = useState("Click Me");
  const [animatedChars, setAnimatedChars] = useState<JSX.Element[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    // Set current date and time on load
    const now = new Date();
    setCurrentDateTime(now.toISOString().replace('T', ' ').substring(0, 19) + " UTC");
    
    // Opacity transition on load
    document.body.style.opacity = "0";
    setTimeout(() => {
      document.body.style.opacity = "1";
      document.body.style.transition = "opacity 0.5s ease";
    }, 100);
  }, []);

  useEffect(() => {
    if (isHovering) {
      const chars = originalText.split('').map((char, i) => (
        <span 
          key={i} 
          className="inline-block opacity-0 transform translate-y-2 transition-all duration-300 text-white"
          style={{ transitionDelay: `${i * 0.03}s` }}
        >
          {char}
        </span>
      ));
      setAnimatedChars(chars);
      
      // Apply animation after a brief delay
      setTimeout(() => {
        const spans = document.querySelectorAll('.btn .text span');
        spans.forEach(span => {
          (span as HTMLElement).style.opacity = '1';
          (span as HTMLElement).style.transform = 'translateY(0)';
        });
      }, 10);
    }
  }, [isHovering, originalText]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonContainerRef.current || !btnRef.current || 
        !particlesContainerRef.current || !magneticEffectRef.current) return;
    
    // Create particles on mouse movement (30% chance)
    if (Math.random() > 0.7) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 3px and 7px
      const size = Math.random() * 4 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Position relative to button
      const rect = buttonContainerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      particlesContainerRef.current.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
    
    // Magnetic effect follows cursor
    const rect = buttonContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 40; // Adjust by half the width of the effect
    const y = e.clientY - rect.top - 40; // Adjust by half the height of the effect
    
    magneticEffectRef.current.style.left = `${x}px`;
    magneticEffectRef.current.style.top = `${y}px`;
    magneticEffectRef.current.style.opacity = '1';
    
    // Subtle magnetic pull toward cursor (limited movement)
    const btnRect = btnRef.current.getBoundingClientRect();
    const btnCenterX = btnRect.width / 2;
    const btnCenterY = btnRect.height / 2;
    
    const deltaX = (e.clientX - rect.left - btnCenterX) / 15;
    const deltaY = (e.clientY - rect.top - btnCenterY) / 15;
    
    // Limit the movement range
    const limitedDeltaX = Math.max(-10, Math.min(10, deltaX));
    const limitedDeltaY = Math.max(-10, Math.min(10, deltaY));
    
    btnRef.current.style.transform = `translateY(-5px) translateX(${limitedDeltaX}px) translateY(${limitedDeltaY}px) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    if (!btnRef.current || !magneticEffectRef.current) return;
    
    setIsHovering(false);
    magneticEffectRef.current.style.opacity = '0';
    btnRef.current.style.transform = '';
    
    // Smoothly return to original position
    setTimeout(() => {
      if (!btnRef.current) return;
      btnRef.current.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      btnRef.current.style.transform = 'translateY(0) translateX(0) translateZ(0)';
      
      // Reset transition after animation completes
      setTimeout(() => {
        if (!btnRef.current) return;
        btnRef.current.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      }, 500);
    }, 50);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    btnRef.current.appendChild(ripple);
    
    // Add haptic-like feedback with small scale change
    btnRef.current.style.transform = 'translateY(-2px) scale(0.97)';
    setTimeout(() => {
      if (!btnRef.current) return;
      btnRef.current.style.transform = 'translateY(-5px) scale(1)';
    }, 150);
    
    setTimeout(() => {
      ripple.remove();
    }, 800);
  };

  return (
    <div className="flex justify-center items-center w-full bg-[#0a0a0a] font-sans overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-10] opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(128,0,255,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
      
      <div className="flex flex-col justify-center items-center w-full max-w-[600px] p-8">
        <div 
          ref={buttonContainerRef}
          className="relative inline-block my-8 mx-auto"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            ref={btnRef}
            className="btn relative py-4 px-8 text-lg font-semibold tracking-wider uppercase bg-transparent text-white border border-white/10 rounded-lg cursor-pointer overflow-hidden transition-all duration-400 z-[1] shadow-[0_0_15px_rgba(128,0,255,0.1)] hover:border-purple-500/60 hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(128,0,255,0.4)] hover:tracking-[2.5px] active:translate-y-[-2px] active:scale-[0.98] active:shadow-[0_5px_15px_rgba(128,0,255,0.3)]"
            onClick={handleClick}
          >
            <span className="text relative z-[2] inline-block transition-all duration-300">
              {isHovering ? animatedChars : originalText}
            </span>
            
            <div className="btn-bg absolute top-0 left-0 w-full h-full z-[-1]"></div>
            
            <div className="btn-highlight absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-white/0 pointer-events-none z-[2] opacity-0 transition-opacity duration-500"></div>
            
            <div className="btn-border absolute top-[-2px] left-[-2px] right-[-2px] bottom-[-2px] rounded-lg border-2 border-transparent bg-[linear-gradient(135deg,#8000ff,#4a0080)] opacity-0 transition-opacity duration-500"></div>
          </button>
          
          <div className="glow absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-[radial-gradient(ellipse_at_center,rgba(128,0,255,0.5)_0%,rgba(100,0,200,0.3)_30%,rgba(255,255,255,0)_70%)] opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out z-[-3] translate-x-[-50%] translate-y-[-50%]"></div>
          
          <div ref={particlesContainerRef} className="absolute w-full h-full pointer-events-none"></div>
          
          <div ref={magneticEffectRef} className="absolute rounded-full pointer-events-none w-20 h-20 bg-[radial-gradient(circle_at_center,rgba(128,0,255,0.3)_0%,rgba(128,0,255,0)_70%)] opacity-0 z-[-1] transition-opacity duration-300"></div>
        </div>
        
        
      </div>
      
      <style jsx>{`
        .btn:hover .btn-bg {
          background: linear-gradient(90deg, #4a0080 0%, #8000ff 100%);
          opacity: 1;
        }
        
        .btn-bg {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .btn:hover .text {
          color: white;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
          transform: translateX(5px);
        }
        
        .btn:hover .btn-highlight {
          opacity: 1;
          animation: rotate 3s linear infinite;
        }
        
        .btn:hover .btn-border {
          opacity: 1;
          animation: borderPulse 1.5s infinite;
        }
        
        .btn:hover .glow {
          opacity: 0.7;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        
        .particle {
          position: absolute;
          background: linear-gradient(90deg, #4a0080, #8000ff);
          border-radius: 50%;
          opacity: 0;
          animation: rise 1s ease-out forwards;
        }
        
        @keyframes rise {
          0% {
            opacity: 0.8;
            transform: translateY(0) scale(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-50px) scale(1);
          }
        }
        
        @keyframes borderPulse {
          0% { opacity: 0.8; }
          50% { opacity: 0.4; }
          100% { opacity: 0.8; }
        }
        
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(128, 0, 255, 0.2);
          transform: scale(0);
          animation: ripple 0.8s linear;
          pointer-events: none;
        }
        
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}