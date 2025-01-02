import Link from "next/link";
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return {
    message: " This is a bank ",
  };
}

export default async function Page() {
  const { message } = await getData();
  return (
    <>
      <div>{message}</div>

      {Array.from({ length: 3 }, (_, index) => index + 20).map(
        (item, index) => {
          return (
            <Link href={`/photo/${item}`}>
              <img
                key={index}
                src={`https://picsum.photos/id/${item}/200/300`}
                alt="random"
              />
            </Link>
          );
        }
      )}
    </>
  );
}
