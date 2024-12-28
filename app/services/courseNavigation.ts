import Vue from 'nativescript-vue';
import { Frame } from '@nativescript/core';
import { Course } from '../data/courses';
import CourseList from '../components/CourseList.vue';
import Home from '../components/Home.vue';

export class CourseNavigationService {
  private static instance: CourseNavigationService;
  private navigationStack: string[] = [];
  
  private constructor() {
    // Initialize with home screen
    this.navigationStack.push('home');
  }
  
  static getInstance(): CourseNavigationService {
    if (!CourseNavigationService.instance) {
      CourseNavigationService.instance = new CourseNavigationService();
    }
    return CourseNavigationService.instance;
  }

  private addToStack(screen: string) {
    this.navigationStack.push(screen);
  }

  private removeFromStack() {
    return this.navigationStack.pop();
  }

  navigateBack() {
    const currentScreen = this.removeFromStack();
    const previousScreen = this.navigationStack[this.navigationStack.length - 1];

    if (previousScreen === 'home') {
      this.navigateToHome();
    } else {
      const frame = Frame.topmost();
      if (frame?.canGoBack()) {
        frame.goBack();
      } else {
        // If frame navigation fails, force navigate to home
        this.navigateToHome();
      }
    }
  }

  navigateToHome() {
    this.navigationStack = ['home'];
    Vue.prototype.$navigateTo(Home, {
      clearHistory: true,
      transition: {
        name: 'fade',
        duration: 200
      }
    });
  }

  navigateToCourseList() {
    this.addToStack('courses');
    Vue.prototype.$navigateTo(CourseList, {
      transition: {
        name: 'slide',
        duration: 200
      }
    });
  }

  navigateToCourse(course: Course, component: any) {
    this.addToStack(`course-${course.id}`);
    Vue.prototype.$navigateTo(component, {
      props: { course },
      transition: {
        name: 'slide',
        duration: 200
      }
    });
  }
}

export const courseNavigation = CourseNavigationService.getInstance();