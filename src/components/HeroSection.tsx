import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Авторская методика
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Speak Smart
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Нейрокогнитивная методика обучения, которая помогает освоить языки эффективнее
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                asChild
              >
                <a href="https://youtube.com/@speaksmart_with_sira?si=voNavp5dvXG88jdC" target="_blank" rel="noopener noreferrer">
                  <Icon name="Youtube" className="mr-2" size={20} />
                  YouTube канал
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/5cf0a34e-c438-4648-bc66-4daf7421abec/files/fd279c4b-749b-407c-8b21-1e6d163391f4.jpg"
              alt="Neural Learning"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
