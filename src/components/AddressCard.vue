<template>
  <b-card
    class="border-secondary mt-4 bg-transparent"
    no-body
    >
    <b-card-body>
      <b-form
        @submit="onSubmit"
        @reset="onReset"
        >
        <b-row>
          <b-col cols="12">
            <b-form-group
              id="input-group-1"
              label="Nome Completo"
              label-for="input-1"
              class="mb-3"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                placeholder="Digite seu nome completo"
                required
                class="bg-transparent"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            >
            <b-form-group
                id="input-group-2"
                label="E-mail"
                label-for="input-2"
                class="mb-3"
                >
              <b-form-input
                id="input-2"
                v-model="form.name"
                type="email"
                placeholder="Digite seu email"
                required
                class="bg-transparent"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            >
            <b-form-group
              id="input-group-2"
              label="Telefone"
              label-for="input-2"
              class="mb-3"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                class="bg-transparent"
                placeholder="(00) x0000-0000"
                required
              />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              id="input-group-1"
              label="Endereço"
              label-for="input-1"
              class="mb-3"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                class="bg-transparent"
                placeholder="Digite seu endereço"
                required
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            >
            <b-form-group
                id="input-group-2"
                label="Número"
                label-for="input-2"
                class="mb-3"
                >
              <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Número"
                required
                class="bg-transparent"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
           >
            <b-form-group
              id="input-group-2"
              label="Complemento"
              label-for="input-2"
              class="mb-3"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                class="bg-transparent"
                placeholder="Complemento"
                required
              />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              id="input-group-1"
              label="Bairro"
              label-for="input-1"
              class="mb-3"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                placeholder="Digite seu bairro"
                required
                class="bg-transparent"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            >
            <b-form-group
                id="input-group-2"
                label="Cidade"
                label-for="input-2"
                class="mb-3"
                >
              <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Digite sua cidade"
                required
                class="bg-transparent"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            >
            <b-form-group
              id="input-group-2"
              label="Estado"
              label-for="input-2"
              class="mb-3"
            >
              <b-form-select 
              class="form-select bg-transparent"
            />
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
