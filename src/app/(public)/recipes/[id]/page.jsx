import { notFound } from "next/navigation";
import { getRecipeDetail } from "@/services/recipeService";
import { IoHeart } from "react-icons/io5";
import Image from "next/image";
import PrintPDFButton from "@/components/ui/PrintPDFButton";

export default async function RecipeDetailPage({ params }) {
  const { id } = await params;
  const recipe = await getRecipeDetail(id);
  const data = recipe.data;

  const isLoggedIn = true;

  if (!data) notFound();

  return (
    <div className="max-w-3xl mx-auto pt-8">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <div className="flex w-full mb-4">
        <PrintPDFButton id={data.id} />
        {isLoggedIn && (
          <button
            className="leading-none inline-flex items-center gap-2
                 rounded-2xl bg-[#222222] px-4 py-1
                 text-xs font-medium text-white hover:text-[#ffcf60]
                 hover:cursor-pointer transition"
          >
            <span>Add To Favourites</span>
            <IoHeart className="text-xl" />
          </button>
        )}
      </div>
      <div className="mb-6 h-px bg-gray-200" />
      {data.image && (
        <div className="mb-6">
          <Image
            src={data.image}
            alt={data.title}
            width={400}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
      )}
      <p className="text-gray-700 mb-6">{data.description}</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-1">
          {data.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          {data.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}
