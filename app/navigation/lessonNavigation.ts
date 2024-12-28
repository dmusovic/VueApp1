import { Course, Lesson } from '../data/courses';
import { navigateWithSlide } from '../utils/navigation';

export function navigateToLesson(
  component: any,
  course: Course, 
  lesson: Lesson, 
  direction: 'left' | 'right' = 'left'
) {
  return navigateWithSlide(component, {
    props: {
      course,
      lesson
    }
  }, direction);
}

export function navigateToCourse(
  component: any,
  course: Course
) {
  return navigateWithSlide(component, {
    props: { course }
  }, 'right');
}