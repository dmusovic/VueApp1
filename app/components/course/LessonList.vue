<template>
  <StackLayout>
    <Label text="Course Content" class="text-xl font-bold mb-2"/>
    <ListView :items="lessons" @itemTap="onLessonTap" height="300">
      <v-template>
        <GridLayout columns="auto, auto, *, auto" class="p-4 border-b border-gray-200">
          <Label :text="($index + 1).toString()" col="0" class="mr-2"/>
          <Label 
            text="✓" 
            col="1" 
            class="text-green-500 mr-2" 
            :opacity="item.completed ? 1 : 0"
          />
          <Label 
            :text="item.title" 
            col="2" 
            :class="[
              item.completed ? 'text-green-500' : 'text-gray-800'
            ]"
          />
          <Label :text="item.duration" col="3" class="text-gray-500"/>
        </GridLayout>
      </v-template>
    </ListView>
    <Progress 
      :value="completedCount" 
      :maxValue="lessons.length" 
      class="mt-4 bg-gray-200"
      color="#22c55e"
    />
    <Label 
      :text="`${progressPercentage}% Complete`" 
      class="text-sm text-gray-500 text-center mt-2"
    />
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { Lesson } from '../../data/courses';

export default Vue.extend({
  props: {
    lessons: {
      type: Array as () => Lesson[],
      required: true
    }
  },
  computed: {
    completedCount(): number {
      return this.lessons.filter(lesson => lesson.completed).length;
    },
    progressPercentage(): number {
      return Math.round((this.completedCount / this.lessons.length) * 100);
    }
  },
  methods: {
    onLessonTap(event: any) {
      this.$emit('lessonTap', event);
    }
  }
});
</script>