import { Sections } from 'global';
import { ReactNode, useState, createContext, useMemo } from 'react';
import { UseQueryResult, useQueries } from 'react-query';
import dataService from 'services/data.service';
import { Quote } from 'services/model';

export type AppContext = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
  activeSection: Sections;
  changeSection: (section: Sections) => void;
  showChat: boolean;
  handleChatStatus: (state: boolean) => void;
  images: UseQueryResult<string[]>;
  quotes: UseQueryResult<Quote[]>;
};

interface AppContextProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AppContext = createContext<AppContext>({} as AppContext);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState<Sections>(Sections.ABOUT);
  const [showChat, setShowChat] = useState(false);

  const [images, quotes] = useQueries([
    { queryKey: ['images'], queryFn: () => dataService.getImages() },
    { queryKey: ['quotes'], queryFn: () => dataService.getQuotes() }
  ]);

  const props = useMemo(() => {
    const toggleMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

    const changeSection = (section: Sections) => setActiveSection(section);
    const handleChatStatus = (state: boolean) => setShowChat(state);

    return {
      mode,
      toggleMode,
      activeSection,
      changeSection,
      showChat,
      handleChatStatus,
      images,
      quotes
    };
  }, [mode, activeSection, showChat, images, quotes]);

  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};
