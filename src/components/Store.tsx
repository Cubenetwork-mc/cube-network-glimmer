import React from 'react';
import { Button } from '@/components/ui/button';
import { Crown, Star, Gem, Tag, ExternalLink, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Store = () => {
  const ranks = [
    {
      name: "VIP",
      price: "₹120",
      icon: <Star className="w-8 h-8" />,
      color: "neon-green",
      features: [
        "Priority ticket support",
        "VIP badge & exclusive channels", 
        "/echest, /smithingtable, /hide",
        "/nick, /anvil commands",
        "VIP kit & VIP crates (24h cooldown)",
        "45 Ender Chest slots",
        "/trimer (limited trims)"
      ]
    },
    {
      name: "VIP+",
      price: "₹180", 
      icon: <Crown className="w-8 h-8" />,
      color: "neon-purple",
      popular: true,
      features: [
        "All VIP perks included",
        "VIP+ badge & priority support",
        "/disposal command",
        "VIP & VIP+ kits access",
        "54 Ender Chest slots",
        "/trimer (all trims unlocked)",
        "Exclusive VIP+ channels"
      ]
    },
    {
      name: "Custom Rank",
      price: "₹1200",
      duration: "6 months",
      icon: <Gem className="w-8 h-8" />,
      color: "neon-gold",
      features: [
        "All VIP+ perks included",
        "Custom prefix (your unique tag)",
        "Stand out with personalized rank",
        "Extra customization available",
        "Ultimate flex and recognition",
        "Premium support priority"
      ]
    },
    {
      name: "Custom Suffix", 
      price: "₹150",
      duration: "3 months",
      icon: <Tag className="w-8 h-8" />,
      color: "neon-blue",
      features: [
        "Unique suffix next to your name",
        "Text, tags, or symbols",
        "Perfect for flexing unique tags",
        "Personalized identity",
        "Stand out in chat"
      ]
    }
  ];

  return (
    <section id="store" className="section-padding section-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-4xl lg:text-6xl text-neon mb-4 animate-slide-up">
            RANKS & PERKS
          </h2>
          <p className="font-mono text-xl text-muted-foreground animate-slide-up delay-200 max-w-3xl mx-auto">
            Upgrade your gameplay with exclusive ranks and perks. All purchases are handled safely through our Discord ticket system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {ranks.map((rank, index) => (
            <div
              key={rank.name}
              className={`card-glow relative h-full animate-slide-up ${rank.popular ? 'ring-2 ring-primary/50' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {rank.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br from-${rank.color}/20 to-${rank.color}/10 mb-4`}>
                  <div className={`text-${rank.color}`}>
                    {rank.icon}
                  </div>
                </div>
                <h3 className="font-pixel text-2xl text-neon mb-2">{rank.name}</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-pixel text-3xl text-neon-gold">{rank.price}</span>
                  {rank.duration && (
                    <span className="font-mono text-sm text-muted-foreground">/ {rank.duration}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {rank.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 font-mono text-sm text-muted-foreground">
                    <div className={`w-2 h-2 bg-${rank.color} rounded-full mt-2 flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-neon-green"
              onClick={() => window.open('https://store.cubenetwork.fun', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit Store
            </Button>
            
            <Button 
              className="btn-neon"
              onClick={() => window.open('https://discord.com/channels/1130799874074488853/1253700877387169803', '_blank')}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Open Discord Ticket
            </Button>
          </div>

          <div className="card-glow max-w-2xl mx-auto">
            <p className="font-mono text-muted-foreground mb-2">
              <strong className="text-neon">Secure Payments:</strong> All purchases are handled through our Discord ticket system for your safety.
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              Need help? Contact our support team on Discord for instant assistance!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;