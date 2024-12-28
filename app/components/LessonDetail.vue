<template>
  <Page>
    <ActionBar>
      <NavigationButton 
        text="Back" 
        android.systemIcon="ic_menu_back" 
        @tap="backToCourse" 
      />
      <Label :text="lesson.title" class="font-bold text-lg"/>
    </ActionBar>

    <ScrollView>
      <StackLayout class="p-4">
        <VideoPlayer :videoUrl="lesson.videoUrl" :thumbnailUrl="course.thumbnail" />
        
        <Label :text="lesson.title" class="text-2xl font-bold mt-4"/>
        <Label :text="lesson.duration" class="text-gray-600"/>
        
        <Label 
          :text="lesson.description" 
          textWrap="true" 
          class="mt-4 text-gray-700" 
          v-if="lesson.description"
        />
        
        <LessonObjectives 
          :objectives="lesson.objectives" 
          v-if="lesson.objectives && lesson.objectives.length"
        />
        
        <ResourceList 
          :resources="lesson.resources" 
          v-if="lesson.resources && lesson.resources.length"
        />

        <!-- Navigation Controls -->
        <GridLayout rows="auto" columns="*, *, *" class="mt-4 mb-4">
          <Button
            col="0"
            text="Previous"
            @tap="navigateToPreviousLesson"
            class="bg-gray-500 text-white p-2 m-1 rounded-lg"
            :isEnabled="!isFirstLesson"
            :opacity="isFirstLesson ? 0.5 : 1"
          />
          <Button
            col="1"
            :text="lesson.completed ? '✓ Completed' : 'Complete'"
            @tap="onCompleteLesson"
            :class="[
              'p-2 m-1 rounded-lg text-white',
              lesson.completed ? 'bg-green-500' : 'bg-blue-500'
            ]"
          />
          <Button
            col="2"
            text="Next"
            @tap="navigateToNextLesson"
            class="bg-gray-500 text-white p-2 m-1 rounded-lg"
            :isEnabled="!isLastLesson"
            :opacity="isLastLesson ? 0.5 : 1"
          />
        </GridLayout>

        <Button 
          text="Back to Course" 
          class="text-blue-500 p-2"
          @tap="backToCourse"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { Course, Lesson } from '../data/courses';
import VideoPlayer from './lesson/VideoPlayer.vue';
import LessonObjectives from './lesson/LessonObjectives.vue';
import ResourceList from './lesson/ResourceList.vue';
import { lessonNavigationService } from '../services/lessonNavigationService';

export default Vue.extend({
  name: 'LessonDetail',
  components: {
    VideoPlayer,
    LessonObjectives,
    ResourceList
  },
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
    navigateToPreviousLesson() {
      if (!this.isFirstLesson) {
        const previousLesson = this.course.lessons[this.currentIndex - 1];
        lessonNavigationService.navigateToLesson(this.course, previousLesson, 'right');
      }
    },
    navigateToNextLesson() {
      if (!this.isLastLesson) {
        const nextLesson = this.course.lessons[this.currentIndex + 1];
        lessonNavigationService.navigateToLesson(this.course, nextLesson, 'left');
      }
    },
    backToCourse() {
      lessonNavigationService.navigateToCourse(this.course);
    }
  }
});
</script>