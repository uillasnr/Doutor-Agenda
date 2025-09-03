"use client";

import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SectionPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="from-background to-muted overflow-hidden bg-gradient-to-b py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-secondary/20 animate-bounce"
              >
                🚀 Confiado por mais de 500 Profissionais de Saúde
              </Badge>
              <h1 className="animate-fade-in text-4xl leading-tight font-bold text-balance lg:text-6xl">
                Transforme Sua Clínica em uma{" "}
                <span className="text-primary">Máquina de Eficiência</span>
              </h1>
              <p className="text-muted-foreground text-xl leading-relaxed text-pretty">
                <strong>
                  Pare de perder tempo com tarefas administrativas!
                </strong>{" "}
                Nossa solução completa automatiza agendamentos, otimiza sua
                gestão e{" "}
                <span className="text-primary font-semibold">
                  aumenta sua receita em até 35%
                </span>{" "}
                no primeiro ano.
              </p>
            </div>

            {/* Resultados */}
            <div className="bg-card border-primary/50 space-y-3 rounded-lg border p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-primary h-5 w-5" />
                <span className="text-foreground font-semibold">
                  Resultados Comprovados:
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  <span>40% menos faltas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  <span>60% menos tempo administrativo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  <span>35% aumento na receita</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-primary h-4 w-4" />
                  <span>95% satisfação dos pacientes</span>
                </div>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Teste Grátis por 30 Dias
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent transition-all duration-300 hover:scale-105"
              >
                Ver Demo ao Vivo
              </Button>
            </div>

            {/* Extras */}
            <div className="space-y-3">
              <div className="text-muted-foreground flex items-center space-x-6 text-sm">
                <div
                  className="animate-fade-in-up flex items-center space-x-2"
                  style={{ animationDelay: "0.2s" }}
                >
                  <CheckCircle className="text-primary h-4 w-4" />
                  <span>Implementação em 24h</span>
                </div>
                <div
                  className="animate-fade-in-up flex items-center space-x-2"
                  style={{ animationDelay: "0.4s" }}
                >
                  <CheckCircle className="text-primary h-4 w-4" />
                  <span>Conforme LGPD</span>
                </div>
                <div
                  className="animate-fade-in-up flex items-center space-x-2"
                  style={{ animationDelay: "0.6s" }}
                >
                  <CheckCircle className="text-primary h-4 w-4" />
                  <span>Suporte 24/7</span>
                </div>
              </div>
              <p className="text-primary text-sm font-medium">
                ⚡ Oferta Limitada: Primeiros 100 clientes ganham 3 meses
                grátis!
              </p>
            </div>
          </div>

          {/* Imagem */}
          <div
            className={`relative transition-all delay-300 duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="bg-card border-border aspect-square rounded-2xl border p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <Image
                fill
                src="/doutor-conversando-paciente-sorrindo.jpg"
                alt="Profissional de saúde usando o sistema MediFlow"
                className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
