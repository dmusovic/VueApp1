<template>
  <StackLayout class="mb-4">
    <Label text="Resources" class="text-lg font-bold mb-2"/>
    <ListView :items="resources" @itemTap="onResourceTap" height="auto">
      <v-template>
        <GridLayout columns="auto, *, auto" class="p-4 border-b border-gray-200">
          <Label :text="getResourceIcon(item.type)" col="0" class="mr-2"/>
          <Label :text="item.title" col="1"/>
          <Label text="→" col="2" class="text-gray-500"/>
        </GridLayout>
      </v-template>
    </ListView>
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { LessonResource } from '../../data/courses';
import { Utils } from '@nativescript/core';

export default Vue.extend({
  props: {
    resources: {
      type: Array as () => LessonResource[],
      required: true
    }
  },
  methods: {
    getResourceIcon(type: string): string {
      switch (type) {
        case 'pdf': return '📄';
        case 'video': return '🎥';
        case 'link': return '🔗';
        default: return '📎';
      }
    },
    onResourceTap(event: any) {
      const resource = this.resources[event.index];
      Utils.openUrl(resource.url);
    }
  }
});
</script>