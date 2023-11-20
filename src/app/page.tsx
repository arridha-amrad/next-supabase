import createSupabaseServer from "@/supabase/Server";

const Page = async () => {
  const supabase = createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <main className="container mx-auto">
      {user ? (
        <section className="w-full my-4">
          <h1 className="text-center font-bold text-3xl">Hi {user.email}</h1>
          <p className="text-center">id: {user.id}</p>
        </section>
      ) : (
        <section className="w-full my-4">
          <h1 className="text-center font-bold text-3xl">
            Welcome to Todo App
          </h1>
        </section>
      )}
    </main>
  );
};

export default Page;
