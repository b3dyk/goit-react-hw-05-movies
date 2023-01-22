import { MovieItem } from 'components/MovieItem/MovieItem';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/movies.service';
import {
  Container,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledList,
} from './MoviesPage.styled';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { results } = await searchMovie(searchQuery);
        setMovies([...results]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const { value } = evt.target.elements.search;
    setMovies([]);
    setSearchParams({ query: value });
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="search"
          placeholder="Enter key word..."
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>

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

export default MoviesPage;
