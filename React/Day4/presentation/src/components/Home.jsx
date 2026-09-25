import ProductCard from "./ProductCard";

function Home() {
  return (
    <section className="bg-gray-100 min-h-screen p-10">

      <h2 className="text-4xl font-bold text-center mb-10">
        Our Products
      </h2>

      <div className="flex justify-center gap-8">

        <ProductCard />

        <ProductCard />

        <ProductCard />

      </div>

    </section>
  );
}

export default Home;