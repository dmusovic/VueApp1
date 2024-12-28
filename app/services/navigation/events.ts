import { EventBus } from '../eventBus';
import { Course, Lesson } from '../../data/courses';

export const NavigationEvents = {
  LESSON: {
    NAVIGATE: 'navigation:lesson:navigate',
    COMPLETE: 'navigation:lesson:complete'
  },
  COURSE: {
    NAVIGATE: 'navigation:course:navigate',
    BACK: 'navigation:course:back'
  }
};

export function emitLessonNavigation(course: Course, lesson: Lesson, direction: 'left' | 'right') {
  EventBus.$emit(NavigationEvents.LESSON.NAVIGATE, { course, lesson, direction });
}

export function emitCourseNavigation(course: Course) {
  EventBus.$emit(NavigationEvents.COURSE.NAVIGATE, { course });
}

export function emitCourseBack() {
  EventBus.$emit(NavigationEvents.COURSE.BACK);
}