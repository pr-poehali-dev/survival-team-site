import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const topTeams = [
    {
      id: 1,
      name: "Остров Хищников",
      members: 8,
      rating: 4.9,
      verified: true,
      specialty: "PvP доминирование",
      avatar: "🦈",
      description: "Элитная команда с 2+ лет опыта. Контролируем северные территории.",
    },
    {
      id: 2,
      name: "Сборщики Артефактов",
      members: 12,
      rating: 4.8,
      verified: true,
      specialty: "Поиск редких ресурсов",
      avatar: "🗿",
      description: "Специализируемся на поиске редкого лута и древних артефактов.",
    },
    {
      id: 3,
      name: "Строители Цитадели",
      members: 15,
      rating: 4.7,
      verified: false,
      specialty: "Строительство баз",
      avatar: "🏗️",
      description: "Создаем неприступные крепости и торговые форпосты.",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Поиск редкого лута",
      provider: "SurvivorPro",
      rating: 4.9,
      price: "500₽/час",
      verified: true,
      category: "Фарм",
      description: "Нахожу легендарные предметы в опасных зонах. Гарантия результата.",
    },
    {
      id: 2,
      title: "Защита базы",
      provider: "GuardianTeam",
      rating: 4.8,
      price: "1500₽/день",
      verified: true,
      category: "Оборона",
      description: "Круглосуточная охрана ваших построек от рейдеров.",
    },
    {
      id: 3,
      title: "Прокачка персонажа",
      provider: "LevelMaster",
      rating: 4.6,
      price: "300₽/уровень",
      verified: false,
      category: "Развитие",
      description: "Быстрая и безопасная прокачка навыков выживания.",
    },
  ];

  const topPlayers = [
    { name: "DeathStalker", rating: 2847, verified: true, specialty: "Снайпер" },
    { name: "LootHunter", rating: 2756, verified: true, specialty: "Разведчик" },
    { name: "BaseMaster", rating: 2689, verified: false, specialty: "Строитель" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="text-2xl">🏝️</div>
                <div>
                  <h1 className="text-xl font-bold text-primary">Last Island</h1>
                  <p className="text-xs text-muted-foreground">Gaming Platform</p>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#teams" className="text-sm hover:text-primary transition-colors">Команды</a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
              <a href="#players" className="text-sm hover:text-primary transition-colors">Игроки</a>
              <Button variant="outline" size="sm">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Найди свою команду выживальщиков
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйся к проверенным игрокам, находи редкий лут и доминируй на острове.
              Система репутации гарантирует надежность партнеров.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12">
              <div className="flex-1">
                <Input
                  placeholder="Поиск команд, услуг или игроков..."
                  className="h-12 text-base bg-background/50 border-primary/20"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                <Icon name="Search" size={20} className="mr-2" />
                Найти
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                <Icon name="Users" size={14} className="mr-2" />
                1,247 активных игроков
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Icon name="Shield" size={14} className="mr-2" />
                834 проверенных аккаунта
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Icon name="Trophy" size={14} className="mr-2" />
                156 топ команд
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="teams" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="teams">Команды</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="players">Игроки</TabsTrigger>
          </TabsList>

          {/* Teams Tab */}
          <TabsContent value="teams" id="teams">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Топ команды острова</h2>
              <Button variant="outline">
                <Icon name="Plus" size={16} className="mr-2" />
                Создать команду
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topTeams.map((team) => (
                <Card key={team.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{team.avatar}</div>
                        <div>
                          <CardTitle className="text-lg flex items-center gap-2">
                            {team.name}
                            {team.verified && (
                              <Icon name="BadgeCheck" size={16} className="text-accent" />
                            )}
                          </CardTitle>
                          <CardDescription>{team.specialty}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{team.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Icon name="Users" size={14} className="mr-1" />
                          {team.members}
                        </div>
                        <div className="flex items-center">
                          <Icon name="Star" size={14} className="mr-1 fill-primary text-primary" />
                          {team.rating}
                        </div>
                      </div>
                      <Button size="sm" variant="secondary">
                        Присоединиться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" id="services">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Игровые услуги</h2>
              <Button variant="outline">
                <Icon name="Plus" size={16} className="mr-2" />
                Предложить услугу
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          {service.provider}
                          {service.verified && (
                            <Icon name="BadgeCheck" size={14} className="text-accent" />
                          )}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{service.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Icon name="Star" size={14} className="mr-1 fill-primary text-primary" />
                          {service.rating}
                        </div>
                        <div className="text-lg font-semibold text-primary">{service.price}</div>
                      </div>
                      <Button size="sm">Заказать</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Players Tab */}
          <TabsContent value="players" id="players">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Рейтинг игроков</h2>
              <Button variant="outline">
                <Icon name="Trophy" size={16} className="mr-2" />
                Весь рейтинг
              </Button>
            </div>
            
            <div className="grid gap-4">
              {topPlayers.map((player, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur border-primary/20">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-primary">#{index + 1}</div>
                      <Avatar>
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${player.name}`} />
                        <AvatarFallback>{player.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{player.name}</h3>
                          {player.verified && (
                            <Icon name="BadgeCheck" size={16} className="text-accent" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{player.specialty}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="flex items-center">
                          <Icon name="Zap" size={14} className="mr-1 text-primary" />
                          <span className="font-semibold">{player.rating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">рейтинг</p>
                      </div>
                      <Button size="sm" variant="secondary">
                        Профиль
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🏝️</div>
                <div>
                  <h3 className="font-bold text-primary">Last Island</h3>
                  <p className="text-xs text-muted-foreground">Gaming Platform</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для поиска команд и услуг в Last Island of Survival
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Сообщество</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Команды</p>
                <p>Турниры</p>
                <p>Обсуждения</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Услуги</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Поиск лута</p>
                <p>Защита баз</p>
                <p>Прокачка</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Правила</p>
                <p>Помощь</p>
                <p>Контакты</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Last Island Gaming Platform. Выживи любой ценой.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;