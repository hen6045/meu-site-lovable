import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fireworks.jpg";

interface HeroProps {
  onOpenWheel: () => void;
}

export const Hero = ({ onOpenWheel }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fogos de artifício espetaculares em Salvador"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-gradient-gold text-shadow-gold mb-4">
            ATACADÃO DOS FOGOS
          </h1>
          <p className="text-2xl md:text-3xl font-display text-foreground mb-2">
            SALVADOR
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Transforme seus momentos em memórias explosivas. Os melhores fogos de artifício da Bahia para sua festa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://www.atacadaodosfogos.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-gold text-primary-foreground font-display text-xl rounded-full shadow-gold hover:scale-105 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              COMPRAR AGORA
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.button
              onClick={onOpenWheel}
              className="px-8 py-4 border-2 border-primary text-primary font-display text-xl rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              🎰 GIRAR ROLETA DE CUPONS
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
