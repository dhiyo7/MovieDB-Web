import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/moovietime-logo-grey.svg";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-between ">
            <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
              © 2021 MoovieTime. All rights reserved.
            </p>
            <img src={logo} alt="logo" />
            <Link to="/external">
              <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
                Made with React
              </p>
            </Link>
          </div>
        </footer>
      </>
    );
  }
}
