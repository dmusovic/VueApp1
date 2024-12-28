<template>
  <Page>
    <ActionBar>
      <NavigationButton 
        text="Back" 
        android.systemIcon="ic_menu_back" 
        @tap="backToHome" 
      />
      <Label text="Course Catalog" class="font-bold text-lg"/>
    </ActionBar>

    <StackLayout>
      <CategoryFilter 
        :selectedCategory="selectedCategory"
        @select="onCategorySelect"
      />
      
      <ListView :items="filteredCourses" @itemTap="onCourseTap" class="list-group">
        <v-template>
          <CourseCard :course="item" />
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import CourseCard from './CourseCard.vue';
import CategoryFilter from './category/CategoryFilter.vue';
import CourseDetail from './CourseDetail.vue';
import Home from './Home.vue';
import { courses } from '../data/courses';

export default Vue.extend({
  name: 'CourseList',
  components: {
    CourseCard,
    CategoryFilter
  },
  data() {
    return {
      courses,
      selectedCategory: ''
    };
  },
  computed: {
    filteredCourses() {
      if (!this.selectedCategory) return this.courses;
      return this.courses.filter(course => course.categoryId === this.selectedCategory);
    }
  },
  methods: {
    backToHome() {
      this.$navigateTo(Home, {
        transition: {
          name: 'slideRight',
          duration: 200
        },
        clearHistory: true
      });
    },
    onCourseTap(event: any) {
      const selectedCourse = this.filteredCourses[event.index];
      this.$navigateTo(CourseDetail, {
        props: { course: selectedCourse },
        transition: {
          name: 'slide',
          duration: 200
        },
        clearHistory: false
      });
    },
    onCategorySelect(categoryId: string) {
      this.selectedCategory = this.selectedCategory === categoryId ? '' : categoryId;
    }
  }
});
</script>