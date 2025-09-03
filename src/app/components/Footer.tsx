import { Award, Shield, TrendingUp } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export default function Footer() {
  return (
    <>
      <footer className="bg-background border-border border-t py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand Section */}
            <div className="space-y-6 lg:col-span-2">
              <div className="flex items-center space-x-2">
                <div>
                  <Image
                    src="/logo.svg"
                    alt="Doutor Agenda"
                    width={142}
                    height={32}
                  />
                </div>
              </div>
              <p className="text-muted-foreground max-w-md text-justify leading-relaxed">
                A plataforma líder em gestão de saúde no Brasil. Transformamos
                clínicas em negócios mais eficientes, lucrativos e focados no
                que realmente importa: o cuidado com o paciente.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Award className="text-primary h-4 w-4" />
                  <span className="text-muted-foreground">
                    Certificado ISO 27001 e LGPD
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="text-primary h-4 w-4" />
                  <span className="text-muted-foreground">
                    99,9% de disponibilidade garantida
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="text-primary h-4 w-4" />
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
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Recursos Completos
                  </a>
                </li>
                <li>
                  <a
                    href="#specialties"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Especialidades Médicas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Planos e Preços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Integrações
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
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
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Documentação Técnica
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Treinamentos Online
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Suporte 24/7
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
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
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Sobre o Doutor Agenda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Nossa Missão
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Trabalhe Conosco
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    Imprensa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
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
                  <p>Email: contato@DoutorAgenda.com.br</p>
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
              <p>&copy; 2025 Doutor Agenda. Todos os direitos reservados.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  LGPD
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20"
              >
                🏆 Melhor Software Médico 2025
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
