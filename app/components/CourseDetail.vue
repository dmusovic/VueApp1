<template>
  <Page>
    <ActionBar>
      <NavigationButton 
        text="Back" 
        android.systemIcon="ic_menu_back" 
        @tap="backToCatalog" 
      />
      <Label :text="course.title" class="font-bold text-lg"/>
    </ActionBar>

    <ScrollView>
      <StackLayout class="p-4">
        <CourseHeader :course="course" />
        <CourseProgress :course="course" />
        <LessonList 
          :lessons="course.lessons"
          @lessonTap="onLessonTap"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { Course, Lesson } from '../data/courses';
import CourseHeader from './course/CourseHeader.vue';
import CourseProgress from './course/CourseProgress.vue';
import LessonList from './course/LessonList.vue';
import LessonDetail from './LessonDetail.vue';
import CourseList from './CourseList.vue';

export default Vue.extend({
  name: 'CourseDetail',
  components: {
    CourseHeader,
    CourseProgress,
    LessonList
  },
  props: {
    course: {
      type: Object as () => Course,
      required: true
    }
  },
  methods: {
    backToCatalog() {
      this.$navigateTo(CourseList, {
        transition: {
          name: 'slideRight',
          duration: 200
        },
        clearHistory: true
      });
    },
    onLessonTap(event: any) {
      const selectedLesson = this.course.lessons[event.index];
      this.$navigateTo(LessonDetail, {
        props: {
          course: this.course,
          lesson: selectedLesson
        },
        transition: {
          name: 'slide',
          duration: 200
        },
        clearHistory: false
      });
    }
  }
});
</script>