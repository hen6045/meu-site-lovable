import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-night-deep border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-display text-gradient-gold mb-4">
              ATACADÃO DOS FOGOS
            </h3>
            <p className="text-muted-foreground text-sm">
              Transformando momentos em memórias explosivas desde Salvador, Bahia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-primary mb-4">NAVEGAÇÃO</h4>
            <ul className="space-y-2">
              <li>
                <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-muted-foreground hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="https://www.atacadaodosfogos.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Loja Online
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-primary mb-4">CONTATO</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>Rua KM 17, N°01, Itapuã, Salvador - BA</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>(71) 98238-6061</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>contato@atacadaodosfogos.com</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-display text-lg text-primary mb-4">HORÁRIO</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Seg - Sáb: 8h às 18h<br />
              Domingo: 9h às 14h
            </p>

            <h4 className="font-display text-lg text-primary mb-3">REDES SOCIAIS</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Atacadão dos Fogos Salvador. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
