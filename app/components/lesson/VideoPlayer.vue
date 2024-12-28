<template>
  <StackLayout class="video-container">
    <!-- Placeholder for video - in a real app, use a proper video player component -->
    <Image
      :src="thumbnailUrl || 'https://raw.githubusercontent.com/NativeScript/code-samples/main/demo-vue/app/assets/images/video-placeholder.jpg'"
      stretch="aspectFill"
      height="200"
      class="rounded-lg"
    />
    <Label text="Video Player" class="text-center text-gray-500 mt-2"/>
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';

export default Vue.extend({
  props: {
    videoUrl: String,
    thumbnailUrl: String
  }
});
</script>