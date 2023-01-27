import { Loader } from 'components/Loader/Loader';
import { MovieItem } from 'components/MovieItem/MovieItem';
import React from 'react';
import { useState, useEffect } from 'react';
import { getTrendMovies } from 'services/movies.service';
import { Container, Heading, StyledList } from './HomePage.styled';

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
      <Heading>Trending today</Heading>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledList>
          {movies?.map(({ id, title, poster_path, vote_average }) => (
            <MovieItem
              key={id}
              id={id}
              title={title}
              poster={poster_path}
              vote={vote_average}
            />
          ))}
        </StyledList>
      )}
    </Container>
  );
};

export default HomePage;
