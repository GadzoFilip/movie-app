import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

export const MovieCard = ({ movie, buttonText }) => {
  const { addMovieToFavorites, removeMovieFromFavorites, favorites } =
    useContext(GlobalContext);

  let storedMovie = favorites.find((o) => o.imdbID === movie.imdbID);
  const favoriteDisabled = storedMovie ? true : false;

  return (
    <div className="image-container">
      {movie.Poster === "N/A" ? (
        <img
          src="https://st4.depositphotos.com/7819052/21803/v/600/depositphotos_218033152-stock-illustration-grunge-red-available-word-rubber.jpg"
          alt="no poster provided"
          height={"350"}
          width={"250"}
        />
      ) : (
        <img
          src={movie.Poster}
          alt={movie.Title}
          height={"350"}
          width={"250"}
        />
      )}
      <p>{movie.Year}</p>
      <div className="justify-content-center align-items-center">
        {buttonText === "Remove from Favorites" ? (
          // remove from favorites button
          <Button
            variant="primary"
            onClick={() => removeMovieFromFavorites(movie.imdbID)}
          >
            <span className="me-3">{buttonText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fillRule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          </Button>
        ) : (
          // add to favorites button
          <Button
            variant="primary"
            disabled={favoriteDisabled}
            onClick={() => addMovieToFavorites(movie)}
          >
            <span className="me-3">{buttonText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </Button>
        )}
      </div>
    </div>
  );
};
