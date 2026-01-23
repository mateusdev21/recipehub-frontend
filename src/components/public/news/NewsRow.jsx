import Link from "next/link";
import Image from "next/image";

export default function NewsRow({ news }) {
  const { id, title, summary, image } = news;

  return (
    <Link
      href={`/news/${id}`}
      className="group cursor-pointer bg-[#f7f7f7] w-full transition"
    >
      <div className="flex border-t-2 border-[#fecf5d] py-4 px-2">
        <div className="mr-4 shrink-0">
          <Image src={`/upload${image}`} alt={title} width={200} height={200} />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold text-gray-900 group-hover:underline group-hover:text-[#fecf5d]">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">{summary}</p>
        </div>
      </div>
    </Link>
  );
}
