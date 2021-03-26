import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getMovieBySearch } from "../../utils/redux/actions/movie";
import { useSelector, useDispatch } from "react-redux";
import { API_IMAGE } from "../../utils/environment";

const Search = (props) => {
  const { searchKey } = useLocation();
  const dispatch = useDispatch();
  const { search: getSearch } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovieBySearch(searchKey));
  }, [searchKey, dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const unsubscribe = window.addEventListener("focus", () => {
      dispatch(getMovieBySearch(searchKey));
    });
    return unsubscribe;
  }, [window, dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="container">
        <div className="flex flex-wrap -m-2 ml-24 mt-20">
          {getSearch &&
            getSearch.map(
              ({
                vote_average,
                poster_path,
                title,
                id,
                release_date,
                backdrop_path,
              }) => {
                return (
                  <>
                    <div className="lg:w-1/5 sm:w-1/2 p-4" key={id}>
                      <div className="flex relative">
                        <div className="bg-gray-500 opacity-80 px-3 py-2 mt-1 h-12 z-10 ml-40">
                          {vote_average}
                        </div>
                        {poster_path !== undefined ? (
                          <img
                            alt="gallery"
                            className="absolute inset-0 h-96 object-cover object-center"
                            src={`${API_IMAGE}${poster_path}`}
                          />
                        ) : (
                          <img
                            alt="gallery"
                            className="absolute inset-0 h-96 object-cover object-center"
                            src={`${API_IMAGE}${backdrop_path}`}
                          />
                        )}
                        <div className="-ml-64 h-96 w-66 px-8 py-10 relative z-10 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                          <div className="pl-2 mr-2 mt-2 inline-block ml-16">
                            <svg
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-4 h-4 text-yellow-400"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                          </div>
                          <p className="font-bold inline-block text-base text-white mb-5">
                            {vote_average}
                          </p>
                          <h1 className="title-font text-lg font-medium text-white mb-3 text-center">
                            Action
                          </h1>
                          <Link
                            to={{
                              pathname: `/detail/${id}`,
                            }}
                            className="flex mt-10 text-white bg-red-600 border py-2 px-20 focus:outline-none hover:bg-gray-400 rounded-full"
                          >
                            View
                          </Link>
                          <Link
                            className="flex mt-10 rounded-full text-black bg-white border py-2 px-20 focus:outline-none hover:bg-gray-400 hover:text-white"
                            href="./Borrow.html"
                          >
                            Add
                          </Link>
                        </div>
                      </div>
                      <h1 className="text-white font-bold">{title}</h1>
                      <h1 className="text-white font-light">
                        {release_date !== undefined
                          ? release_date.split("-").slice(0, 1)
                          : null}
                      </h1>
                    </div>
                  </>
                );
              }
            )}
        </div>
      </div>
    </>
  );
};

export default Search;
