<template>
  <StackLayout class="bg-gray-100 p-4 rounded-lg mb-4">
    <Label :text="course.duration" class="text-gray-600"/>
    <Label :text="course.lessonsCount + ' lessons'" class="text-gray-600"/>
    <Progress :value="course.progress" maxValue="100" class="mt-2"/>
    <Label :text="course.progress + '% Complete'" class="text-sm text-gray-500"/>
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