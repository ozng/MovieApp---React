import { fetchMovies, searchMovie } from "./helpers/movie";

export const GET_POPULAR = "GET_POPULAR";
export const GET_UPCOMING = "GET_UPCOMING";
export const GET_TOP_RATED = "GET_TOP_RATED";
export const GET_NOW_PLAYING = "GET_NOW_PLAYING";
export const GET_DETAIL = "GET_DETAIL";
export const FETCH_IMAGES = "FETCH_IMAGES";
export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const FETCH_SEARCH = "FETCH_SEARCH";

export const getPopular = () => {
  return async (dispatch) => {
    const popularMovies = await fetchMovies("/movie/popular");

    dispatch({ type: GET_POPULAR, payload: popularMovies });
  };
};

export const getUpcoming = () => {
  return async (dispatch) => {
    const upcomingMovies = await fetchMovies("/movie/upcoming");

    dispatch({ type: GET_UPCOMING, payload: upcomingMovies });
  };
};

export const getTopRated = () => {
  return async (dispatch) => {
    const topRatedMovies = await fetchMovies("/movie/top_rated");

    dispatch({ type: GET_TOP_RATED, payload: topRatedMovies });
  };
};

export const getNowPlaying = () => {
  return async (dispatch) => {
    const nowPlayingMovies = await fetchMovies("/movie/now_playing");

    dispatch({ type: GET_NOW_PLAYING, payload: nowPlayingMovies });
  };
};

export const getDetail = (movieDetail) => {
  return async (dispatch) => {
    dispatch({ type: GET_DETAIL, payload: movieDetail });
  };
};

export const fetchImages = (images) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_IMAGES, payload: images });
  };
};

export const fetchVideos = (videos) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_VIDEOS, payload: videos });
  };
};

export const fetchSearchedMovies = (query) => {
  return async (dispatch) => {
    const searchedMovies = await searchMovie(query);
    dispatch({ type: FETCH_SEARCH, payload: searchedMovies });
  };
};
