import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-purple-100 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/17cf8bf5-0b88-41c1-9252-55e94292873f.jpg" 
              alt="Speak Smart Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Speak Smart
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#ai-tools" className="text-foreground/70 hover:text-primary transition-colors font-medium">ИИ-инструменты</a>
            <a href="#courses" className="text-foreground/70 hover:text-primary transition-colors">Курсы</a>
            <a href="#materials" className="text-foreground/70 hover:text-primary transition-colors">Материалы</a>
            <a href="#methodology" className="text-foreground/70 hover:text-primary transition-colors">Методика</a>
            <a href="#reviews" className="text-foreground/70 hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground/70 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Начать обучение
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;