import { MovieItem } from 'components/MovieItem/MovieItem';
import React from 'react';
import { useState, useEffect } from 'react';
import { getTrendMovies } from 'services/movies.service';
import { Container, StyledList } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetch = async ({ page }) => {
      try {
        const data = await getTrendMovies({ page });
        handleResolve(data);
      } catch {}
    };

    const handleResolve = ({ results }) => {
      setMovies(state => [...state, ...results]);
    };

    fetch({ page: 1 });
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      <StyledList>
        {movies?.map(({ id, title }) => (
          <MovieItem key={id} id={id} title={title} />
        ))}
      </StyledList>
    </Container>
  );
};

export default HomePage;
