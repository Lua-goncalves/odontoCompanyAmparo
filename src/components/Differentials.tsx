import { Microscope, Zap, Shield } from "lucide-react";

const Differentials = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Tecnologia e Segurança
          </h2>
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-12">
            Somos reconhecidos pela capacidade de oferecer tratamentos de alta tecnologia, 
            com planejamento digital, agilidade em soluções estéticas e protocolos de 
            segurança rigorosos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Microscope className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Alta Tecnologia
              </h3>
              <p className="text-muted-foreground">
                Equipamentos modernos e planejamento digital
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Agilidade
              </h3>
              <p className="text-muted-foreground">
                Soluções rápidas e eficientes
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Segurança
              </h3>
              <p className="text-muted-foreground">
                Protocolos rigorosos de biossegurança
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
