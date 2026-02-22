import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import weddingImg from "@/assets/gallery-wedding.jpg";
import newyearImg from "@/assets/gallery-newyear.jpg";
import birthdayImg from "@/assets/gallery-birthday.jpg";
import corporateImg from "@/assets/gallery-corporate.jpg";

const galleryItems = [
  {
    image: weddingImg,
    alt: "Fogos de artifício em casamento Salvador",
    title: "Casamentos",
    type: "image",
  },
  {
    image: newyearImg,
    alt: "Fogos de artifício de Ano Novo Salvador",
    title: "Réveillon",
    type: "image",
  },
  {
    image: birthdayImg,
    alt: "Fogos de artifício em aniversário Salvador",
    title: "Aniversários",
    type: "image",
  },
  {
    image: corporateImg,
    alt: "Fogos de artifício em evento corporativo Salvador",
    title: "Eventos Corporativos",
    type: "image",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display text-gradient-gold mb-4">
            GALERIA DE EVENTOS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos momentos mágicos que ajudamos a criar.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="font-display text-lg text-foreground">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
};
