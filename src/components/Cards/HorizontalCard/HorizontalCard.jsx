import "./horizontalCard.css";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";
import { imageURL } from "../../../constants/Api";

function HorizontalCard({ movie }) {
  const navigate = useNavigate();

  const navigateToDetailHandler = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      onClick={navigateToDetailHandler}
      className="horizontal-card-container"
    >
      <div>
        <img
          src={`${imageURL}/w154/${movie.poster_path}`}
          alt="movie poster"
          className="horizontal-card-image"
        />
        <h3 className="horizontal-card-title">{movie.title}</h3>
      </div>
      <div className="horizontal-card-rate-container">
        {movie.vote_average > 0 ? (
          <>
            <Rate
              tooltips={1}
              className="horizontal-card-rate"
              disabled
              defaultValue={1}
              value={1}
              count={1}
            />
            <span className="horizontal-card-rate-count">
              {movie.vote_average.toFixed(1)}
            </span>
          </>
        ) : (
          <p className="horizontal-not-rated">*Not voted yet.</p>
        )}
      </div>
    </div>
  );
}

export default HorizontalCard;
