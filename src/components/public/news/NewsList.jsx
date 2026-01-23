"use client";
import NewsRow from "./NewsRow";

export default function NewsList({ news }) {
  return (
    <div>
      {news.map((item) => (
        <NewsRow key={item.id} news={item} />
      ))}
      <hr className="text-[#fecf5d]" />
    </div>
  );
}
