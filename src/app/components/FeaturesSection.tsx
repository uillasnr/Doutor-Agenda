import { Calendar, Clock, Users, Zap } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FeaturesSection() {
  return (
    <>
      <section id="features" className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl font-bold text-balance lg:text-4xl">
              Tudo Que Você Precisa Para{" "}
              <span className="text-primary">Dominar o Mercado</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl text-pretty">
              Ferramentas poderosas que seus concorrentes não têm.{" "}
              <strong>Saia na frente e conquiste mais pacientes!</strong>
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-primary/10 border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardHeader className="space-y-4">
                <div className="bg-primary/20 group-hover:bg-pritext-primary/20 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300">
                  <Calendar className="text-primary h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-card-foreground">
                  Agendamento Inteligente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>Acabe com as faltas!</strong> Sistema com IA que prevê
                  cancelamentos e otimiza sua agenda automaticamente.
                  <span className="text-primary font-semibold">
                    {" "}
                    Aumente sua ocupação em 40%.
                  </span>
                </CardDescription>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <Zap className="text-primary h-4 w-4" />
                    <span>
                      <strong>Portal 24/7</strong> - Pacientes agendam sozinhos
                    </span>
                  </li>
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <Zap className="text-primary h-4 w-4" />
                    <span>
                      <strong>Lembretes automáticos</strong> - SMS, WhatsApp e
                      email
                    </span>
                  </li>
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <Zap className="text-primary h-4 w-4" />
                    <span>
                      <strong>Lista de espera inteligente</strong> - Preenche
                      vagas na hora
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardHeader className="space-y-4">
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300">
                  <Users className="text-primary h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-card-foreground">
                  Gestão Completa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>Controle total da sua clínica!</strong> Prontuários
                  digitais, faturamento automático e relatórios que
                  <span className="text-primary font-semibold">
                    {" "}
                    mostram onde ganhar mais dinheiro.
                  </span>
                </CardDescription>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <Zap className="text-primary h-4 w-4" />
                    <span>
                      <strong>Prontuários eletrônicos</strong> - Acesso
                      instantâneo
                    </span>
                  </li>
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <Zap className="text-primary h-4 w-4" />
                    <span>
                      <strong>Faturamento automático</strong> - Convênios e
                      particulares
                    </span>
                  </li>
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <Zap className="text-primary h-4 w-4" />
                    <span>
                      <strong>Relatórios de lucro</strong> - Saiba onde investir
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardHeader className="space-y-4">
                <div className="bg-primary/20 group-hover:bg-pritext-primary/20 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300">
                  <Clock className="text-primary h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-card-foreground">
                  Agenda Otimizada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>Maximize seu tempo!</strong> IA organiza sua agenda
                  para atender mais pacientes sem estresse.
                  <span className="text-primary font-semibold">
                    Aumente sua receita sem trabalhar mais.
                  </span>
                </CardDescription>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <Zap className="text-primary h-4 w-4" />
                    <span>
                      <strong>Sincronização em tempo real</strong> - Múltiplos
                      dispositivos
                    </span>
                  </li>
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <Zap className="text-primary h-4 w-4" />
                    <span>
                      <strong>Gestão de recursos</strong> - Salas e equipamentos
                    </span>
                  </li>
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <Zap className="text-primary h-4 w-4" />
                    <span>
                      <strong>Multi-localização</strong> - Várias clínicas em
                      uma tela
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
