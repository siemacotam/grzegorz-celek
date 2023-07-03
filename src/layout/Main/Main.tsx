import { useAppSelector } from 'store/hooks';
import { sections } from 'global';

import { MainContainer, MainContentContainer } from './Main.styled';

export const Main = (): JSX.Element => {
  const activeSection = useAppSelector((store) => store.main.activeSection);

  const content = sections.find((section) => section.name === activeSection)?.component || null;

  return (
    <MainContainer>
      <MainContentContainer>{content}</MainContentContainer>
    </MainContainer>
  );
};
