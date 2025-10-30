import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Анна Смирнова",
      role: "Студентка",
      text: "Методика действительно работает! За 3 месяца я смогла значительно улучшить свой уровень английского.",
      rating: 5
    },
    {
      name: "Дмитрий Козлов",
      role: "IT специалист",
      text: "Нейрокогнитивный подход помог мне понять, как учиться эффективно. Рекомендую всем!",
      rating: 5
    },
    {
      name: "Елена Петрова",
      role: "Преподаватель",
      text: "Отличная программа! Использую техники из курса в своей практике. Результаты впечатляют.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary">Отзывы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят наши ученики</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные истории успеха людей, изменивших свою жизнь
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <Card 
              key={idx} 
              className="hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
