import Vue from 'nativescript-vue';
import { Course } from '../../data/courses';
import { transitions } from './transitions';
import { navigationState } from './state';

class CourseNavigator {
  private static instance: CourseNavigator;

  private constructor() {}

  static getInstance(): CourseNavigator {
    if (!CourseNavigator.instance) {
      CourseNavigator.instance = new CourseNavigator();
    }
    return CourseNavigator.instance;
  }

  navigateToCourse(course: Course) {
    navigationState.pushState(`course-${course.id}`, { courseId: course.id });
    
    Vue.prototype.$navigateTo(() => import('../../components/CourseDetail.vue'), {
      props: { course },
      transition: transitions.slide.left,
      backstackVisible: true
    });
  }

  navigateToCatalog() {
    navigationState.pushState('catalog');
    
    Vue.prototype.$navigateTo(() => import('../../components/CourseList.vue'), {
      transition: transitions.slide.right,
      backstackVisible: true
    });
  }
}

export const courseNavigator = CourseNavigator.getInstance();