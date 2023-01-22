import { getMovie } from 'services/movies.service';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const useFetchMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie(movieId)
      .then(setMovie)
      .catch(error => console.error(error));
  }, [movieId]);

  return movie;
};
