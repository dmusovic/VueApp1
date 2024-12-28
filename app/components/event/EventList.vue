<template>
  <Page>
    <ActionBar>
      <Label text="Events" class="font-bold text-lg"/>
    </ActionBar>

    <GridLayout rows="*, auto">
      <ListView row="0" :items="events" class="list-group">
        <v-template>
          <EventCard :event="item" />
        </v-template>
      </ListView>
      <BottomNavBar row="1" />
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import EventCard from './EventCard.vue';
import BottomNavBar from '../navigation/BottomNavBar.vue';
import { events } from '../../data/events';

export default Vue.extend({
  components: {
    EventCard,
    BottomNavBar
  },
  data() {
    return {
      events
    };
  }
});
</script>