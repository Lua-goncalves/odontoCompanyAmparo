import { MessageCircle, Instagram, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/551999992-3050", "_blank");
  };

  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/odontocompany_amparo?igsh=N3R3NDVmeHBxZHI3",
      "_blank"
    );
  };

  return (
    <section id="contato" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Entre em Contato
          </h2>

          <p className="text-lg md:text-xl text-foreground mb-12 leading-relaxed">
            Entre em contato conosco e agende sua avaliação de forma rápida e
            prática.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="h-auto py-6 bg-secondary hover:bg-secondary/90 flex flex-col gap-2"
            >
              <MessageCircle className="w-8 h-8" />
              <span className="text-lg font-semibold">WhatsApp</span>
              <span className="text-sm opacity-90">(19) 99992-3050 </span>
            </Button>

            <Button
              onClick={handleInstagramClick}
              size="lg"
              className="h-auto py-6 bg-secondary hover:bg-secondary/90 flex flex-col gap-2"
            >
              <Instagram className="w-8 h-8" />
              <span className="text-lg font-semibold">Instagram</span>
              <span className="text-sm opacity-90">@odontocompany_amparo</span>
            </Button>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Nossa Localização
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Endereço</p>
                  <p className="text-muted-foreground">
                    Praça Doutor Araújo, 05 - Centro
                    <br />
                    Amparo - SP, 13900-038
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Telefone</p>
                  <p className="text-muted-foreground">(19) 99992-3050</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
