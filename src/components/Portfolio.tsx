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
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Лендинг для IT-стартапа',
    category: 'Технологии',
    type: 'Лендинг',
    description: 'Продающий текст для стартапа в сфере искусственного интеллекта. Упор на преимущества и простоту внедрения.',
    tags: ['B2B', 'Tech', 'Продажи']
  },
  {
    id: 2,
    title: 'Статья для бизнес-блога',
    category: 'Бизнес',
    type: 'Статья',
    description: 'Аналитическая статья о трендах электронной коммерции в 2024 году. Глубокий анализ рынка.',
    tags: ['E-commerce', 'Аналитика', 'SEO']
  },
  {
    id: 3,
    title: 'Email-рассылка для SaaS',
    category: 'Маркетинг',
    type: 'Email',
    description: 'Серия из 5 писем для онбординга новых пользователей. Конверсия в платных клиентов выросла на 35%.',
    tags: ['Email', 'SaaS', 'Конверсия']
  },
  {
    id: 4,
    title: 'Контент для соцсетей',
    category: 'SMM',
    type: 'Посты',
    description: 'Ежедневные посты для бренда спортивной одежды. Вовлечённость аудитории +120% за 3 месяца.',
    tags: ['SMM', 'Бренд', 'Engagement']
  },
  {
    id: 5,
    title: 'Описания товаров',
    category: 'E-commerce',
    type: 'Товары',
    description: 'Уникальные описания для 200+ товаров интернет-магазина. SEO-оптимизация и эмоциональный язык.',
    tags: ['E-commerce', 'SEO', 'Продажи']
  },
  {
    id: 6,
    title: 'Кейс для консалтинга',
    category: 'Бизнес',
    type: 'Кейс',
    description: 'Детальный кейс об увеличении продаж на 200% для компании из сферы B2B услуг.',
    tags: ['B2B', 'Кейс', 'Результаты']
  }
];

const categories = ['Все', 'Технологии', 'Бизнес', 'Маркетинг', 'SMM', 'E-commerce'];
const types = ['Все типы', 'Лендинг', 'Статья', 'Email', 'Посты', 'Товары', 'Кейс'];

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
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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