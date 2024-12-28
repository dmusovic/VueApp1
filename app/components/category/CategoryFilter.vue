<template>
  <ScrollView orientation="horizontal" class="mb-4">
    <StackLayout orientation="horizontal" class="p-2">
      <Label
        v-for="cat in categories"
        :key="cat.id"
        :text="cat.icon + ' ' + cat.name"
        :class="['mx-1 px-4 py-2 rounded-full', 
                 selectedCategory === cat.id ? 'bg-blue-500 text-white' : 'bg-gray-100']"
        @tap="$emit('select', cat.id)"
      />
    </StackLayout>
  </ScrollView>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { categories } from '../../data/categories';

export default Vue.extend({
  props: {
    selectedCategory: String
  },
  data() {
    return {
      categories
    };
  }
});
</script>