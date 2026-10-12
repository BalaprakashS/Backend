import SportCard from "./SportCard";
import sportsData from "./sportsData";

function SportsImages({ activeCategory }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {sportsData[activeCategory].map((sport) => (
        <SportCard
          key={sport.title}
          title={sport.title}
          image={sport.image}
        />
      ))}
    </div>
  );
}

export default SportsImages;