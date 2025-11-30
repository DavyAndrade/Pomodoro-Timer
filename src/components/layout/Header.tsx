import { Clock } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full p-6 sticky top-0 z-50 bg-gray-950 text-white flex justify-center items-center gap-2">
      <Clock />
      <h1 className="text-xl text-center font-semibold">Pomodoro Timer</h1>
    </header>
  );
}
