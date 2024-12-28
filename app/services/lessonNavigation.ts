import { EventBus } from './eventBus';
import { NavigationEvents, handleLessonNavigation, handleCourseNavigation, handleCourseBack } from './navigation';

export function setupNavigationListeners() {
  EventBus.$on(NavigationEvents.LESSON.NAVIGATE, ({ course, lesson, direction }) => {
    handleLessonNavigation(course, lesson, direction);
  });

  EventBus.$on(NavigationEvents.COURSE.NAVIGATE, ({ course }) => {
    handleCourseNavigation(course);
  });

  EventBus.$on(NavigationEvents.COURSE.BACK, ({ course }) => {
    handleCourseBack(course);
  });
}