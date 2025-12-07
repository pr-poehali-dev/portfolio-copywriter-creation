import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  tags: string[];
  link?: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Статья для юридической фирмы',
    category: 'Бизнес',
    type: 'Статья',
    description: 'Профессиональная статья для юридической компании о важных аспектах права и защиты интересов клиентов.',
    tags: ['Юридические услуги', 'B2B', 'Экспертный контент'],
    link: 'https://docs.google.com/document/d/11loNyZvJu-ZYernEG4I6k5xWR6isrhk5pUpmcN71CFA/edit?usp=sharing'
  },
  {
    id: 2,
    title: 'SEO-статья для онлайн-школы',
    category: 'Образование',
    type: 'Статья',
    description: 'Информационная статья о выборе современной профессии.',
    tags: ['SEO', 'Образование', 'Карьера'],
    link: 'https://docs.google.com/document/d/1ZOItzewvD30eebONCio1LjkNMr5_q2IdJcrqybtUB3w/edit?usp=sharing'
  },
  {
    id: 3,
    title: 'Релокация для IT-специалистов',
    category: 'IT',
    type: 'Статья',
    description: 'Экспертная статья для IT-специалистов о переезде в другую страну. Глубокий анализ целевой аудитории, изучение требований посольств и актуальных рейтингов стран для релокации.',
    tags: ['IT', 'Релокация', 'Аналитика'],
    link: 'https://docs.google.com/document/u/0/d/1sJqCm3odOAY0KO3TzBNEAvrn0sPkxW6yYT2BsPoe0fs/edit'
  },
  {
    id: 4,
    title: 'Контент для соцсетей',
    category: 'SMM',
    type: 'Посты',
    description: 'Ежедневные посты для детского клуба боевых единоборств. Вовлечённость аудитории +120% за 3 месяца.',
    tags: ['SMM', 'Спорт', 'Детский клуб'],
    link: 'https://docs.google.com/document/d/1-rhrEoPFOvFaTb15pkZUUXkc7wgpXYTGM1JvyKYIyrM/edit?usp=sharing'
  },
  {
    id: 5,
    title: 'Подготовка к МГИМО: английский язык',
    category: 'Образование',
    type: 'Статья',
    description: 'Статья для онлайн-школы на Дзен с практическими советами по подготовке к поступлению в МГИМО. Анализ целевой аудитории, изучение болей клиентов через Telegram-каналы школ и образовательные ресурсы.',
    tags: ['Образование', 'Дзен', 'Английский язык'],
    link: 'https://docs.google.com/document/d/110qJ1mSsgQCkjLBqTaeM_AguHesliyoO1fooZDuREwM/edit?usp=sharing'
  },
  {
    id: 6,
    title: 'Гид по организации свадьбы',
    category: 'Лайфстайл',
    type: 'Статья',
    description: 'Продающая статья для свадебного журнала о самостоятельной организации свадьбы. Цель — конверсия читателей в покупателей готового чек-листа для подготовки к торжеству.',
    tags: ['Лайфстайл', 'Продажи', 'Свадьба'],
    link: 'https://docs.google.com/document/u/0/d/1-8NCDJLTusJIMvszAouKr8PAkay_NQ2weSJwp_emoyo/edit'
  }
];

const categories = ['Все', 'Бизнес', 'Образование', 'IT', 'SMM', 'Лайфстайл'];
const types = ['Все типы', 'Статья', 'Посты'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedType, setSelectedType] = useState('Все типы');

  const filteredItems = portfolioData.filter(item => {
    const categoryMatch = selectedCategory === 'Все' || item.category === selectedCategory;
    const typeMatch = selectedType === 'Все типы' || item.type === selectedType;
    return categoryMatch && typeMatch;
  });

  return (
    <section id="portfolio" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Портфолио</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Более 100 проектов для брендов из разных сфер</p>
        </div>

        <div className="mb-10 space-y-6">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Тематика</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-card text-card-foreground hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Тип текста</h3>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedType === type
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-card text-card-foreground hover:bg-muted'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-xl transition-all duration-300 animate-scale-in border-border"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                      <Badge variant="outline" className="text-xs">{item.type}</Badge>
                    </div>
                  </div>
                  <Icon name="FileText" size={24} className="text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {item.link && (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                  >Читать статью</a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">Ничего не найдено. Попробуйте другие фильтры.</p>
          </div>
        )}
      </div>
    </section>
  );
}