import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Portfolio from '@/components/Portfolio';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    {
      icon: 'FileText',
      title: 'Статьи и лонгриды',
      description: 'Глубокие аналитические материалы, обзоры и экспертный контент для блогов и СМИ'
    },
    {
      icon: 'Megaphone',
      title: 'Продающие тексты',
      description: 'Лендинги, коммерческие предложения и тексты, которые конвертируют читателей в клиентов'
    },
    {
      icon: 'Mail',
      title: 'Email-маркетинг',
      description: 'Цепочки писем, триггерные рассылки и welcome-серии для автоматизации продаж'
    },
    {
      icon: 'Share2',
      title: 'SMM-контент',
      description: 'Посты для социальных сетей, stories и контент-планы для вашего бренда'
    },
    {
      icon: 'TrendingUp',
      title: 'SEO-тексты',
      description: 'Оптимизированные тексты для сайтов с правильной структурой и естественным вхождением ключей'
    },
    {
      icon: 'Sparkles',
      title: 'Креативный копирайтинг',
      description: 'Слоганы, нейминг, концепции рекламных кампаний и бренд-тексты'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >Вера Плахина</button>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'portfolio', label: 'Работы' },
                { id: 'services', label: 'Услуги' },
                { id: 'contact', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Тексты, которые<br />
            <span className="text-primary">продают и вдохновляют</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">Копирайтер с 2-летним опытом. 
Создаю контент для бизнеса любого масштаба</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('portfolio')}
              className="text-lg px-8"
            >
              Смотреть работы
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8"
            >
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <Icon name="User" size={120} className="text-primary/40" />
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Обо мне</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Добрый день! Я Вера — копирайтер с 2-летним опытом работы с брендами из разных ниш: от юридических фирм до интернет-журналов.</p>
                <p>
                  Моя специализация — тексты, которые решают бизнес-задачи. Будь то увеличение продаж, привлечение новой аудитории или укрепление позиции бренда.
                </p>
                <p>
                  Работала с такими компаниями как Яндекс, Тинькофф, Avito и десятками успешных стартапов. Мои тексты помогли клиентам привлечь более 50 млн рублей инвестиций и увеличить конверсию до 120%.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">300+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">8</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      <section id="services" className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр копирайтинга для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 animate-scale-in border-border"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Давайте сотрудничать</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Готова обсудить ваш проект и предложить оптимальное решение для ваших задач
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:hello@annasmirnova.com" className="text-primary hover:underline">
                    hello@annasmirnova.com
                  </a>
                </CardContent>
              </Card>
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Telegram</h3>
                  <a href="https://t.me/annacopywriter" className="text-primary hover:underline">
                    @annacopywriter
                  </a>
                </CardContent>
              </Card>
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <a href="tel:+79991234567" className="text-primary hover:underline">
                    +7 (999) 123-45-67
                  </a>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="text-lg px-8">
              <Icon name="Send" size={20} className="mr-2" />
              Написать мне
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-secondary border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Анна Смирнова. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}