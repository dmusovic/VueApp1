<template>
  <StackLayout>
    <Label text="Course Content" class="text-lg font-bold mb-2"/>
    <ListView :items="lessons" @itemTap="onLessonTap" height="300">
      <v-template>
        <GridLayout columns="auto, auto, *, auto" class="p-4 border-b border-gray-200">
          <Label :text="($index + 1).toString()" col="0" class="mr-2"/>
          <Label text="✓" col="1" class="text-green-500 mr-2" v-if="item.completed"/>
          <Label :text="item.title" col="2" :class="item.completed ? 'text-gray-500' : ''"/>
          <Label :text="item.duration" col="3" class="text-gray-500"/>
        </GridLayout>
      </v-template>
    </ListView>
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
  methods: {
    onLessonTap(event: any) {
      this.$emit('lessonTap', event);
    }
  }
});
</script>