// "use client";
export default function FetchDemo({ textHello }: { textHello: string }) {
  //   const fetchRes = await fetch("http://localhost:3000/api/students");
  //   const localTextHello = await fetchRes.text();
  //   //   console.log("textHello", textHello);

  console.log(" this is FetchDemo");
  let localTextHello = "localTextHello";

  return (
    <>
      <div>
        <h1>FetchDemo</h1>
        <p> "LocalTextHello"{localTextHello}</p>
        <p> "TextHello"{textHello}</p>
      </div>
    </>
  );
}
