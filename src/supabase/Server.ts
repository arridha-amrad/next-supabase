import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "../../types/supabase-generated";

const createSupabaseServer = () => {
  return createServerClient<Database>(
    process.env.PROJECT_URL!,
    process.env.PROJECT_API_KEY!,
    {
      cookies: {
        get(key) {
          return cookies().get(key)?.value;
        },
      },
    }
  );
};
export default createSupabaseServer;
