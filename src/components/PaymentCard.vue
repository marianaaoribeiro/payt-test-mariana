<template>
    <b-card
    class="border-secondary mt-4"
    no-body
    >
    <b-card-body>
      <b-form>
        <b-row>
          <b-col
            cols="12"
            sm="6"
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
                    id="input-1"
                    v-model="form.email"
                    placeholder="Digite somente os números"
                    required
                    class=""
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
                    id="input-1"
                    v-model="form.email"
                    placeholder="Digite o nome impresso no cartão"
                    required
                    class=""
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
                    id="input-1"
                    v-model="form.email"
                    placeholder="Para emissão da nota fiscal"
                    required
                    class=""
                  />
                </b-form-group>
              </b-col>
              <b-col
                cols="12"
                sm="4"
                >
                <b-form-group
                  id="input-group-2"
                  label="Validade"
                  label-for="input-2"
                  class="mb-3"
                >
                  <b-form-select class="form-select" />
                </b-form-group>
              </b-col>
              <b-col
                cols="12"
                sm="4"
                >
                <b-form-select class="form-select mt-4" />
              </b-col>
              <b-col
                cols="12"
                sm="4"
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
                    class=""
                    placeholder="(00) x0000-0000"
                    required
                  />
                </b-form-group>
              </b-col>

              <b-col cols="12">
                <b-form-group
                  id="input-group-2"
                  label="Número de parcelas"
                  label-for="input-2"
                  class="mb-3"
                >
                  <b-form-select class="form-select" />
                </b-form-group>
              </b-col>
            </b-row>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            />
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
    };
  },
  methods: {},
};
</script>
