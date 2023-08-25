<template>
  <b-container>
    <b-form @submit="onSubmit">
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
      <b-col 
        cols="12" 
        sm="8"
      >
        <payment-card />
      </b-col>
    </b-row>
  </b-form>
  </b-container>
</template>
<script>
import productsCard from "@/components/ProductsCard.vue";
import addressCard from "@/components/AddressCard.vue";
import PaymentCard from '@/components/PaymentCard.vue';
export default {
  components: {
    productsCard,
    addressCard,
    PaymentCard
  },
  methods:{
    onSubmit(event) {
      console.log('Purchase');
      event.preventDefault();
      alert(event);
    },
  }
};
</script>
