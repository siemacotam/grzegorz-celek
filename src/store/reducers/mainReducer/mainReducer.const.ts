import { Sections } from 'global';
import { MainReducerState } from './mainReducer.types';

export const mainReducerInitialState: MainReducerState = {
  activeSection: Sections.ABOUT,
  showChat: false
};
