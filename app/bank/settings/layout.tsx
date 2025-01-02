export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <div>This is settings layout</div>
      <div>{children}</div>
    </>
  );
}
