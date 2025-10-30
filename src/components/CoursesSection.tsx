import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const CoursesSection = () => {
  const courses = [
    {
      title: "Базовый курс",
      description: "Основы методики для начинающих",
      price: "5 990 ₽",
      features: ["12 уроков", "Доступ на 3 месяца", "Сертификат"],
      icon: "BookOpen"
    },
    {
      title: "Продвинутый курс",
      description: "Углубленное изучение техник",
      price: "9 990 ₽",
      features: ["24 урока", "Доступ на 6 месяцев", "Сертификат", "Личная консультация"],
      icon: "GraduationCap",
      featured: true
    },
    {
      title: "Мастер-класс",
      description: "Интенсивная программа для профи",
      price: "14 990 ₽",
      features: ["36 уроков", "Безлимитный доступ", "Сертификат", "Менторство"],
      icon: "Award"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-secondary/10 text-secondary">Обучение</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши курсы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите программу, которая подходит именно вам
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <Card 
              key={idx} 
              className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                course.featured ? 'border-primary border-2 shadow-lg' : ''
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {course.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                    Популярный
                  </Badge>
                </div>
              )}
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name={course.icon as any} className="text-white" size={24} />
                </div>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-6">{course.price}</div>
                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
