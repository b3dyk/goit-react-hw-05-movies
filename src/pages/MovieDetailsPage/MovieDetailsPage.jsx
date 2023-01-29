import React from 'react';
import { imageSrc } from 'services/image.service';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  MainContainer,
  StyledButton,
  StyledList,
  StyledNavLink,
  TrailerButton,
  Wrapper,
} from './MovieDetailsPage.styled';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

const MovieDetailsPage = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const { movie, trailer } = useFetchMovie();

  const navigate = useNavigate();
  const location = useLocation();

  const toggleModal = () => {
    setIsModalShown(state => !state);
  };

  return (
    <MainContainer>
      <StyledButton
        type="button"
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        &#8656; Go back
      </StyledButton>
      {movie && (
        <Wrapper>
          <img src={imageSrc(300, movie.poster_path)} alt={movie.title} />
          <div>
            <h2>{movie.title}</h2>
            <p>User score: {Math.round(movie.vote_average * 10) + '%'}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
            {trailer && (
              <TrailerButton type="button" onClick={toggleModal}>
                Trailer
              </TrailerButton>
            )}
          </div>
        </Wrapper>
      )}
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
      {isModalShown && <Modal src={trailer.key} onClose={toggleModal} />}

      <Outlet />
    </MainContainer>
  );
};

export default MovieDetailsPage;
