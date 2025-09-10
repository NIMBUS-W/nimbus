// app/components/Footer.tsx
import Image from "next/image";
import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo_transparent_notNIMBUS.png"
            alt="Nimbus Logo Dark"
            width={150}
            height={50}
            className="hidden dark:block"
          />
          <Image
            src="/logo_transparent_notNIMBUS.png"
            alt="Nimbus Logo Light"
            width={150}
            height={50}
            className="dark:hidden block"
          />
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Código que impressiona e entrega.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="text-gray-500 hover:text-purple-500 transition-colors"
          >
            <Github />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-purple-500 transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-purple-500 transition-colors"
          >
            <Instagram />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Nimbus. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
