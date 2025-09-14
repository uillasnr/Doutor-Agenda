import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SectionSpecialties() {
  return (
    <section id="specialties" className="bg-muted py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-balance lg:text-4xl">
            Especializado Para{" "}
            <span className="text-primary">Sua Área Médica</span>
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
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                <Image
                  fill
                  src="/Cardiologia.png"
                  alt="Cardiologista"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
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
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                <Image
                  fill
                  src="/dentist-examining-patient-teeth-in-modern-dental-o.png"
                  alt="Dentista"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-foreground font-semibold">Odontologia</h3>
              <p className="text-muted-foreground text-sm">
                Odontograma digital, planos de tratamento e controle financeiro
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
            <CardContent className="space-y-4 p-6 text-center">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                <Image
                  fill
                  src="/pediatrician-doctor-examining-child-patient-with-t.png"
                  alt="Pediatra"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
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
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                <Image
                  fill
                  src="/dermatologist-examining-patient-skin-with-magnifyi.png"
                  alt="Dermatologista"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-foreground font-semibold">Dermatologia</h3>
              <p className="text-muted-foreground text-sm">
                Mapeamento de pintas, fotos comparativas e protocolos estéticos
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
            <CardContent className="space-y-4 p-6 text-center">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                <Image
                  fill
                  src="/orthopedic-surgeon-examining-patient-joint-xray.png"
                  alt="Ortopedista"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
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
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                <Image
                  fill
                  src="/gynecologist-doctor-in-consultation-with-female-pa.png"
                  alt="Ginecologista"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
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
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                <Image
                  fill
                  src="/psychiatrist-therapist-in-session-with-patient-in-.png"
                  alt="Psiquiatra"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-foreground font-semibold">Psiquiatria</h3>
              <p className="text-muted-foreground text-sm">
                Escalas de avaliação, prescrições controladas e telepsiquiatria
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border group transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
            <CardContent className="space-y-4 p-6 text-center">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                <Image
                  fill
                  src="/ophthalmologist-eye-doctor-examining-patient-visio.png"
                  alt="Oftalmologista"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
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
          <Button className="bg-primary cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Solicitar Personalização Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
}
