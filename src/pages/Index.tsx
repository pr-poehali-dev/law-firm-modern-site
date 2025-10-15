import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { BackgroundPaths } from '@/components/ui/background-paths';

function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Scale',
      title: 'Корпоративное право',
      description: 'Комплексное юридическое сопровождение бизнеса на всех этапах развития'
    },
    {
      icon: 'FileText',
      title: 'Договорная работа',
      description: 'Разработка и экспертиза договоров любой сложности с защитой ваших интересов'
    },
    {
      icon: 'Briefcase',
      title: 'Арбитражные споры',
      description: 'Представительство в судах всех инстанций и защита в сложных спорах'
    },
    {
      icon: 'Shield',
      title: 'Налоговое право',
      description: 'Налоговое планирование и защита от претензий контролирующих органов'
    },
    {
      icon: 'Users',
      title: 'Трудовое право',
      description: 'Решение трудовых споров и кадровый аудит компании'
    },
    {
      icon: 'Home',
      title: 'Недвижимость',
      description: 'Сопровождение сделок с недвижимостью и защита прав собственности'
    }
  ];

  const cases = [
    {
      title: 'Корпоративный спор',
      result: 'Выиграли дело на 50 млн ₽',
      category: 'Арбитраж'
    },
    {
      title: 'Налоговая проверка',
      result: 'Снижение доначислений на 80%',
      category: 'Налоги'
    },
    {
      title: 'M&A сделка',
      result: 'Успешное закрытие за 45 дней',
      category: 'Корпоративное право'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/70 border-b border-blue-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Scale" size={28} className="text-primary" />
              <span className="text-2xl font-bold text-primary">LexPro</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Главная', 'Услуги', 'О компании', 'Кейсы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <BackgroundPaths />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Защита ваших интересов
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональная юридическая поддержка для бизнеса и частных лиц
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-xl">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative backdrop-blur-xl bg-white/40 rounded-3xl p-8 border border-white/60 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/60 rounded-xl backdrop-blur">
                    <Icon name="CheckCircle" className="text-green-500" size={24} />
                    <span className="font-medium">15+ лет опыта</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/60 rounded-xl backdrop-blur">
                    <Icon name="CheckCircle" className="text-green-500" size={24} />
                    <span className="font-medium">500+ выигранных дел</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/60 rounded-xl backdrop-blur">
                    <Icon name="CheckCircle" className="text-green-500" size={24} />
                    <span className="font-medium">98% положительных решений</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексная юридическая поддержка для вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group p-6 backdrop-blur-xl bg-white/60 border-white/80 hover:bg-white/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">О компании</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  LexPro — это команда профессиональных юристов с многолетним опытом работы в сфере корпоративного и арбитражного права.
                </p>
                <p className="text-lg">
                  Мы специализируемся на решении сложных правовых задач и предоставляем комплексную юридическую поддержку как крупным компаниям, так и частным клиентам.
                </p>
                <p className="text-lg">
                  Наша философия — индивидуальный подход к каждому делу и максимальная защита интересов клиента.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">выигранных дел</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">успеха</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl"></div>
              <div className="relative backdrop-blur-xl bg-white/60 rounded-3xl p-8 border border-white/80 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Icon name="Scale" size={120} className="text-white opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Успешные кейсы</h2>
            <p className="text-xl text-muted-foreground">Примеры наших побед в сложных делах</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <Card
                key={index}
                className="group p-8 backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 border-white/80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-bl-full blur-2xl"></div>
                <div className="relative">
                  <div className="text-xs font-semibold text-secondary mb-4 uppercase tracking-wider">
                    {caseItem.category}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{caseItem.title}</h3>
                  <div className="flex items-center gap-2 text-lg font-semibold text-green-600">
                    <Icon name="TrendingUp" size={20} />
                    <span>{caseItem.result}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-xl mb-8 opacity-90">
              Получите бесплатную консультацию по вашему вопросу
            </p>
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col items-center gap-3">
                  <Icon name="Phone" size={32} />
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="opacity-90">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Icon name="Mail" size={32} />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="opacity-90">info@lexpro.ru</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Icon name="MapPin" size={32} />
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="opacity-90">Москва, ул. Тверская, 1</div>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl font-semibold">
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 LexPro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;