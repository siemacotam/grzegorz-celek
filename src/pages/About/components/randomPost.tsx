import Post from 'components/Post';
import { Grid, useTheme, Box } from '@mui/material';
import { IPost } from '../model';

interface RandomPostProps {
  post: IPost;
}

export const RandomPost = ({ post: { text, date, content } }: RandomPostProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Grid item xs={12}>
      <Post
        ready
        text={text}
        date={date}
        content={
          <Box mt={2} textAlign="center" bgcolor={theme.palette.grey[100]}>
            {content}
          </Box>
        }
      />
    </Grid>
  );
};
