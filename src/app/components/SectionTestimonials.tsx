import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";

interface AnimatedNumberProps {
  value: number;
}

export default function SectionTestimonials() {
  function AnimatedNumber({ value }: AnimatedNumberProps) {
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest));

    useEffect(() => {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }, [value, motionValue]);

    return (
      <motion.div className="text-primary text-3xl font-bold">
        {rounded}
      </motion.div>
    );
  }
  return (
    <>
      <section id="testimonials" className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl font-bold text-balance lg:text-4xl">
              <span className="text-primary">Resultados Reais</span> de Quem Já
              Transformou Sua Prática
            </h2>
            <p className="text-muted-foreground text-xl text-pretty">
              <strong>Não acredite apenas na nossa palavra.</strong> Veja os
              números impressionantes dos nossos clientes!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-primary/10 border-border transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="pt-6">
                {/* Estrelas */}
                <div className="mb-4 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-primary text-primary h-4 w-4 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Depoimento */}
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  <strong>
                    &ldquo;Minha receita aumentou 42% em 6 meses!&rdquo;
                  </strong>{" "}
                  O Doutor Agenda. eliminou completamente as faltas na minha
                  clínica. Agora atendo 30% mais pacientes no mesmo tempo. É
                  impressionante como a tecnologia pode transformar um negócio.
                </p>

                {/* Autor */}
                <div className="mb-4 flex items-center space-x-3">
                  <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full border border-zinc-400">
                    <span className="text-sm font-medium">DR</span>
                  </div>
                  <div>
                    <p className="text-foreground text-base font-medium">
                      Dra. Sarah Rodriguez
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Clínica de Medicina da Família - SP
                    </p>
                  </div>
                </div>

                {/* Resultado */}
                <div className="bg-primary/10 text-primary rounded p-2 text-sm font-medium">
                  💰 Resultado: +R$ 180.000 em receita anual
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-border h-full transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="flex h-full flex-col pt-6">
                <div className="mb-4 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-primary text-primary h-4 w-4 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  <strong>&ldquo;Economizo 15 horas por semana!&rdquo;</strong>{" "}
                  Antes eu passava horas organizando agenda e cobrando
                  pacientes. Agora tudo é automático. Posso focar 100% nos meus
                  pacientes e ainda sobra tempo para a família.
                </p>

                <div className="mt-auto">
                  <div className="mb-4 flex items-center space-x-3">
                    <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full border border-zinc-400">
                      <span className="text-sm font-medium">MJ</span>
                    </div>
                    <div>
                      <p className="text-foreground text-base font-medium">
                        Dr. Michael Johnson
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Cardiologista - RJ
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/10 text-primary rounded p-2 text-sm font-medium">
                    ⏰ Resultado: 15h/semana economizadas
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-border h-full transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="flex h-full flex-col pt-6">
                <div className="mb-4 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-primary text-primary h-4 w-4 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  <strong>&ldquo;ROI de 400% no primeiro ano!&rdquo;</strong> O
                  investimento no MediFlow se pagou em 3 meses. Agora tenho 3
                  clínicas e gerencio tudo de qualquer lugar. Meus pacientes
                  adoram a praticidade.
                </p>

                <div className="mt-auto">
                  <div className="mb-4 flex items-center space-x-3">
                    <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full border border-zinc-400">
                      <span className="text-sm font-medium">LC</span>
                    </div>
                    <div>
                      <p className="text-foreground text-base font-medium">
                        Dra. Lisa Chen
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Rede de Clínicas Odontológicas - MG
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/10 text-primary rounded p-2 text-sm font-medium">
                    📈 Resultado: ROI de 400% em 12 meses
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {/* Clínicas Ativas */}
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <AnimatedNumber value={500} />
                <span className="text-primary ml-1 text-3xl font-bold">+</span>
              </div>
              <div className="text-muted-foreground text-sm">
                Clínicas Ativas
              </div>
            </div>

            {/* Consultas Agendadas */}
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <AnimatedNumber value={2} />
                <span className="text-primary ml-1 text-3xl font-bold">M+</span>
              </div>
              <div className="text-muted-foreground text-sm">
                Consultas Agendadas
              </div>
            </div>

            {/* Satisfação dos Clientes */}
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <AnimatedNumber value={98} />
                <span className="text-primary ml-1 text-3xl font-bold">%</span>
              </div>
              <div className="text-muted-foreground text-sm">
                Satisfação dos Clientes
              </div>
            </div>

            {/* Aumento Médio de Receita */}
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <AnimatedNumber value={35} />
                <span className="text-primary ml-1 text-3xl font-bold">%</span>
              </div>
              <div className="text-muted-foreground text-sm">
                Aumento Médio de Receita
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
