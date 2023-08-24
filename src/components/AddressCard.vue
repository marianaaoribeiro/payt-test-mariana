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
                v-model="form.name"
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
                v-model="form.email"
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
                v-model="form.phone"
                class="bg-transparent"
                placeholder="(00) x0000-0000"
                required
              />
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="input-group-1"
              label="CEP"
              label-for="input-1"
              class="mb-3"
            >
              <b-form-input
                v-model="form.cep"
                v-mask="'#####-###'"
                class="bg-transparent"
                placeholder="Digite seu cep"
                required
                @input="searchCep()"
              />
              <span
                v-if="!cepEncontrado"
                class="text-error"
                >CEP não encontrado</span>
            </b-form-group>
          </b-col>
          <b-col cols="6" />
          <b-col cols="12">
            <b-form-group
              id="input-group-1"
              label="Endereço"
              label-for="input-1"
              class="mb-3"
            >
              <b-form-input
                id="input-1"
                v-model="form.address"
                class="bg-transparent"
                disabled
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
                v-model="form.num"
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
                v-model="form.compl"
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
                v-model="form.district"
                placeholder="Digite seu bairro"
                required
                disabled
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
                v-model="form.city"
                placeholder="Digite sua cidade"
                required
                disabled
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
              v-model="form.state"
              :options="ufs"
              disabled
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
import axios from 'axios'
import ufs from './ufs.js'
import {globalFunctions} from '../shared/mixins'
export default {
  mixins: [globalFunctions],
  data() {
    return {
      ufs,
      form: {
        name: '',
        email: '',
        phone: '',
        address: '',
        num: '',
        compl: '',
        district: '',
        city: '',
        state: '',
        cep: ''
      },
      cepEncontrado: true,
    };
  },
  methods: {
    toast1() {
        this.$bvToast.toast(`Toast with action link`, {
          href: '#foo',
          title: 'Example'
        })},
    searchCep() {
			if(this.form.cep.length == 9) {
				axios.get(`https://viacep.com.br/ws/${ this.updatedString(this.form.cep) }/json/`)
				.then( (response) => {
          const address = response.data
          if (!address.erro) {
            this.cepEncontrado = true
          this.form.address = address.logradouro
          this.form.city = address.localidade
          this.form.district = address.bairro
          this.form.state = address.uf
          }
          else{
            this.cepEncontrado = false
          }
          
        } )
			}
		},
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
