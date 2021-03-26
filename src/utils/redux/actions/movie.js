import * as actions from "./actionType";
import * as api from "../../reqData";

export const getGenres = (data) => {
  return {
    type: actions.GET_GENRES,
    payload: api.getGenres(data),
  };
};

export const getTrending = (data) => {
  return {
    type: actions.FETCH_ALL_MOVIE_TRENDING,
    payload: api.getTrending(data),
  };
}; 

export const getPopular = (data) => {
  return {
    type: actions.FETCH_ALL_MOVIE_POPULAR,
    payload: api.getPopular(data),
  };
};

export const getMovieById = (id) => {
  return {
    type: actions.GET_MOVIE_BY_ID,
    payload: api.getMovieById(id),
  };
};

export const getReviewById = (id) => {
  return {
    type: actions.GET_REVIEW_BY_MOVIE_ID,
    payload: api.getReviewById(id),
  };
};

export const getMovieBySearch = (searchKey, data) => {
  return {
    type: actions.GET_MOVIE_BY_SEARCHING,
    payload: api.getMovieBySearch(searchKey, data),
  };
};
