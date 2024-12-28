import { Course, Lesson } from '../data/courses';

export type NavigationDirection = 'left' | 'right';

export interface NavigationOptions {
  clearHistory?: boolean;
  transition?: {
    name: string;
    duration: number;
  };
}

export interface LessonNavigationState {
  currentCourse: Course;
  currentLesson: Lesson;
}