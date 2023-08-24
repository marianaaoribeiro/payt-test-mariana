<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col
        cols="12"
        sm="8"
      >
        <products-card />
      </b-col>
      <b-col 
        cols="12" 
        sm="8"
      >
        <address-card />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import productsCard from "@/components/ProductsCard.vue";
import addressCard from "@/components/AddressCard.vue";
export default {
  components: {
    productsCard,
    addressCard
  },
};
</script>
