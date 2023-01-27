import { getMovieById, getMovieTrailers } from 'services/movies.service';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const useFetchMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    getMovieById(movieId)
      .then(setMovie)
      .catch(error => console.error(error));

    getMovieTrailers(movieId)
      .then(setTrailer)
      .catch(error => console.error(error));
  }, [movieId]);

  return { movie, trailer };
};
