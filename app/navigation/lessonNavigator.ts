import Vue from 'nativescript-vue';
import { Course, Lesson } from '../data/courses';
import { NavigationDirection } from './types';
import { transitions } from './transitions';
import { navigationState } from './state';
import CourseDetail from '../components/CourseDetail.vue';
import CourseList from '../components/CourseList.vue';
import Home from '../components/Home.vue';

class LessonNavigator {
  private static instance: LessonNavigator;

  private constructor() {}

  static getInstance(): LessonNavigator {
    if (!LessonNavigator.instance) {
      LessonNavigator.instance = new LessonNavigator();
    }
    return LessonNavigator.instance;
  }

  navigateToLesson(component: any, course: Course, lesson: Lesson, direction: NavigationDirection = 'left') {
    navigationState.pushLesson(lesson);
    return Vue.prototype.$navigateTo(component, {
      props: { course, lesson },
      transition: direction === 'left' ? transitions.slide.left : transitions.slide.right,
      clearHistory: false
    });
  }

  navigateToCourse(course: Course) {
    navigationState.pushCourse(course);
    return Vue.prototype.$navigateTo(CourseDetail, {
      props: { course },
      transition: transitions.slide.right,
      clearHistory: false
    });
  }

  navigateToCatalog() {
    navigationState.clear();
    return Vue.prototype.$navigateTo(CourseList, {
      transition: transitions.slide.right,
      clearHistory: false
    });
  }

  navigateToHome() {
    navigationState.clear();
    return Vue.prototype.$navigateTo(Home, {
      transition: transitions.fade,
      clearHistory: true
    });
  }

  goBack() {
    if (navigationState.getCurrentLesson()) {
      navigationState.popLesson();
      const course = navigationState.getCurrentCourse();
      if (course) {
        this.navigateToCourse(course);
      }
    } else if (navigationState.getCurrentCourse()) {
      navigationState.popCourse();
      this.navigateToCatalog();
    } else {
      this.navigateToHome();
    }
  }
}

export const lessonNavigator = LessonNavigator.getInstance();