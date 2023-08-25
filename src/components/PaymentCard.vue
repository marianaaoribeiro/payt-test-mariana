<template>
    <b-card
      class="border-secondary mt-4"
      no-body
      >
    <b-card-body>
        <btn-group
          :buttons="buttons"
          @buttonSelect="getButton"
          />
        <credit-card
          v-if="itemSelected == 1"
          @validate="$emit('validateFields')"
          />
        <pix-transfer
          v-if="itemSelected == 2"
          @validate="$emit('validateFields')"
          />
        <bank-slip
          v-if="itemSelected == 3"
          @validate="$emit('validateFields')"
          />
        <b-row>
          <b-col
          cols="12"
          sm="6"
          >
          <b-button
            class="text-white"
            variant="primary"
            type="submit"
            size="lg"
            style="min-width: -webkit-fill-available"
          >
            Comprar Agora
          </b-button>
        </b-col>
          <b-col
            cols="12"
            align="center"
            class="my-5"
            >
            <b-img
              :src="require('./assets/seguro.svg')"
              alt="Responsive image"
            />  
          </b-col>
        </b-row>
    </b-card-body>
  </b-card>
</template>
<script>
import creditCard from "@/components/paymentMethods/CreditCard.vue";
import pixTransfer from "@/components/paymentMethods/PixTransfer.vue";
import bankSlip from "@/components/paymentMethods/BankSlip.vue";
import btnGroup from "@/components/shared/BtnGroup.vue";
export default {
  components: {
    creditCard,
    pixTransfer,
    bankSlip,
    btnGroup
  },
  data() {
    return {
      itemSelected: 1,
      buttons: [
        {
          id: 1,
          name:'Cartão de crédito',
          image: require('./assets/iconCredit.svg')
        },
        {
          id: 2,
          name:'Pix',
          image: require('./assets/iconPix.svg')
        },
        {
          id: 3,
          name:'Boleto',
          image: require('./assets/iconBar.svg')
        },
      ]
    };
  },
  methods:{
    getButton(value){
      this.itemSelected = value.id
      this.$store.commit('setPaymentMethod', this.itemSelected)
      this.$store.commit('setPaymentData', {})
    }
  },
};
</script>
