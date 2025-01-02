import Link from "next/link";

export default function PhotoPage() {
  //https://picsum.photos/id/237/200/300

  return (
    <>
      <div className="flex items-center flex-wrap justify-between">
        {Array.from({ length: 20 }, (_, index) => index + 10).map(
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
      </div>
    </>
  );
}
