"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Cloud,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Zap,
  Shield,
  Users,
  Sparkles,
  Cpu,
  Layers,
  GitBranch,
  Terminal,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Star,
  Award,
  TrendingUp,
  Clock,
  MessageSquare,
  Sun,
  Moon,
} from "lucide-react";
import { Footer } from "@/components/Footer";

export default function NimbusWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const navHeight = 80; // altura do navbar fixo
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const technologies = [
    { name: "React", category: "Frontend", glow: "hover:shadow-cyan-500/50" },
    {
      name: "TypeScript",
      category: "Language",
      glow: "hover:shadow-blue-500/50",
    },
    { name: "Node.js", category: "Backend", glow: "hover:shadow-green-500/50" },
    {
      name: "MongoDB",
      category: "Database",
      glow: "hover:shadow-emerald-500/50",
    },
    {
      name: "AWS Lambda",
      category: "Cloud",
      glow: "hover:shadow-orange-500/50",
    },
    { name: "Next.js", category: "Framework", glow: "hover:shadow-white/50" },
    { name: "SQL", category: "Database", glow: "hover:shadow-blue-500/50" },
    { name: "PHP", category: "Backend", glow: "hover:shadow-purple-500/50" },
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Aplicações Web Escaláveis",
      description:
        "Arquiteturas modernas que crescem com seu negócio. Performance otimizada e experiência impecável.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Soluções Mobile Nativas",
      description:
        "Aplicativos que seus usuários vão amar. Interface intuitiva e performance nativa.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "APIs & Microserviços",
      description:
        "Backend robusto que suporta milhões de requisições. Segurança e velocidade em primeiro lugar.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Infraestrutura Cloud",
      description:
        "Deploy automatizado e escalabilidade infinita. Seus sistemas sempre online.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "100+", label: "Horas de Código", suffix: "k" },
    { number: "99.9%", label: "Uptime Garantido", suffix: "" },
    { number: "24h", label: "Resposta Rápida", suffix: "" },
    { number: "∞", label: "Criatividade", suffix: "" },
  ];

  const teamMembers = [
    {
      name: "Davi Franco",
      role: "Software Engineer",
      description:
        "Obsessivo por performance e código limpo. Focado em algoritmos eficientes.",
      skills: [
        "React",
        "Next.js",
        "Node",
        "Nest.js",
        "AWS",
        "System Design",
        "TypeScript",
        "JavaScript",
        "MongoDB",
        "IA",
        "Python",
      ],
      portfolio: "#portfolio1",
      image: "/DaviFranco.jpg",
    },
    {
      name: "João Barroso",
      role: "Developer Fullstack",
      description:
        "Apaixonado por criar experiências digitais memoráveis. Do pixel ao deploy.",
      skills: ["PHP", "JavaScript", "SQL", "Node.js", "HTML", "CSS"],
      portfolio: "#portfolio2",
      image: "/JoaoBarroso.jpg",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      } overflow-x-hidden transition-colors duration-300`}
    >
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
          background-size: 300% 300%;
        }
        .bg-300 {
          background-size: 300% 300%;
        }
      `}</style>

      {/* Animated Background - Only in dark mode */}
      {theme === "dark" && (
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
            }}
          />
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-500/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled
            ? theme === "dark"
              ? "bg-black/80 backdrop-blur-xl border-b border-purple-500/20"
              : "bg-white/80 backdrop-blur-xl border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Logo maior e mais visível */}
              <div className="w-16 h-16 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl blur-lg group-hover:blur-xl transition-all opacity-75"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="/logo_transparent.png"
                    alt="Nimbus"
                    className="w-14 h-14 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "Início",
                "Expertise",
                "Soluções",
                "Stack",
                "Time",
                "Contato",
              ].map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)}
                  className={`relative ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors font-medium group`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-200 hover:bg-gray-300"
                } transition-colors`}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <a
                href="#contato"
                onClick={(e) => scrollToSection(e, "#contato")}
                className="relative px-6 py-2.5 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg group-hover:blur-xl transition-all opacity-75"></div>
                <div className="relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                  <span className="font-semibold text-white">
                    Começar Projeto
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                } transition-colors`}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={theme === "dark" ? "text-white" : "text-gray-900"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className={`md:hidden mt-4 pb-4 space-y-2 border-t ${
                theme === "dark" ? "border-purple-500/20" : "border-gray-200"
              } pt-4`}
            >
              {[
                "Início",
                "Expertise",
                "Soluções",
                "Stack",
                "Time",
                "Contato",
              ].map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)}
                  className={`block py-2 ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } hover:pl-2 transition-all`}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="início"
        className="relative min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-purple-400 mr-2 animate-pulse" />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span
                  className={`block ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Código que
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-300">
                  impressiona
                </span>
                <span
                  className={`block ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  e entrega.
                </span>
              </h1>

              <p
                className={`text-xl ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                } leading-relaxed`}
              >
                Dois engenheiros obcecados por excelência + IA de ponta. Criamos
                sistemas que não apenas funcionam, mas dominam o mercado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contato"
                  onClick={(e) => scrollToSection(e, "#contato")}
                  className="relative group px-8 py-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                  <div className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="font-semibold mr-2 text-white">
                      Vamos Construir
                    </span>
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                </a>
                <a
                  href="#time"
                  onClick={(e) => scrollToSection(e, "#time")}
                  className="px-8 py-4 border border-purple-500/50 text-purple-400 rounded-xl hover:bg-purple-500/10 hover:border-purple-500 transition-all font-semibold backdrop-blur-sm text-center"
                >
                  Explorar Projetos
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {stat.number}
                    </p>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-500" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
              <div
                className={`relative ${
                  theme === "dark" ? "bg-black/50" : "bg-white/80"
                } backdrop-blur-xl rounded-3xl border ${
                  theme === "dark"
                    ? "border-purple-500/20"
                    : "border-purple-200"
                } p-8 transform hover:scale-105 transition-all duration-500`}
              >
                <div
                  className={`h-96 relative overflow-hidden rounded-2xl ${
                    theme === "dark" ? "bg-gray-900/50" : "bg-gray-100"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
                  <div className="p-6 font-mono text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-400">const</span>
                        <span className="text-blue-400">nimbus</span>
                        <span
                          className={
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }
                        >
                          =
                        </span>
                        <span className="text-yellow-400">{`{`}</span>
                      </div>
                      <div className="pl-4 space-y-2">
                        <div
                          className="opacity-0 animate-fadeIn"
                          style={{
                            animationDelay: "0.5s",
                            animationFillMode: "forwards",
                          }}
                        >
                          <span className="text-green-400">mission:</span>
                          <span className="text-orange-400">
                            {" "}
                            "Transformar ideias em realidade"
                          </span>
                          ,
                        </div>
                        <div
                          className="opacity-0 animate-fadeIn"
                          style={{
                            animationDelay: "1s",
                            animationFillMode: "forwards",
                          }}
                        >
                          <span className="text-green-400">stack:</span>
                          <span className="text-orange-400">
                            {" "}
                            ["React", "Node", "PHP", "Python"]
                          </span>
                          ,
                        </div>
                        <div
                          className="opacity-0 animate-fadeIn"
                          style={{
                            animationDelay: "1.5s",
                            animationFillMode: "forwards",
                          }}
                        >
                          <span className="text-green-400">quality:</span>
                          <span className="text-orange-400">
                            {" "}
                            "Excepcional"
                          </span>
                          ,
                        </div>
                        <div
                          className="opacity-0 animate-fadeIn"
                          style={{
                            animationDelay: "2s",
                            animationFillMode: "forwards",
                          }}
                        >
                          <span className="text-green-400">delivery:</span>
                          <span className="text-orange-400">
                            {" "}
                            "No prazo, sempre"
                          </span>
                        </div>
                      </div>
                      <div
                        className="opacity-0 animate-fadeIn"
                        style={{
                          animationDelay: "2.5s",
                          animationFillMode: "forwards",
                        }}
                      >
                        <span className="text-yellow-400">{`}`}</span>;
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                      <img
                        src="/logo_transparent_notNIMBUS.png"
                        alt="Nimbus"
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="expertise" className="relative py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Engenharia de Software
              </span>
              <span
                className={`block mt-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                no seu máximo potencial
              </span>
            </h2>

            <p
              className={`text-lg ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } leading-relaxed`}
            >
              Somos dois desenvolvedores que respiram tecnologia. Nossa
              obsessão? Criar sistemas que não só resolvem problemas, mas
              redefinem padrões de mercado.
            </p>

            <p
              className={`text-lg ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } leading-relaxed`}
            >
              Combinamos anos de experiência em arquitetura de software com
              acesso a inteligência artificial de última geração. O resultado?
              Velocidade de entrega 3x maior sem comprometer qualidade.
            </p>

            <p
              className={`text-lg ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } leading-relaxed`}
            >
              Cada linha de código é escrita pensando em performance,
              escalabilidade e manutenibilidade. Porque acreditamos que software
              excepcional é uma arte.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <Terminal />,
                title: "Clean Code",
                desc: "Arquitetura que escala",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: <GitBranch />,
                title: "DevOps",
                desc: "Deploy contínuo e seguro",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: <Cpu />,
                title: "IA Integrada",
                desc: "Automação inteligente",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: <Layers />,
                title: "Full Stack",
                desc: "Do banco ao frontend",
                color: "from-orange-500 to-red-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative"
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                ></div>
                <div
                  className={`relative ${
                    theme === "dark" ? "bg-gray-900/50" : "bg-white"
                  } backdrop-blur-sm border ${
                    theme === "dark"
                      ? "border-purple-500/20 hover:border-purple-500/50"
                      : "border-purple-200 hover:border-purple-400"
                  } rounded-2xl p-6 transition-all`}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}
                  >
                    {React.cloneElement(item.icon, {
                      className: "w-6 h-6 text-white",
                    })}
                  </div>
                  <h3
                    className={`font-semibold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="soluções" className="relative py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Soluções que{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                aceleram
              </span>{" "}
              seu negócio
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              Tecnologia de ponta aplicada aos seus desafios mais complexos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300`}
                ></div>
                <div
                  className={`relative h-full ${
                    theme === "dark" ? "bg-gray-900/50" : "bg-white"
                  } backdrop-blur-sm rounded-2xl p-8 border ${
                    theme === "dark"
                      ? "border-purple-500/20 hover:border-purple-500/50"
                      : "border-purple-200 hover:border-purple-400"
                  } transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="stack" className="relative py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nossa{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Arsenal
              </span>{" "}
              Tecnológico
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Ferramentas que dominamos para criar sua próxima solução digital
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className={`group relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-500/20 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl ${tech.glow}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="font-semibold text-white relative z-10">
                  {tech.name}
                </p>
                <p className="text-sm text-gray-500 mt-1 relative z-10">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="time" className="relative py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Os{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Arquitetos
              </span>{" "}
              por trás do código
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Dupla dinâmica + IA = Resultados extraordinários
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/50 transition-all duration-300">
                  {/* Photo Placeholder */}
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-lg opacity-50"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full overflow-hidden">
                      {/* Adicione a foto aqui */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-center text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-center font-medium mb-4">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {member.role}
                    </span>
                  </p>
                  <p className="text-gray-400 text-center mb-6">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="text-center">
                    <a
                      href={member.portfolio}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all group"
                    >
                      <span className="font-semibold">Ver Portfolio</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =================================================================== */}
      {/* ======================= SEÇÃO DE CONTATO ========================== */}
      {/* =================================================================== */}
      <section id="contato" className="relative py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Vamos criar algo{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                incrível
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Tem uma ideia? Nós temos a tecnologia. Preencha o formulário e
              vamos conversar.
            </p>
          </div>

          <div className="max-w-2xl mx-auto relative group">
            {/* Efeito de Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>

            <form
              onSubmit={handleSubmit}
              className="relative bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Seu Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition placeholder:text-gray-500"
                  placeholder="João Silva"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Seu Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition placeholder:text-gray-500"
                  placeholder="joao.silva@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition placeholder:text-gray-500"
                  placeholder="Gostaria de falar sobre meu projeto..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full relative group/button px-8 py-3.5 text-white font-semibold"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-md group-hover/button:blur-lg transition-all opacity-75"></div>
                <div className="relative w-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  Enviar Mensagem
                </div>
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
