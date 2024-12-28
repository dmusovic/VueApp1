import Vue from 'nativescript-vue';
import { Course, Lesson } from '../../data/courses';
import { transitions } from './transitions';
import { navigationState } from './state';
import CourseDetail from '../../components/CourseDetail.vue';
import LessonDetail from '../../components/LessonDetail.vue';

export function handleLessonNavigation(course: Course, lesson: Lesson, direction: 'left' | 'right') {
  navigationState.pushState(`lesson-${lesson.id}`, { courseId: course.id, lessonId: lesson.id });
  
  Vue.prototype.$navigateTo(LessonDetail, {
    props: { course, lesson },
    transition: transitions.slide[direction],
    backstackVisible: true
  });
}

export function handleCourseNavigation(course: Course) {
  navigationState.pushState(`course-${course.id}`, { courseId: course.id });
  
  Vue.prototype.$navigateTo(CourseDetail, {
    props: { course },
    transition: transitions.slide.left,
    backstackVisible: true
  });
}

export function handleCourseBack(course: Course) {
  Vue.prototype.$navigateTo(CourseDetail, {
    props: { course },
    transition: transitions.slide.right,
    backstackVisible: true
  });
}