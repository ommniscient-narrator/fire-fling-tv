
import { Home, BarChart3, Users, User } from "lucide-react";

interface SidebarProps {
  activePage: string;
  onPageChange: (page: 'home' | 'dashboard' | 'watch-party' | 'alternate-persona') => void;
}

export const Sidebar = ({ activePage, onPageChange }: SidebarProps) => {
  const menuItems = [
    {
      id: 'home' as const,
      label: 'Home',
      icon: Home,
    },
    {
      id: 'dashboard' as const,
      label: 'Dashboard',
      icon: BarChart3,
    },
    {
      id: 'watch-party' as const,
      label: 'Watch Party',
      icon: Users,
    },
    {
      id: 'alternate-persona' as const,
      label: 'Alternate Persona',
      icon: User,
    },
  ];

  return (
    <div className="w-64 bg-black/50 backdrop-blur-sm border-r border-gray-800 p-6">
      <div className="mb-12">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Fire TV
        </h1>
      </div>
      
      <nav className="space-y-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30'
                  : 'hover:bg-white/10'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'text-orange-400' : 'text-gray-400'}`} />
              <span className={`text-lg ${isActive ? 'text-white' : 'text-gray-300'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
