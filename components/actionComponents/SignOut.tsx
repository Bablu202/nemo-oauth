import getUserSession from "lib/getUserSession";
import createSupabaseServerClient from "lib/supabase/server";
import Link from "next/link";

const SignOutButton = async () => {
  const { data } = await getUserSession();

  const logoutAction = async () => {
    "use server";
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  };

  return (
    <nav className=" flex justify-between container items-center">
      <ul className="flex items-center space-x-4">
        {data.session && (
          <form action={logoutAction} className="flex">
            <button className="ml-4 bg-white border p-2 mb-6">Logout</button>
          </form>
        )}
      </ul>
    </nav>
  );
};

export default SignOutButton;
