import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SectionOffer() {
  const router = useRouter();

  const handleRedirectToLogin = () => {
    router.push("/authentication");
  };

  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <Badge
              variant="secondary"
              className="bg-primary-foreground/10 text-primary-foreground border-accent"
            >
              🔥 Oferta Limitada - Apenas para os Primeiros 100 Clientes
            </Badge>
            <h2 className="text-primary-foreground animate-fade-in text-3xl font-bold text-balance lg:text-5xl">
              Pare de Perder Dinheiro com Gestão Ineficiente!
            </h2>
            <p
              className="text-primary-foreground/90 animate-fade-in-up mx-auto max-w-3xl text-xl text-pretty"
              style={{ animationDelay: "0.2s" }}
            >
              <strong>
                Seus concorrentes já estão usando tecnologia para crescer.
              </strong>{" "}
              Não fique para trás! Comece hoje mesmo e veja sua clínica se
              transformar em uma máquina de eficiência e lucro.
            </p>

            <div className="bg-primary-foreground/10 border-accent mx-auto max-w-2xl space-y-4 rounded-lg border p-6">
              <h3 className="text-primary-foreground text-xl font-bold">
                🎁 Bônus Exclusivos para Ação Imediata:
              </h3>
              <ul className="text-primary-foreground/90 space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-primary-foreground h-5 w-5" />
                  <span>
                    <strong>3 meses grátis</strong> (valor R$ 897)
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-primary-foreground h-5 w-5" />
                  <span>
                    <strong>Implementação gratuita</strong> (valor R$ 1.200)
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-primary-foreground h-5 w-5" />
                  <span>
                    <strong>Treinamento personalizado</strong> (valor R$ 800)
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="text-primary-foreground h-5 w-5" />
                  <span>
                    <strong>Suporte prioritário</strong> por 1 ano
                  </span>
                </li>
              </ul>
              <div className="pt-2 text-center">
                <span className="text-primary-foreground text-2xl font-bold">
                  Total em Bônus: R$ 2.897
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                onClick={handleRedirectToLogin}
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 group px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                🚀 Quero Transformar Minha Clínica Agora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={handleRedirectToLogin}
                size="lg"
                variant="outline"
                className="border-accent-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Ver Demo ao Vivo (5 min)
              </Button>
            </div>

            <div className="space-y-3">
              <div
                className="text-primary-foreground/80 animate-fade-in-up flex items-center justify-center space-x-2"
                style={{ animationDelay: "0.4s" }}
              >
                <Shield className="h-4 w-4" />
                <span className="text-sm">
                  ✅ Sem Compromisso • ✅ Cancelamento a Qualquer Momento • ✅
                  Garantia de 30 Dias
                </span>
              </div>
              <p className="text-primary-foreground font-medium">
                ⏰ Restam apenas{" "}
                <span className="text-xl font-bold">47 vagas</span> com
                desconto!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
