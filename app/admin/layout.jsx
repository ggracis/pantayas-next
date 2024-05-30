// app/admin/layout.jsx
"use client";
import { useEffect } from "react";
import LoginForm from "@/components/UI/LoginForm";
import useAuthStore from "@/stores/useAuthStore";

export default function AdminLayout({ children }) {
  const { user, loading, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    return <LoginForm />;
  }

  return <>{children}</>;
}
