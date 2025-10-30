import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/80 via-lavender-50/60 to-purple-200/80" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-secondary rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-4 border-primary/50 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border-4 border-secondary/50 rounded-full"></div>
        
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute inset-8 border-4 border-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-16 border-4 border-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 backdrop-blur-sm">
              Авторская методика
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent drop-shadow-sm">
              Speak Smart
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Нейрокогнитивная методика обучения, которая помогает освоить языки эффективнее
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg"
                asChild
              >
                <a href="https://youtube.com/@speaksmart_with_sira?si=voNavp5dvXG88jdC" target="_blank" rel="noopener noreferrer">
                  <Icon name="Youtube" className="mr-2" size={20} />
                  YouTube канал
                </a>
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 backdrop-blur-sm">
                    <Icon name="Info" className="mr-2" size={20} />
                    Узнать больше
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      О методике Speak Smart
                    </DialogTitle>
                    <DialogDescription className="text-base leading-relaxed mt-4">
                      Нейрокогнитивная методика обучения языкам
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Icon name="Brain" className="text-primary" size={24} />
                        Что это такое?
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Speak Smart — это авторская методика, основанная на последних исследованиях в области нейронауки 
                        и когнитивной психологии. Мы используем естественные механизмы работы мозга для эффективного 
                        освоения иностранных языков.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Icon name="Target" className="text-primary" size={24} />
                        Ключевые принципы
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                          <span className="text-muted-foreground"><strong>Активация нейронных связей</strong> — через специальные упражнения и повторения</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                          <span className="text-muted-foreground"><strong>Мультисенсорное восприятие</strong> — задействуем все каналы восприятия информации</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                          <span className="text-muted-foreground"><strong>Контекстуальное обучение</strong> — учим язык через реальные жизненные ситуации</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                          <span className="text-muted-foreground"><strong>Интервальное повторение</strong> — научно обоснованная система запоминания</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Icon name="TrendingUp" className="text-primary" size={24} />
                        Результаты
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Наши ученики показывают впечатляющие результаты:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-primary">+40%</Badge>
                          <span className="text-muted-foreground">Быстрее запоминают новые слова</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-primary">+60%</Badge>
                          <span className="text-muted-foreground">Улучшение понимания на слух</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-primary">3-6 мес</Badge>
                          <span className="text-muted-foreground">До заметных результатов</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Icon name="Users" className="text-primary" size={24} />
                        Для кого подходит?
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Методика эффективна для любого уровня — от начинающих до продвинутых. Особенно полезна для тех, 
                        кто уже пробовал учить языки традиционными методами, но не достиг желаемых результатов.
                      </p>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <p className="text-sm text-muted-foreground text-center">
                        <strong className="text-primary">Начните бесплатно!</strong> Первый урок и диагностика уровня — без оплаты.
                        <br />Подписывайтесь на наш YouTube канал для полезных материалов.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="animate-scale-in relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl opacity-50"></div>
            <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border-2 border-white/60">
              <img 
                src="https://cdn.poehali.dev/files/17cf8bf5-0b88-41c1-9252-55e94292873f.jpg"
                alt="Speak Smart Logo"
                className="w-full relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
