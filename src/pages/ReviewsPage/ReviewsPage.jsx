import { useFetchReviews } from 'hooks/useFetchReviews';

const Reviews = () => {
  const reviews = useFetchReviews();

  return (
    <ul>
      {reviews?.length === 0 ? (
        <b>Sorry, we don't have any reviews to this movie</b>
      ) : (
        reviews?.map(({ id, author, content }) => (
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
