<template>
  <StackLayout class="mb-4">
    <Image :src="course.thumbnail" stretch="aspectFill" height="200" class="rounded-lg"/>
    <Label :text="course.title" class="text-2xl font-bold mt-4"/>
    <Label :text="'by ' + course.instructor" class="text-lg text-gray-600"/>
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { Course } from '../../data/courses';

export default Vue.extend({
  props: {
    course: {
      type: Object as () => Course,
      required: true
    }
  }
});
</script>