import SignOutButton from "@components/actionComponents/SignOut";
import getUserSession from "lib/getUserSession";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const {
    data: { session },
  } = await getUserSession();

  if (!session) {
    return redirect("/login");
  }

  const user = session.user;

  return (
    <section className="flex justify-center border ">
      <div className="mt-8">
        <p className="mb-3">Id: {user.id}</p>
        <p className="mb-3">Role: {user.role}</p>
        <p className="mb-3">Email: {user.email}</p>
        <p className="mb-3">Provider: {user.app_metadata["provider"]}</p>
        <p className="mb-3">Created At: {user.created_at}</p>
        <SignOutButton />
      </div>
    </section>
  );
}
