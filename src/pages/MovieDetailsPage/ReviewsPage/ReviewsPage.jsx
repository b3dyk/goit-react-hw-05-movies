import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movies.service';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews([...results]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <ul>
      {isLoading ? (
        <p>Loading...</p>
      ) : reviews.length === 0 ? (
        <b>Sorry, we don't have any reviews to this movie</b>
      ) : (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Reviews;
