<template>
  <StackLayout class="mt-4">
    <GridLayout columns="auto, *, auto" class="mb-4">
      <Button
        col="0"
        text="Previous"
        @tap="onPreviousLesson"
        class="bg-gray-500 text-white p-4 rounded-lg"
        :opacity="isFirstLesson ? 0.5 : 1"
        :isEnabled="!isFirstLesson"
      />
      
      <Button
        col="1"
        :text="lesson.completed ? '✓ Completed' : 'Complete Lesson'"
        @tap="onCompleteLesson"
        :class="[
          'text-white p-4 rounded-lg mx-2',
          lesson.completed ? 'bg-green-500' : 'bg-blue-500'
        ]"
      />
      
      <Button
        col="2"
        text="Next"
        @tap="onNextLesson"
        class="bg-gray-500 text-white p-4 rounded-lg"
        :opacity="isLastLesson ? 0.5 : 1"
        :isEnabled="!isLastLesson"
      />
    </GridLayout>

    <Button 
      text="Back to Course" 
      class="text-blue-500"
      @tap="backToCourse"
    />
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { Course, Lesson } from '../../data/courses';
import { lessonNavigator } from '../../services/navigation/lessonNavigator';

export default Vue.extend({
  props: {
    course: {
      type: Object as () => Course,
      required: true
    },
    lesson: {
      type: Object as () => Lesson,
      required: true
    }
  },
  computed: {
    currentIndex(): number {
      return this.course.lessons.findIndex(l => l.id === this.lesson.id);
    },
    isFirstLesson(): boolean {
      return this.currentIndex === 0;
    },
    isLastLesson(): boolean {
      return this.currentIndex === this.course.lessons.length - 1;
    }
  },
  methods: {
    onCompleteLesson() {
      this.lesson.completed = !this.lesson.completed;
      const completedLessons = this.course.lessons.filter(l => l.completed).length;
      this.course.progress = Math.round((completedLessons / this.course.lessons.length) * 100);
    },
    onPreviousLesson() {
      if (!this.isFirstLesson) {
        const previousLesson = this.course.lessons[this.currentIndex - 1];
        lessonNavigator.navigateToLesson(this.course, previousLesson, 'right');
      }
    },
    onNextLesson() {
      if (!this.isLastLesson) {
        const nextLesson = this.course.lessons[this.currentIndex + 1];
        lessonNavigator.navigateToLesson(this.course, nextLesson, 'left');
      }
    },
    backToCourse() {
      lessonNavigator.navigateBack(this.course);
    }
  }
});
</script>