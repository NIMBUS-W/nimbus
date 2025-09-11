// app/components/Footer.tsx
import Image from "next/image";
import { Github, Link } from "lucide-react";

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
        <div className="flex justify-center space-x-6 mb-8">
          <Link
            href="https://github.com/NIMBUS-W"
            className="text-gray-500 hover:text-purple-500 transition-colors"
          >
            <Github />
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Nimbus. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
