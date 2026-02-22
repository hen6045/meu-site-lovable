import { motion } from "framer-motion";
import { Sparkles, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Experiência Visual Única",
    description: "Fogos selecionados que garantem espetáculos inesquecíveis para sua celebração.",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Produtos certificados e orientações completas para um uso seguro e responsável.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Nossa equipe ajuda você a escolher os fogos ideais para cada tipo de evento.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display text-gradient-gold mb-4">
            POR QUE NOS ESCOLHER?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos especialistas em transformar momentos comuns em celebrações extraordinárias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform shadow-gold">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
