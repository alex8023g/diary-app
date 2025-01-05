import { PostTags } from './postTypes';

export type CalendarDay = {
  index: number;
  date: number | null;
  tags: (keyof PostTags)[];
};

export type CalendarType = {
  year: string;
  month: string;
  days: CalendarDay[];
};
