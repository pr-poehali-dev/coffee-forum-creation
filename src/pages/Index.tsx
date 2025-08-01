import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const topRecipes = [
    {
      id: 1,
      title: 'Идеальный эспрессо',
      author: 'КофеГуру',
      rating: 4.9,
      reviews: 127,
      difficulty: 'Средняя',
      time: '5 мин',
      description: 'Классический рецепт эспрессо с идеальным балансом крема и вкуса'
    },
    {
      id: 2,
      title: 'Капучино как в Италии',
      author: 'МиланоМастер',
      rating: 4.8,
      reviews: 89,
      difficulty: 'Сложная',
      time: '8 мин',
      description: 'Аутентичный итальянский капучино с бархатистой молочной пенкой'
    },
    {
      id: 3,
      title: 'Холодный бру на лето',
      author: 'ЛетнийКофе',
      rating: 4.7,
      reviews: 156,
      difficulty: 'Легкая',
      time: '12 ч',
      description: 'Освежающий холодный кофе медленной экстракции'
    }
  ];

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'Эксперт':
        return {
          color: 'bg-amber-500 text-white',
          icon: 'Crown',
          privileges: ['Модерация', 'Эксклюзивные рецепты', 'Мастер-классы']
        };
      case 'Бариста':
        return {
          color: 'bg-orange-500 text-white',
          icon: 'Award',
          privileges: ['Публикация рецептов', 'Оценка рецептов', 'Консультации']
        };
      case 'Новичок':
        return {
          color: 'bg-green-500 text-white',
          icon: 'Sprout',
          privileges: ['Чтение рецептов', 'Базовые форумы', 'Обучение']
        };
      default:
        return {
          color: 'bg-gray-500 text-white',
          icon: 'User',
          privileges: []
        };
    }
  };

  const topUsers = [
    { name: 'КофеГуру', role: 'Эксперт', rating: 4.9, recipes: 47, avatar: 'КГ', experience: '3 года', coffeeBeans: 2847 },
    { name: 'МиланоМастер', role: 'Бариста', rating: 4.8, recipes: 32, avatar: 'ММ', experience: '2 года', coffeeBeans: 1923 },
    { name: 'ЛетнийКофе', role: 'Бариста', rating: 4.7, recipes: 18, avatar: 'ЛК', experience: '1 год', coffeeBeans: 1456 },
    { name: 'АртКофе', role: 'Новичок', rating: 4.5, recipes: 12, avatar: 'АК', experience: '6 мес', coffeeBeans: 342 }
  ];

  const premiumShop = [
    {
      id: 1,
      title: 'Эксклюзивный рецепт Эспрессо Романо',
      description: 'Секретный рецепт от итальянского мастера',
      price: 150,
      category: 'Рецепт',
      rarity: 'Редкий'
    },
    {
      id: 2,
      title: 'Персональная консультация бариста',
      description: '30 минут индивидуального обучения',
      price: 300,
      category: 'Обучение',
      rarity: 'Эпический'
    },
    {
      id: 3,
      title: 'Набор профессиональных темплейтов',
      description: 'Шаблоны для создания кофейных рецептов',
      price: 75,
      category: 'Инструменты',
      rarity: 'Обычный'
    }
  ];

  const forumPosts = [
    {
      id: 1,
      title: 'Какую кофемашину выбрать для дома?',
      author: 'НовичокКофе',
      replies: 23,
      lastReply: '2 часа назад',
      category: 'Оборудование'
    },
    {
      id: 2,
      title: 'Секреты правильного помола зерен',
      author: 'ПомолЭксперт',
      replies: 15,
      lastReply: '4 часа назад',
      category: 'Техника'
    },
    {
      id: 3,
      title: 'Обзор новых сортов из Эфиопии',
      author: 'ЗерноГуру',
      replies: 31,
      lastReply: '6 часов назад',
      category: 'Сорта'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={`${
          i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Coffee" size={32} />
              <h1 className="text-3xl font-bold">Coffee Forum</h1>
            </div>
            <nav className="flex items-center gap-6">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
                <Icon name="Home" size={20} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Рецепты
              </Button>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Форум
              </Button>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80">
                <Icon name="User" size={20} className="mr-2" />
                Профиль
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-primary mb-4">
              Добро пожаловать в мир кофе
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Место, где встречаются истинные ценители кофе. Делитесь рецептами, 
              обсуждайте техники приготовления и открывайте новые вкусы вместе.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/img/fdecebd3-abd1-4430-9c4a-468150e2e2f3.jpg" 
                alt="Уютная чашка кофе"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Идеальный вкус</h3>
                <p className="text-sm opacity-90">Каждая чашка - произведение искусства</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/img/6cf85ebd-3bd3-4aa5-81f7-13976d787fd9.jpg" 
                alt="Кофейные зерна"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Лучшие зерна</h3>
                <p className="text-sm opacity-90">Отборные сорта со всего мира</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="recipes" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              <TabsTrigger value="recipes">Рецепты</TabsTrigger>
              <TabsTrigger value="forum">Форум</TabsTrigger>
              <TabsTrigger value="ratings">Рейтинги</TabsTrigger>
              <TabsTrigger value="shop">Магазин</TabsTrigger>
            </TabsList>

            {/* Top Recipes */}
            <TabsContent value="recipes" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-primary mb-2">Лучшие рецепты</h3>
                <p className="text-muted-foreground">Проверенные временем рецепты от наших мастеров</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topRecipes.map((recipe) => (
                  <Card key={recipe.id} className="hover:shadow-lg transition-all duration-300 border-accent/20">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{recipe.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">by {recipe.author}</p>
                        </div>
                        <Badge variant="secondary">{recipe.difficulty}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{recipe.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {renderStars(recipe.rating)}
                          <span className="text-sm font-medium ml-1">{recipe.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {recipe.reviews} отзывов
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Clock" size={16} />
                          {recipe.time}
                        </div>
                        <Button size="sm">
                          Читать рецепт
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Forum Posts */}
            <TabsContent value="forum" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-primary mb-2">Активные обсуждения</h3>
                <p className="text-muted-foreground">Самые горячие темы в нашем сообществе</p>
              </div>
              <div className="space-y-4">
                {forumPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <h4 className="text-lg font-semibold hover:text-primary cursor-pointer">
                              {post.title}
                            </h4>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>От {post.author}</span>
                            <span>{post.replies} ответов</span>
                            <span>Последний ответ: {post.lastReply}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Icon name="MessageSquare" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* User Ratings */}
            <TabsContent value="ratings" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-primary mb-2">Топ участников</h3>
                <p className="text-muted-foreground">Самые активные и полезные члены сообщества</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {topUsers.map((user, index) => (
                  <Card key={user.name} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <Avatar className="w-16 h-16">
                            <AvatarFallback className="bg-accent text-accent-foreground text-lg font-semibold">
                              {user.avatar}
                            </AvatarFallback>
                          </Avatar>
                          {index < 3 && (
                            <div className="absolute -top-2 -right-2">
                              <Badge className="bg-amber-500 text-white px-2 py-1 text-xs">
                                #{index + 1}
                              </Badge>
                            </div>
                          )}
                          <div className="absolute -bottom-1 -right-1">
                            <div className={`rounded-full p-1 ${getRoleBadge(user.role).color}`}>
                              <Icon name={getRoleBadge(user.role).icon} size={12} />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-lg">{user.name}</h4>
                              <Badge className={getRoleBadge(user.role).color}>
                                {user.role}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-1">
                              {renderStars(user.rating)}
                              <span className="text-sm font-medium ml-1">{user.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <Icon name="BookOpen" size={14} />
                              {user.recipes} рецептов
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Calendar" size={14} />
                              {user.experience}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-1 text-amber-600 font-medium">
                              <span className="text-lg">☕</span>
                              <span>{user.coffeeBeans.toLocaleString()} бобов</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {getRoleBadge(user.role).privileges.slice(0, 2).map((privilege, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {privilege}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Shop Section */}
            <TabsContent value="shop" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-primary mb-2">Магазин премиум-контента</h3>
                <p className="text-muted-foreground">Используйте кофе-бобы для покупки эксклюзивного контента</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumShop.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-all duration-300 border-accent/20">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <Badge 
                            className={`mb-2 ${
                              item.rarity === 'Эпический' ? 'bg-purple-500 text-white' :
                              item.rarity === 'Редкий' ? 'bg-blue-500 text-white' :
                              'bg-gray-500 text-white'
                            }`}
                          >
                            {item.rarity}
                          </Badge>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-amber-600 font-bold">
                          <span className="text-xl">☕</span>
                          <span>{item.price} бобов</span>
                        </div>
                        <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Купить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Currency Info */}
              <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">☕</span>
                  Как заработать кофе-бобы?
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Plus" size={16} className="text-green-500" />
                    <span>+50 за новый рецепт</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Plus" size={16} className="text-green-500" />
                    <span>+25 за полезный комментарий</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Plus" size={16} className="text-green-500" />
                    <span>+10 за ежедневный вход</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Plus" size={16} className="text-green-500" />
                    <span>+100 за рецепт месяца</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Plus" size={16} className="text-green-500" />
                    <span>+15 за оценку рецепта</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Plus" size={16} className="text-green-500" />
                    <span>+5 за лайк поста</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1,247</div>
              <div className="text-muted-foreground">Участников</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">456</div>
              <div className="text-muted-foreground">Рецептов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2,891</div>
              <div className="text-muted-foreground">Обсуждений</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-muted-foreground">Средний рейтинг</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2 flex items-center justify-center gap-1">
                <span className="text-2xl">☕</span>
                47.2K
              </div>
              <div className="text-muted-foreground">Кофе-бобов в обороте</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Coffee" size={24} />
            <span className="text-xl font-semibold">Coffee Forum</span>
          </div>
          <p className="text-primary-foreground/80">
            © 2024 Coffee Forum. Место для истинных ценителей кофе.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;