import { DateTranslation } from 'hooks/useTranslation';
import { Quote } from 'services/model';
import { Box, Skeleton } from '@mui/material';
import { UseQueryResult } from 'react-query';
import { IPost } from '../model';

export const createPostContent = (
  image: JSX.Element,
  { author, content }: Quote,
  index: number,
  d: DateTranslation
): IPost => {
  return {
    text: `${content} - ${author}`,
    content: image,
    date: d(new Date(Date.now() - 24 * index * 3600 * 1000))
  };
};

export const getPostsList = (
  quotes: UseQueryResult<Quote[]>,
  images: UseQueryResult<string[]>,
  d: DateTranslation
): IPost[] => {
  const list: IPost[] = [];

  for (let index = 0; index < 10; index++) {
    const image = images.data ? (
      <Box
        maxWidth="90%"
        maxHeight="400px"
        component="img"
        src={images.data[index]}
        alt="random image"
      />
    ) : (
      <Skeleton sx={{ mx: 'auto' }} variant="rectangular" width={400} height={400} />
    );

    const quote = quotes.data ? quotes.data[index] : { content: 'Random quote', author: 'G Celek' };

    list.push(createPostContent(image, quote, index, d));
  }

  return list;
};
