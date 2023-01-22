import { MovieItem } from 'components/MovieItem/MovieItem';
import React from 'react';
import { useState, useEffect } from 'react';
import { getTrendMovies } from 'services/movies.service';
import { Container, StyledList } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async ({ page }) => {
      setIsLoading(true);
      try {
        const results = await getTrendMovies({ page });
        setMovies([...results]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData({ page: 1 });
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <StyledList>
          {movies?.map(({ id, title }) => (
            <MovieItem key={id} id={id} title={title} />
          ))}
        </StyledList>
      )}
    </Container>
  );
};

export default HomePage;
