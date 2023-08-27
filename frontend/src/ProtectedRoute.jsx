import { useAtom } from "jotai";
import { Navigate, Outlet } from "react-router-dom";

import { userDataAtom } from "./atom/authAtom";

export function ProtectedRoute() {
  const [user] = useAtom(userDataAtom);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
