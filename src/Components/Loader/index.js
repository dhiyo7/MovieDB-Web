import React from "react";
import loading from "../../Assets/Images/Loading.gif";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import OwlCarousel from "react-owl-carousel";
import Navbar from "../Navbar";

const Loader = () => {
  return (
    <>
      <Navbar />
      <OwlCarousel
        className="owl-theme bg-slider mt-20"
        loop={true}
        nav={false}
      >
        <div className="item flex justify-center flex-row flex-nowrap my-10">
          <img className="w-96" src={loading} alt="loader" />
        </div>
      </OwlCarousel>
    </>
  );
};

export default Loader;
