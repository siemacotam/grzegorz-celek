import { sections } from 'global';
import { Stack } from '@mui/material';
import { useAppContext } from 'hooks/useAppContext';
import { MainContainer, MainContentContainer } from './styled';

export const Main = (): JSX.Element => {
  const { activeSection } = useAppContext();

  const content = sections.find((section) => section.name === activeSection)?.component || null;

  return (
    <MainContainer>
      <MainContentContainer>
        <Stack alignItems="center">{content}</Stack>
      </MainContentContainer>
    </MainContainer>
  );
};
