"use client";

import { useSupabase } from "@/supabase/Client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const supabase = useSupabase();
  const logout = async () => {
    await supabase.auth.signOut();
  };
  return (
    <button onClick={logout} className="px-4 py-2 bg-red-700 rounded-lg">
      Logout
    </button>
  );
};

export default LogoutButton;
