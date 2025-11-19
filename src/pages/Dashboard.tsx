import { Suspense, lazy } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Map = lazy(() => import('@/components/Map'));

export default function Dashboard() {
  const alerts = [
    { id: 1, type: 'Мусор', location: 'ул. Ленина, 15', severity: 'high', time: '15 мин назад' },
    { id: 2, type: 'Дорога', location: 'пр. Мира, 42', severity: 'medium', time: '1 час назад' },
    { id: 3, type: 'Шум', location: 'Центральная площадь', severity: 'low', time: '2 часа назад' },
  ];

  const wasteBins = [
    { id: 1, location: 'ул. Ленина, 5', fill: 85, status: 'warning' },
    { id: 2, location: 'ул. Ленина, 15', fill: 95, status: 'critical' },
    { id: 3, location: 'пр. Мира, 20', fill: 45, status: 'normal' },
    { id: 4, location: 'Парк культуры', fill: 60, status: 'normal' },
  ];

  const mapPoints = [
    {
      id: 1,
      position: [55.520, 37.310] as [number, number],
      title: 'Датчик №1 - Центральная площадь',
      description: 'PM2.5: 12.3 мкг/м³',
      type: 'sensor' as const,
    },
    {
      id: 2,
      position: [55.515, 37.305] as [number, number],
      title: 'Датчик №2 - ул. Ленина',
      description: 'PM2.5: 15.1 мкг/м³',
      type: 'sensor' as const,
    },
    {
      id: 3,
      position: [55.512, 37.300] as [number, number],
      title: 'Датчик №3 - Парк культуры',
      description: 'PM2.5: 8.7 мкг/м³',
      type: 'sensor' as const,
    },
    {
      id: 4,
      position: [55.518, 37.308] as [number, number],
      title: 'Переполненный контейнер',
      description: 'ул. Ленина, 15 • Заполнение 95%',
      type: 'waste' as const,
      severity: 'high' as const,
    },
    {
      id: 5,
      position: [55.514, 37.312] as [number, number],
      title: 'Разбитая дорога',
      description: 'пр. Мира, 42 • Требует ремонта',
      type: 'road' as const,
      severity: 'medium' as const,
    },
    {
      id: 6,
      position: [55.522, 37.302] as [number, number],
      title: 'Мусор на обочине',
      description: 'ул. Садовая, 8',
      type: 'problem' as const,
      severity: 'low' as const,
    },
  ];

  return (
    <Layout>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Дашборд мониторинга
          </h1>
          <p className="text-muted-foreground text-lg">
            Все показатели в реальном времени
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="AlertTriangle" size={20} />
                Активные уведомления
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-start gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        alert.severity === 'high'
                          ? 'bg-red-500'
                          : alert.severity === 'medium'
                          ? 'bg-yellow-500'
                          : 'bg-blue-500'
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{alert.type}</p>
                      <p className="text-sm text-muted-foreground truncate">{alert.location}</p>
                      <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Trash2" size={20} />
                Состояние контейнеров
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {wasteBins.map((bin) => (
                  <div key={bin.id}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground truncate flex-1">{bin.location}</span>
                      <span
                        className={`font-medium ml-2 ${
                          bin.fill >= 90
                            ? 'text-red-500'
                            : bin.fill >= 70
                            ? 'text-yellow-500'
                            : 'text-green-500'
                        }`}
                      >
                        {bin.fill}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          bin.fill >= 90
                            ? 'bg-red-500'
                            : bin.fill >= 70
                            ? 'bg-yellow-500'
                            : 'bg-green-500'
                        }`}
                        style={{ width: `${bin.fill}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Construction" size={20} />
                Состояние дорог
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-green-500" />
                    <span className="text-foreground">Хорошее</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground">12</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-500/10">
                  <div className="flex items-center gap-2">
                    <Icon name="AlertCircle" size={20} className="text-yellow-500" />
                    <span className="text-foreground">Требует ремонта</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground">5</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-red-500/10">
                  <div className="flex items-center gap-2">
                    <Icon name="XCircle" size={20} className="text-red-500" />
                    <span className="text-foreground">Критическое</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground">2</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Volume2" size={20} />
                Уровень шума (текущий)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-6xl font-bold text-foreground mb-2">45</div>
                  <div className="text-xl text-muted-foreground">дБ</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Норма: 0-55 дБ</span>
                    <span className="text-green-500 font-medium">В пределах нормы</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div
                      className="bg-green-500 h-3 rounded-full transition-all"
                      style={{ width: '82%' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs text-center">
                  <div>
                    <div className="text-muted-foreground mb-1">Минимум</div>
                    <div className="font-bold text-foreground">38 дБ</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Средний</div>
                    <div className="font-bold text-foreground">42 дБ</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Максимум</div>
                    <div className="font-bold text-foreground">52 дБ</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                Карта территории
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 rounded-lg overflow-hidden">
                <Suspense
                  fallback={
                    <div className="h-full bg-accent/30 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <Icon name="Loader2" size={32} className="mx-auto mb-2 opacity-50 animate-spin" />
                        <p className="text-sm">Загрузка карты...</p>
                      </div>
                    </div>
                  }
                >
                  <Map points={mapPoints} center={[55.516, 37.305]} zoom={14} />
                </Suspense>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground">Датчики воздуха</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-muted-foreground">Критические проблемы</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-muted-foreground">Требует внимания</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}