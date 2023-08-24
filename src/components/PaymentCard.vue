<template>
    <b-card
    class="border-secondary mt-4"
    no-body
    >
    <b-card-body>
      <credit-card />
      
      <b-row class="mt-4">
        <b-col cols="12">
          <p>
            Detalhes da compra
          </p>
        </b-col>
        <b-col
          cols="12"
          sm="9"
          >
          <p class="font-weight-bold">
            Nome do produto
          </p>
        </b-col>
        <b-col
          cols="12"
          sm="3"
          >
          <p>R$ 50,00 / mês</p>
        </b-col>
        <b-col cols="12">
          <p>
            <b-img
              :src="require('./assets/creditEdit.svg')"
              alt="Responsive image"
              />  
            Essa cobrança aparecerá na sua fatura como: PAYT*NomeDoProduto
          </p>
        </b-col>
        <b-col cols="6">
          <b-button
            class="text-white"
            variant="primary"
            size="lg"
            style="min-width: -webkit-fill-available;"
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
export default {
  components:{
    creditCard
  }
};
</script>
