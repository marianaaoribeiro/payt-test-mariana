<template>
  <b-container @mouseleave="mouseleave">
    <b-form @submit.prevent="onSubmit(true)">
    <b-row class="justify-content-center">
      <b-col
        cols="12"
        sm="8"
      >
        <products-card @validateFields="validate" />
      </b-col>
      <b-col 
        cols="12" 
        sm="8"
      >
        <address-card @validateFields="validate" />
      </b-col>
      <b-col 
        cols="12" 
        sm="8"
      >
        <payment-card @validateFields="validate" />
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
  data(){
    return{
      valid: false
    }
  },
  created(){
  this.window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    console.log('CloseWindow')
    e.returnValue = '';
    });
  },
  methods: {
    mouseleave(){
      console.log('ChangeWindow');
    },
    validate(){
      console.log('PurchaseFail');
    },
    onSubmit() {
      console.log('Purchase');
    },
  }
};
</script>
