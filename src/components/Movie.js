import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

const default_img =
  "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fbrands-colored-1%2F60%2Fdropbox-storage-drive-share-brand-512.png&type=sc960_832";

function Movie({ id, year, title, summary, poster, genres }) {
  function handle404(e) {
    e.target.onError = null;
    e.target.src = default_img;
  }
  return (
    <div className="movies__movie">
      <Link
        to={{
          pathname: "/movie-detail",
          state: {
            id,
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
      >
        <img src={poster} alt={title} title={title} onError={handle404} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 200)} ...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.proptype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
