<template>
  <GridLayout rows="*,auto" class="page">
    <Frame row="0" id="mainContent">
      <slot />
    </Frame>
    
    <GridLayout row="1" columns="*,*,*" class="bg-white border-t border-gray-200 p-2">
      <StackLayout col="0" class="text-center p-2" @tap="navigateTo('courses')" :class="{'text-blue-500': activeTab === 'courses'}">
        <Label text="📚" class="text-2xl"/>
        <Label text="Courses" class="text-xs"/>
      </StackLayout>
      
      <StackLayout col="1" class="text-center p-2" @tap="navigateTo('events')" :class="{'text-blue-500': activeTab === 'events'}">
        <Label text="📅" class="text-2xl"/>
        <Label text="Events" class="text-xs"/>
      </StackLayout>
      
      <StackLayout col="2" class="text-center p-2" @tap="navigateTo('shop')" :class="{'text-blue-500': activeTab === 'shop'}">
        <Label text="🛍️" class="text-2xl"/>
        <Label text="Shop" class="text-xs"/>
      </StackLayout>
    </GridLayout>
  </GridLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { tabNavigationService } from '../../navigation/tabNavigationService';
import { RouteKey } from '../../navigation/routes';

export default Vue.extend({
  data() {
    return {
      activeTab: 'courses' as RouteKey
    };
  },
  methods: {
    navigateTo(tab: RouteKey) {
      this.activeTab = tab;
      tabNavigationService.navigateToTab(tab);
    }
  }
});
</script>