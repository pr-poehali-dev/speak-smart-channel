import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-lavender-100/40">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Brain" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Speak Smart
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#materials" className="text-foreground/70 hover:text-primary transition-colors">Материалы</a>
              <a href="#courses" className="text-foreground/70 hover:text-primary transition-colors">Курсы</a>
              <a href="#methodology" className="text-foreground/70 hover:text-primary transition-colors">Методика</a>
              <a href="#reviews" className="text-foreground/70 hover:text-primary transition-colors">Отзывы</a>
              <a href="#blog" className="text-foreground/70 hover:text-primary transition-colors">Блог</a>
              <a href="#contacts" className="text-foreground/70 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Начать обучение
            </Button>
          </div>
        </div>
      </nav>

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
            {[
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
            ].map((course, idx) => (
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
            {[
              { icon: "FileText", title: "Рабочие тетради", count: "12+ пособий" },
              { icon: "Headphones", title: "Аудио материалы", count: "50+ записей" },
              { icon: "Video", title: "Видео уроки", count: "100+ видео" },
              { icon: "Download", title: "PDF файлы", count: "30+ документов" }
            ].map((item, idx) => (
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
                {[
                  "Активация нейронных связей через повторение",
                  "Мультисенсорное восприятие информации",
                  "Контекстуальное обучение с примерами",
                  "Интервальное повторение для запоминания"
                ].map((item, idx) => (
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
            {[
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
            ].map((review, idx) => (
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
            {[
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
            ].map((post, idx) => (
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

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary">Связь</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Есть вопросы? Мы всегда рады помочь!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Отправьте сообщение</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Ваше сообщение"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@speaksmart.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Youtube" className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">YouTube</h3>
                        <a 
                          href="https://youtube.com/@speaksmart_with_sira?si=voNavp5dvXG88jdC"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          @speaksmart_with_sira
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Офис</h3>
                        <p className="text-muted-foreground">Москва, Россия</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-foreground/95 to-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Brain" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">Speak Smart</span>
              </div>
              <p className="text-white/70">
                Нейрокогнитивная методика обучения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#materials" className="hover:text-white transition-colors">Материалы</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Курсы</a></li>
                <li><a href="#methodology" className="hover:text-white transition-colors">Методика</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#blog" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="https://youtube.com/@speaksmart_with_sira" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Подписка</h4>
              <p className="text-white/70 mb-4 text-sm">Получайте новости и материалы</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70 text-sm">
            © 2024 Speak Smart. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
