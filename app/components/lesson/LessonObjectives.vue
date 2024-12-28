<template>
  <StackLayout class="mb-4">
    <Label text="Lesson Objectives" class="text-lg font-bold mb-2"/>
    <ListView :items="objectives" height="auto">
      <v-template>
        <GridLayout columns="auto, *" class="p-2">
          <Label text="•" col="0" class="mr-2"/>
          <Label :text="item.description" col="1" textWrap="true"/>
        </GridLayout>
      </v-template>
    </ListView>
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { LessonObjective } from '../../data/courses';

export default Vue.extend({
  props: {
    objectives: {
      type: Array as () => LessonObjective[],
      required: true
    }
  }
});
</script>