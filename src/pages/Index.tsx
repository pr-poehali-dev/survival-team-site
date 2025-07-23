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
      escrowAvailable: true,
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
      escrowAvailable: true,
    },
    {
      id: 3,
      title: "Доверенное лицо",
      provider: "TrustAgent",
      rating: 4.9,
      price: "3% от сделки",
      verified: true,
      category: "Гарант",
      description: "Безопасные сделки между игроками. Проверенный посредник с опытом 500+ сделок.",
      escrowAvailable: false,
    },
    {
      id: 4,
      title: "Турнир PvP 'Битва за Север'",
      provider: "EventMaster",
      rating: 4.7,
      price: "Вход: 1000₽",
      verified: true,
      category: "Турнир",
      description: "Командный турнир 5v5. Призовой фонд 50,000₽. Регистрация до 25 июля.",
      escrowAvailable: true,
      isAd: true,
    },
    {
      id: 5,
      title: "Продам аккаунт 87 LVL",
      provider: "AccountSeller",
      rating: 4.5,
      price: "8,500₽",
      verified: false,
      category: "Аккаунт",
      description: "Полная прокачка, редкие скины, 15+ легендарных предметов. Много ресурсов.",
      escrowAvailable: true,
      isAd: true,
    },
    {
      id: 6,
      title: "Аккаунт с базой в топ зоне",
      provider: "BaseOwner",
      rating: 4.6,
      price: "12,000₽",
      verified: true,
      category: "Аккаунт",
      description: "Аккаунт с готовой укрепленной базой в центре карты. Вся инфраструктура.",
      escrowAvailable: true,
      isAd: true,
    },
  ];

  const topPlayers = [
    { name: "DeathStalker", rating: 2847, verified: true, specialty: "Снайпер" },
    { name: "LootHunter", rating: 2756, verified: true, specialty: "Разведчик" },
    { name: "BaseMaster", rating: 2689, verified: false, specialty: "Строитель" },
  ];

  const soloPlayers = [
    {
      id: 1,
      name: "ShadowWolf",
      age: 23,
      experience: "3 года",
      pvpRating: 8,
      verified: true,
      specialty: "Ассассин",
      avatar: "🐺",
      description: "Опытный одиночка. Специализируюсь на скрытности и точных ударах.",
      lookingFor: "Команду для рейдов",
      online: true,
    },
    {
      id: 2,
      name: "LoneRanger",
      age: 28,
      experience: "5 лет",
      pvpRating: 9,
      verified: true,
      specialty: "Снайпер",
      avatar: "🎯",
      description: "Дальний бой - моя стихия. Контролирую территории с расстояния.",
      lookingFor: "Постоянную команду",
      online: false,
    },
    {
      id: 3,
      name: "Survivalist",
      age: 19,
      experience: "1.5 года",
      pvpRating: 6,
      verified: false,
      specialty: "Выживание",
      avatar: "🌿",
      description: "Молодой, но перспективный. Хорошо знаю карту и ресурсы.",
      lookingFor: "Наставника и команду",
      online: true,
    },
    {
      id: 4,
      name: "TechMaster",
      age: 31,
      experience: "4 года",
      pvpRating: 7,
      verified: true,
      specialty: "Инженер",
      avatar: "⚙️",
      description: "Специалист по технике и ловушкам. Умею чинить и модифицировать.",
      lookingFor: "Команду строителей",
      online: true,
    },
    {
      id: 5,
      name: "StealthGirl",
      age: 21,
      experience: "2 года",
      pvpRating: 8,
      verified: true,
      specialty: "Разведка",
      avatar: "👤",
      description: "Женский взгляд на выживание. Отличная в разведке и дипломатии.",
      lookingFor: "Дружную команду",
      online: false,
    },
    {
      id: 6,
      name: "BerserkerMax",
      age: 26,
      experience: "6 лет",
      pvpRating: 10,
      verified: true,
      specialty: "Штурмовик",
      avatar: "⚔️",
      description: "Ветеран PvP. Люблю прямые столкновения и штурм баз.",
      lookingFor: "Боевую команду",
      online: true,
    },
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
                <Card key={service.id} className={`hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur ${service.isAd ? 'border-primary/40 bg-gradient-to-br from-primary/5 to-accent/5' : 'border-primary/20'} relative`}>
                  {service.isAd && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      РЕКЛАМА
                    </div>
                  )}
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
                      <Badge variant={service.isAd ? "default" : "outline"}>{service.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    
                    {service.escrowAvailable && (
                      <div className="flex items-center gap-2 mb-3 text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                        <Icon name="Shield" size={12} />
                        Доступна гарантия через доверенное лицо
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Icon name="Star" size={14} className="mr-1 fill-primary text-primary" />
                          {service.rating}
                        </div>
                        <div className="text-lg font-semibold text-primary">{service.price}</div>
                      </div>
                      <Button size="sm">
                        {service.category === "Гарант" ? "Выбрать" : 
                         service.category === "Турнир" ? "Регистрация" :
                         service.category === "Аккаунт" ? "Купить" : "Заказать"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Players Tab */}
          <TabsContent value="players" id="players">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Соло игроки ищут команду</h2>
              <Button variant="outline">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Создать анкету
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {soloPlayers.map((player) => (
                <Card key={player.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{player.avatar}</div>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg">{player.name}</CardTitle>
                            {player.verified && (
                              <Icon name="BadgeCheck" size={14} className="text-accent" />
                            )}
                          </div>
                          <CardDescription className="flex items-center gap-2">
                            {player.specialty}
                            {player.online ? (
                              <Badge variant="default" className="text-xs bg-green-500">Онлайн</Badge>
                            ) : (
                              <Badge variant="secondary" className="text-xs">Оффлайн</Badge>
                            )}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{player.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="Calendar" size={12} />
                          Возраст
                        </div>
                        <div className="font-semibold">{player.age} лет</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="Clock" size={12} />
                          Опыт
                        </div>
                        <div className="font-semibold">{player.experience}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name="Sword" size={14} className="text-primary" />
                        <span className="text-sm text-muted-foreground">PvP навык:</span>
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-primary">{player.pvpRating}</span>
                          <span className="text-xs text-muted-foreground">/10</span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 10 }, (_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < player.pvpRating ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <Icon name="Search" size={12} />
                        <span className="text-xs">Ищет:</span>
                      </div>
                      <p className="text-sm font-medium">{player.lookingFor}</p>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Icon name="MessageCircle" size={14} className="mr-2" />
                        Написать
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="UserPlus" size={14} />
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