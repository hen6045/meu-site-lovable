import { useState } from "react";
import { motion } from "framer-motion";

interface CouponWheelProps {
  onComplete: (prize: string, couponCode: string | null) => void;
}

const segments = [
  { text: "5% OFF", color: "#FFD700", textColor: "#1a1a2e", icon: "🔥" },
  { text: "50% OFF", color: "#DC143C", textColor: "#fff", icon: "💎" },
  { text: "Tente novamente", color: "#1a1a2e", textColor: "#777", icon: "😢" },
  { text: "25% OFF", color: "#FF6B00", textColor: "#fff", icon: "⭐" },
  { text: "5% OFF", color: "#FFD700", textColor: "#1a1a2e", icon: "🔥" },
  { text: "Tente novamente", color: "#1a1a2e", textColor: "#777", icon: "😢" },
  { text: "50% OFF", color: "#DC143C", textColor: "#fff", icon: "💎" },
  { text: "25% OFF", color: "#FF6B00", textColor: "#fff", icon: "⭐" },
];

const getSpinCount = (): number => {
  return parseInt(localStorage.getItem("spinCount") || "0", 10);
};

const incrementSpinCount = (): number => {
  const count = getSpinCount() + 1;
  localStorage.setItem("spinCount", count.toString());
  return count;
};

