
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle opacity-20';
      particle.innerHTML = ['⚔️', '💎', '🧱', '⛏️'][Math.floor(Math.random() * 4)];
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.fontSize = '20px';
      
      particlesRef.current.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 6000);
    };

    const interval = setInterval(createParticle, 2000);
    return () => clearInterval(interval);
  }, []);

  const copyServerIP = () => {
    navigator.clipboard.writeText('play.cubenetwork.fun');
    toast.success('Server IP copied to clipboard!');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg">
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 text-center container-custom">
        {/* World's Best 3D Holographic Cube Logo */}
        <div className="flex justify-center mb-8">
          <div className="logo-container relative w-48 h-48 group cursor-pointer">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green opacity-20 animate-spin-slow blur-xl"></div>
            
            {/* Particle orbits */}
            <div className="absolute inset-4 animate-spin-reverse">
              <div className="particle-orbit absolute top-0 left-1/2 w-2 h-2 bg-neon-blue rounded-full transform -translate-x-1/2 animate-pulse"></div>
              <div className="particle-orbit absolute bottom-0 left-1/2 w-2 h-2 bg-neon-green rounded-full transform -translate-x-1/2 animate-pulse delay-500"></div>
              <div className="particle-orbit absolute left-0 top-1/2 w-2 h-2 bg-neon-purple rounded-full transform -translate-y-1/2 animate-pulse delay-1000"></div>
              <div className="particle-orbit absolute right-0 top-1/2 w-2 h-2 bg-neon-gold rounded-full transform -translate-y-1/2 animate-pulse delay-1500"></div>
            </div>
            
            {/* Main cube container */}
            <div className="absolute inset-8 perspective-1000">
              <div className="cube-logo w-full h-full relative transform-gpu group-hover:scale-110 transition-transform duration-700">
                
                {/* Inner core cube */}
                <div className="absolute inset-4 cube-inner animate-cube-float">
                  <div className="cube-face-inner front-inner absolute w-full h-full bg-gradient-to-br from-neon-blue/80 to-cyan-400/80 rounded-lg border border-neon-blue/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-2xl font-pixel text-white drop-shadow-2xl animate-pulse">C</div>
                  </div>
                  <div className="cube-face-inner back-inner absolute w-full h-full bg-gradient-to-br from-neon-purple/80 to-violet-400/80 rounded-lg border border-neon-purple/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-2xl font-pixel text-white drop-shadow-2xl animate-pulse delay-200">U</div>
                  </div>
                  <div className="cube-face-inner right-inner absolute w-full h-full bg-gradient-to-br from-neon-green/80 to-emerald-400/80 rounded-lg border border-neon-green/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-2xl font-pixel text-white drop-shadow-2xl animate-pulse delay-400">B</div>
                  </div>
                  <div className="cube-face-inner left-inner absolute w-full h-full bg-gradient-to-br from-neon-gold/80 to-yellow-400/80 rounded-lg border border-neon-gold/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-2xl font-pixel text-white drop-shadow-2xl animate-pulse delay-600">E</div>
                  </div>
                  <div className="cube-face-inner top-inner absolute w-full h-full bg-gradient-to-br from-cyan-400/60 to-blue-400/60 rounded-lg border border-cyan-400/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-xl font-pixel text-white drop-shadow-2xl animate-pulse delay-800">⚡</div>
                  </div>
                  <div className="cube-face-inner bottom-inner absolute w-full h-full bg-gradient-to-br from-violet-400/60 to-purple-400/60 rounded-lg border border-violet-400/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-xl font-pixel text-white drop-shadow-2xl animate-pulse delay-1000">💎</div>
                  </div>
                </div>
                
                {/* Outer holographic cube */}
                <div className="cube-outer animate-cube-hologram">
                  <div className="cube-face-outer front-outer absolute w-full h-full bg-gradient-to-br from-neon-blue/30 to-transparent rounded-xl border-2 border-neon-blue/40 backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                  </div>
                  <div className="cube-face-outer back-outer absolute w-full h-full bg-gradient-to-br from-neon-purple/30 to-transparent rounded-xl border-2 border-neon-purple/40 backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                  </div>
                  <div className="cube-face-outer right-outer absolute w-full h-full bg-gradient-to-br from-neon-green/30 to-transparent rounded-xl border-2 border-neon-green/40 backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                  </div>
                  <div className="cube-face-outer left-outer absolute w-full h-full bg-gradient-to-br from-neon-gold/30 to-transparent rounded-xl border-2 border-neon-gold/40 backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                  </div>
                  <div className="cube-face-outer top-outer absolute w-full h-full bg-gradient-to-br from-cyan-400/20 to-transparent rounded-xl border-2 border-cyan-400/40 backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                  </div>
                  <div className="cube-face-outer bottom-outer absolute w-full h-full bg-gradient-to-br from-violet-400/20 to-transparent rounded-xl border-2 border-violet-400/40 backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Energy pulses */}
            <div className="absolute inset-0 animate-ping opacity-20">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green"></div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-pixel text-6xl md:text-8xl font-bold mb-4 text-neon animate-slide-up">
          CUBE NETWORK
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up delay-200 font-mono">
          Your Next-Level Minecraft Adventure Awaits!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
          <div className="flex items-center gap-2 bg-card rounded-lg p-4 border border-border">
            <span className="text-sm text-muted-foreground">Server IP:</span>
            <code className="font-mono text-neon-blue font-bold">play.cubenetwork.fun</code>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={copyServerIP}
              className="hover:bg-primary/10"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          
          <Button 
            className="btn-neon-green"
            onClick={() => window.open('https://discord.gg/cubenetwork', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Join Discord
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
