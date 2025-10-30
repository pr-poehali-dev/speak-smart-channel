import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
