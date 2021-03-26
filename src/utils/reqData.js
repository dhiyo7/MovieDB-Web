import axios from "axios";
import { API_URL, API_KEY } from "./environment";

export const getGenres = (data) => {
  return axios.get(
    `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US
    `,
    data
  );
};

export const getTrending = (data) => {
  return axios.get(`${API_URL}/trending/movie/day?api_key=${API_KEY}`, data);
};

export const getPopular = (data) => {
  return axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`, data);
};

export const getMovieById = (itemId) => {
  return axios.get(
    `${API_URL}/movie/${itemId}?api_key=${API_KEY}&language=en-US`
  );
};

export const getReviewById = (itemId) => {
  return axios.get(
    `${API_URL}/movie/${itemId}/reviews?api_key=${API_KEY}&language=en-US`
  );
};

export const getMovieBySearch = (searchKey, data) => {
  return axios.get(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${searchKey}`,
    data
  );
};
