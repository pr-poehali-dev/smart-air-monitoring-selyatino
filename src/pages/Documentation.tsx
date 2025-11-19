import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Documentation() {
  const documents = [
    {
      title: 'Техническое задание',
      type: 'ТЗ',
      version: '1.0',
      date: '15.11.2024',
      icon: 'FileText',
    },
    {
      title: 'Архитектура системы',
      type: 'Документация',
      version: '1.0',
      date: '15.11.2024',
      icon: 'Box',
    },
    {
      title: 'Руководство пользователя',
      type: 'Инструкция',
      version: '1.0',
      date: '15.11.2024',
      icon: 'BookOpen',
    },
  ];

  return (
    <Layout>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Документация проекта
          </h1>
          <p className="text-muted-foreground text-lg">
            Техническое задание и описание системы
          </p>
        </div>

        <Tabs defaultValue="tz" className="space-y-6">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="tz">Техническое задание</TabsTrigger>
            <TabsTrigger value="architecture">Архитектура</TabsTrigger>
            <TabsTrigger value="api">API документация</TabsTrigger>
            <TabsTrigger value="files">Файлы</TabsTrigger>
          </TabsList>

          <TabsContent value="tz" className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Техническое задание</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Цель проекта</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Запуск пилотного проекта "Умный мониторинг воздуха" в Администрации Селятино для
                    создания системы комплексного экологического мониторинга территории муниципального
                    образования.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Основные функции</h3>
                  <ul className="space-y-2">
                    {[
                      'Мониторинг качества воздуха в реальном времени (PM2.5, PM10, CO₂)',
                      'Отслеживание загрязнений и мусора на территории',
                      'Контроль состояния дорог и дорожного покрытия',
                      'Мониторинг заполненности мусорных контейнеров',
                      'Измерение уровня шума',
                      'Формирование аналитических отчётов',
                      'Административная панель управления системой',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Технические требования</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-accent/50 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">База данных</h4>
                      <p className="text-sm text-muted-foreground">
                        PostgreSQL с таблицами для датчиков, метрик, отчётов, документации и пользователей
                      </p>
                    </div>
                    <div className="p-4 bg-accent/50 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Интерфейс</h4>
                      <p className="text-sm text-muted-foreground">
                        Веб-платформа с адаптивным дизайном в тёмной теме, панель управления в реальном времени
                      </p>
                    </div>
                    <div className="p-4 bg-accent/50 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Интеграция</h4>
                      <p className="text-sm text-muted-foreground">
                        API для подключения датчиков и внешних систем мониторинга
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Этапы реализации</h3>
                  <div className="space-y-3">
                    {[
                      { stage: 'Этап 1', title: 'Проектирование и настройка БД', status: 'completed' },
                      { stage: 'Этап 2', title: 'Разработка интерфейса платформы', status: 'completed' },
                      { stage: 'Этап 3', title: 'Интеграция датчиков качества воздуха', status: 'in-progress' },
                      { stage: 'Этап 4', title: 'Тестирование и запуск пилота', status: 'pending' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            item.status === 'completed'
                              ? 'bg-green-500'
                              : item.status === 'in-progress'
                              ? 'bg-yellow-500 animate-pulse'
                              : 'bg-muted'
                          }`}
                        />
                        <div className="flex-1">
                          <span className="font-medium text-foreground">{item.stage}:</span>{' '}
                          <span className="text-muted-foreground">{item.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Архитектура системы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Структура базы данных</h3>
                  <div className="space-y-3">
                    {[
                      { table: 'air_quality_sensors', description: 'Датчики мониторинга качества воздуха' },
                      { table: 'air_quality_metrics', description: 'Показатели качества воздуха с датчиков' },
                      { table: 'pollution_reports', description: 'Отчёты о загрязнениях и проблемах' },
                      { table: 'road_conditions', description: 'Состояние дорог и дорожного покрытия' },
                      { table: 'waste_bins', description: 'Мусорные контейнеры и их состояние' },
                      { table: 'noise_metrics', description: 'Показатели уровня шума' },
                      { table: 'project_documents', description: 'Документация и техническое задание' },
                      { table: 'system_users', description: 'Пользователи системы мониторинга' },
                    ].map((item, index) => (
                      <div key={index} className="p-3 bg-accent/50 rounded-lg">
                        <code className="text-sm font-mono text-primary">{item.table}</code>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Компоненты системы</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-card border border-border rounded-lg">
                      <Icon name="Database" size={24} className="text-primary mb-2" />
                      <h4 className="font-medium text-foreground mb-1">Слой данных</h4>
                      <p className="text-sm text-muted-foreground">PostgreSQL с индексами для быстрого поиска</p>
                    </div>
                    <div className="p-4 bg-card border border-border rounded-lg">
                      <Icon name="Server" size={24} className="text-primary mb-2" />
                      <h4 className="font-medium text-foreground mb-1">Backend API</h4>
                      <p className="text-sm text-muted-foreground">REST API для работы с данными</p>
                    </div>
                    <div className="p-4 bg-card border border-border rounded-lg">
                      <Icon name="Layout" size={24} className="text-primary mb-2" />
                      <h4 className="font-medium text-foreground mb-1">Frontend</h4>
                      <p className="text-sm text-muted-foreground">React-приложение с real-time обновлениями</p>
                    </div>
                    <div className="p-4 bg-card border border-border rounded-lg">
                      <Icon name="Wifi" size={24} className="text-primary mb-2" />
                      <h4 className="font-medium text-foreground mb-1">IoT датчики</h4>
                      <p className="text-sm text-muted-foreground">Сеть датчиков качества воздуха и шума</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>API Endpoints</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { method: 'GET', endpoint: '/api/sensors', description: 'Получить список датчиков' },
                  { method: 'GET', endpoint: '/api/metrics/air-quality', description: 'Данные качества воздуха' },
                  { method: 'POST', endpoint: '/api/reports', description: 'Создать новый отчёт' },
                  { method: 'GET', endpoint: '/api/waste-bins', description: 'Состояние контейнеров' },
                  { method: 'GET', endpoint: '/api/noise/current', description: 'Текущий уровень шума' },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-accent/50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          item.method === 'GET'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-green-500/20 text-green-400'
                        }`}
                      >
                        {item.method}
                      </span>
                      <code className="text-sm font-mono text-foreground">{item.endpoint}</code>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="files" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon name={doc.icon} size={24} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-1 truncate">{doc.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{doc.type}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>v{doc.version}</span>
                          <span>•</span>
                          <span>{doc.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
