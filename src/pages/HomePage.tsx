import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Leaf, Droplets, Heart, Sparkles, Wind, Sun, Waves, Bot } from "lucide-react";
import React from "react";
const CalSans = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h1 className={cn("font-display", className)}>{children}</h1>
);
const Header = () => (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="fixed top-0 left-0 right-0 z-50"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20 border-b border-white/10 bg-background/80 backdrop-blur-lg rounded-b-2xl px-6">
        <CalSans className="text-2xl font-bold text-primary">Ayura</CalSans>
        <Button>Shop Now</Button>
      </div>
    </div>
  </motion.header>
);
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
    <div className="absolute inset-0 bg-background -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(117,61,229,0.15)_0%,rgba(0,0,0,0)_60%)]"></div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <CalSans className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-primary via-fuchsia-400 to-primary">
          Sensual Feeling
        </CalSans>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground text-pretty">
          An Ayurvedic Elixir of Hemp, Lavender, and Sandalwood to Awaken Your Senses.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      >
        <Button size="lg" className="text-lg px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300">
          Unlock Your Desire
        </Button>
      </motion.div>
    </div>
  </section>
);
const ingredients = [
  { icon: Leaf, name: "Hempseed Oil", description: "Nourishes and soothes the skin." },
  { icon: Droplets, name: "Lavender", description: "Calms the mind and relaxes the body." },
  { icon: Heart, name: "Cinnamon", description: "Ignites warmth and stimulates circulation." },
  { icon: Sparkles, name: "Sandalwood", description: "A grounding, meditative, and sensual aroma." },
  { icon: Wind, name: "Cedarwood", description: "Promotes a sense of security and vitality." },
  { icon: Sun, name: "Benzoin", description: "A sweet, vanilla-like scent that comforts." },
];
const IngredientsSection = () => (
  <section className="py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4 mb-16">
        <CalSans className="text-4xl md:text-5xl font-bold text-primary">Natural Ingredients</CalSans>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          A symphony of nature's most potent botanicals, crafted to elevate your intimate moments.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ingredients.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-card/50 border-border/50 h-full text-center hover:border-primary/50 hover:bg-card transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-display text-foreground">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
const ExperienceSection = () => (
  <section className="py-24 lg:py-32 bg-card/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <CalSans className="text-4xl md:text-5xl font-bold text-primary">The Experience</CalSans>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Ayura Sensual Feeling is more than a massage oil; it's an invitation. The rich, sweet aroma envelops you, melting away tension and creating a space of pure presence. Feel the silky texture glide over your skin, leaving it soft, radiant, and deeply moisturized. Let the symphony of scents guide you on a journey of connection, intimacy, and profound relaxation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="p-6 bg-background rounded-xl border border-border/50">
            <Waves className="w-10 h-10 text-accent mb-3" />
            <h3 className="text-xl font-display font-semibold">Silky Texture</h3>
            <p className="text-muted-foreground mt-1">Non-greasy and fast-absorbing.</p>
          </div>
          <div className="p-6 bg-background rounded-xl border border-border/50">
            <Bot className="w-10 h-10 text-accent mb-3" />
            <h3 className="text-xl font-display font-semibold">Aromatic Bliss</h3>
            <p className="text-muted-foreground mt-1">Complex, sweet, and deeply erotic.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
const CtaSection = () => (
  <section className="py-24 lg:py-32">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8"
      >
        <CalSans className="text-4xl md:text-5xl font-bold text-primary">Begin Your Journey</CalSans>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Ready to transform your moments of connection? Embrace the art of sensual touch with Ayura.
        </p>
        <Button size="lg" className="text-lg px-10 py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300">
          Purchase Ayura Sensual Feeling
        </Button>
      </motion.div>
    </div>
  </section>
);
const Footer = () => (
  <footer className="border-t border-white/10 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Ayura. All rights reserved.</p>
      <p className="mt-2 text-sm">Built with ❤️ at Cloudflare</p>
    </div>
  </footer>
);
export function HomePage() {
  return (
    <div className="bg-background text-foreground font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <IngredientsSection />
        <ExperienceSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}