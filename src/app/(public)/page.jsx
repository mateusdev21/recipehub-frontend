import { getRecipes } from "@/lib/fetcher/recipes";
import { getNews } from "@/lib/fetcher/news";
import HeroCarousel from "@/components/public/HeroCarousel";
import RecipeList from "@/components/public/recipes/RecipeList";
import NewsList from "@/components/public/news/NewsList";

export default async function HomePage() {
  const recipes = await getRecipes();
  const news = await getNews();
  const latestNews = news.data
  .slice()
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  .slice(0, 6);
  const featuredList = recipes.data.filter((recipe) => recipe.isFeatured);
  const latestList = recipes.data
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);

  return (
    <div className="space-y-10">
      <section className="min-w-full">
        <HeroCarousel slides={featuredList} />
      </section>

      <section className="min-w-full px-12">
        <h2 className="text-2xl font-bold mb-6">Latest Recipes</h2>
        <RecipeList recipes={latestList} />
      </section>

      <section className="min-w-full px-12">
        <h2 className="text-2xl font-bold mb-6">Food News & Trends</h2>
        <NewsList news={latestNews}/>
      </section>
    </div>
  );
}
