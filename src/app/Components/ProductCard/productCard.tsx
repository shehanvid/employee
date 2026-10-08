"use client";

import React, { useState } from "react";

type ProductCardProps = {
  image: string;
  name: string;
  category: string;
  price: number;
  currency?: string;
  defaultFavorite?: boolean;
};

const ProductCard = ({
  image,
  name,
  category,
  price,
  currency = "Rs.",
  defaultFavorite = false,
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(defaultFavorite);

  const handleAdd = () => {
    console.log("Added to cart:", name);
  };

  return (
    <div className="w-56 bg-white font-sans">
      <div className="relative flex items-center justify-center bg-gray-100 px-4 py-6">
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="Add to favorites"
          className="absolute left-2.5 top-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-sm transition hover:scale-105"
        >
          {isFavorite ? "♥" : "♡"}
        </button>
        <img src={image} alt={name} className="h-40 w-full object-contain" />
      </div>

      <div className="border-b border-gray-300 py-2.5">
        <h3 className="text-[15px] font-bold text-gray-900">{name}</h3>
        <p className="mb-2 mt-1 text-sm text-gray-600">{category}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {currency}
            {price.toLocaleString("en-US")}
          </span>
          <button
            type="button"
            onClick={handleAdd}
            aria-label="Add to cart"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xl leading-none text-white transition hover:bg-gray-800"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;