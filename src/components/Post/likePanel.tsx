import { Typography, Stack, Divider, useTheme, IconButton, Grid, Button } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ReplyIcon from '@mui/icons-material/Reply';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import { useEffect, useState } from 'react';

const getRandomLikesQuantity = (): number => Math.floor(Math.random() * 100);

const iconStyles = { fontSize: '18px' };

export const LikePanel = (): JSX.Element => {
  const [likes, setLikes] = useState(0);
  const [add, setAdd] = useState(true);
  const { t } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    setLikes(getRandomLikesQuantity());
  }, []);

  const toggleLike = () => {
    if (add) {
      setLikes((prev) => prev + 1);
    } else setLikes((prev) => prev - 1);

    setAdd((prev) => !prev);
  };

  return (
    <Stack mt={2} rowGap={1}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center">
          <IconButton
            sx={{
              bgcolor: theme.palette.primary.main,
              color: 'white',
              width: '22px',
              height: '22px',
              mr: 1,
              '&:hover': {
                backgroundColor: theme.palette.primary.main
              }
            }}
          >
            <ThumbUpRoundedIcon sx={{ fontSize: '14px' }} />
          </IconButton>
          <Typography variant="caption">{likes}</Typography>
        </Stack>
      </Stack>
      <Divider sx={{ width: '100%' }} />
      <Grid container>
        <Grid item xs={4}>
          <Button
            sx={{
              width: '100%',
              color: add ? theme.palette.grey[500] : theme.palette.primary.main,
              textTransform: 'capitalize'
            }}
            startIcon={
              add ? <ThumbUpOffAltIcon sx={iconStyles} /> : <ThumbUpRoundedIcon sx={iconStyles} />
            }
            onClick={toggleLike}
          >
            {t('like')}
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            startIcon={<ChatBubbleOutlineRoundedIcon />}
            sx={{
              width: '100%',
              textTransform: 'capitalize',
              color: theme.palette.grey[500]
            }}
          >
            {t('comment')}
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            startIcon={<ReplyIcon />}
            sx={{
              width: '100%',
              textTransform: 'capitalize',
              color: theme.palette.grey[500]
            }}
          >
            {t('share')}
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};
