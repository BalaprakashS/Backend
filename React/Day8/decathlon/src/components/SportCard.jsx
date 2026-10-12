function SportCard({ title, image }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover transition duration-300 group-hover:scale-105 md:h-64"
      />

      <h3 className="absolute bottom-0 w-full bg-black/60 p-3 text-center font-semibold text-white">
        {title}
      </h3>
    </div>
  );
}

export default SportCard;