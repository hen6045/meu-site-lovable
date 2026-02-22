import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import foguetesImg from "@/assets/foguetes.jpg";
import traquesImg from "@/assets/traques.jpg";
import pacotesImg from "@/assets/pacotes-eventos.jpg";

const categories = [
  {
    title: "Foguetes",
    description: "Explosões de cor e luz que encantam qualquer evento. Ideais para celebrações ao ar livre.",
    image: foguetesImg,
    alt: "Foguetes Atacadão dos Fogos Salvador",
  },
  {
    title: "Traques",
    description: "A tradição que anima festas juninas e comemorações. Sons marcantes e seguros.",
    image: traquesImg,
    alt: "Traques Atacadão dos Fogos Salvador",
  },
  {
    title: "Pacotes para Eventos",
    description: "Soluções completas para casamentos, formaturas e eventos corporativos.",
    image: pacotesImg,
    alt: "Pacotes para Eventos Atacadão dos Fogos Salvador",
  },
];

export const Categories = () => {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display text-gradient-gold mb-4">
            NOSSOS PRODUTOS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra a magia dos fogos de artifício. Temos opções para todos os tipos de celebração.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-display text-primary mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <a
                  href="https://www.atacadaodosfogos.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-gold-glow transition-colors font-medium"
                >
                  Ver produtos
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
