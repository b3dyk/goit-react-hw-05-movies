import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/movies.service';
import { imageSrc } from 'services/image.service';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { cast } = await getMovieCast(movieId);
        setCast([...cast]);
      } catch (error) {
        console.error(error);
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
      ) : (
        cast &&
        cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img src={imageSrc(200, profile_path)} alt={name} width="150" />
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Cast;
