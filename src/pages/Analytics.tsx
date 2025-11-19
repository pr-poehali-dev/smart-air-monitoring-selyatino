import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Analytics() {
  return (
    <Layout>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Аналитика и отчёты
          </h1>
          <p className="text-muted-foreground text-lg">
            Статистика по всем показателям мониторинга
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" size={20} />
                Динамика качества воздуха
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-accent/30 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Icon name="BarChart3" size={48} className="mx-auto mb-2 opacity-50" />
                  <p>График изменения показателей</p>
                  <p className="text-sm">PM2.5, PM10, CO₂ за период</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="PieChart" size={20} />
                Распределение проблем
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Мусор и загрязнения</span>
                    <span className="text-foreground font-medium">45%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Дороги</span>
                    <span className="text-foreground font-medium">30%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '30%' }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Шум</span>
                    <span className="text-foreground font-medium">15%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15%' }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Прочее</span>
                    <span className="text-foreground font-medium">10%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '10%' }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <Icon name="CheckCircle2" size={24} className="text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">156</p>
                  <p className="text-sm text-muted-foreground">Решено за месяц</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-yellow-500/10">
                  <Icon name="Clock" size={24} className="text-yellow-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">24</p>
                  <p className="text-sm text-muted-foreground">В работе</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <Icon name="TrendingUp" size={24} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">+18%</p>
                  <p className="text-sm text-muted-foreground">Улучшение</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <Icon name="Target" size={24} className="text-purple-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">87%</p>
                  <p className="text-sm text-muted-foreground">Выполнение плана</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="FileText" size={20} />
              Отчёты по категориям
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                      Категория
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                      Всего
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                      Решено
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                      В работе
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                      Эффективность
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { category: 'Качество воздуха', total: 45, resolved: 42, inProgress: 3, efficiency: 93 },
                    { category: 'Мусор и загрязнения', total: 128, resolved: 98, inProgress: 30, efficiency: 76 },
                    { category: 'Состояние дорог', total: 67, resolved: 52, inProgress: 15, efficiency: 78 },
                    { category: 'Переполненные контейнеры', total: 89, resolved: 84, inProgress: 5, efficiency: 94 },
                    { category: 'Уровень шума', total: 23, resolved: 20, inProgress: 3, efficiency: 87 },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border hover:bg-accent/50 transition-colors">
                      <td className="py-3 px-4 text-foreground">{row.category}</td>
                      <td className="py-3 px-4 text-foreground">{row.total}</td>
                      <td className="py-3 px-4 text-green-500">{row.resolved}</td>
                      <td className="py-3 px-4 text-yellow-500">{row.inProgress}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-secondary rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                row.efficiency >= 90 ? 'bg-green-500' : row.efficiency >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${row.efficiency}%` }}
                            />
                          </div>
                          <span className="text-sm text-foreground">{row.efficiency}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
