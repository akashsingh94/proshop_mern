import { Outlet } from "react-router-dom";

import { AppHeader } from "../components/header/AppHeader";
import { Toaster } from "../components/feedback/Toaster";
import "./Layout.css";

export function Layout() {
  const year = new Date().getFullYear();
  return (
    <div className="app-layout">
      <AppHeader />
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p>&copy; {year} ProShop</p>
      </footer>
      <Toaster />
    </div>
  );
}
