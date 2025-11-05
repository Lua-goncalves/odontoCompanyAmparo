import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="OdontoCompany Amparo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            OdontoCompany Amparo
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 leading-relaxed">
            A OdontoCompany é hoje a maior rede de clínicas odontológicas da América Latina, 
            presente em centenas de cidades e reconhecida pela excelência em tecnologia, 
            qualidade de atendimento e resultados clínicos.
          </p>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed">
            Com mais de 30 anos de história, a franquia nasceu com o propósito de democratizar 
            o acesso à odontologia de alto padrão, levando cuidado, segurança e sorrisos 
            saudáveis a milhões de pacientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
