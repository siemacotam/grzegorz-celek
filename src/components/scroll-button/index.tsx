import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const ScrollButton = (): JSX.Element => {
  const trigger = useScrollTrigger();

  const handleClick = (event: any) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#top');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        style={{
          position: `fixed`,
          bottom: `10px`,
          right: `10px`,
          zIndex: `99`
        }}
      >
        <Fab color="primary" size="small">
          <ArrowUpwardIcon />
        </Fab>
      </div>
    </Zoom>
  );
};
