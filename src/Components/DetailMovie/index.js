import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../utils/redux/actions/movie";
import { API_IMAGE } from "../../utils/environment";

const DetailMovie = () => {
  const { movieDetail: item } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const { id } = useParams();

  //   console.log(
  //     "item",
  //     item.budget.toLocaleString("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     })
  //   );
  console.log("id", id);

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [id]);  // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <div
        className="bg-no-repeat bg-cover mt-20"
        style={{
          backgroundImage: `url(${API_IMAGE}${item.backdrop_path})`,
          backgroundPositionY: "0px",
        }}
      >
        <div className="bg-black bg-opacity-75 h-96 text-white">
          <div class="container mx-auto flex flex-wrap px-5 py-24 items-center justify-center flex-col">
            <div className="bg-black bg-opacity-60 text-white mt-56 w-screen -ml-18 py-2">
              <div className="w-1/5">
                <div className="pl-2 mr-2 -mt-7 ml-98 py-9">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <p className="font-bold text-3xl -mt-18 ml-110 text-white">
                  {item.vote_average}
                </p>
              </div>
              <ul className="ml-120 -mt-12 border-r-2 border-white w-24">
                <li className="font-extralight">User Score</li>
                <li className="font-bold truncate">{`${item.vote_count} Votes`}</li>
              </ul>
              <ul className="ml-130 -mt-12 border-r-2 border-white w-24">
                <li className="font-extralight">Status</li>
                <li className="font-bold">{item.status}</li>
              </ul>
              <ul className="ml-140 -mt-12 border-r-2 border-white w-24">
                <li className="font-extralight">Language</li>
                <li className="font-bold">
                  {item.spoken_languages !== undefined
                    ? item.spoken_languages[0].name
                    : null}
                </li>
              </ul>
              <ul className="ml-150 -mt-12 border-r-2 border-white w-32">
                <li className="font-extralight">Budget</li>
                <li className="font-bold truncate">
                  {Number(item.budget).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </li>
              </ul>
              <ul className="ml-160 -mt-12 border-r-2 border-white w-36">
                <li className="font-extralight">Production</li>
                <li className="font-bold truncate">
                  {item.production_companies !== undefined
                    ? item.production_companies[0].name
                    : null}
                </li>
              </ul>
            </div>
            <div class="lg:w-5/6 w-full">
              <h1 className="-mt-36 ml-66 font-light">
                {item.release_date !== undefined
                  ? item.release_date.split("-").slice(0, 1)
                  : null}
              </h1>
              <h1 className="font-bold ml-66 text-3xl">
                {item.original_title}
              </h1>
              <img
                src={`${API_IMAGE}${item.poster_path}`}
                alt=""
                className="-mt-20 z-20 w-60 h-80"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="lg:w-5/6 w-full z-0">
        <h1 className="mt-3 ml-98 font-medium text-2xl text-line">OVERVIEW</h1>
        <p className="ml-98">{item.overview}</p>
      </div>
    </>
  );
};

export default DetailMovie;
