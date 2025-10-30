import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AIToolsSection = () => {
  const tools = [
    {
      icon: "Bot",
      title: "ИИ-репетитор",
      description: "Персональный помощник для практики разговорной речи 24/7",
      features: ["Диалоги на любую тему", "Исправление ошибок", "Подбор уровня сложности"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "Mic",
      title: "Анализ произношения",
      description: "ИИ анализирует ваше произношение и дает рекомендации",
      features: ["Распознавание речи", "Оценка акцента", "Упражнения на звуки"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "BookText",
      title: "Генератор упражнений",
      description: "Автоматическое создание персонализированных заданий",
      features: ["Адаптация под уровень", "Разные типы заданий", "Отслеживание прогресса"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "Languages",
      title: "Умный переводчик",
      description: "ИИ-перевод с объяснением грамматики и контекста",
      features: ["Контекстный перевод", "Примеры использования", "Культурные нюансы"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "Brain",
      title: "Система интервального повторения",
      description: "ИИ определяет оптимальное время для повторения материала",
      features: ["Алгоритм забывания", "Персональный график", "Умные карточки"],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: "Sparkles",
      title: "ИИ-наставник",
      description: "Анализирует ваш прогресс и составляет план обучения",
      features: ["Анализ слабых мест", "Персональные рекомендации", "Мотивация и поддержка"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Базовый",
      price: "1 990",
      period: "месяц",
      description: "Для начинающих",
      features: [
        "ИИ-репетитор (50 диалогов/мес)",
        "Анализ произношения",
        "Генератор упражнений",
        "Базовая статистика"
      ],
      icon: "Sparkle",
      popular: false
    },
    {
      name: "Продвинутый",
      price: "3 490",
      period: "месяц",
      description: "Самый популярный",
      features: [
        "ИИ-репетитор (безлимит)",
        "Анализ произношения (расширенный)",
        "Генератор упражнений",
        "Умный переводчик",
        "Интервальное повторение",
        "Детальная аналитика"
      ],
      icon: "Zap",
      popular: true
    },
    {
      name: "Премиум",
      price: "5 990",
      period: "месяц",
      description: "Максимум возможностей",
      features: [
        "Все инструменты безлимитно",
        "ИИ-наставник с личным планом",
        "Приоритетная поддержка",
        "Эксклюзивные материалы",
        "Групповые занятия онлайн",
        "Сертификат о прохождении"
      ],
      icon: "Crown",
      popular: false
    }
  ];

  return (
    <section id="ai-tools" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ai-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ai-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white">
            <Icon name="Sparkles" className="mr-1" size={14} />
            Технологии будущего
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">ИИ-инструменты для обучения</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Используем искусственный интеллект для максимально эффективного изучения языков
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tools.map((tool, idx) => (
            <Card 
              key={idx} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden relative"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.color}`}></div>
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={tool.icon as any} className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{tool.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">{tool.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tool.color}`}></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Тарифы на ИИ-инструменты</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий план и начните обучение с искусственным интеллектом
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, idx) => (
            <Card 
              key={idx}
              className={`relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                plan.popular ? 'border-primary border-2 shadow-xl scale-105' : 'border-2'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 shadow-lg">
                    Популярный
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name={plan.icon as any} className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-sm mb-4">{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-xl text-muted-foreground">₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">/ {plan.period}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white' 
                      : 'bg-primary/10 text-primary hover:bg-primary/20'
                  }`}
                  size="lg"
                >
                  {plan.popular ? 'Начать сейчас' : 'Выбрать план'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm border border-primary/20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Gift" className="text-primary" size={32} />
            <h3 className="text-2xl md:text-3xl font-bold">Пробный период бесплатно</h3>
          </div>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Попробуйте любой тариф бесплатно в течение 7 дней. Без привязки карты!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg">
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10">
              <Icon name="HelpCircle" className="mr-2" size={20} />
              Сравнить тарифы
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
