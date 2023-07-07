import { Card, CardContent, Typography, Box, Stack, Avatar } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import Image from 'images/small.jpg';
import { StyledText } from './Post.styled';
import { PostSkeleton } from './PostSkeleton';

interface PostProps {
  ready: boolean;
  text?: string;
  content?: JSX.Element;
  date?: string;
}

export const Post = ({ ready, text, content, date }: PostProps): JSX.Element => {
  const { d } = useTranslation();

  if (!ready) return <PostSkeleton />;

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction="row" mb={2} spacing={2}>
          <Avatar alt="My avatar" sx={{ width: 50, height: 50 }} src={Image} />
          <Box>
            <Typography fontWeight="bold">Grzegorz Celek</Typography>
            <Typography variant="caption">{date || d(new Date())}</Typography>
          </Box>
        </Stack>
        {text && <StyledText>{text}</StyledText>}
        {content || null}
      </CardContent>
    </Card>
  );
};
