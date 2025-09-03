"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const Header = () => {
  /*  const [isMenuOpen, setIsMenuOpen] = useState(false); */
  /*   const [isVisible, setIsVisible] = useState(false); */
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Header */}
      <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b-2 backdrop-blur transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div>
              <Image
                src="/logo.svg"
                alt="Doutor Agenda"
                width={136}
                height={28}
              />
            </div>
            <nav className="hidden items-center space-x-8 md:flex">
              <a
                href="#features"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Recursos
              </a>
              <a
                href="#specialties"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Especialidades
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Depoimentos
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Contato
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="bg-primary cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
