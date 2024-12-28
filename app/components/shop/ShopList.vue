<template>
  <Page>
    <ActionBar>
      <Label text="Shop" class="font-bold text-lg"/>
    </ActionBar>

    <GridLayout rows="*, auto">
      <ListView row="0" :items="products" class="list-group">
        <v-template>
          <ProductCard :product="item" />
        </v-template>
      </ListView>
      <BottomNavBar row="1" />
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import ProductCard from './ProductCard.vue';
import BottomNavBar from '../navigation/BottomNavBar.vue';
import { products } from '../../data/products';

export default Vue.extend({
  components: {
    ProductCard,
    BottomNavBar
  },
  data() {
    return {
      products
    };
  }
});
</script>