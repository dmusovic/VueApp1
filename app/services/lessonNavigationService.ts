import Vue from 'nativescript-vue';
import { Course, Lesson } from '../data/courses';
import LessonDetail from '../components/LessonDetail.vue';
import CourseDetail from '../components/CourseDetail.vue';

class LessonNavigationService {
  private static instance: LessonNavigationService;

  private constructor() {}

  static getInstance(): LessonNavigationService {
    if (!LessonNavigationService.instance) {
      LessonNavigationService.instance = new LessonNavigationService();
    }
    return LessonNavigationService.instance;
  }

  navigateToLesson(course: Course, lesson: Lesson, direction: 'left' | 'right' = 'left') {
    return Vue.prototype.$navigateTo(LessonDetail, {
      props: { course, lesson },
      transition: {
        name: direction === 'left' ? 'slideLeft' : 'slideRight',
        duration: 200
      }
    });
  }

  navigateToCourse(course: Course) {
    return Vue.prototype.$navigateTo(CourseDetail, {
      props: { course },
      transition: {
        name: 'slideRight',
        duration: 200
      }
    });
  }
}

export const lessonNavigationService = LessonNavigationService.getInstance();