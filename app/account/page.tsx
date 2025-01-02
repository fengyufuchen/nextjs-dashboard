import AccountForm from "./account-form";
import { createClient } from "@/app/utils/supabase/server";

export default async function Account() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // console.log("Account", user);

  return (
    <>
      <div>currentUser: {JSON.stringify(user)}</div>
      <AccountForm user={user} />
    </>
  );
}
