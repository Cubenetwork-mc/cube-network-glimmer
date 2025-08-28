
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star } from 'lucide-react';

const Vote = () => {
  const voteLinks = [
    {
      name: 'MinecraftServers.org',
      url: 'https://minecraftservers.org/server/664727',
      color: 'neon-blue'
    },
    {
      name: 'TopMinecraftServers',
      url: 'https://topminecraftservers.org/server/39227',
      color: 'neon-green'
    },
    {
      name: 'Servers-Minecraft.net',
      url: 'https://servers-minecraft.net/server-hyzex-games.40069',
      color: 'neon-purple'
    }
  ];

  return (
    <section id="vote" className="section-padding section-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-4xl md:text-6xl font-bold mb-4 text-neon">
            VOTE FOR REWARDS!
          </h2>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
            Support Cube Network by voting daily on these sites and earn epic rewards in-game!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {voteLinks.map((site, index) => (
            <div key={site.name} className="card-glow text-center group">
              <div className="mb-4">
                <Star className="w-12 h-12 mx-auto text-neon-gold animate-pulse" />
              </div>
              <h3 className="font-pixel text-xl mb-4 text-foreground">{site.name}</h3>
              <Button
                className={`btn-neon w-full group-hover:scale-105 transition-transform duration-300`}
                onClick={() => window.open(site.url, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Vote Now
              </Button>
            </div>
          ))}
        </div>

        <div className="card-glow max-w-2xl mx-auto text-center">
          <p className="font-mono text-muted-foreground">
            <span className="text-neon-gold font-bold">Every vote helps us grow</span> — 
            thank you for being part of Cube Network!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vote;
