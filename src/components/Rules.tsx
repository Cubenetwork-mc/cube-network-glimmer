import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Shield, Users, Heart, AlertTriangle } from 'lucide-react';

const Rules = () => {
  const rules = [
    {
      category: "General Rules",
      icon: <Shield className="w-6 h-6" />,
      items: [
        "Respect all players and staff members",
        "No harassment, bullying, or toxic behavior",
        "Keep chat clean and family-friendly",
        "No spamming or excessive caps",
        "English only in global chat"
      ]
    },
    {
      category: "Gameplay Rules", 
      icon: <Users className="w-6 h-6" />,
      items: [
        "No hacking, cheating, or exploiting bugs",
        "No griefing other players' builds",
        "No stealing from other players",
        "No PvP logging or combat logging",
        "No inappropriate builds or names"
      ]
    },
    {
      category: "Community Guidelines",
      icon: <Heart className="w-6 h-6" />,
      items: [
        "Help new players when possible",
        "Report rule violations to staff",
        "No advertising other servers",
        "No real money trading (RMT)",
        "Keep the community fun for everyone"
      ]
    }
  ];

  return (
    <section id="rules" className="section-padding section-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-4xl lg:text-6xl text-neon mb-4 animate-slide-up">
            SERVER RULES
          </h2>
          <p className="font-mono text-xl text-muted-foreground animate-slide-up delay-200">
            Keep it fun, keep it fair, keep it awesome!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {rules.map((section, index) => (
            <div
              key={section.category}
              className="card-glow h-full animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {section.icon}
                </div>
                <h3 className="font-pixel text-xl text-neon">
                  {section.category}
                </h3>
              </div>
              
              <ScrollArea className="h-64">
                <ul className="space-y-3">
                  {section.items.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start gap-3 font-mono text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="card-glow max-w-3xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-4">
              <AlertTriangle className="w-6 h-6 text-neon-gold" />
              <h3 className="font-pixel text-xl text-neon-gold">Important Notice</h3>
            </div>
            <p className="font-mono text-muted-foreground">
              Breaking these rules may result in warnings, temporary bans, or permanent bans depending on severity. 
              Staff decisions are final. When in doubt, ask a staff member!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;