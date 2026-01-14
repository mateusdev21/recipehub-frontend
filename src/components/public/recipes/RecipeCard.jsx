"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoPrintOutline } from "react-icons/io5";
import Image from "next/image";
import { formatDate } from "@/utils/formating";
// import { addFavorite, removeFavorite } from "@/redux/slices/favoriteSlice";

export default function RecipeCard({ recipe, featured = false }) { 
  // const dispatch = useDispatch();
  // const { isAuthenticated } = useSelector((state) => state.auth);
  // const favorites = useSelector((state) => state.favorites.items);

  // const isFavorited = favorites.some((fav) => fav.recipeId === recipe.id);
  const isFavorited = false;

  const handleFavorite = (e) => {
    alert("This Service Is Under Development");
    // e.preventDefault();

    // if (!isAuthenticated) {
    //   window.location.href = "/login";
    //   return;
    // }

    // if (isFavorited) {
    //   const fav = favorites.find((f) => f.recipeId === recipe.id);
    //   dispatch(removeFavorite(fav.id));
    // } else {
    //   dispatch(addFavorite(recipe.id));
    // }
  };

  const handlePrint = (e, id) => {
    e.preventDefault();
    const printLink = `/recipes/${id}/pdf`;
    window.open(`${process.env.API_URL + printLink}`, "_blank");
  };

  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className={`group relative rounded-xl overflow-hidden shadow hover:shadow-lg transition h-[75vh] bg-[#f7f7f7]
        ${featured ? "md:row-span-2" : ""}`}
    >
      <div className="relative h-48 md:h-64">
        <Image
          src={recipe.image}
          alt={recipe.title}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="group-hover:scale-105 transition duration-300"
        />

        <button
          onClick={(e) => handlePrint(e, recipe.id)}
          className="absolute top-3 right-13 bg-[#ffcf60] p-2 rounded-full shadow hover:cursor-pointer transition"
        >
          <IoPrintOutline className="text-[#222222]" />
        </button>
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow hover:cursor-pointer transition"
        >
          {isFavorited ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-700" />
          )}
        </button>
      </div>

      <div className="p-4 bg-[#f7f7f7]">
        <h3 className="font-semibold text-lg">{recipe.title}</h3>
        <div className="flex items-center mb-2 space-x-2">
          <p className="text-xs text-gray-500 mt-1">
            {`Created date : ${formatDate(recipe.createdAt)}`}
          </p>
        </div>
        <p className="font-normal text-sm text-gray-500 mt-4">
          {recipe.description}
        </p>
      </div>
    </Link>
  );
}
