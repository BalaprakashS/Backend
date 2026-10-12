import sportsData from "./sportsData";

function CategoryButtons({ activeCategory, setActiveCategory }) {
  return (
    <div className="mb-6 flex gap-8 border-b border-gray-200">
      {Object.keys(sportsData).map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`border-b-2 px-2 py-3 font-medium ${
            activeCategory === category
              ? "border-blue-700 text-blue-700"
              : "border-transparent text-gray-700 hover:text-blue-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;