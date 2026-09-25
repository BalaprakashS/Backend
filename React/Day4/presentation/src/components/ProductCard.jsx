function ProductCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-72">
      <h3 className="text-xl font-bold text-gray-800">
        Laptop
      </h3>

      <p className="text-gray-600 mt-2">
        High-performance laptop
      </p>

      <p className="text-2xl font-bold text-blue-600 mt-4">
        ₹50,000
      </p>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-4 hover:bg-blue-700">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;