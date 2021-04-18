import React, { useState } from "react";
import Film from "./Film";

const Films = (props) => {
  const [show, setShow] = useState(true);
  const [filmData, setFilmData] = useState(null);

  function handleShow() {
    setFilmData(null);
    setShow(true);
  }

  function renderFilm() {
    if (show) {
      return props.data.map((book) => {
        return (
          <div
            className="card col-lg-2 col-sm-4 col-xs-14"
            key={book.primary_isbn10}
          >
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src={book.book_image}
                alt={book.title}
                className="img-fluid"
                width={book.book_image_width}
                height={book.book_image_height}
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">
                {book.description.substring(0, 30)}...
              </p>
              <p className="card-text font-weight-bold">
                {" "}
                By The Author {book.author}{" "}
              </p>
              <p className="card-text font-weight-light">
                {" "}
                Published by {book.publisher}{" "}
              </p>
              {book.rank}
              <span className="fa fa-star checked"></span> <br />
              <br />
              <button
                onClick={() => {
                  setFilmData(book);
                  setShow(false);
                }}
                className="btn btn-success"
              >
                Shop
              </button>
            </div>
          </div>
        );
      });
    } else {
      return <Film />;
    }
  }

  return show ? (
    renderFilm()
  ) : (
    <Film data={filmData} show={show} show0ff={handleShow} />
  );
};

export default Films;
