// app/components/Contact.tsx
"use client";
import React, { useState } from "react";
import { Mail, Send, Loader } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Lógica de envio (adicionar depois)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aqui você integraria com um serviço de email como Resend, SendGrid, etc.
  };

  return (
    <section id="contato" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Vamos criar algo{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              incrível
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tem uma ideia? Nós temos a tecnologia. Preencha o formulário e vamos
            conversar.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Inputs do formulário... */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105"
            >
              <Send size={18} />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
