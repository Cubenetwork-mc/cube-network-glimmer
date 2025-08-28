
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding section-bg">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-pixel text-4xl md:text-6xl font-bold mb-8 text-neon">
            ABOUT CUBE NETWORK
          </h2>
          
          <div className="card-glow max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-foreground font-mono">
              Cube Network is a <span className="text-neon-blue font-bold">community-driven</span> Minecraft server 
              built for players who love <span className="text-neon-green font-bold">creativity</span>, 
              <span className="text-neon-purple font-bold"> competition</span>, and 
              <span className="text-neon-gold font-bold"> fun</span>. 
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground font-mono mt-4">
              From survival adventures to custom features, our world is designed to give you the 
              <span className="text-neon font-bold"> ultimate Minecraft experience</span>.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card-glow text-center">
              <div className="text-3xl mb-4">🎮</div>
              <h3 className="font-pixel text-xl text-neon-blue mb-2">Custom Features</h3>
              <p className="text-sm text-muted-foreground">Unique gameplay mechanics and custom plugins</p>
            </div>
            
            <div className="card-glow text-center">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="font-pixel text-xl text-neon-green mb-2">Community Driven</h3>
              <p className="text-sm text-muted-foreground">Active community with regular events</p>
            </div>
            
            <div className="card-glow text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-pixel text-xl text-neon-purple mb-2">High Performance</h3>
              <p className="text-sm text-muted-foreground">Lag-free experience with dedicated servers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
