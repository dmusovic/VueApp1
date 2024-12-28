<template>
  <GridLayout rows="auto" class="course-card bg-white m-2 rounded-lg elevation-2">
    <StackLayout class="p-2">
      <Image 
        :src="course.thumbnail" 
        loadMode="async"
        stretch="aspectFill" 
        height="150"
        class="rounded-t-lg"
      />
      <StackLayout class="p-3">
        <CategoryBadge 
          :category="getCategory(course.categoryId)" 
          class="mb-2"
        />
        <Label :text="course.title" class="text-lg font-bold"/>
        <Label :text="course.instructor" class="text-gray-600"/>
        <GridLayout columns="auto, *, auto" class="mt-2">
          <Label :text="course.duration" col="0" class="text-sm text-gray-500"/>
          <Label :text="'•'" col="1" class="text-sm text-gray-500 text-center"/>
          <Label :text="course.lessonsCount + ' lessons'" col="2" class="text-sm text-gray-500"/>
        </GridLayout>
        <Progress :value="course.progress" maxValue="100" class="mt-2"/>
      </StackLayout>
    </StackLayout>
  </GridLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { Course } from '../data/courses';
import { categories, Category } from '../data/categories';
import CategoryBadge from './category/CategoryBadge.vue';

export default Vue.extend({
  components: {
    CategoryBadge
  },
  props: {
    course: {
      type: Object as () => Course,
      required: true
    }
  },
  methods: {
    getCategory(categoryId: string): Category {
      return categories.find(c => c.id === categoryId)!;
    }
  }
});
</script>