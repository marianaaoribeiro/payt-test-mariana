<template>
  <b-card
    class="border-secondary mt-4 bg-transparent"
    no-body
    >
    <b-card-body>
      <!-- <b-form
        @submit="onSubmit"
        @reset="onReset"
        > -->
        <b-row>
          <b-col cols="12">
            <b-form-group
              label="Nome Completo"
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
                label="E-mail"
                label-for="input-2"
                class="mb-3"
                >
              <b-form-input
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
              label="Telefone"
              label-for="input-2"
              class="mb-3"
            >
              <b-form-input
                v-model="form.phone"
                class="bg-transparent"
                placeholder="(00) x0000-0000"
                required
              />
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label="CEP"
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
              label="Endereço"
              class="mb-3"
            >
              <b-form-input
                v-model="form.address"
                class="bg-transparent"
                :disabled="enableField && address.logradouro ? true : false"
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
                label="Número"
                label-for="input-2"
                class="mb-3"
                >
              <b-form-input
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
              label="Complemento"
              label-for="input-2"
              class="mb-3"
            >
              <b-form-input
                
                v-model="form.compl"
                class="bg-transparent"
                placeholder="Complemento"
                required
              />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Bairro"
              class="mb-3"
            >
              <b-form-input
                id="input-1"
                v-model="form.district"
                placeholder="Digite seu bairro"
                required
                :disabled="enableField && address.bairro ? true : false"
                class="bg-transparent"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            >
            <b-form-group
                label="Cidade"
                label-for="input-2"
                class="mb-3"
                >
              <b-form-input
                
                v-model="form.city"
                placeholder="Digite sua cidade"
                required
                :disabled="enableField && address.localidade ? true : false"
                class="bg-transparent"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            >
            <b-form-group
              
              label="Estado"
              label-for="input-2"
              class="mb-3"
            >
              <b-form-select 
              v-model="form.state"
              :options="ufs"
              :disabled="enableField && address.uf ? true : false"
              class="form-select bg-transparent"
            />
            </b-form-group>
          </b-col>
        </b-row>
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
      address:{},
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
      enableField: false,
    };
  },
  methods: {
    searchCep() {
			if(this.form.cep.length == 9) {
				axios.get(`https://viacep.com.br/ws/${ this.updatedString(this.form.cep) }/json/`)
				.then( (response) => {
          this.address = response.data
          if (!this.address.erro) {
            this.enableField = true
            this.cepEncontrado = true
            this.form.address = this.address.logradouro
            this.form.city = this.address.localidade
            this.form.district = this.address.bairro
            this.form.state = this.address.uf
          }
          else{
            this.cepEncontrado = false
            this.enableField = false
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
