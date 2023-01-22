import axios from 'axios';

const KEY = '7586699f8f2186dba16522ec589570d7';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const getTrendMovies = async () => {
  const { data } = await moviesApi.get(`trending/movie/day`, {
    params: {
      api_key: KEY,
      page: 1,
    },
  });
  return data;
};

export const getMovie = async movieId => {
  const { data } = await moviesApi.get(`movie/${movieId}`, {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await moviesApi.get(`movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await moviesApi.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return data;
};

export const searchMovie = async query => {
  const { data } = await moviesApi.get(`search/movie`, {
    params: {
      api_key: KEY,
      language: 'en-US',
      page: 1,
      include_adult: true,
      query,
    },
  });
  return data;
};
