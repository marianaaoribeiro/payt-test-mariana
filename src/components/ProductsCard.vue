<template>
  <b-card
    class="border-secondary mt-4"
    no-body
    >
    <b-card-body>
      <b-row no-gutters>
        <b-col
           cols="12"
           sm="2"
           md="3"
           align-self="center"
        >
          <b-img
            :src="require('./assets/imagem1.svg')"
            style="width: 120px; max-height: 150px"
            fluid-grow
            alt="Responsive image"
          />
        </b-col>
         <b-col
            cols="12"
            sm="7"
            md="6"
            align-self="center"
            >
          <h5 class="font-weight-bold">
            Nome do produto
          </h5>
          <h5 class="text-primary font-weight-bold">
            R$ 50,00 / mês
            </h5>
          <p>Plano mensal com renovação automática</p>
        </b-col>
        <b-col>
            <b-form-select
              v-model="selected"
              class="form-select"
              :options="options"
              disabled
              placeholder="Alterar país"
            />
        </b-col>
      </b-row>
    </b-card-body>
    <div class="bg-primary text-white rounded-bottom p-2">
      contatolivrediet@gmail.com
    </div>
  </b-card>
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Alterar país" },
      ],
    };
  },
};
</script>
