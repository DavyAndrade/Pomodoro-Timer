import { Clock, House, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    {
      label: "Início",
      href: "/",
      icon: <House />,
    },
    {
      label: "Configurações",
      href: "/settings",
      icon: <Settings />,
    },
  ];

  return (
    <header className="w-full bg-gray-800 sticky top-0 z-50 text-white flex justify-center items-center gap-2">
      <div className="flex w-full justify-between items-center gap-2 border-b-2 border-gray-700 mx-4 py-6 md:max-w-5xl md:mx-auto">
        <Link
          to="/"
          className="text-2xl text-center font-semibold flex items-center gap-2 hover:text-white/75 transition-colors"
        >
          <Clock /> Pomodoro
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
      className="flex justify-center items-center gap-3 p-3 rounded-md bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 hover:cursor-pointer transition-colors text-lg"
    >
      {icon}
      <p className="text-md font-semibold hidden md:block">{label}</p>
    </Link>
  );
}
