import { useState } from "react";
import { X } from "lucide-react";
import { CouponWheel } from "./CouponWheel";
import { motion, AnimatePresence } from "framer-motion";

interface CouponModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CouponModal = ({ isOpen, onClose }: CouponModalProps) => {
  const [result, setResult] = useState<{ prize: string; couponCode: string | null } | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleComplete = (prize: string, couponCode: string | null) => {
    setResult({ prize, couponCode });
    setShowResult(true);
  };

  const handleTryAgain = () => {
    setResult(null);
    setShowResult(false);
  };

  const handleRedirect = () => {
    window.open("https://www.atacadaodosfogos.com.br", "_blank");
    onClose();
  };

  const handleCopyCode = () => {
    if (result?.couponCode) {
      navigator.clipboard.writeText(result.couponCode);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-lg p-8 bg-gradient-card rounded-2xl border border-border shadow-glow"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <X size={24} />
            </button>

            {!showResult ? (
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-display text-gradient-gold mb-2">
                  🎆 GIRE E GANHE!
                </h2>
                <p className="text-muted-foreground mb-6">
                  Tente a sorte e ganhe descontos exclusivos!
                </p>
                <CouponWheel onComplete={handleComplete} />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                {result?.couponCode ? (
                  <>
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-3xl font-display text-gradient-gold mb-2">
                      PARABÉNS!
                    </h3>
                    <p className="text-xl text-foreground mb-4">
                      Você ganhou <span className="text-primary font-bold">{result.prize}</span>
                    </p>
                    <div className="bg-muted p-4 rounded-lg mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Seu código de cupom:</p>
                      <p className="text-2xl font-mono font-bold text-primary tracking-wider">
                        {result.couponCode}
                      </p>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="text-sm text-muted-foreground hover:text-primary underline mb-4 block mx-auto"
                    >
                      Copiar código
                    </button>
                    <button
                      onClick={handleRedirect}
                      className="w-full py-4 bg-gradient-gold text-primary-foreground font-display text-xl rounded-lg hover:scale-105 transition-transform shadow-gold"
                    >
                      IR PARA A LOJA →
                    </button>
                  </>
                ) : (
                  <>
                    <div className="text-6xl mb-4">😢</div>
                    <h3 className="text-3xl font-display text-foreground mb-2">
                      QUE PENA!
                    </h3>
                    <p className="text-xl text-muted-foreground mb-6">
                      Não foi dessa vez, mas não desanime!
                    </p>
                    <button
                      onClick={handleTryAgain}
                      className="w-full py-4 border-2 border-primary text-primary font-display text-xl rounded-lg hover:bg-primary hover:text-primary-foreground transition-all mb-3"
                    >
                      TENTAR NOVAMENTE
                    </button>
                    <button
                      onClick={handleRedirect}
                      className="w-full py-4 bg-gradient-gold text-primary-foreground font-display text-xl rounded-lg hover:scale-105 transition-transform shadow-gold"
                    >
                      CONFERIR OFERTAS →
                    </button>
                  </>
                )}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
