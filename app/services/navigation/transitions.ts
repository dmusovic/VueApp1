import { NavigationTransition } from './types';

export const transitions = {
  slide: {
    left: {
      name: 'slideLeft',
      duration: 200
    },
    right: {
      name: 'slideRight',
      duration: 200
    }
  },
  fade: {
    name: 'fade',
    duration: 200
  }
} as const;