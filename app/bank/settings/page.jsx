async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 8000));
  return {
    message: " This is a bank ",
  };
}

export default async function page() {
  await getData();
  return (
    <>
      <div>this is settings page...</div>
    </>
  );
}
