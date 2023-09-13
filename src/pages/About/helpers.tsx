import { capitalize } from '@mui/material';
import imagesService from 'services/images.service';
import { Image } from './model';

const apiLink = 'https://images.dog.ceo/breeds/';

const getDogBreed = (dog: string): string => {
  const removePrefix = dog.replace(apiLink, '');
  const name = removePrefix.substring(0, removePrefix.indexOf('/'));
  return capitalize(name);
};

export const getPics = async (dogs: boolean): Promise<Image[]> => {
  const promises = [];

  for (let index = 0; index < 5; index++) {
    promises.push(dogs ? imagesService.getDog() : imagesService.getRandomPics());
  }

  const pics = await Promise.all(promises).then((res) =>
    res.map((el) => ({
      src: dogs ? el.message : el,
      name: dogs ? getDogBreed(el.message) : ''
    }))
  );

  return pics;
};
