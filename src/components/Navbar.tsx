import Link from "next/link";
import LogoutButton from "./LogoutButton";
import createSupabaseServer from "@/supabase/Server";

const Navbar = async () => {
  const supabase = createSupabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <nav className="w-full h-14 bg-neutral-700">
      <ul className="flex items-center justify-center gap-6 h-full">
        <li className="underline underline-offset-4">
          <Link href="/signup">Sign Up</Link>
        </li>
        <li className="underline underline-offset-4">
          <Link href="/signin">Login</Link>
        </li>
        <li className="underline underline-offset-4">
          <Link href="/">Home</Link>
        </li>
        <li className="underline underline-offset-4">
          <Link href="/todos">Todos(req-auth)</Link>
        </li>
        {session && (
          <li>
            <LogoutButton />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
