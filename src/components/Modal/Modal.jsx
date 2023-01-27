import { trailerSrc } from 'services/trailer.service';
import { Backdrop, Container } from './Modal.styled';

export const Modal = ({ src, onClose }) => {
  return (
    <Backdrop onClick={onClose}>
      <Container>
        <iframe
          title={src}
          src={trailerSrc(src)}
          width="560"
          height="315"
          frameBorder="0"
        ></iframe>
      </Container>
    </Backdrop>
  );
};
