import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Navigation from "./components/Navigation";
import { Container } from "react-bootstrap";

const App = () => {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieSearchRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8b206ad0`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) setMoviesSearch(responseJson.Search);
  };

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
      {moviesSearch.length > 0 ? (
        <Container>
          <MovieList movies={moviesSearch} buttonText="Add to Favorites" />
        </Container>
      ) : (
        <div className="m-4">
          <h1>Search for a movie </h1>
        </div>
      )}
    </div>
  );
};

export default App;
