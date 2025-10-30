import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const MethodologySection = () => {
  const features = [
    "Активация нейронных связей через повторение",
    "Мультисенсорное восприятие информации",
    "Контекстуальное обучение с примерами",
    "Интервальное повторение для запоминания"
  ];

  return (
    <section id="methodology" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/5cf0a34e-c438-4648-bc66-4daf7421abec/files/58d1c622-0347-49e2-85a9-0b480b9c9b3e.jpg"
              alt="Methodology"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary">О методике</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Нейрокогнитивный подход</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Наша авторская методика основана на современных исследованиях работы мозга и когнитивных процессов. 
              Мы используем научно обоснованные техники, которые помогают усваивать материал быстрее и эффективнее.
            </p>
            <div className="space-y-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
            <Button size="lg" className="mt-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Подробнее о методике
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
