import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const DetaliedBox = (props) => {
  return (
    <>
      {props.moviesDetail.map((movie, index) => (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          key={index}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {movie.Title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Year published: {movie.Year}</p>
            <p>Type: {movie.Type}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      ))}
    </>
  );
};
export default DetaliedBox;
