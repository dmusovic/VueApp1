<template>
  <GridLayout rows="auto" class="event-card bg-white m-2 rounded-lg elevation-2">
    <StackLayout class="p-4">
      <GridLayout columns="auto, *" class="mb-2">
        <Label :text="event.icon" col="0" class="text-2xl mr-2"/>
        <Label :text="event.title" col="1" class="text-lg font-bold"/>
      </GridLayout>
      <Label :text="event.description" class="text-gray-600 mb-2" textWrap="true"/>
      <GridLayout columns="auto, *" rows="auto, auto" class="mt-2">
        <Label text="📅" col="0" row="0" class="mr-2"/>
        <Label :text="event.date" col="1" row="0" class="text-gray-500"/>
        <Label text="⏰" col="0" row="1" class="mr-2"/>
        <Label :text="event.time" col="1" row="1" class="text-gray-500"/>
      </GridLayout>
    </StackLayout>
  </GridLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { Event } from '../../data/events';

export default Vue.extend({
  props: {
    event: {
      type: Object as () => Event,
      required: true
    }
  }
});
</script>