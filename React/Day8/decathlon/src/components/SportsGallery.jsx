import { useState } from "react";
import CategoryButtons from "./CategoryButtons";
import SportsImages from "./SportsImages";

function SportsGallery() {
  const [activeCategory, setActiveCategory] = useState("All Sports");

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <CategoryButtons
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <SportsImages activeCategory={activeCategory} />
    </div>
  );
}

export default SportsGallery;