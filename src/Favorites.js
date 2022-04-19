import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import { GlobalContext } from "./context/GlobalState";
import MovieList from "./components/MovieList";

const Favorites = () => {
  const { favorites } = useContext(GlobalContext);
  return (
    <div>
      <Navigation heading="Favorites" />
      <Container fluid>
        {favorites.length ? (
          <MovieList movies={favorites} favoritesText="Remove from Favorites" />
        ) : (
          <div>
            <h1>Add your favorite movie here :)</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Favorites;
