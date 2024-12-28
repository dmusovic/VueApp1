import { photographyLessons } from './lessons/photography';
import { webdevLessons } from './lessons/webdev';
import { datascienceLessons } from './lessons/datascience';
import { marketingLessons } from './lessons/marketing';
import { appdesignLessons } from './lessons/appdesign';

export interface LessonObjective {
  id: string;
  description: string;
}

export interface LessonResource {
  id: string;
  title: string;
  type: string;
  url: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl: string;
  description?: string;
  objectives?: LessonObjective[];
  resources?: LessonResource[];
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  duration: string;
  lessonsCount: number;
  progress: number;
  lessons: Lesson[];
  categoryId: string;
}

const PLACEHOLDER_IMAGE = 'https://picsum.photos/400/200';

export const courses: Course[] = [
  {
    id: 'photography-basics',
    title: 'Photography Fundamentals',
    instructor: 'Sarah Johnson',
    thumbnail: PLACEHOLDER_IMAGE,
    duration: '4 hours',
    lessonsCount: photographyLessons.length,
    progress: 0,
    lessons: photographyLessons,
    categoryId: 'creative'
  },
  {
    id: 'web-development',
    title: 'Web Development Essentials',
    instructor: 'Michael Chen',
    thumbnail: PLACEHOLDER_IMAGE,
    duration: '5 hours',
    lessonsCount: webdevLessons.length,
    progress: 0,
    lessons: webdevLessons,
    categoryId: 'technology'
  },
  {
    id: 'data-science',
    title: 'Data Science Fundamentals',
    instructor: 'Emily Rodriguez',
    thumbnail: PLACEHOLDER_IMAGE,
    duration: '6 hours',
    lessonsCount: datascienceLessons.length,
    progress: 0,
    lessons: datascienceLessons,
    categoryId: 'data'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Strategy',
    instructor: 'James Wilson',
    thumbnail: PLACEHOLDER_IMAGE,
    duration: '4 hours',
    lessonsCount: marketingLessons.length,
    progress: 0,
    lessons: marketingLessons,
    categoryId: 'marketing'
  },
  {
    id: 'app-design',
    title: 'Mobile App Design',
    instructor: 'Lisa Zhang',
    thumbnail: PLACEHOLDER_IMAGE,
    duration: '5 hours',
    lessonsCount: appdesignLessons.length,
    progress: 0,
    lessons: appdesignLessons,
    categoryId: 'design'
  }
];