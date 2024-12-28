<template>
  <GridLayout rows="auto" class="product-card bg-white m-2 rounded-lg elevation-2">
    <StackLayout class="p-2">
      <Image 
        :src="product.image" 
        loadMode="async"
        stretch="aspectFill" 
        height="150"
        class="rounded-t-lg"
      />
      <StackLayout class="p-3">
        <Label :text="product.name" class="text-lg font-bold"/>
        <Label :text="product.description" class="text-gray-600" textWrap="true"/>
        <Label :text="'$' + product.price" class="text-green-500 font-bold mt-2"/>
      </StackLayout>
    </StackLayout>
  </GridLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { Product } from '../../data/products';

export default Vue.extend({
  props: {
    product: {
      type: Object as () => Product,
      required: true
    }
  }
});
</script>