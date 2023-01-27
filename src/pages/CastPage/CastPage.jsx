import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/movies.service';
import { imageSrc } from 'services/image.service';
import { Item, List, Text } from './CastPage.styled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const cast = await getMovieCast(movieId);
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
    <List>
      {isLoading ? (
        <Loader />
      ) : !cast.length ? (
        <p>No information</p>
      ) : (
        cast?.map(({ id, name, character, profile_path }) => (
          <Item key={id}>
            <img src={imageSrc(200, profile_path)} alt={name} width="100" />
            <Text>Name: {name}</Text>
            <Text>Character: {character}</Text>
          </Item>
        ))
      )}
    </List>
  );
};

export default Cast;
