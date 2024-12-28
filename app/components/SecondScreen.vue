<template>
  <Page>
    <ActionBar>
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="goBack" />
      <Label text="Second Screen" class="font-bold text-lg"/>
    </ActionBar>

    <GridLayout>
      <Label class="text-xl align-middle text-center text-gray-500" text="Welcome to the second screen!" />
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";

export default Vue.extend({
  methods: {
    goBack() {
      this.$navigateBack();
    }
  }
});
</script>