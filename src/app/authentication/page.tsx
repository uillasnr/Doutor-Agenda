import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/lib/auth";

import LoginForm from "./components/login-form";
import SignUpForm from "./components/sign-up-form";

const AuthenticationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-screen">
      {/* Coluna direita - Imagem */}
      <div className="relative hidden h-full w-1/2 md:block">
        <Image
          src="/doutor-conversando-paciente-sorrindo.jpg"
          alt="Profissional de saúde usando o sistema Doutor Agenda"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-10 left-10 space-y-2 text-white">
          <h2 className="text-3xl font-bold">
            Gerencie sua clínica com facilidade
          </h2>
          <p className="max-w-xs text-sm text-gray-200">
            Um sistema moderno e intuitivo para profissionais de saúde.
          </p>
        </div>
      </div>

      {/* Coluna esquerda - Formulário */}
      <div className="flex w-full flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 px-8 md:w-1/2">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/logo.svg"
              alt="Doutor Agenda"
              width={150}
              height={32}
            />
          </div>

          {/* Títulos */}
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Bem-vindo ao Doutor Agenda
            </h1>
            <p className="text-gray-500">
              Faça login ou crie sua conta para continuar
            </p>
          </div>

          {/* Abas */}
          <div className="rounded-lg bg-white p-3">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 rounded-lg bg-gray-100 p-1">
                <TabsTrigger
                  value="login"
                  className="rounded-md transition data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="rounded-md transition data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                >
                  Criar conta
                </TabsTrigger>
              </TabsList>

              {/* Conteúdos */}
              <TabsContent value="login" className="mt-6">
                <LoginForm />
              </TabsContent>

              <TabsContent value="register" className="mt-6">
                <SignUpForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
