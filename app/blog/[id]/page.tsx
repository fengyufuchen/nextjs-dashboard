interface PageParams {
  params: {
    id: string;
  };
}

// export default async function Page({ params }: PageParams) {
//   const { id } = await params;

//   return (
//     <div>
//       <h1>Blog Page id: {id}</h1>
//     </div>
//   );
// }

// export default async function Page(params) {
//   //输出 params的所有属性名称

//   console.log("props", Object.keys(params));
//   console.log("params", params);

//   return (
//     <div>
//       <h1>Blog Page id</h1>
//     </div>
//   );
// }
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <h1>My Page</h1>;
}