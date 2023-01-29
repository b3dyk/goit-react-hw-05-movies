import PropTypes from 'prop-types';
import { imageSrc } from 'services/image.service';
import {
  Poster,
  StyledLink,
  Text,
  Vote,
  Wrapper,
  Item,
} from './MovieItem.styled';

const { useLocation } = require('react-router-dom');

export const MovieItem = ({ id, title, poster, vote }) => {
  const location = useLocation();

  return (
    <Item>
      <StyledLink to={'/movies/' + id} state={{ from: location }}>
        <Poster src={imageSrc(300, poster)} alt={title} width="300" />
        <Wrapper>
          <Text>{title}</Text>
          <Vote>{vote !== 0 ? vote?.toFixed(1) : 'n/a'}</Vote>
        </Wrapper>
      </StyledLink>
    </Item>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
