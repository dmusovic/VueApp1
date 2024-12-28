<template>
  <StackLayout class="mb-4">
    <Label text="Browse by Category" class="text-lg font-bold mb-2"/>
    <GridLayout columns="*, *" rows="auto, auto, auto" class="gap-2">
      <StackLayout 
        v-for="(category, index) in categories" 
        :key="category.id"
        :col="index % 2"
        :row="Math.floor(index / 2)"
        class="bg-gray-100 p-4 rounded-lg"
        @tap="onCategoryTap(category.id)"
      >
        <Label :text="category.icon" class="text-2xl text-center"/>
        <Label :text="category.name" class="font-semibold text-center"/>
        <Label :text="category.description" class="text-xs text-gray-600 text-center" textWrap="true"/>
      </StackLayout>
    </GridLayout>
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { categories } from '../../data/categories';
import CourseList from '../CourseList.vue';

export default Vue.extend({
  data() {
    return {
      categories
    };
  },
  methods: {
    onCategoryTap(categoryId: string) {
      this.$navigateTo(CourseList, {
        props: { initialCategory: categoryId },
        transition: {
          name: 'slide',
          duration: 200
        }
      });
    }
  }
});
</script>