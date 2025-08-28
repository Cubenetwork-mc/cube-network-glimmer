
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Vote from '@/components/Vote';
import Rules from '@/components/Rules';
import Store from '@/components/Store';
import Discord from '@/components/Discord';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Vote />
        <Rules />
        <Store />
        <Discord />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container-custom py-8">
          <div className="text-center">
            <p className="font-mono text-muted-foreground">
              © Cube Network – All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
