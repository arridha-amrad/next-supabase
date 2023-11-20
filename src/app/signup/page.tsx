import SignUpForm from "@/components/SignUpForm";
import createSupabaseServer from "@/supabase/Server";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
  const supabase = createSupabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    redirect("/");
  }
  return (
    <main className="container mx-auto">
      <section className="border rounded-lg my-8 border-neutral-700 p-8 mx-auto max-w-md">
        <SignUpForm />
      </section>
    </main>
  );
};

export default SignUpPage;
