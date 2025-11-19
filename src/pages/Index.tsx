import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const stats = [
    {
      title: 'Качество воздуха',
      value: 'Хорошее',
      icon: 'Wind',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      description: 'PM2.5: 12 мкг/м³',
    },
    {
      title: 'Активные датчики',
      value: '24',
      icon: 'Activity',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      description: 'Все работают исправно',
    },
    {
      title: 'Открытые отчёты',
      value: '8',
      icon: 'AlertTriangle',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      description: 'Требуют внимания',
    },
    {
      title: 'Уровень шума',
      value: '45 дБ',
      icon: 'Volume2',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      description: 'В пределах нормы',
    },
  ];

  const recentReports = [
    {
      type: 'Переполненный контейнер',
      location: 'ул. Ленина, 15',
      time: '15 минут назад',
      severity: 'high',
    },
    {
      type: 'Разбитая дорога',
      location: 'пр. Мира, 42',
      time: '1 час назад',
      severity: 'medium',
    },
    {
      type: 'Мусор на обочине',
      location: 'ул. Садовая, 8',
      time: '2 часа назад',
      severity: 'low',
    },
  ];

  return (
    <Layout>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Умный мониторинг экологии
          </h1>
          <p className="text-muted-foreground text-lg">
            Пилотный проект для Администрации Селятино
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="border-border">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon name={stat.icon} size={20} className={stat.color} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Bell" size={20} />
                Последние отчёты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        report.severity === 'high'
                          ? 'bg-red-500'
                          : report.severity === 'medium'
                          ? 'bg-yellow-500'
                          : 'bg-blue-500'
                      }`}
                    />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{report.type}</p>
                      <p className="text-sm text-muted-foreground">{report.location}</p>
                      <p className="text-xs text-muted-foreground mt-1">{report.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" size={20} />
                Статистика за сегодня
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Обработано отчётов</span>
                    <span className="text-foreground font-medium">32 из 40</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Качество воздуха</span>
                    <span className="text-foreground font-medium">92%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Заполнение контейнеров</span>
                    <span className="text-foreground font-medium">65%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
