import React, { useState } from "react";
import Navbar from "../components/Global components/Navbar.jsx";
import Searchbar from "../components/Global components/Mobile searchbar.jsx";

import Movie from "../components/Home page components/Movie.jsx";
import Row from "../components/Home page components/Row.jsx";
import requests from "../Requests.js";
import Footer from "../components/Global components/Footer.jsx";

const Home = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <div className="w-full background-color min-h-[100vh]">
        {isDropdownVisible && (
          <Searchbar
            toggleDropdown={toggleDropdown}
            isActive={isDropdownVisible}
          />
        )}
        <Navbar toggleDropdown={toggleDropdown} />
        <div className="h-full w-full md:px-[8rem] px-[1rem] pb-[2rem] pt-[8rem]">
          <Row title="Popular" fetchURL={requests.requestPopular} rowID="One" />
          <Row
            title="Top Rated"
            fetchURL={requests.requestTopRated}
            rowID="Two"
          />
          <Movie />
          <Row
            title="Trending"
            fetchURL={requests.requestTrending}
            rowID="Three"
          />
          <Row
            title="Upcoming"
            fetchURL={requests.requestUpcoming}
            rowID="Four"
          />
          <Movie />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
