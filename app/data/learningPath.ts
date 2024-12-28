interface Skill {
  name: string;
  progress: number;
}

interface LearningPathData {
  nextCourse: {
    title: string;
    description: string;
    icon: string;
  };
  skills: Skill[];
}

export function getLearningPathData(courses: any[]): LearningPathData {
  // In a real app, this would use actual user data and ML recommendations
  return {
    nextCourse: {
      title: "Web Development Fundamentals",
      description: "Master the basics of web development",
      icon: "💻"
    },
    skills: [
      { name: "Web Development", progress: 45 },
      { name: "Design", progress: 30 },
      { name: "Data Science", progress: 15 },
      { name: "Marketing", progress: 20 }
    ]
  };
}