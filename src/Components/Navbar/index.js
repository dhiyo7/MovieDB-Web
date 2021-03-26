import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../Assets/Images/moovietime-logo.svg";
import LogoMovie from "../../Assets/Images/movie-icon.svg";
import LogoSearch from "../../Assets/Images/search-icon.svg";
import LogoCategory from "../../Assets/Images/grid-icon.svg";

const Navbar = () => {
  const [searchKey, setSearchKey] = useState("");

  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      return;
    } else {
      history.push({
        pathname: "/search",
        search: `query=${searchKey}`,
        searchKey,
      });
    }
  };

  return (
    <>
      <header className="text-gray-400 bg-navbar body-font fixed z-30 w-full top-0">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src={Logo} alt="Logo" />
          </Link>

          <div className="relative mx-auto text-gray-600 lg:block hidden">
            <button type="submit" className="absolute left-0 top-0 mt-2 ml-2">
              <img src={LogoMovie} alt="movie" />
            </button>
            <input
              className="bg-search h-10 pl-10 pr-72 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Find movie"
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleSearch(event);
                }
              }}
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
              <img src={LogoSearch} alt="Search" />
            </button>
          </div>

          <nav className="md:ml-auto flex flex-wrap items-end text-base justify-end">
            <Link className="mr-5 hover:text-white">
              <img src={LogoCategory} alt="Category" className="inline-block" />{" "}
              Categories
            </Link>
            <Link className="mr-5 hover:text-white">Movies</Link>
            <Link className="mr-5 hover:text-white">TV Shows</Link>
            <Link className="mr-5 hover:text-white">Login</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
