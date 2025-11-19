import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { path: '/', icon: 'Home', label: 'Главная' },
  { path: '/air-quality', icon: 'Wind', label: 'Качество воздуха' },
  { path: '/dashboard', icon: 'Activity', label: 'Дашборд' },
  { path: '/analytics', icon: 'BarChart3', label: 'Аналитика' },
  { path: '/documentation', icon: 'FileText', label: 'Документация' },
  { path: '/admin', icon: 'Settings', label: 'Администрирование' },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background">
      <aside
        className={cn(
          'bg-card border-r border-border transition-all duration-300',
          isSidebarOpen ? 'w-64' : 'w-20'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          {isSidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Activity" size={20} className="text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">ЭкоМониторинг</span>
            </div>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <Icon name={isSidebarOpen ? 'ChevronLeft' : 'ChevronRight'} size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon name={item.icon} size={20} />
                {isSidebarOpen && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="h-full">{children}</div>
      </main>
    </div>
  );
}
