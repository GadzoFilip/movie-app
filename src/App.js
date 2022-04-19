import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Navigation from "./components/Navigation";

const App = () => {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieSearchRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8b206ad0`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) setMoviesSearch(responseJson.Search);
  };

  console.log(moviesSearch);

  useEffect(() => {
    getMovieSearchRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="">
      <Navigation
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        heading="Movie Library"
      />
      <div className="container">
        <MovieList movies={moviesSearch} favoritesText="Add to Favorites" />
      </div>
    </div>
  );
};

export default App;
