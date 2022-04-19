import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state]);

  // actions
  const addMovieToFavorites = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVORITES", payload: movie });
  };

  const removeMovieFromFavorites = (imdbID) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITES", payload: imdbID });
  };

  return (
    <GlobalContext.Provider
      value={{
        favorites: state.favorites,
        addMovieToFavorites,
        removeMovieFromFavorites,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
