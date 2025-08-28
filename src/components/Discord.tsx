import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users, Crown, Headphones, ExternalLink } from 'lucide-react';

const Discord = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Active Community",
      description: "Join thousands of players in our vibrant Discord server"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Staff Support", 
      description: "Get help from our dedicated staff team 24/7"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Server Updates",
      description: "Stay updated with the latest news and announcements"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Voice Channels",
      description: "Chat with friends while playing together"
    }
  ];

  return (
    <section id="discord" className="section-padding section-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-4xl lg:text-6xl text-neon mb-4 animate-slide-up">
            JOIN OUR COMMUNITY
          </h2>
          <p className="font-mono text-xl text-muted-foreground animate-slide-up delay-200">
            Connect with fellow cube builders on Discord!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-glow text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-pixel text-xl text-neon mb-3">{feature.title}</h3>
              <p className="font-mono text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-glow text-center mb-8">
            <div className="mb-6">
              <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 mb-6">
                <MessageCircle className="w-12 h-12 text-neon-blue" />
              </div>
              <h3 className="font-pixel text-3xl text-neon mb-4">Ready to Join?</h3>
              <p className="font-mono text-lg text-muted-foreground mb-6">
                Click the button below to join our Discord server and become part of the Cube Network family!
              </p>
            </div>

            <Button 
              className="btn-neon text-xl px-12 py-6"
              onClick={() => window.open('https://discord.gg/cubenetwork', '_blank')}
            >
              <ExternalLink className="w-6 h-6 mr-3" />
              Join Discord Server
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-glow">
              <h4 className="font-pixel text-xl text-neon mb-4">Server Stats</h4>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Members:</span>
                  <span className="text-neon-green">1,500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Online Now:</span>
                  <span className="text-neon-green">~200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Voice Channels:</span>
                  <span className="text-neon-blue">10+</span>
                </div>
              </div>
            </div>

            <div className="card-glow">
              <h4 className="font-pixel text-xl text-neon mb-4">Quick Access</h4>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Support Tickets:</span>
                  <span className="text-neon-purple">#tickets</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">General Chat:</span>
                  <span className="text-neon-purple">#general</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Announcements:</span>
                  <span className="text-neon-gold">#announcements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discord;