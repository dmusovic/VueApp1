import { Course, Lesson } from '../data/courses';

interface NavigationState {
  courseStack: Course[];
  lessonStack: Lesson[];
}

class NavigationStateManager {
  private static instance: NavigationStateManager;
  private state: NavigationState = {
    courseStack: [],
    lessonStack: []
  };

  private constructor() {}

  static getInstance(): NavigationStateManager {
    if (!NavigationStateManager.instance) {
      NavigationStateManager.instance = new NavigationStateManager();
    }
    return NavigationStateManager.instance;
  }

  pushCourse(course: Course) {
    this.state.courseStack.push(course);
  }

  pushLesson(lesson: Lesson) {
    this.state.lessonStack.push(lesson);
  }

  popCourse(): Course | undefined {
    return this.state.courseStack.pop();
  }

  popLesson(): Lesson | undefined {
    return this.state.lessonStack.pop();
  }

  getCurrentCourse(): Course | undefined {
    return this.state.courseStack[this.state.courseStack.length - 1];
  }

  getCurrentLesson(): Lesson | undefined {
    return this.state.lessonStack[this.state.lessonStack.length - 1];
  }

  clear() {
    this.state.courseStack = [];
    this.state.lessonStack = [];
  }
}

export const navigationState = NavigationStateManager.getInstance();