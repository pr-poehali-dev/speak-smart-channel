import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const MaterialsSection = () => {
  const materials = [
    { icon: "FileText", title: "Рабочие тетради", count: "12+ пособий" },
    { icon: "Headphones", title: "Аудио материалы", count: "50+ записей" },
    { icon: "Video", title: "Видео уроки", count: "100+ видео" },
    { icon: "Download", title: "PDF файлы", count: "30+ документов" }
  ];

  return (
    <section id="materials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary">Ресурсы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Материалы для обучения</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полезные инструменты и ресурсы для эффективного изучения
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((item, idx) => (
            <Card 
              key={idx} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
