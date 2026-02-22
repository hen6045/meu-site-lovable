import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    event: "Casamento",
    text: "Os fogos do nosso casamento foram simplesmente perfeitos! Todos os convidados ficaram encantados.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    event: "Réveillon",
    text: "Compramos o pacote de Ano Novo e a qualidade é incomparável. Já virou tradição comprar aqui!",
    rating: 5,
  },
  {
    name: "Ana Paula",
    event: "Festa Junina",
    text: "Atendimento excelente e produtos de primeira. Recomendo para todos os eventos.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display text-gradient-gold mb-4">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milhares de celebrações iluminadas com nossos produtos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-gradient-card border border-border"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 italic">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
