<template>
      <b-form>
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
                    id="input-1"
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
                      style=" height: 45px"
                      alt="Responsive image"
                    />
                  </b-col>
                  <b-col
                    cols="6"
                    align="end"
                    >
                    <b-img
                      :src="require('../assets/visa.svg')"
                      style="width: 72px; height: 45px"
                      alt="Responsive image"
                    />
                  </b-col>
                  <b-col cols="12">
                   <p class="pt-5 pt-xl-4">
                    #### #### #### ####
                   </p>
                  </b-col>
                  <b-col
                    cols="6"
                    align="start"
                    class="pt-2 pt-xl-0"
                    >
                    <div>Titular</div>
                    <span class="font-weight-bold">
                      Nome Completo
                    </span>
                  </b-col>
                  <b-col
                    cols="6"
                    align="end"
                    class="pt-2 pt-xl-0"
                    >
                    <div>
                      Validade
                    </div>
                    <span>
                      MÊS/ANO
                    </span>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-form>
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
