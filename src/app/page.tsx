import ProductCard from "./Components/ProductCard/productCard";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ProductCard
        image="https://placehold.co/300x300/png?text=Gear+S3"
        name="Samsung Gear S3 Samsung"
        category="for Unisex"
        price={85000}
      />
    </div>
  );
}