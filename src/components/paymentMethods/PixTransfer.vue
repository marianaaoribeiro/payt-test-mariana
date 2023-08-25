<template>
  <div>
    <b-row>
        <b-col
        cols="12"
        class="text-center"
        >
            Libere sua compra rapidamente pagando com o Pix!
        </b-col>
      <b-col
        v-for="(item, index) in cards"
        :key="index"
        cols="12"
        sm="6"
        >
        <info-cards
        style="height: 190px"
        :title="item.title"
        :text="item.text"
        :image="item.image"
        />
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col cols="12">
        <p>Detalhes da compra</p>
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
      <b-col cols="6">
        <b-form-group
          id="input-group-2"
          label="CPF/CNPJ (Para emissão de Nota Fiscal)"
          class="mb-3"
        >
          <b-form-input
            v-model="payment.cpfCnpj"
            v-mask="['###.###.###-##', '##.###.###/####-##']"
            required
            @change="checkFields"
            @focus="focusField"
            @input="saveFields"
            />
        </b-form-group>
      </b-col>
      <b-col cols="12" />
    </b-row>
  </div>
</template>
<script>
import infoCards from "@/components/shared/InfoCards.vue";

export default {
  components: {
    infoCards,
  },
  data() {
    return {
      payment:{
        cpfCnpj: ''
      },
      cards: [
        {
          image: require("./assets/clock.svg"),
          title: "Rápida aprovação",
          text: "Pagamento em segundos, sem complicação.",
        },
        {
          image: require("./assets/qrcode.svg"),
          title: "Facilidade na finalização",
          text: "Basta escanear, com o aplicativo do seu banco, o QRCode que iremos gerar para sua compra.",
        },
        {
          image: require("./assets/shield.svg"),
          title: "Maior segurança",
          text: "O PIX foi desenvolvido pelo Banco Central para facilitar suas compras e é 100% seguro.",
        },
        {
          image: require("./assets/calendar.svg"),
          title: "Tranquilidade na renovação",
          text: "A cada renovação da assinatura enviaremos um código PIX. Assim, você fica sempre em dia sem se preocupar.",
        },
      ],
    };
  },
  methods: {
    checkFields(){
      if (this.$store.getters.addPaymentInfo) {
        console.log('AddPaymentInfo');
      }
    },
    focusField(){
      if (this.$store.getters.initiateCheckout) {
        console.log('InitiateCheckout');
      }
      this.saveFields()
    },
    saveFields(){
      this.$store.commit('setPaymentData', this.payment)
    }
  },
};
</script>
