import { styled, Stack } from '@mui/material';
import Image from 'images/grzesiek_2.jpg';
import Background from 'images/mountains.jpg';

const imageSize = 200;
export const maxContentWidth = '1200px';

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
  left: '40px',
  '@media (max-width: 780px)': {
    left: `calc(50% - ${imageSize / 2}px)`
  }
});

export const BackgroundPhoto = styled('div')({
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  height: '500px',
  position: 'relative',
  width: '100%',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  '@media (max-width: 780px)': {
    height: '200px',
    borderRadius: 0
  }
});

export const InfoPanelContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  '@media (max-width: 780px)': {
    flexDirection: 'column',
    textAlign: 'center',
    rowGap: '5px'
  }
});

export const NameContainer = styled('div')({
  marginLeft: '250px',
  padding: '20px',
  '@media (max-width: 780px)': {
    marginLeft: 0,
    marginTop: imageSize / 2,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    rowGap: '5px',
    paddingBottom: 0
  }
});

export const NavContainer = styled('div')(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[300]}`
}));

export const MenuContainer = styled(Stack)({
  color: 'black',
  width: maxContentWidth,
  margin: '0 auto',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'row'
});
