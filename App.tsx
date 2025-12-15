import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  CheckCircle2, 
  ClipboardList, 
  LayoutTemplate, 
  Search, 
  Presentation, 
  ArrowRight, 
  ArrowLeft,
  Phone, 
  Mail, 
  Menu,
  X,
  TrendingUp,
  Award,
  Users,
  Loader2,
  Send,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DSC01927 from './assets/img/DSC01927.jpg';
import DSC01934 from './assets/img/DSC01934.jpg';
import DSC01957 from './assets/img/DSC01957.jpg';
import IMG_0220 from './assets/img/IMG_0220.jpg';
import IMG_1861 from './assets/img/IMG_1861.jpg';
import IMG_1874 from './assets/img/IMG_1874.jpg';
import IMG_1876 from './assets/img/IMG_1876.PNG';
import  SAOMIGUEL from './assets/img/TujuBoutiqueHotel.png';
import  GUADALUPE from './assets/img/CondominioGuadalupe.png';
import  CASALTA from './assets/img/CasaAlta.png';
import  CASASERRAMBI from './assets/img/CasaSerrambi.png';

// --- Types ---

interface CaseStudy {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  size?: string;
}

// --- Data Constants ---

const NAV_LINKS = [
  { name: 'O que fazemos', href: '#about' },
  { name: 'Como funciona', href: '#process' },
  { name: 'Cases', href: '#cases' },
  { name: 'Benefícios', href: '#benefits' },
];

const PROCESS_STEPS = [
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: "Visita Técnica e Diagnóstico",
    desc: "Levantamento completo do perfil, objetivos, necessidades e limitações do cliente. Utilizamos um questionário exclusivo que garante máxima precisão no planejamento."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8" />,
    title: "Definição de Equipamentos e Layout",
    desc: "Escolha dos equipamentos ideais e definição do quantitativo, sempre priorizando funcionalidade, conforto, estética e aproveitamento total do espaço."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Pesquisa e Seleção de Fornecedores",
    desc: "Buscamos os melhores fornecedores do mercado, alinhados ao perfil do cliente, considerando custo-benefício, qualidade e prazo."
  },
  {
    icon: <Presentation className="w-8 h-8" />,
    title: "Apresentação de Cenários",
    desc: "Oferecemos diferentes propostas de configuração, permitindo uma decisão segura, alinhada às expectativas e ao orçamento do cliente."
  }
];

const CASES: CaseStudy[] = [
  {
    id: 1,
    title: "Tuju Boutique Hotel",
    location: "São Miguel dos Milagres - AL",
    size: "78m²",
    description: "Destino reconhecido por sua beleza natural, o hotel conta com uma academia de 78m². O espaço foi planejado para oferecer conforto e uma experiência completa aos hóspedes, com maquinário bem distribuído e funcionalidade em cada detalhe.",
    image: SAOMIGUEL
  },
  {
    id: 2,
    title: "Condomínio Guadalupe",
    location: "Praia de Guadalupe - PE",
    size: "147m²",
    description: "Situado no litoral sul de Pernambuco, o condomínio abriga uma academia de 147m². O projeto foi desenvolvido para ser amplo e convidativo, com maquinário de ponta que incentiva os condôminos a utilizarem o espaço de forma frequente e confortável.",
    image: GUADALUPE
  },
  {
    id: 3,
    title: "Casa Serrambi",
    location: "Serrambi - PE",
    size: "60m²",
    description: "Residência referência no litoral sul de Pernambuco, com 3.500m² de área construída. Dentro desse contexto grandioso, foi criada uma academia de 60m², pensada para o uso do proprietário e de seus convidados. O ambiente equilibra praticidade e integração com a rotina de lazer.",
    image: CASASERRAMBI
  },
  {
    id: 4,
    title: "Casa Alta",
    location: "Recife - PE",
    size: "85m²",
    description: "Edifício icônico da Av. Boa Viagem. A academia, com 85m², nasceu de um projeto desafiador devido à planta irregular. O resultado foi um espaço amplo, funcional e acolhedor, que aumentou a adesão dos condôminos e trouxe ainda mais valor ao empreendimento.",
    image: CASALTA
  }
];

