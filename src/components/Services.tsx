import ServiceCarousel from "./ServiceCarousel";
import implantesImg from "@/assets/implantes-new.webp";
import ortodontiaImg from "@/assets/ortodontia-new.jpg";
import proteseImg from "@/assets/protese-new.jpg";
import limpezaImg from "@/assets/limpeza-new.jpg";
import harmonizacaoImg from "@/assets/harmonizacao-new.jpg";
import clareamentoImg from "@/assets/clareamento-new.jpg";
import endodontiaImg from "@/assets/endodontia.jpg";
import clinicaGeralImg from "@/assets/clinica-geral-new.jpg";

const servicesCarousel1 = [
  {
    name: "Clínica Geral",
    description:
      "Cuidados completos para toda a família com atendimento humanizado.",
    image: clinicaGeralImg,
  },
  {
    name: "Endodontia (Canal)",
    description:
      "Tratamento de canal preciso e confortável com tecnologia de ponta.",
    image: endodontiaImg,
  },
  {
    name: "Implantes Dentários",
    description:
      "Recupere seu sorriso com implantes de última geração e tecnologia avançada.",
    image: implantesImg,
  },
  {
    name: "Limpeza e Profilaxia",
    description:
      "Prevenção e cuidados essenciais para manter sua saúde bucal em dia.",
    image: limpezaImg,
  },
  
];

const servicesCarousel2 = [
  {
    name: "Ortodontia (Aparelhos)",
    description:
      "Alinhamento dental perfeito com aparelhos modernos e confortáveis.",
    image: ortodontiaImg,
  },
  {
    name: "Prótese Dentária",
    description:
      "Soluções protéticas personalizadas para restaurar função e estética.",
    image: proteseImg,
  },
  {
    name: "Harmonização Orofacial",
    description:
      "Procedimentos estéticos para realçar a beleza natural do seu sorriso.",
    image: harmonizacaoImg,
  },
  {
    name: "Clareamento Dental",
    description:
      "Dentes mais brancos e brilhantes com técnicas modernas e seguras.",
    image: clareamentoImg,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de tratamentos odontológicos com excelência e tecnologia
          </p>
        </div>

        <ServiceCarousel title="Tratamentos Principais" services={servicesCarousel1} />
        <ServiceCarousel title=" Mais Especialidades" services={servicesCarousel2} />
      </div>
    </section>
  );
};

export default Services;
