import React from 'react';
import { useState, useEffect } from 'react';
import { imageSrc } from 'services/image.service';
import { getMovie } from 'services/movies.service';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  StyledButton,
  StyledList,
  StyledNavLink,
  Wrapper,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovie(movieId);
        setMovie({ ...data });
        setGenres([...data.genres]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  const { title, poster_path, vote_average, overview } = movie;

  return (
    <>
      <StyledButton
        type="button"
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        &#8656; Go back
      </StyledButton>
      <Wrapper>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <img src={imageSrc(300, poster_path)} alt={title} />
            <div>
              <h2>{title}</h2>
              <p>User score: {Math.round(vote_average * 10) + '%'}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(', ')}</p>
            </div>
          </>
        )}
      </Wrapper>
      <Container>
        <h3>Additional information</h3>
        <StyledList>
          <li>
            <StyledNavLink to="cast" state={location.state}>
              Cast
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="reviews" state={location.state}>
              Reviews
            </StyledNavLink>
          </li>
        </StyledList>
      </Container>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
