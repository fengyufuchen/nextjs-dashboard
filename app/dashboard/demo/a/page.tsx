import { cookies } from "next/headers";
async function getLatestVersion() {
  const response = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  console.log("response", response);
  return response;
}

export default async function Page() {
  const publishVersion = await getLatestVersion();

  const cookieStore = await cookies();

  async function publish() {
    "use server";
    if (publishVersion !== (await getLatestVersion())) {
      //   throw new Error("The version has changed since pressing publish");
      console.log("publishVersion", publishVersion);
    }
  }

  return (
    <>
      {cookieStore.getAll().map((cookie) => {
        return (
          <div key={cookie.name}>
            <p>name: {cookie.name}</p>
            <p>value: {cookie.value}</p>
          </div>
        );
      })}
      <form>
        <button formAction={publish}>Publish</button>
      </form>
    </>
  );
}
