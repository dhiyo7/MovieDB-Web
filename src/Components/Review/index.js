import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getReviewById } from "../../utils/redux/actions/movie";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const Review = () => {
  const { movieReviewDetail: item } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getReviewById(id));
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="mt-36 ml-24">
        <span className="text-line font-bold">REVIEWS</span>
        <OwlCarousel
          className="owl-theme mt-10 -ml-4"
          items="2"
          autoPlay
          nav
          dots
          loop
        >
          {item !== undefined &&
            item.map(({ id, author, author_details, content, created_at }) => {
              return (
                <div className="item p-4" key={id}>
                  <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                      {/* <img src={} alt="avatart"/> */}
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium ">
                        {author}
                      </h2>
                      <p className="text-gray-600 text-sm font-extralight mb-3">
                        {created_at.toLocaleString("en-US")}
                      </p>
                      <p className="leading-relaxed text-base line-clamp-5">
                        {content}
                      </p>
                    </div>
                    <div className="w-18 h-10 sm:mb-0 -mr-3 mb-4 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 flex-shrink-0">
                      <div className="pl-2 -ml-3 mr-8 -mt-3">
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
                      <p className="font-bold text-2xl -ml-6 text-black">
                        {author_details.rating}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Review;
