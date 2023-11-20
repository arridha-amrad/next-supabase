"use client";

import { SupabaseClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createBrowserClient } from "@supabase/ssr";
import { Database } from "../../types/supabase-generated";

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const SupabaseClientProvider = ({ children }: Props) => {
  const router = useRouter();

  const [supabase] = useState(() =>
    createBrowserClient(
      process.env.NEXT_PUBLIC_PROJECT_URL!,
      process.env.NEXT_PUBLIC_PROJECT_API_KEY!
    )
  );

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      console.log("auth state changed");
      router.refresh();
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase.auth]);

  return <Context.Provider value={{ supabase }}>{children}</Context.Provider>;
};

export const useSupabase = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useSupabase must be used inside SupabaseClientProvider");
  }
  return context.supabase;
};
