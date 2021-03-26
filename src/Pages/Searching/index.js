import React, { Component } from "react";
import Navbar from "../../Components/Navbar";
import Search from "../../Components/Search";
import Footer from "../../Components/Footer";

export default class Searching extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Search />
        <Footer />
      </>
    );
  }
}
