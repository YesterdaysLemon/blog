
import { Outlet } from "react-router";
import Navbar from "~/components/ui/navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
