import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Admin() {
  const sensors = [
    { id: 1, name: 'Датчик №1', location: 'Центральная площадь', status: 'online', lastUpdate: '2 мин назад' },
    { id: 2, name: 'Датчик №2', location: 'ул. Ленина', status: 'online', lastUpdate: '1 мин назад' },
    { id: 3, name: 'Датчик №3', location: 'Парк культуры', status: 'offline', lastUpdate: '3 часа назад' },
  ];

  const users = [
    { id: 1, name: 'Иванов И.И.', role: 'Администратор', email: 'ivanov@selyatino.ru', lastLogin: '15 мин назад' },
    { id: 2, name: 'Петрова А.С.', role: 'Оператор', email: 'petrova@selyatino.ru', lastLogin: '2 часа назад' },
    { id: 3, name: 'Сидоров П.К.', role: 'Наблюдатель', email: 'sidorov@selyatino.ru', lastLogin: '1 день назад' },
  ];

  return (
    <Layout>
      <div className="p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Администрирование
            </h1>
            <p className="text-muted-foreground text-lg">
              Управление системой и данными
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить датчик
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <Icon name="Users" size={24} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-sm text-muted-foreground">Пользователей</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <Icon name="Activity" size={24} className="text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">24</p>
                  <p className="text-sm text-muted-foreground">Активных датчиков</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <Icon name="Database" size={24} className="text-purple-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2.4 ГБ</p>
                  <p className="text-sm text-muted-foreground">Объём данных</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Icon name="Activity" size={20} />
              Управление датчиками
            </CardTitle>
            <Button variant="outline" size="sm">
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Обновить
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Название</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Местоположение</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Статус</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Последнее обновление</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {sensors.map((sensor) => (
                    <tr key={sensor.id} className="border-b border-border hover:bg-accent/50 transition-colors">
                      <td className="py-3 px-4 text-foreground">{sensor.id}</td>
                      <td className="py-3 px-4 text-foreground font-medium">{sensor.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{sensor.location}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              sensor.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                            }`}
                          />
                          <span className={sensor.status === 'online' ? 'text-green-500' : 'text-red-500'}>
                            {sensor.status === 'online' ? 'Онлайн' : 'Офлайн'}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{sensor.lastUpdate}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Icon name="Edit2" size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Icon name="Settings" size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              Управление пользователями
            </CardTitle>
            <Button variant="outline" size="sm">
              <Icon name="UserPlus" size={16} className="mr-2" />
              Добавить пользователя
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Имя</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Email</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Роль</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Последний вход</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-border hover:bg-accent/50 transition-colors">
                      <td className="py-3 px-4 text-foreground">{user.id}</td>
                      <td className="py-3 px-4 text-foreground font-medium">{user.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{user.email}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                            user.role === 'Администратор'
                              ? 'bg-purple-500/20 text-purple-400'
                              : user.role === 'Оператор'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-gray-500/20 text-gray-400'
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{user.lastLogin}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Icon name="Edit2" size={16} />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Icon name="Shield" size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Settings" size={20} />
              Системные настройки
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Автоматическое резервное копирование</p>
                <p className="text-sm text-muted-foreground">Ежедневно в 03:00</p>
              </div>
              <Button variant="outline" size="sm">Настроить</Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Уведомления администратора</p>
                <p className="text-sm text-muted-foreground">Email при критических событиях</p>
              </div>
              <Button variant="outline" size="sm">Настроить</Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Экспорт данных</p>
                <p className="text-sm text-muted-foreground">CSV, JSON, Excel форматы</p>
              </div>
              <Button variant="outline" size="sm">Экспорт</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
