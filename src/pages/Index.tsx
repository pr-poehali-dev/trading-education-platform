import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  progress: number;
  icon: string;
}

const categories = [
  { id: 'all', name: 'Все курсы', icon: 'GraduationCap' },
  { id: 'basics', name: 'Основы', icon: 'BookOpen' },
  { id: 'analysis', name: 'Анализ', icon: 'TrendingUp' },
  { id: 'strategy', name: 'Стратегии', icon: 'Target' },
  { id: 'practice', name: 'Практика', icon: 'Zap' },
];

const articles: Article[] = [
  {
    id: 1,
    title: 'Что такое блокчейн?',
    description: 'Изучите базовые принципы блокчейн-технологии и её применение',
    category: 'basics',
    duration: '15 мин',
    progress: 0,
    icon: 'Link',
  },
  {
    id: 2,
    title: 'Что такое криптовалюта?',
    description: 'Основы цифровых валют и как они работают',
    category: 'basics',
    duration: '20 мин',
    progress: 0,
    icon: 'Coins',
  },
  {
    id: 3,
    title: 'Майнинг криптовалют',
    description: 'Узнайте, как работает процесс добычи криптовалют',
    category: 'basics',
    duration: '25 мин',
    progress: 0,
    icon: 'Pickaxe',
  },
  {
    id: 4,
    title: 'Стейкинг и пассивный доход',
    description: 'Как зарабатывать на криптовалютах без активной торговли',
    category: 'basics',
    duration: '18 мин',
    progress: 0,
    icon: 'PiggyBank',
  },
  {
    id: 5,
    title: 'Криптовалютные биржи',
    description: 'Как выбрать и использовать биржи для торговли',
    category: 'basics',
    duration: '22 мин',
    progress: 0,
    icon: 'ArrowLeftRight',
  },
  {
    id: 6,
    title: 'Технический анализ',
    description: 'Изучите графики, индикаторы и паттерны для прогнозирования',
    category: 'analysis',
    duration: '35 мин',
    progress: 0,
    icon: 'LineChart',
  },
  {
    id: 7,
    title: 'Фундаментальный анализ',
    description: 'Оценка проектов и долгосрочных перспектив',
    category: 'analysis',
    duration: '30 мин',
    progress: 0,
    icon: 'FileSearch',
  },
  {
    id: 8,
    title: 'Торговые стратегии',
    description: 'Эффективные подходы к торговле на рынке',
    category: 'strategy',
    duration: '40 мин',
    progress: 0,
    icon: 'Gamepad2',
  },
  {
    id: 9,
    title: 'Управление рисками',
    description: 'Защита капитала и минимизация потерь',
    category: 'strategy',
    duration: '28 мин',
    progress: 0,
    icon: 'Shield',
  },
  {
    id: 10,
    title: 'Демо-счёт для практики',
    description: 'Начните торговать без реальных рисков',
    category: 'practice',
    duration: '10 мин',
    progress: 0,
    icon: 'Play',
  },
  {
    id: 11,
    title: 'Старт с малой суммой',
    description: 'Как начать торговлю с минимальным бюджетом',
    category: 'practice',
    duration: '15 мин',
    progress: 0,
    icon: 'Rocket',
  },
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [articleProgress, setArticleProgress] = useState<Record<number, number>>({});

  const filteredArticles =
    selectedCategory === 'all'
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const handleStartArticle = (articleId: number) => {
    setArticleProgress((prev) => ({
      ...prev,
      [articleId]: prev[articleId] ? prev[articleId] + 20 : 20,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Академия трейдинга
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Изучайте основы криптовалют, анализ рынка и торговые стратегии в удобном темпе
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10 animate-scale-in">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="gap-2 transition-all hover:scale-105"
            >
              <Icon name={category.icon} size={18} />
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <Card
              key={article.id}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={article.icon} size={24} className="text-primary" />
                  </div>
                  <Badge variant="secondary">{article.duration}</Badge>
                </div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {articleProgress[article.id] > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="font-medium text-primary">
                        {articleProgress[article.id]}%
                      </span>
                    </div>
                    <Progress value={articleProgress[article.id]} className="h-2" />
                  </div>
                )}
                <Button
                  className="w-full gap-2"
                  onClick={() => handleStartArticle(article.id)}
                  variant={articleProgress[article.id] > 0 ? 'outline' : 'default'}
                >
                  <Icon
                    name={articleProgress[article.id] > 0 ? 'RotateCw' : 'Play'}
                    size={16}
                  />
                  {articleProgress[article.id] > 0 ? 'Продолжить' : 'Начать обучение'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <Icon name="Search" size={48} className="mx-auto mb-4 opacity-50" />
            <p>Курсы не найдены</p>
          </div>
        )}
      </div>
    </div>
  );
}
