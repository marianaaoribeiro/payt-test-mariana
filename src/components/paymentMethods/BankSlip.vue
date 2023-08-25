<template>
  <div>
    <b-row>
        <b-col
        cols="12"
        class="text-center"
        >
        Atenção:
        </b-col>
      <b-col
        v-for="(item, index) in cards"
        :key="index"
        cols="12"
        sm="4"
        >
        <info-cards
        style="height: 210px"
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
            class=""
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
      cards: [
        {
          image: require("./assets/clock.svg"),
          text: "Boletos levam até 3 dias úteis para serem compensados e então terem os produtos liberados.",
        },
        {
          image: require("./assets/mail.svg"),
          text: "Depois do pagamento, fique atento ao seu e-mail para receber os dados de acesso ao produto (verifique também a caixa de SPAM)",
        },
        {
          image: require("./assets/calendar.svg"),
          text: "A cada renovação da assinatura enviaremos um novo boleto para que você possa pagar. Assim, você fica sempre em dia sem se preocupar.",
        },
      ],
    };
  },
  methods: {},
};
</script>
