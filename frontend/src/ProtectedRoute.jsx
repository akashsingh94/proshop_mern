import { useAtom } from "jotai";
import { Navigate } from "react-router-dom";

import { userDataAtom } from "./atom/authAtom";

export function ProtectedRoute({ children }) {
  const [user] = useAtom(userDataAtom);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
