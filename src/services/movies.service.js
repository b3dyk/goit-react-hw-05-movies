import axios from 'axios';
import APIkey from './APIkey.service';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const getTrendMovies = async () => {
  const { data } = await moviesApi.get(`trending/movie/day`, {
    params: {
      api_key: APIkey,
      page: 1,
    },
  });
  return data;
};

export const getMovie = async movieId => {
  const { data } = await moviesApi.get(`movie/${movieId}`, {
    params: {
      api_key: APIkey,
      language: 'en-US',
    },
  });
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await moviesApi.get(`movie/${movieId}/credits`, {
    params: {
      api_key: APIkey,
      language: 'en-US',
    },
  });
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await moviesApi.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: APIkey,
      language: 'en-US',
      page: 1,
    },
  });
  return data;
};

export const searchMovie = async query => {
  const { data } = await moviesApi.get(`search/movie`, {
    params: {
      api_key: APIkey,
      language: 'en-US',
      page: 1,
      include_adult: true,
      query,
    },
  });
  return data;
};
