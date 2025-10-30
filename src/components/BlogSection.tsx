import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const BlogSection = () => {
  const posts = [
    {
      title: "Как работает память при изучении языков",
      excerpt: "Разбираем механизмы запоминания и способы их улучшения",
      date: "15 октября 2024",
      image: "https://cdn.poehali.dev/projects/5cf0a34e-c438-4648-bc66-4daf7421abec/files/d86ef298-bb2d-47a2-bd81-803925fbfb75.jpg"
    },
    {
      title: "5 техник для эффективного обучения",
      excerpt: "Проверенные методы для ускорения прогресса",
      date: "12 октября 2024",
      image: "https://cdn.poehali.dev/projects/5cf0a34e-c438-4648-bc66-4daf7421abec/files/58d1c622-0347-49e2-85a9-0b480b9c9b3e.jpg"
    },
    {
      title: "Нейропластичность и обучение взрослых",
      excerpt: "Почему никогда не поздно начать учиться",
      date: "8 октября 2024",
      image: "https://cdn.poehali.dev/projects/5cf0a34e-c438-4648-bc66-4daf7421abec/files/fd279c4b-749b-407c-8b21-1e6d163391f4.jpg"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-secondary/10 text-secondary">Блог</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Последние статьи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полезные советы и исследования в области обучения
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Card 
              key={idx} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Icon name="Calendar" size={16} />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
