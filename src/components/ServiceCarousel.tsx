import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Service {
  name: string;
  description: string;
  image: string;
}

interface ServiceCarouselProps {
  title: string;
  services: Service[];
}

const ServiceCarousel = ({ title, services }: ServiceCarouselProps) => {
  const handleWhatsAppClick = (serviceName: string) => {
    const message = encodeURIComponent(
      `Olá, quero agendar uma avaliação de ${serviceName} na OdontoCompany Amparo.`
    );
    window.open(`https://wa.me/5519999923050?text=${message}`, "_blank");
  };

  return (
    <div className="mb-16">
      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
        {title}
      </h3>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {services.map((service, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-primary mb-3">
                      {service.name}
                    </h4>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <Button
                      onClick={() => handleWhatsAppClick(service.name)}
                      className="w-full bg-secondary hover:bg-secondary/90"
                    >
                      Agende sua avaliação
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