const BENEFITS = [
  {
    title: "Soluções Personalizadas",
    desc: "Projetos adaptados ao perfil e necessidades de cada cliente."
  },
  {
    title: "Agilidade e Eficiência",
    desc: "Negociação direta com fornecedores adequados para otimização de prazos e custos."
  },
  {
    title: "Design com Funcionalidade",
    desc: "Ambientes que aliam estética, ergonomia e usabilidade."
  },
  {
    title: "Gestão Completa",
    desc: "Assumimos toda a gestão, poupando seu tempo e garantindo qualidade em cada etapa."
  }
];

// --- Utilities ---

const smoothScrollTo = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

// --- Components ---

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative z-10"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <h3 className="text-xl font-bold text-white">Solicitar Diagnóstico</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 md:p-8">
              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h4>
                  <p className="text-gray-400 mb-6">Nossa equipe entrará em contato em breve para agendar seu diagnóstico.</p>
                  <button 
                    onClick={onClose}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all w-full"
                  >
                    Fechar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1.5">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1.5">Telefone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                        placeholder="(DDD) 00000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1.5">E-mail</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1.5">Empresa / Condomínio</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="Nome do local"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1.5">Mensagem (Opcional)</label>
                    <textarea 
                      id="message" 
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                      placeholder="Conte um pouco sobre sua necessidade..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === 'loading'}
                    className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Solicitação
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    Seus dados estão seguros. Não enviamos spam.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = (e: React.MouseEvent, href: string) => {
    smoothScrollTo(e, href);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center rotate-45">
            <div className="-rotate-45">
              <Dumbbell className="text-white w-6 h-6" />
            </div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">FIT<span className="text-brand-orange">PRO</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => smoothScrollTo(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOpenModal}
            className="px-5 py-2.5 bg-brand-orange text-white text-sm font-semibold rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/20"
          >
            Fale Conosco
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  className="text-lg font-medium text-gray-300"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onOpenModal();
                }}
                className="text-brand-orange font-bold text-left text-lg"
              >
                Solicitar Diagnóstico
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Gym" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
              Soluções em Academias
            </span>
            <h1 className="text-5xl md:text-7xl font-sans font-bold leading-tight mb-6">
              Espaços que inspiram <br />
              <span>
                <span className="text-brand-orange">Movimento</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-300">e Valor</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl font-light">
              Especialistas em transformar espaços em academias de alto valor agregado para residências, condomínios, pousadas e hotéis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onOpenModal}
                className="group px-8 py-4 bg-brand-orange text-white font-bold rounded-full hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
              >
                Solicitar Diagnóstico
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#cases" 
                onClick={(e) => smoothScrollTo(e, '#cases')}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Ver Portfólio
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats/Social Proof Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-brand-dark/50 backdrop-blur-md hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-brand-orange/20 rounded-full text-brand-orange"><CheckCircle2 size={20}/></div>
             <div>
               <p className="text-xs text-gray-400 uppercase tracking-wider">Objetivo</p>
               <p className="font-semibold text-white">Precisão no Planejamento</p>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="p-2 bg-brand-orange/20 rounded-full text-brand-orange"><TrendingUp size={20}/></div>
             <div>
               <p className="text-xs text-gray-400 uppercase tracking-wider">Resultado</p>
               <p className="font-semibold text-white">Valorização do Imóvel</p>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="p-2 bg-brand-orange/20 rounded-full text-brand-orange"><Dumbbell size={20}/></div>
             <div>
               <p className="text-xs text-gray-400 uppercase tracking-wider">Foco</p>
               <p className="font-semibold text-white">Design Funcional</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading: React.FC<{ subtitle: string; title: string; align?: 'left' | 'center' }> = ({ subtitle, title, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 justify-center md:justify-start w-full">
      {align === 'center' ? null : <span className="w-8 h-[2px] bg-brand-orange"></span>}
      {subtitle}
      {align === 'center' ? <span className="w-8 h-[2px] bg-brand-orange"></span> : null}
    </h3>
    <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading subtitle="O que fazemos?" title="Soluções de alto padrão" />
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Na <span className="text-brand-orange font-bold">FitPro</span>, somos especialistas em criar e transformar espaços em academias de alto valor agregado. Oferecemos soluções personalizadas para residências, condomínios, pousadas, hotéis e clubes.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Award className="w-24 h-24 text-brand-orange" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Nosso Propósito</h4>
            <p className="text-gray-300">
              Criar espaços funcionais e inspiradores, desenvolvidos sob medida, otimizando investimentos e elevando a experiência dos usuários.
            </p>
          </div>
        </div>
        
        <div className="grid gap-6">
           {/* Cards representing the objectives */}
           {[
             { title: "Precisão no planejamento", text: "Identificamos as necessidades específicas do público-alvo.", icon: <CheckCircle2 /> },
             { title: "Design Funcional", text: "Planejamos espaços fitness que têm estilo, funcionalidade e bem-estar.", icon: <Users /> },
             { title: "Valorização do Empreendimento", text: "Criamos ambientes que aumentam o valor e a atratividade do local.", icon: <TrendingUp /> }
           ].map((item, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-all"
             >
               <div className="p-3 bg-brand-orange/10 rounded-lg text-brand-orange shrink-0">
                 {item.icon}
               </div>
               <div>
                 <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                 <p className="text-sm text-gray-400">{item.text}</p>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading align="center" subtitle="Metodologia" title="Como funciona?" />
        
        <div className="grid md:grid-cols-4 gap-8 relative mt-16">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent z-0"></div>

          {PROCESS_STEPS.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-brand-dark border-4 border-brand-gray rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-black/20">
                <div className="text-brand-orange">{step.icon}</div>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 grid sm:grid-cols-2 gap-4">
            {BENEFITS.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl hover:border-brand-orange/50 transition-colors"
              >
                <div className="w-2 h-2 bg-brand-orange rounded-full mb-4"></div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="order-1 md:order-2">
            <SectionHeading subtitle="Diferenciais" title="Por que escolher a FITPRO?" />
            <p className="text-gray-300 mb-6">
              Nossa abordagem vai além da venda de equipamentos. Entregamos uma consultoria completa que valoriza seu imóvel, garante a satisfação dos usuários e otimiza cada centavo investido.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-brand-orange">100%</span>
                <p className="text-sm text-gray-400 uppercase tracking-wide">Foco em <br/>Resultados</p>
              </div>
              <div className="h-px bg-white/10 w-full max-w-xs"></div>
              <div className="flex items-center gap-3">
                 <h5 className="text-xl font-semibold text-white">Resultados:</h5>
                 <p className="text-gray-400 text-sm">Satisfação dos Usuários, Equipamentos Profissionais e Liquidez do Empreendimento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Cases: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id="cases" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Portfólio" title="Principais Cases" />

        <div className="grid lg:grid-cols-12 gap-8 mt-12">
          {/* List of cases (Desktop Sidebar / Mobile Top) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveCase(idx)}
                className={`text-left p-6 rounded-xl transition-all border ${
                  activeCase === idx 
                    ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-orange-900/40' 
                    : 'bg-white/5 text-gray-400 border-transparent hover:bg-white/10'
                }`}
              >
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className={`text-sm mt-1 ${activeCase === idx ? 'text-white/80' : 'text-gray-500'}`}>{item.location}</p>
              </button>
            ))}
          </div>

          {/* Active Case Detail */}
          <div className="lg:col-span-8">
             <motion.div
               key={activeCase}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.4 }}
               className="h-full bg-brand-gray rounded-2xl overflow-hidden border border-white/10 flex flex-col"
             >
               <div className="h-64 sm:h-80 w-full relative">
                 <img 
                   src={CASES[activeCase].image} 
                   alt={CASES[activeCase].title} 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                   <span className="text-brand-orange font-bold">{CASES[activeCase].size}</span>
                 </div>
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-bold mb-4 text-white">{CASES[activeCase].title}</h3>
                 <p className="text-gray-300 leading-relaxed text-lg">
                   {CASES[activeCase].description}
                 </p>
                 <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4">
                    <span className="text-xs uppercase tracking-widest text-gray-500">Destaques:</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300">Conforto</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300">Funcionalidade</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300">Estética</span>
                 </div>
               </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GALLERY_IMAGES = [
  { src: DSC01927, alt: 'Galeria FitPro 1' },
  { src: DSC01934, alt: 'Galeria FitPro 2' },
  { src: DSC01957, alt: 'Galeria FitPro 3' },
  { src: IMG_0220, alt: 'Galeria FitPro 4' },
  { src: IMG_1861, alt: 'Galeria FitPro 5' },
  { src: IMG_1874, alt: 'Galeria FitPro 6' },
  { src: IMG_1876, alt: 'Galeria FitPro 7' },
];

const Gallery: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape' | 'square' | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      if (e.key === 'Escape') setOpenIndex(null);
      if (e.key === 'ArrowRight') setOpenIndex((prev) => prev === null ? null : (prev + 1) % GALLERY_IMAGES.length);
      if (e.key === 'ArrowLeft') setOpenIndex((prev) => prev === null ? null : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) {
      setOrientation(null);
      return;
    }
    const img = new Image();
    img.src = GALLERY_IMAGES[openIndex].src;
    img.onload = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      if (w === h) setOrientation('square');
      else if (w > h) setOrientation('landscape');
      else setOrientation('portrait');
    };
  }, [openIndex]);

  const next = () => setOpenIndex((prev) => prev === null ? null : (prev + 1) % GALLERY_IMAGES.length);
  const prev = () => setOpenIndex((prev) => prev === null ? null : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

  return (
    <section id="gallery" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Portfólio" title="Galeria de Imagens" align="center" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, idx) => (
            <motion.button
              key={idx}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 focus:outline-none"
              onClick={() => setOpenIndex(idx)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-medium text-white/80">FitPro</span>
                <span className="px-3 py-1 text-xs rounded-full bg-brand-orange text-white">Projeto</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenIndex(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              className={`relative z-10 w-full ${
                orientation === 'portrait' ? 'max-w-[60vw] md:max-w-[50vw]' : 'max-w-[90vw] md:max-w-[75vw]'
              } bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl`}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <p className="text-sm text-gray-400">
                  {GALLERY_IMAGES[openIndex].alt}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setOpenIndex(null)}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="bg-black flex items-center justify-center">
                <img
                  src={GALLERY_IMAGES[openIndex].src}
                  alt={GALLERY_IMAGES[openIndex].alt}
                  className={`bg-black ${
                    orientation === 'portrait'
                      ? 'h-[82vh] max-h-[82vh] w-auto'
                      : 'w-full max-w-[90vw] h-auto max-h-[75vh]'
                  } object-contain`}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Pronto para valorizar seu espaço?
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          Entre em contato conosco e solicite um diagnóstico completo para o seu empreendimento.
        </p>
        
        <div className="bg-brand-orange rounded-3xl p-8 md:p-12 shadow-2xl shadow-orange-900/30 transform hover:-translate-y-1 transition-transform">
           <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/20 pb-4 inline-block">Fale com nosso especialista</h3>
           
           <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
             <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 text-white">
                  <Phone size={32} />
                </div>
                <p className="text-white/80 text-sm mb-1 uppercase tracking-wide">Telefone / WhatsApp</p>
                <a href="tel:+5581985135413" className="text-2xl font-bold text-white hover:underline">
                  (81) 9.8513.5413
                </a>
                <p className="text-white/60 text-sm mt-1">Geraldo Rocha</p>
             </div>
             
             <div className="hidden md:block w-px h-24 bg-white/20"></div>

             <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 text-white">
                  <Mail size={32} />
                </div>
                <p className="text-white/80 text-sm mb-1 uppercase tracking-wide">E-mail</p>
                <a href="mailto:comercial@fitprosolutions.com.br" className="text-xl md:text-2xl font-bold text-white hover:underline break-all">
                  comercial@fitprosolutions.com.br
                </a>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black text-center border-t border-white/5">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} FitPro Soluções em Academias. Todos os direitos reservados.
      </p>
    </footer>
  );
}

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="font-body bg-brand-dark min-h-screen text-white selection:bg-brand-orange selection:text-white">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <About />
      <Process />
      <Benefits />
      <Cases />
      <Gallery />
      <Contact />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <a
        href="https://wa.me/5581985135413"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale no WhatsApp: +55 (81) 98513-5413"
        className="fixed bottom-6 right-6 z-[110] px-5 py-3 bg-brand-orange text-white font-bold rounded-full shadow-lg shadow-orange-900/30 border border-white/10 hover:bg-orange-600 transition-colors flex items-center gap-2"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
};

export default App;
