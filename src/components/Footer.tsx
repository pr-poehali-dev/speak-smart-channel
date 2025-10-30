import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground/95 to-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/17cf8bf5-0b88-41c1-9252-55e94292873f.jpg" 
                alt="Speak Smart Logo" 
                className="w-12 h-12 object-contain bg-white/10 rounded-lg p-1"
              />
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
  );
};

export default Footer;