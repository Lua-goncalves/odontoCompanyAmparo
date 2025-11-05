import { Check } from "lucide-react";

const specialties = [
  "Implantes dentários",
  "Ortodontia (aparelhos)",
  "Prótese",
  "Limpezas e profilaxias",
  "Harmonização orofacial",
  "Clareamento",
  "Endodontia (canal)",
  "Clínica geral",
];

const Specialties = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center animate-fade-in">
            Nossas Especialidades
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-secondary transition-colors animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <Check className="w-4 h-4 text-secondary-foreground" />
                </div>
                <span className="text-foreground font-medium">{specialty}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-lg">
            Entre outras especialidades que permitem um atendimento completo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
