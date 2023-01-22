import PropTypes from 'prop-types';
import { StyledLink } from './MovieItem.styled';

const { useLocation } = require('react-router-dom');

export const MovieItem = ({ id, title }) => {
  const location = useLocation();

  return (
    <li>
      <StyledLink to={'/movies/' + id} state={{ from: location }}>
        {title}
      </StyledLink>
    </li>
  );
};

MovieItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
