"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { fetchRecipes } from "@/redux/slices/recipeSlice";
import RecipeCard from "@/components/public/RecipeCard";
import LatestRecipeSkeleton from "@/components/public/LatestRecipeSkeleton";
import HeroCarousel from "@/components/public/HeroCarousel";

export default function HomePage() {
  const dispatch = useDispatch();

  const { list, loading } = useSelector((state) => state.recipes);

  const featuredList = list.filter((recipe) => recipe.isFeatured);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className="space-y-10">
      {/* Featured Recipes */}
      <section className="min-w-full">
        <HeroCarousel slides={featuredList} />
      </section>

      {/* Latest Recipes */}
      <section className="min-w-full px-12">
        <h2 className="text-2xl font-bold mb-6">Latest Recipes</h2>
        {loading ? (
          <LatestRecipeSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...list]
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 5)
              .map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            <Link
              href={`/recipes`}
              className='group relative rounded-xl overflow-hidden shadow hover:shadow-lg transition h-[75vh] bg-[#222222]'
            >
              <div className="relative h-full z-10">
                <Image
                  src='/upload/vegetable.jpg'
                  alt='vegetable.jpg'
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition duration-300 opacity-25"
                />
              </div>
              <div className="container absolute flex items-center justify-center top-50">
                <p className="text-white text-lg font-bold underline">View All Recipes →</p>
              </div>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
