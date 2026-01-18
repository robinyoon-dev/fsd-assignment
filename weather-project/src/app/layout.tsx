import { Outlet } from "react-router-dom";
import { Navigation } from "@/widgets/navigation";

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
