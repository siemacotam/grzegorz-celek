import { useState, useEffect } from 'react';
import { LinearProgress, Backdrop, Box, Typography } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import { getLabel } from './const';
import './icon.css';

const Loader = (): JSX.Element => {
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress >= 100) {
        clearInterval(timer);
      }
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 400);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  if (progress >= 100) return <div />;

  return (
    <Backdrop
      sx={{ bgcolor: 'black', color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <Box width="80%">
        <Box textAlign="center" mb={4}>
          <Box component="span" className="loader" />
        </Box>
        <LinearProgress variant="determinate" value={progress} />
        <Typography component="p" variant="h5" mt={2} textAlign="center">
          {getLabel(progress, t)}
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default Loader;
