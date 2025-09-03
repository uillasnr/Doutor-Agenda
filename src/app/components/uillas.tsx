"use client";

import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Menu,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HealthcareLandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div
              className={`flex items-center space-x-2 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="bg-primary flex h-8 w-8 animate-pulse items-center justify-center rounded-lg">
                <Calendar className="text-primary-foreground h-5 w-5" />
              </div>
              <span className="text-foreground text-xl font-bold">
                MediFlow
              </span>
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
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Começar Agora
              </Button>
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="from-background to-muted overflow-hidden bg-gradient-to-b py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
            >
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-secondary/10 text-secondary border-secondary/20 animate-bounce"
                >
                  🚀 Confiado por mais de 500 Profissionais de Saúde
                </Badge>
                <h1 className="animate-fade-in text-4xl leading-tight font-bold text-balance lg:text-6xl">
                  Transforme Sua Clínica em uma
                  <span className="text-accent"> Máquina de Eficiência</span>
                </h1>
                <p className="text-muted-foreground text-xl leading-relaxed text-pretty">
                  <strong>
                    Pare de perder tempo com tarefas administrativas!
                  </strong>{" "}
                  Nossa solução completa automatiza agendamentos, otimiza sua
                  gestão e{" "}
                  <span className="text-accent font-semibold">
                    aumenta sua receita em até 35%
                  </span>{" "}
                  no primeiro ano.
                </p>
              </div>

              <div className="bg-card border-accent/20 space-y-3 rounded-lg border p-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-accent h-5 w-5" />
                  <span className="text-foreground font-semibold">
                    Resultados Comprovados:
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-accent h-4 w-4" />
                    <span>40% menos faltas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-accent h-4 w-4" />
                    <span>60% menos tempo administrativo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-accent h-4 w-4" />
                    <span>35% aumento na receita</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-accent h-4 w-4" />
                    <span>95% satisfação dos pacientes</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground group transition-all duration-300 hover:scale-105 hover:shadow-xl"
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

              <div className="space-y-3">
                <div className="text-muted-foreground flex items-center space-x-6 text-sm">
                  <div
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <CheckCircle className="text-accent h-4 w-4" />
                    <span>Implementação em 24h</span>
                  </div>
                  <div
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <CheckCircle className="text-accent h-4 w-4" />
                    <span>Conforme LGPD</span>
                  </div>
                  <div
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <CheckCircle className="text-accent h-4 w-4" />
                    <span>Suporte 24/7</span>
                  </div>
                </div>
                <p className="text-accent text-sm font-medium">
                  ⚡ Oferta Limitada: Primeiros 100 clientes ganham 3 meses
                  grátis!
                </p>
              </div>
            </div>
            <div
              className={`relative transition-all delay-300 duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
            >
              <div className="bg-card border-border aspect-square rounded-2xl border p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <img
                  src="/modern-healthcare-professional-using-tablet-in-cli.png"
                  alt="Profissional de saúde usando o sistema MediFlow"
                  className="h-full w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl font-bold text-balance lg:text-4xl">
              Tudo Que Você Precisa Para{" "}
              <span className="text-accent">Dominar o Mercado</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl text-pretty">
              Ferramentas poderosas que seus concorrentes não têm.{" "}
              <strong>Saia na frente e conquiste mais pacientes!</strong>
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-card border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardHeader className="space-y-4">
                <div className="bg-accent/10 group-hover:bg-accent/20 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300">
                  <Calendar className="text-accent h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-card-foreground">
                  Agendamento Inteligente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>Acabe com as faltas!</strong> Sistema com IA que prevê
                  cancelamentos e otimiza sua agenda automaticamente.
                  <span className="text-accent font-semibold">
                    {" "}
                    Aumente sua ocupação em 40%.
                  </span>
                </CardDescription>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <Zap className="text-accent h-4 w-4" />
                    <span>
                      <strong>Portal 24/7</strong> - Pacientes agendam sozinhos
                    </span>
                  </li>
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <Zap className="text-accent h-4 w-4" />
                    <span>
                      <strong>Lembretes automáticos</strong> - SMS, WhatsApp e
                      email
                    </span>
                  </li>
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <Zap className="text-accent h-4 w-4" />
                    <span>
                      <strong>Lista de espera inteligente</strong> - Preenche
                      vagas na hora
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardHeader className="space-y-4">
                <div className="bg-accent/10 group-hover:bg-accent/20 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300">
                  <Users className="text-accent h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-card-foreground">
                  Gestão Completa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>Controle total da sua clínica!</strong> Prontuários
                  digitais, faturamento automático e relatórios que
                  <span className="text-accent font-semibold">
                    {" "}
                    mostram onde ganhar mais dinheiro.
                  </span>
                </CardDescription>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <Zap className="text-accent h-4 w-4" />
                    <span>
                      <strong>Prontuários eletrônicos</strong> - Acesso
                      instantâneo
                    </span>
                  </li>
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <Zap className="text-accent h-4 w-4" />
                    <span>
                      <strong>Faturamento automático</strong> - Convênios e
                      particulares
                    </span>
                  </li>
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <Zap className="text-accent h-4 w-4" />
                    <span>
                      <strong>Relatórios de lucro</strong> - Saiba onde investir
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardHeader className="space-y-4">
                <div className="bg-accent/10 group-hover:bg-accent/20 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300">
                  <Clock className="text-accent h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-card-foreground">
                  Agenda Otimizada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>Maximize seu tempo!</strong> IA organiza sua agenda
                  para atender mais pacientes sem estresse.
                  <span className="text-accent font-semibold">
                    Aumente sua receita sem trabalhar mais.
                  </span>
                </CardDescription>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <Zap className="text-accent h-4 w-4" />
                    <span>
                      <strong>Sincronização em tempo real</strong> - Múltiplos
                      dispositivos
                    </span>
                  </li>
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <Zap className="text-accent h-4 w-4" />
                    <span>
                      <strong>Gestão de recursos</strong> - Salas e equipamentos
                    </span>
                  </li>
                  <li
                    className="animate-fade-in-up flex items-center space-x-2"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <Zap className="text-accent h-4 w-4" />
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

      <section id="specialties" className="bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl font-bold text-balance lg:text-4xl">
              Especializado Para{" "}
              <span className="text-accent">Sua Área Médica</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl text-pretty">
              Configurações específicas para cada especialidade.{" "}
              <strong>
                Funcionalidades que realmente fazem sentido para seu trabalho!
              </strong>
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-background border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="space-y-4 p-6 text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/placeholder-vqikc.png"
                    alt="Cardiologista"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-foreground font-semibold">Cardiologia</h3>
                <p className="text-muted-foreground text-sm">
                  ECG integrado, monitoramento cardíaco e protocolos específicos
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="space-y-4 p-6 text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/dentist-examining-patient-teeth-in-modern-dental-o.png"
                    alt="Dentista"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-foreground font-semibold">Odontologia</h3>
                <p className="text-muted-foreground text-sm">
                  Odontograma digital, planos de tratamento e controle
                  financeiro
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="space-y-4 p-6 text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/pediatrician-doctor-examining-child-patient-with-t.png"
                    alt="Pediatra"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-foreground font-semibold">Pediatria</h3>
                <p className="text-muted-foreground text-sm">
                  Curvas de crescimento, vacinação e comunicação com pais
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="space-y-4 p-6 text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/dermatologist-examining-patient-skin-with-magnifyi.png"
                    alt="Dermatologista"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-foreground font-semibold">Dermatologia</h3>
                <p className="text-muted-foreground text-sm">
                  Mapeamento de pintas, fotos comparativas e protocolos
                  estéticos
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="space-y-4 p-6 text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/orthopedic-surgeon-examining-patient-joint-xray.png"
                    alt="Ortopedista"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-foreground font-semibold">Ortopedia</h3>
                <p className="text-muted-foreground text-sm">
                  Análise de imagens, fisioterapia integrada e acompanhamento
                  pós-cirúrgico
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="space-y-4 p-6 text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/gynecologist-doctor-in-consultation-with-female-pa.png"
                    alt="Ginecologista"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-foreground font-semibold">Ginecologia</h3>
                <p className="text-muted-foreground text-sm">
                  Controle menstrual, pré-natal integrado e exames preventivos
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="space-y-4 p-6 text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/psychiatrist-therapist-in-session-with-patient-in-.png"
                    alt="Psiquiatra"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-foreground font-semibold">Psiquiatria</h3>
                <p className="text-muted-foreground text-sm">
                  Escalas de avaliação, prescrições controladas e
                  telepsiquiatria
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="space-y-4 p-6 text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/ophthalmologist-eye-doctor-examining-patient-visio.png"
                    alt="Oftalmologista"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-foreground font-semibold">Oftalmologia</h3>
                <p className="text-muted-foreground text-sm">
                  Testes visuais digitais, prescrição de óculos e cirurgias
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              <strong>Não encontrou sua especialidade?</strong> Personalizamos o
              sistema para qualquer área médica!
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Solicitar Personalização Gratuita
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl font-bold text-balance lg:text-4xl">
              <span className="text-accent">Resultados Reais</span> de Quem Já
              Transformou Sua Prática
            </h2>
            <p className="text-muted-foreground text-xl text-pretty">
              <strong>Não acredite apenas na nossa palavra.</strong> Veja os
              números impressionantes dos nossos clientes!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card border-border transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-accent text-accent h-4 w-4 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>"Minha receita aumentou 42% em 6 meses!"</strong> O
                  MediFlow eliminou completamente as faltas na minha clínica.
                  Agora atendo 30% mais pacientes no mesmo tempo. É
                  impressionante como a tecnologia pode transformar um negócio.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                    <span className="text-sm font-medium">DR</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      Dra. Sarah Rodriguez
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Clínica de Medicina da Família - SP
                    </p>
                  </div>
                </div>
                <div className="bg-accent/10 text-accent mt-3 rounded p-2 text-sm font-medium">
                  💰 Resultado: +R$ 180.000 em receita anual
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-accent text-accent h-4 w-4 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>"Economizo 15 horas por semana!"</strong> Antes eu
                  passava horas organizando agenda e cobrando pacientes. Agora
                  tudo é automático. Posso focar 100% nos meus pacientes e ainda
                  sobra tempo para a família.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                    <span className="text-sm font-medium">MJ</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      Dr. Michael Johnson
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Cardiologista - RJ
                    </p>
                  </div>
                </div>
                <div className="bg-accent/10 text-accent mt-3 rounded p-2 text-sm font-medium">
                  ⏰ Resultado: 15h/semana economizadas
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-accent text-accent h-4 w-4 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>"ROI de 400% no primeiro ano!"</strong> O investimento
                  no MediFlow se pagou em 3 meses. Agora tenho 3 clínicas e
                  gerencio tudo de qualquer lugar. Meus pacientes adoram a
                  praticidade.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                    <span className="text-sm font-medium">LC</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      Dra. Lisa Chen
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Rede de Clínicas Odontológicas - MG
                    </p>
                  </div>
                </div>
                <div className="bg-accent/10 text-accent mt-3 rounded p-2 text-sm font-medium">
                  📈 Resultado: ROI de 400% em 12 meses
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div className="space-y-2">
              <div className="text-accent text-3xl font-bold">500+</div>
              <div className="text-muted-foreground text-sm">
                Clínicas Ativas
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-accent text-3xl font-bold">2M+</div>
              <div className="text-muted-foreground text-sm">
                Consultas Agendadas
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-accent text-3xl font-bold">98%</div>
              <div className="text-muted-foreground text-sm">
                Satisfação dos Clientes
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-accent text-3xl font-bold">35%</div>
              <div className="text-muted-foreground text-sm">
                Aumento Médio de Receita
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <Badge
              variant="secondary"
              className="bg-accent-foreground/10 text-accent-foreground border-accent-foreground/20"
            >
              🔥 Oferta Limitada - Apenas para os Primeiros 100 Clientes
            </Badge>
            <h2 className="text-accent-foreground animate-fade-in text-3xl font-bold text-balance lg:text-5xl">
              Pare de Perder Dinheiro com Gestão Ineficiente!
            </h2>
            <p
              className="text-accent-foreground/90 animate-fade-in-up mx-auto max-w-3xl text-xl text-pretty"
              style={{ animationDelay: "0.2s" }}
            >
              <strong>
                Seus concorrentes já estão usando tecnologia para crescer.
              </strong>{" "}
              Não fique para trás! Comece hoje mesmo e veja sua clínica se
              transformar em uma máquina de eficiência e lucro.
            </p>

            <div className="bg-accent-foreground/10 mx-auto max-w-2xl space-y-4 rounded-lg p-6">
              <h3 className="text-accent-foreground text-xl font-bold">
                🎁 Bônus Exclusivos para Ação Imediata:
              </h3>
              <ul className="text-accent-foreground/90 space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-accent-foreground h-5 w-5" />
                  <span>
                    <strong>3 meses grátis</strong> (valor R$ 897)
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-accent-foreground h-5 w-5" />
                  <span>
                    <strong>Implementação gratuita</strong> (valor R$ 1.200)
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-accent-foreground h-5 w-5" />
                  <span>
                    <strong>Treinamento personalizado</strong> (valor R$ 800)
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-accent-foreground h-5 w-5" />
                  <span>
                    <strong>Suporte prioritário</strong> por 1 ano
                  </span>
                </li>
              </ul>
              <div className="pt-2 text-center">
                <span className="text-accent-foreground text-2xl font-bold">
                  Total em Bônus: R$ 2.897
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 group px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                🚀 Quero Transformar Minha Clínica Agora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Ver Demo ao Vivo (5 min)
              </Button>
            </div>

            <div className="space-y-3">
              <div
                className="text-accent-foreground/80 animate-fade-in-up flex items-center justify-center space-x-2"
                style={{ animationDelay: "0.4s" }}
              >
                <Shield className="h-4 w-4" />
                <span className="text-sm">
                  ✅ Sem Compromisso • ✅ Cancelamento a Qualquer Momento • ✅
                  Garantia de 30 Dias
                </span>
              </div>
              <p className="text-accent-foreground font-medium">
                ⏰ Restam apenas{" "}
                <span className="text-xl font-bold">47 vagas</span> com
                desconto!
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-background border-border border-t py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand Section */}
            <div className="space-y-6 lg:col-span-2">
              <div className="flex items-center space-x-2">
                <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg">
                  <Calendar className="text-primary-foreground h-6 w-6" />
                </div>
                <span className="text-foreground text-2xl font-bold">
                  MediFlow
                </span>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                A plataforma líder em gestão de saúde no Brasil. Transformamos
                clínicas em negócios mais eficientes, lucrativos e focados no
                que realmente importa: o cuidado com o paciente.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Award className="text-accent h-4 w-4" />
                  <span className="text-muted-foreground">
                    Certificado ISO 27001 e LGPD
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="text-accent h-4 w-4" />
                  <span className="text-muted-foreground">
                    99,9% de disponibilidade garantida
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="text-accent h-4 w-4" />
                  <span className="text-muted-foreground">
                    Mais de 500 clínicas ativas
                  </span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h4 className="text-foreground text-lg font-semibold">Produto</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Recursos Completos
                  </a>
                </li>
                <li>
                  <a
                    href="#specialties"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Especialidades Médicas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Planos e Preços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Integrações
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    API para Desenvolvedores
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="text-foreground text-lg font-semibold">Suporte</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Documentação Técnica
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Treinamentos Online
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Suporte 24/7
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Status do Sistema
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="text-foreground text-lg font-semibold">Empresa</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Sobre o MediFlow
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Nossa Missão
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Trabalhe Conosco
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Imprensa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors hover:underline"
                  >
                    Parceiros
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-border mb-8 border-t pt-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3">
                <h5 className="text-foreground font-medium">📞 Fale Conosco</h5>
                <div className="text-muted-foreground space-y-2 text-sm">
                  <p>WhatsApp: (11) 99999-9999</p>
                  <p>Email: contato@mediflow.com.br</p>
                  <p>Horário: Segunda a Sexta, 8h às 18h</p>
                </div>
              </div>
              <div className="space-y-3">
                <h5 className="text-foreground font-medium">🏢 Escritórios</h5>
                <div className="text-muted-foreground space-y-2 text-sm">
                  <p>São Paulo - SP (Matriz)</p>
                  <p>Rio de Janeiro - RJ</p>
                  <p>Belo Horizonte - MG</p>
                </div>
              </div>
              <div className="space-y-3">
                <h5 className="text-foreground font-medium">🔒 Segurança</h5>
                <div className="text-muted-foreground space-y-2 text-sm">
                  <p>Certificação ISO 27001</p>
                  <p>Conformidade LGPD</p>
                  <p>Auditoria SOC 2 Tipo II</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-border flex flex-col items-center justify-between space-y-4 border-t pt-8 md:flex-row md:space-y-0">
            <div className="text-muted-foreground flex flex-col items-center space-y-2 text-sm md:flex-row md:space-y-0 md:space-x-6">
              <p>&copy; 2024 MediFlow. Todos os direitos reservados.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  LGPD
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge
                variant="secondary"
                className="bg-accent/10 text-accent border-accent/20"
              >
                🏆 Melhor Software Médico 2024
              </Badge>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
