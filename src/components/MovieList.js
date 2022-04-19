import React from "react";
import { Row, Col } from "react-bootstrap";
import { MovieCard } from "./MovieCard";

const MovieList = ({ movies, buttonText }) => {
  return (
    <Row className="justify-content-center">
      {movies.map((movie, index) => (
        <Col key={index} className="m-5" xs lg={2}>
          <MovieCard movie={movie} buttonText={buttonText} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
