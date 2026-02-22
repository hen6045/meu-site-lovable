import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CouponModal } from "@/components/CouponModal";

const Index = () => {
  const [isWheelOpen, setIsWheelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero onOpenWheel={() => setIsWheelOpen(true)} />
        <Categories />
        <Benefits />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      <CouponModal isOpen={isWheelOpen} onClose={() => setIsWheelOpen(false)} />
    </div>
  );
};

export default Index;