export const CouponWheel = ({ onComplete }: CouponWheelProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [glowing, setGlowing] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setGlowing(true);

    const spinNumber = incrementSpinCount();
    let targetSegment: number;

    if (spinNumber % 5 === 0) {
      const discountSegments = [0, 4];
      targetSegment = discountSegments[Math.floor(Math.random() * discountSegments.length)];
    } else {
      const tryAgainSegments = [2, 5];
      targetSegment = tryAgainSegments[Math.floor(Math.random() * tryAgainSegments.length)];
    }

    const segmentAngle = 360 / segments.length;
    const targetRotation = rotation + 360 * 6 + (360 - targetSegment * segmentAngle - segmentAngle / 2);

    setRotation(targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setGlowing(false);

      const prize = segments[targetSegment].text;
      const couponCode = prize.includes("5%") ? "CARRINHO5" : null;

      setTimeout(() => {
        onComplete(prize, couponCode);
      }, 1200);
    }, 4500);
  };

  const segmentAngle = 360 / segments.length;

  return (
    <div className="relative flex flex-col items-center">
      {/* Outer glow ring */}
      <motion.div
        className="absolute w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(45, 100%, 50%, 0.15) 0%, transparent 70%)",
        }}
        animate={glowing ? {
          scale: [1, 1.15, 1],
          opacity: [0.5, 1, 0.5],
        } : {
          scale: 1,
          opacity: 0.3,
        }}
        transition={{ duration: 1.5, repeat: glowing ? Infinity : 0 }}
      />

      {/* Wheel Container */}
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        {/* Decorative dots around wheel */}
        {[...Array(24)].map((_, i) => {
          const angle = (i * 360) / 24;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 52 * Math.cos(rad);
          const y = 50 + 52 * Math.sin(rad);
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
              animate={isSpinning ? {
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.3, 0.8],
              } : {
                opacity: [0.4, 0.8, 0.4],
                scale: 1,
              }}
              transition={{
                duration: isSpinning ? 0.4 : 2,
                repeat: Infinity,
                delay: i * (isSpinning ? 0.05 : 0.08),
              }}
            />
          );
        })}

        {/* Pointer */}
        <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={isSpinning ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3, repeat: isSpinning ? Infinity : 0 }}
          >
            <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-t-[34px] border-l-transparent border-r-transparent border-t-primary drop-shadow-[0_0_10px_hsla(45,100%,50%,0.8)]" />
          </motion.div>
        </div>

        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, hsl(45, 100%, 50%), hsl(45, 100%, 35%), hsl(45, 100%, 50%), hsl(45, 100%, 35%), hsl(45, 100%, 50%))",
            padding: "6px",
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden">
            {/* Wheel */}
            <motion.div
              className="w-full h-full rounded-full overflow-hidden shadow-[0_0_40px_hsla(45,100%,50%,0.3)]"
              style={{ rotate: rotation }}
              animate={{ rotate: rotation }}
              transition={{ duration: 4.5, ease: [0.15, 0.6, 0.15, 1] }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  {segments.map((segment, index) => (
                    <radialGradient key={`grad-${index}`} id={`segGrad${index}`} cx="50%" cy="50%" r="50%">
                      <stop offset="30%" stopColor={segment.color} stopOpacity="1" />
                      <stop offset="100%" stopColor={segment.color} stopOpacity="0.7" />
                    </radialGradient>
                  ))}
                  <filter id="segShadow">
                    <feDropShadow dx="0" dy="0" stdDeviation="0.5" floodColor="#000" floodOpacity="0.3" />
                  </filter>
                </defs>

                {segments.map((segment, index) => {
                  const startAngle = index * segmentAngle - 90;
                  const endAngle = startAngle + segmentAngle;
                  const startRad = (startAngle * Math.PI) / 180;
                  const endRad = (endAngle * Math.PI) / 180;

                  const x1 = 50 + 50 * Math.cos(startRad);
                  const y1 = 50 + 50 * Math.sin(startRad);
                  const x2 = 50 + 50 * Math.cos(endRad);
                  const y2 = 50 + 50 * Math.sin(endRad);

                  const largeArc = segmentAngle > 180 ? 1 : 0;

                  const textAngle = startAngle + segmentAngle / 2;
                  const textRad = (textAngle * Math.PI) / 180;
                  const iconX = 50 + 22 * Math.cos(textRad);
                  const iconY = 50 + 22 * Math.sin(textRad);
                  const textX = 50 + 34 * Math.cos(textRad);
                  const textY = 50 + 34 * Math.sin(textRad);

                  return (
                    <g key={index} filter="url(#segShadow)">
                      <path
                        d={`M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArc} 1 ${x2} ${y2} Z`}
                        fill={`url(#segGrad${index})`}
                        stroke="hsla(0,0%,100%,0.15)"
                        strokeWidth="0.3"
                      />
                      {/* Segment divider line */}
                      <line
                        x1="50" y1="50" x2={x1} y2={y1}
                        stroke="hsla(0,0%,100%,0.2)"
                        strokeWidth="0.4"
                      />
                      {/* Icon */}
                      <text
                        x={iconX}
                        y={iconY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="5"
                        transform={`rotate(${textAngle + 90}, ${iconX}, ${iconY})`}
                      >
                        {segment.icon}
                      </text>
                      {/* Text */}
                      <text
                        x={textX}
                        y={textY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={segment.textColor}
                        fontSize="3.5"
                        fontWeight="bold"
                        transform={`rotate(${textAngle + 90}, ${textX}, ${textY})`}
                        style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.5px" }}
                      >
                        {segment.text}
                      </text>
                    </g>
                  );
                })}

                {/* Center hub */}
                <circle cx="50" cy="50" r="10" fill="url(#centerGrad)" stroke="#FFD700" strokeWidth="1.5" />
                <defs>
                  <radialGradient id="centerGrad" cx="40%" cy="40%">
                    <stop offset="0%" stopColor="#2a2a4e" />
                    <stop offset="100%" stopColor="#0d0d1a" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="8" fill="none" stroke="hsla(45,100%,50%,0.3)" strokeWidth="0.5" />
                <text
                  x="50"
                  y="50"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#FFD700"
                  fontSize="6"
                >
                  🎆
                </text>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Spin Button */}
      <motion.button
        onClick={spinWheel}
        disabled={isSpinning}
        className={`mt-10 px-10 py-4 text-xl font-display tracking-wider rounded-full transition-all duration-300 ${
          isSpinning
            ? "bg-muted text-muted-foreground cursor-not-allowed"
            : "bg-gradient-gold text-primary-foreground shadow-gold"
        }`}
        whileHover={!isSpinning ? { scale: 1.08 } : {}}
        whileTap={!isSpinning ? { scale: 0.95 } : {}}
        animate={!isSpinning ? {
          boxShadow: [
            "0 0 20px hsla(45, 100%, 50%, 0.3)",
            "0 0 40px hsla(45, 100%, 50%, 0.6)",
            "0 0 20px hsla(45, 100%, 50%, 0.3)",
          ],
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {isSpinning ? "✨ GIRANDO..." : "🎰 GIRAR A ROLETA"}
      </motion.button>
    </div>
  );
};
