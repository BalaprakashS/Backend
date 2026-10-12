
function Banner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-5">
      <div className="relative flex min-h-[280px] items-center overflow-hidden rounded-xl bg-slate-900 md:min-h-[380px]">

        {/* Banner Image */}
        <img
          src="/images/banner.png"
          alt="Outdoor sports and adventure"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-xl p-6 text-white md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest">
            Explore the outdoors
          </p>

          <h1 className="mb-4 text-3xl font-bold md:text-5xl">
            Ready for Your Next Adventure?
          </h1>

          <p className="mb-6 text-sm md:text-lg">
            Discover sports essentials for every adventure.
          </p>

          <button className="rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:bg-blue-700 hover:text-white">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
