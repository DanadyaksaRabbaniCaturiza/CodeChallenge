function NavbarComponents() {
  return (
    <>
      <div className="flex flex-row justify-center px-4 text-white font-extrabold">
        <div className="flex flex-row gap-8 m-4 font-semibold text-lg ">
          <a href="/" className="hover:text-red-500">
            Home
          </a>
          <a href="/aboutus" className="hover:text-red-500">
            About Us
          </a>
          <a href="/product&services" className="hover:text-red-500">
            Product & Services
          </a>
          <a href="/teams" className="hover:text-red-500">
            Teams
          </a>
        </div>
      </div>
    </>
  );
}
export default NavbarComponents;
