export enum Level {
  ADVANCED = 'advanced',
  GOOD = 'good',
  BASIC = 'basic'
}

export interface ISkill {
  icon: JSX.Element;
  label: string;
  level: Level;
}
