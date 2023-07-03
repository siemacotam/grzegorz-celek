import { styled } from '@mui/material';
import Image from 'images/grzesiek_2.jpg';
import Background from 'images/mountains.jpg';

const imageSize = 200;
export const maxContentWidth = '1300px';

export const HeaderContainer = styled('div')({
  width: '100%',
  maxWidth: maxContentWidth,
  margin: '0 auto'
});

export const MainPhoto = styled('div')({
  border: '3px solid white',
  borderRadius: '50%',
  height: imageSize,
  width: imageSize,
  backgroundImage: `url(${Image})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'absolute',
  bottom: `-${imageSize / 2}px`,
  left: '40px'
});

export const BackgroundPhoto = styled('div')({
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  height: '400px',
  position: 'relative',
  width: '100%',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
});

export const NameContainer = styled('div')({
  marginLeft: '250px',
  padding: '20px',
  height: `${imageSize / 2 + 20}px`
});

export const NavContainer = styled('div')(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[300]}`
}));
