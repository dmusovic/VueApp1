<template>
  <Page>
    <ActionBar>
      <Label text="Learning Platform" class="font-bold text-lg"/>
    </ActionBar>

    <GridLayout rows="*, auto">
      <ScrollView row="0">
        <StackLayout class="p-4">
          <Label 
            class="text-xl text-center text-gray-500 mb-4" 
            text="Welcome to Your Learning Journey" 
          />
          <QuickActions />
          <LearningPath />
        </StackLayout>
      </ScrollView>
      
      <BottomNavBar row="1" />
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import QuickActions from "./home/QuickActions.vue";
import LearningPath from "./home/LearningPath.vue";
import BottomNavBar from "./navigation/BottomNavBar.vue";

export default Vue.extend({
  components: {
    QuickActions,
    LearningPath,
    BottomNavBar
  }
});
</script>