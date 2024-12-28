<template>
  <StackLayout class="mb-4">
    <Label text="Your Learning Path" class="text-lg font-bold mb-2"/>
    <GridLayout rows="auto, auto" class="bg-blue-50 p-4 rounded-lg">
      <!-- Next Course -->
      <StackLayout row="0" class="mb-4">
        <Label text="Recommended Next Course" class="font-semibold mb-2"/>
        <GridLayout columns="auto, *" class="bg-white p-2 rounded-lg">
          <Label :text="nextCourse.icon" col="0" class="text-2xl mr-2"/>
          <StackLayout col="1">
            <Label :text="nextCourse.title" class="font-medium"/>
            <Label :text="nextCourse.description" class="text-sm text-gray-600" textWrap="true"/>
          </StackLayout>
        </GridLayout>
      </StackLayout>

      <!-- Skills Progress -->
      <GridLayout row="1" columns="*, *" rows="auto, auto" class="gap-2">
        <Label text="Skills Progress" class="font-semibold" colSpan="2"/>
        <StackLayout 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          :col="index % 2"
          :row="Math.floor(index / 2) + 1"
          class="bg-white p-2 rounded-lg"
        >
          <Label :text="skill.name" class="font-medium"/>
          <Progress :value="skill.progress" maxValue="100" class="mt-1"/>
          <Label :text="skill.progress + '%'" class="text-xs text-gray-500 text-right"/>
        </StackLayout>
      </GridLayout>
    </GridLayout>
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { courses } from '../../data/courses';
import { getLearningPathData } from '../../data/learningPath';

export default Vue.extend({
  data() {
    const pathData = getLearningPathData(courses);
    return {
      nextCourse: pathData.nextCourse,
      skills: pathData.skills
    };
  }
});
</script>