import image from '../img/no-image-available.jpg';

export const imageSrc = (width, path) => {
  if (!path) {
    return image;
  }
  return `https://image.tmdb.org/t/p/w${width}${path}`;
};
