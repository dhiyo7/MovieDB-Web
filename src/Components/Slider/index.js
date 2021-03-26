import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { getTrending } from "../../utils/redux/actions/movie";
import { useDispatch, useSelector } from "react-redux";
import { API_IMAGE } from "../../utils/environment";
import Loader from "../Loader";

const Slider = () => {
  const dispatch = useDispatch();
  const { trending: stateTrending, isPending } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(getTrending());
  }, [dispatch]);

  if (isPending) {
    return <Loader />;
  }
  return (
    <>
      <OwlCarousel
        className="owl-theme bg-slider mt-20"
        loop={true}
        nav={false}
        autoplay={true}
        autoplayTimeout={3000}
        dots={true}
      >
        {stateTrending &&
          stateTrending.map(
            ({
              id,
              title,
              vote_average,
              poster_path,
              overview,
              release_date,
            }) => {
              return (
                <>
                  <div
                    className="item flex justify-center flex-row flex-nowrap my-10"
                    key={id}
                  >
                    <div className="w-96">
                      <img
                        src={API_IMAGE + poster_path}
                        alt="image1"
                        className="h-80"
                      />
                    </div>
                    <div className="bg-black mt-8 mb-8 w-11/12 mr-5 pr-4">
                      <div className="pl-2 mr-2 mt-2 inline-block">
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
                      <p className="font-bold inline-block text-base text-white">
                        {vote_average}
                      </p>
                      <div className="pl-3 text-white h-50">
                        <h1 className="font-bold text-2xl">{title}</h1>
                        <h5 className="inline-block">
                          {release_date.split("-").slice(0, 1)}
                        </h5>
                        <svg
                          height="10"
                          width="10"
                          className="inline-block -mt-1 ml-2 mr-2"
                        >
                          <circle
                            cx="5"
                            cy="5"
                            r="4"
                            stroke="gray"
                            stroke-width="3"
                            fill="gray"
                          />
                        </svg>
                        <h1 className="inline-block">Sci-Fi</h1>
                        <p className="text-sm font-light my-2 line-clamp-4">
                          {overview}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          )}
      </OwlCarousel>
    </>
  );
};

export default Slider;
