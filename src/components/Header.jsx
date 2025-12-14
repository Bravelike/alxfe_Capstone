import { List, BarChart3, Archive } from "lucide-react";

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="bg-blue-600 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Todo Master</h1>

      <nav className="flex gap-2">
        <button onClick={() => setCurrentPage("tasks")}>
          <List /> Tasks
        </button>
        <button onClick={() => setCurrentPage("stats")}>
          <BarChart3 /> Stats
        </button>
        <button onClick={() => setCurrentPage("archive")}>
          <Archive /> Archive
        </button>
      </nav>
    </div>
  );
}
