function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          My Website
        </h1>

        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>

          <a href="#" className="hover:text-blue-400">
            About
          </a>

          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
