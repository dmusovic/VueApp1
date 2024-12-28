<template>
  <StackLayout class="mt-4">
    <GridLayout columns="*, *" rows="auto" class="gap-4">
      <StackLayout ref="resumeBtn" col="0" class="bg-blue-100 p-4 rounded-lg" @tap="onResumeLastLesson">
        <Label text="▶️" class="text-2xl text-center"/>
        <Label text="Resume Learning" class="text-center font-semibold"/>
        <Label :text="lastLessonTitle" textWrap="true" class="text-center text-sm text-gray-600"/>
      </StackLayout>
      
      <StackLayout ref="searchBtn" col="1" class="bg-purple-100 p-4 rounded-lg" @tap="onSearch">
        <Label text="🔍" class="text-2xl text-center"/>
        <Label text="Search Courses" class="text-center font-semibold"/>
        <Label text="Find your next course" class="text-center text-sm text-gray-600"/>
      </StackLayout>
    </GridLayout>
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { courses } from '../../data/courses';
import CourseList from '../CourseList.vue';
import CourseDetail from '../CourseDetail.vue';
import { createPressAnimation } from '../../utils/animations';
import { View } from '@nativescript/core';

export default Vue.extend({
  computed: {
    lastLessonTitle(): string {
      const lastCourse = courses[0];
      return lastCourse ? `${lastCourse.title} - Lesson 1` : 'No recent courses';
    }
  },
  methods: {
    async onResumeLastLesson() {
      await createPressAnimation(this.$refs.resumeBtn.nativeView as View);
      const lastCourse = courses[0];
      if (lastCourse) {
        this.$navigateTo(CourseDetail, {
          props: { 
            course: lastCourse,
            lesson: lastCourse.lessons[0]
          },
          transition: {
            name: 'slide',
            duration: 200
          }
        });
      }
    },
    async onSearch() {
      await createPressAnimation(this.$refs.searchBtn.nativeView as View);
      this.$navigateTo(CourseList, {
        transition: {
          name: 'slide',
          duration: 200
        }
      });
    }
  }
});
</script>