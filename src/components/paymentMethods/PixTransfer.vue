<template>
  <b-form>
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
          label-for="input-2"
          class="mb-3"
        >
          <b-form-input
            id="input-1"
            required
            />
        </b-form-group>
      </b-col>
      <b-col cols="12" />
      <b-col cols="6">
        <b-button
          class="text-white"
          variant="primary"
          size="lg"
          style="min-width: -webkit-fill-available"
        >
          Comprar Agora
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>
<script>
import infoCards from "@/components/utils/InfoCards.vue";

export default {
  components: {
    infoCards,
  },
  data() {
    return {
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
  methods: {},
};
</script>
