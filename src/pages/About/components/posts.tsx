import { useAppContext } from 'hooks/useAppContext';
import { useState, useEffect } from 'react';
import { useTranslation } from 'hooks/useTranslation';
import { IPost } from '../model';
import { getPostsList } from './helpers';
import { RandomPost } from './randomPost';

export const RandomPosts = (): JSX.Element => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { images, quotes } = useAppContext();
  const { d } = useTranslation();

  useEffect(() => {
    const list = getPostsList(quotes, images, d);
    setPosts(list);
  }, []);

  return (
    <>
      {posts.map((post) => (
        <RandomPost key={post.text} post={post} />
      ))}
    </>
  );
};
