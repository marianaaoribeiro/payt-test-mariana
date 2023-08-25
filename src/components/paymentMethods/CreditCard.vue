<template>
  <div>
    <b-row>
      <b-col
        cols="12"
        xl="6"
        >
        <b-row>
          <b-col cols="12">
            <b-form-group
              id="input-group-1"
              label="Número do Cartão"
              label-for="input-1"
              class="mb-3"
            >
              <b-form-input
                v-model="credit.num"
                v-mask="'#### #### #### ####'"
                placeholder="Digite somente os números"
                required
                @input="testNum"
              />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              id="input-group-1"
              label="Titular do Cartão"
              label-for="input-1"
              class="mb-3"
            >
              <b-form-input
                v-model="credit.name"
                placeholder="Digite o nome impresso no cartão"
                required
              />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              id="input-group-1"
              label="CPF/CNPJ do Titular"
              label-for="input-1"
              class="mb-3"
            >
              <b-form-input
                v-model="credit.cpfCnpj"
                v-mask="['###.###.###-##', '##.###.###/####-##']"
                placeholder="Para emissão da nota fiscal"
                required
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="4"
            >
            <b-form-group
                label="Validade"
                label-for="input-2"
                class="mb-3"
                >
              <b-form-select
                v-model="credit.mounth"
                :options="mounths"
                class="form-select"
                required
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="4"
            >
            <b-form-select
              v-model="credit.year"
              :options="years"
              class="form-select mt-4"
              required
            />
          </b-col>
          <b-col
            cols="12"
            sm="4"
            >
            <b-form-group
                label="Telefone"
                label-for="input-2"
                class="mb-3"
                >
              <b-form-input
                v-model="credit.phone"
                v-mask="'(##) ####-#####'"
                placeholder="(00) x0000-0000"
                required
              />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Número de parcelas"
              label-for="input-2"
              class="mb-3"
            >
              <b-form-select
                v-model="credit.installments"
                :options="installments"
                class="form-select"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
      <b-col
        cols="12"
        xl="6"
        >
        <b-card
          overlay
          img-alt="Card Image"
          text-variant="white"
          img-fluid
          :img-src="require('../assets/cartao.svg')"
        >
          <b-card-text>
            <b-row>
              <b-col
                cols="6"
                align="start"
                >
                <b-img
                  :src="require('../assets/card.svg')"
                  style="height: 45px"
                  alt="Responsive image"
                />
              </b-col>
              <b-col
                cols="6"
                align="end"
                >
                <b-img
                  v-if="banner"
                  :src="banner"
                  style="width: 72px; height: 45px"
                  alt="Responsive image"
                  class="rounded"
                />
              </b-col>
              <b-col cols="12">
                <p class="pt-5 pt-xl-4">
                  {{ credit.num ? credit.num : "#### #### #### ####" }}
                </p>
              </b-col>
              <b-col
                cols="6"
                align="start"
                class="pt-2 pt-xl-0"
                >
                <div>Titular</div>
                <span class="font-weight-bold">
                  {{ credit.name ? credit.name : "Nome Completo" }}
                </span>
              </b-col>
              <b-col
                cols="6"
                align="end"
                class="pt-2 pt-xl-0"
                >
                <div>Validade</div>
                <span>
                  {{ credit.mounth ? credit.mounth : "MÊS" }}/{{
                    credit.year ? credit.year : "ANO"
                  }}
                </span>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
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
      <b-col cols="12">
        <p>
          <b-img
            :src="require('../assets/creditEdit.svg')"
            alt="Responsive image"
          />
          Essa cobrança aparecerá na sua fatura como: PAYT*NomeDoProduto
        </p>
      </b-col>
    </b-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      banner: "",
      installments: ["1", "2", "3", "4", "5"],
      mounths: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ],
      years: ["2028", "2029", "2030", "2031"],
      cardBanner: [
        {
          name: "visa",
          regex: /^4[0-9]{15}$/,
          image: require("../assets/visa.svg"),
        },
        {
          name: "mastercard",
          regex:
            /^(50|5[6-9]|6007|6220|6304|6703|6708|6759|676[1-3])|((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
          image: require("./assets/mastercard.png"),
        },
        {
          name: "diners",
          regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
          image: require("./assets/diners.jpg"),
        },
        {
          name: "amex",
          regex: /^3[47][0-9]{13}$/,
          image: require("./assets/amex.png"),
        },
        {
          name: "hipercard",
          regex: /^606282|^3841(?:[0|4|6]{1})0/,
          image: require("./assets/hipercard.svg"),
        },
        {
          name: "elo",
          regex:
            /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
          image: require("./assets/elo.png"),
        },
      ],
      credit: {
        num: "",
        name: "",
        cpfCnpj: "",
        mounth: "",
        year: "",
        phone: "",
        installments: "",
      },
    };
  },
  methods: {
    testNum() {
      const number = this.credit.num.replace(/\s/g, "");
      if (number.length > 0) {
        for (let card of this.cardBanner) {
          if (number.match(card.regex)) {
            this.banner = card.image;
            break;
          }
        }
      } else {
        this.banner = "";
      }
    },
  },
};
</script>
