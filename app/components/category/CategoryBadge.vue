<template>
  <Label 
    :text="category.icon + ' ' + category.name"
    class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
  />
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { Category } from '../../data/categories';

export default Vue.extend({
  props: {
    category: {
      type: Object as () => Category,
      required: true
    }
  }
});
</script>