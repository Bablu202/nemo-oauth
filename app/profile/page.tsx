import Header from "@components/Header";
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
    <section>
      <div className="mt-8">
        <p className="mb-3">Id: {user.id}</p>
        <p className="mb-3">Role: {user.role}</p>
        <p className="mb-3">Email: {user.email}</p>
        <p className="mb-3">Provider: {user.app_metadata["provider"]}</p>
        <p className="mb-3">Created At: {user.created_at}</p>
      </div>
    </section>
  );
}
