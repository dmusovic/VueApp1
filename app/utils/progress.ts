import { courses } from '../data/courses';

export function toggleCourseProgress(courseId: string, lessonId: string): void {
  const course = courses.find(c => c.id === courseId);
  if (!course) return;

  const lesson = course.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  // Toggle the completion status
  lesson.completed = !lesson.completed;

  // Calculate new progress percentage
  const completedLessons = course.lessons.filter(l => l.completed).length;
  course.progress = Math.round((completedLessons / course.lessons.length) * 100);
}