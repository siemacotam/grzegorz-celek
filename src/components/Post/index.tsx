import { Card, CardContent, Typography, Box, Stack, Avatar } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import Image from 'images/small.jpg';
import { PostSkeleton } from './PostSkeleton';
import { LikePanel } from './likePanel';

interface PostProps {
  ready: boolean;
  text?: string;
  content?: JSX.Element;
  date?: string;
  panel?: boolean;
}

const Post = ({ ready, text, content, date, panel = true }: PostProps): JSX.Element => {
  const { d } = useTranslation();

  if (!ready) return <PostSkeleton />;

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction="row" mb={1} spacing={2}>
          <Avatar alt="My avatar" sx={{ width: 50, height: 50 }} src={Image} />
          <Box>
            <Typography fontWeight="bold">Grzegorz Celek</Typography>
            <Typography variant="caption">{date || d(new Date())}</Typography>
          </Box>
        </Stack>
        {text && <Typography lineHeight="2rem">{text}</Typography>}
        {content || null}
        {panel && <LikePanel />}
      </CardContent>
    </Card>
  );
};

export default Post;
