import { Link } from "react-router-dom";
import { Clock, List, Settings } from "lucide-react";

export default function BottomNavigationBar() {
  const navigationItems = [
    {
      label: "Timer",
      href: "/",
      icon: <Clock />,
    },
    {
      label: "Tarefas",
      href: "/tasks",
      icon: <List />,
    },
    {
      label: "Configurações",
      href: "/settings",
      icon: <Settings />,
    },
  ];

  return (
    <nav className="sticky bottom-0 left-0 right-0 z-50 w-full p-6 grid grid-cols-3 justify-around items-center gap-4 bg-gray-950 text-white">
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.label}
          href={item.href}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </nav>
  );
}

interface NavigationItemProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

function NavigationItem({ label, href, icon }: NavigationItemProps) {
  return (
    <Link to={href} className="flex flex-col justify-center items-center gap-2">
      {icon}
      <p className="text-xs font-semibold">{label}</p>
    </Link>
  );
}
