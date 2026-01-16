"use client";

export default function NewsList({ news }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {news.map((item) => (
        <div key={item.id}>
            <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
