import { getRecipes } from "@/lib/fetcher/recipes";
import HeroCarousel from "@/components/public/HeroCarousel";
import RecipeList from "@/components/public/recipes/RecipeList";

export default async function HomePage() {
  const recipes = await getRecipes();
  const featuredList = recipes.data.filter(recipe => recipe.isFeatured);  

  return (
    <div className="space-y-10">
      <section className="min-w-full">
        <HeroCarousel slides={featuredList} />
      </section>

      <section className="min-w-full px-12">
        <h2 className="text-2xl font-bold mb-6">Latest Recipes</h2>
        <RecipeList recipes={recipes.data} />
      </section>

      <section className="min-w-full px-12">
        <h2 className="text-2xl font-bold mb-6">Food News & Trends</h2>
      </section>
    </div>
  );
}
