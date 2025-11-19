import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function AirQuality() {
  const sensors = [
    {
      id: 1,
      name: 'Датчик №1',
      location: 'Центральная площадь',
      status: 'online',
      pm25: 12.3,
      pm10: 18.5,
      co2: 420,
      temp: 22,
      humidity: 65,
    },
    {
      id: 2,
      name: 'Датчик №2',
      location: 'ул. Ленина',
      status: 'online',
      pm25: 15.1,
      pm10: 22.4,
      co2: 435,
      temp: 21,
      humidity: 62,
    },
    {
      id: 3,
      name: 'Датчик №3',
      location: 'Парк культуры',
      status: 'online',
      pm25: 8.7,
      pm10: 14.2,
      co2: 410,
      temp: 20,
      humidity: 68,
    },
  ];

  const getAQILevel = (pm25: number) => {
    if (pm25 <= 12) return { level: 'Хорошее', color: 'text-green-500', bg: 'bg-green-500/10' };
    if (pm25 <= 35.4) return { level: 'Умеренное', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
    if (pm25 <= 55.4) return { level: 'Нездоровое для чувствительных групп', color: 'text-orange-500', bg: 'bg-orange-500/10' };
    return { level: 'Нездоровое', color: 'text-red-500', bg: 'bg-red-500/10' };
  };

  const avgPM25 = sensors.reduce((acc, s) => acc + s.pm25, 0) / sensors.length;
  const avgLevel = getAQILevel(avgPM25);

  return (
    <Layout>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Качество воздуха
          </h1>
          <p className="text-muted-foreground text-lg">
            Показатели в реальном времени
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Wind" size={20} />
                Общий индекс качества
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-5xl font-bold mb-2 ${avgLevel.color}`}>
                {avgPM25.toFixed(1)}
              </div>
              <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${avgLevel.bg} ${avgLevel.color}`}>
                {avgLevel.level}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                PM2.5 мкг/м³ • Среднее по всем датчикам
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Activity" size={20} />
                Активные датчики
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-foreground mb-2">
                {sensors.filter(s => s.status === 'online').length}
              </div>
              <p className="text-muted-foreground">из {sensors.length} датчиков</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">Все работают исправно</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingDown" size={20} />
                Изменение за 24ч
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-green-500 mb-2">
                -8%
              </div>
              <p className="text-muted-foreground">Улучшение качества</p>
              <p className="text-xs text-muted-foreground mt-4">
                По сравнению со вчерашним днём
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Данные по датчикам</h2>
          
          {sensors.map((sensor) => {
            const level = getAQILevel(sensor.pm25);
            return (
              <Card key={sensor.id} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{sensor.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                        <Icon name="MapPin" size={14} />
                        {sensor.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-sm text-muted-foreground">Онлайн</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">PM2.5</p>
                      <p className={`text-2xl font-bold ${level.color}`}>{sensor.pm25}</p>
                      <p className="text-xs text-muted-foreground">мкг/м³</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">PM10</p>
                      <p className="text-2xl font-bold text-foreground">{sensor.pm10}</p>
                      <p className="text-xs text-muted-foreground">мкг/м³</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">CO₂</p>
                      <p className="text-2xl font-bold text-foreground">{sensor.co2}</p>
                      <p className="text-xs text-muted-foreground">ppm</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Температура</p>
                      <p className="text-2xl font-bold text-foreground">{sensor.temp}°</p>
                      <p className="text-xs text-muted-foreground">Цельсий</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Влажность</p>
                      <p className="text-2xl font-bold text-foreground">{sensor.humidity}%</p>
                      <p className="text-xs text-muted-foreground">относит.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
