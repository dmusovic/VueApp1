import { Course, Lesson } from '../../data/courses';
import { NavigationDirection } from './types';
import { navigationState } from './state';
import { courseNavigator } from './courseNavigator';
import { emitLessonNavigation, emitCourseBack } from './events';

class LessonNavigator {
  private static instance: LessonNavigator;

  private constructor() {}

  static getInstance(): LessonNavigator {
    if (!LessonNavigator.instance) {
      LessonNavigator.instance = new LessonNavigator();
    }
    return LessonNavigator.instance;
  }

  navigateToLesson(course: Course, lesson: Lesson, direction: NavigationDirection = 'left') {
    emitLessonNavigation(course, lesson, direction);
  }

  navigateBack(course: Course) {
    const currentState = navigationState.getCurrentState();
    
    if (currentState.currentRoute.startsWith('lesson-')) {
      emitCourseBack();
      navigationState.popState();
    } else {
      courseNavigator.navigateToCatalog();
    }
  }
}

export const lessonNavigator = LessonNavigator.getInstance();