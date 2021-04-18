const Film = (props) => {
  return (
    <div className="container">
      <div className="card text-left">
        <img
          className="card-img-top img-responsive"
          src={props.data.book_image}
          alt={props.data.title}
        />
        <div className="card-body">
          <h4 className="card-title">{props.data.title}</h4>
          <p className="card-text">By the Author : {props.data.author}</p>
          <strong>{props.data.rank} RANK</strong>
          <br />
          <div className="d-flex flex-row">
            <div className="p-2 text-dark">Buy it from :</div>
            <a
              rel="noreferrer"
              class="p-2 btn btn-primary"
              target="_blank"
              href={props.data.buy_links[0].url}
              role="button"
            >
              {props.data.buy_links[0].name}
            </a>
            <a
              rel="noreferrer"
              class="p-2 btn btn-warning"
              target="_blank"
              href={props.data.buy_links[1].url}
              role="button"
            >
              {props.data.buy_links[1].name}
            </a>
            <a
              rel="noreferrer"
              class="p-2 btn btn-secondary"
              target="_blank"
              href={props.data.buy_links[4].url}
              role="button"
            >
              {props.data.buy_links[4].name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
