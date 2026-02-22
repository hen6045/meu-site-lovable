import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock, Phone } from "lucide-react";

export const Contact = () => {
  const whatsappNumber = "5571982386061";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os fogos de artifício.");

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display text-gradient-gold mb-4">
            ENTRE EM CONTATO
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar você a criar momentos inesquecíveis.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="text-6xl mb-6">💬</div>
            <h3 className="text-2xl font-display text-foreground mb-4">
              FALE CONOSCO PELO WHATSAPP
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              Atendimento rápido e personalizado. Tire suas dúvidas e faça seu pedido agora mesmo!
            </p>
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm py-4 bg-[#25D366] text-white font-display text-xl rounded-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={24} />
              FALAR PELO WHATSAPP
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-6 rounded-2xl bg-gradient-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-primary mb-2">ENDEREÇO</h3>
                  <p className="text-muted-foreground">
                    Rua KM 17, N°01, Itapuã<br />
                    Salvador, Bahia
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-primary mb-2">TELEFONE</h3>
                  <p className="text-muted-foreground">
                    (71) 98238-6061
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-primary mb-2">HORÁRIO DE ATENDIMENTO</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sábado: 8h às 18h<br />
                    Domingo: 9h às 14h
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-2xl overflow-hidden bg-card border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249215.04825002568!2d-38.615!3d-12.9714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604c764438d8b%3A0xf9f3c3de1f34d5d2!2sSalvador%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Atacadão dos Fogos Salvador"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
