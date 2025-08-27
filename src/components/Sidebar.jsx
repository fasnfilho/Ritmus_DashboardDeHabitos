import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Ritmus</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/stats" className="hover:text-gray-300">Estatísticas</Link>
        <Link to="/settings" className="hover:text-gray-300">Configurações</Link>
      </nav>
    </div>
  );
}
