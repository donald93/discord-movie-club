import { Movie } from './movie';
import { Poll } from './poll';
import { Theme } from './theme';

export class Club {
  id: string;
  themes: Theme[];
  currentTheme: Theme;
  currentMovie: Movie;
  currentPoll: Poll;
}
