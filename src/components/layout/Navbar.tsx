import { ChartColumnBig, Clock, House, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    {
      label: "Início",
      href: "/",
      icon: <House size={20} />,
    },
    {
      label: "Estatísticas",
      href: "/statistics",
      icon: <ChartColumnBig size={20} />,
    },
    {
      label: "Configurações",
      href: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <header className="w-full bg-gray-800 sticky top-0 z-50 text-white flex justify-center items-center gap-2 h-16">
      <div className="flex w-full justify-between items-center gap-2 border-b-2 border-gray-700 mx-4 py-4 md:max-w-3xl">
        <Link
          to="/"
          className="text-xl text-center font-semibold flex justify-center items-center gap-1 hover:text-white/75 transition-colors"
        >
          <Clock size={20} />
          <h2>Pomotimer</h2>
        </Link>

        <nav className="flex gap-3">
          {navItems.map((item) => (
            <NavigationItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}

interface NavigationItemProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

function NavigationItem({ label, href, icon }: NavigationItemProps) {
  return (
    <Link
      to={href}
      className="flex justify-center items-center gap-1 p-2 rounded-sm bg-gray-700 hover:bg-gray-600 hover:cursor-pointer transition-colors"
    >
      {icon}
      <p className="text-md hidden text-center md:block">{label}</p>
    </Link>
  );
}
