import { Building2, Users, Award } from "lucide-react";
import unidadeVideo from "@/assets/unidade-video.mov";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Nossa Unidade em Amparo
          </h2>
          
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            Em Amparo, nossa unidade foi fundada em 2020, consolidando-se rapidamente como 
            referência em atendimento humanizado e tratamentos especializados. Nestes 5 anos 
            de atuação, tivemos o privilégio de atender mais de 8.000 pacientes, promovendo 
            autoestima, bem-estar e saúde bucal.
          </p>

          <div className="mb-12 rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto">
            <video 
              autoPlay
              muted
              loop
              controls 
              className="w-full"
              playsInline
            >
              <source src={unidadeVideo} type="video/mp4" />
              <source src={unidadeVideo} type="video/quicktime" />
              Seu navegador não suporta a reprodução de vídeo.
            </video>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Building2 className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                Fundada em 2020
              </h3>
              <p className="text-muted-foreground">
                5 anos de excelência em Amparo
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                +8.000 Pacientes
              </h3>
              <p className="text-muted-foreground">
                Atendidos com dedicação
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                Referência Regional
              </h3>
              <p className="text-muted-foreground">
                Atendimento humanizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
