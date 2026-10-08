import React from 'react'
import ProductCard from './productCard'

const productCradWithMockData = () => {
  return (
    <div>
      <ProductCard
      image="https://placehold.co/300x300/png?text=Gear+S3"
      name="Samsung Gear S3 Samsung"
      category="male"
      price={85000}
      isFavorite={fav}
      onFavoriteToggle={() => setFav(!fav)}
      onAdd={() => console.log('Added to cart')}
    />
    </div>
  )
}

export default productCradWithMockData
