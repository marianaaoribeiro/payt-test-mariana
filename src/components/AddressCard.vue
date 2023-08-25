<template>
  <b-card
    class="border-secondary mt-4 bg-transparent"
    no-body
    >
    <b-card-body>
        <b-row>
          <b-col cols="12">
            <b-form-group
              label="Nome Completo"
              class="mb-3"
            >
              <b-form-input
                v-model="addressData.name"
                placeholder="Digite seu nome completo"
                required
                class="bg-transparent"
                @change="namePhoneEmail"
                @input="saveFields"
                @focus="focusField"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            >
            <b-form-group
                label="E-mail"
                class="mb-3"
                >
              <b-form-input
                v-model="addressData.email"
                type="email"
                placeholder="Digite seu email"
                required
                class="bg-transparent"
                @change="namePhoneEmail"
                @input="saveFields"
                @focus="focusField"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            >
            <b-form-group
              label="Telefone"
              class="mb-3"
            >
              <b-form-input
                v-model="addressData.phone"
                v-mask="'(##) ####-#####'"
                class="bg-transparent"
                placeholder="(00) x0000-0000"
                required
                @input="saveFields"
                @change="namePhoneEmail"
                @focus="focusField"
              />
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              label="CEP"
              class="mb-3"
            >
              <b-form-input
                v-model="addressData.cep"
                v-mask="'#####-###'"
                class="bg-transparent"
                placeholder="Digite seu cep"
                required
                @input="searchCep()"
                @focus="focusField"
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
                v-model="addressData.address"
                class="bg-transparent"
                :disabled="enableField && address.logradouro ? true : false"
                placeholder="Digite seu endereço"
                required
                @input="saveFields"
                @focus="focusField"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            >
            <b-form-group
                label="Número"
                class="mb-3"
                >
              <b-form-input
                v-model="addressData.num"
                placeholder="Número"
                required
                class="bg-transparent"
                @input="saveFields"
                @focus="focusField"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
           >
            <b-form-group
              label="Complemento"
              class="mb-3"
            >
              <b-form-input
                v-model="addressData.compl"
                class="bg-transparent"
                placeholder="Complemento"
                required
                @input="saveFields"
                @focus="focusField"
              />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Bairro"
              class="mb-3"
            >
              <b-form-input
                v-model="addressData.district"
                placeholder="Digite seu bairro"
                required
                :disabled="enableField && address.bairro ? true : false"
                class="bg-transparent"
                @input="saveFields"
                @focus="focusField"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            >
            <b-form-group
                label="Cidade"
                class="mb-3"
                >
              <b-form-input
                v-model="addressData.city"
                placeholder="Digite sua cidade"
                required
                :disabled="enableField && address.localidade ? true : false"
                class="bg-transparent"
                @input="saveFields"
                @focus="focusField"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            sm="6"
            >
            <b-form-group
              label="Estado"
              class="mb-3"
            >
              <b-form-select 
              v-model="addressData.state"
              :options="ufs"
              :disabled="enableField && address.uf ? true : false"
              class="form-select bg-transparent"
              @input="saveFields"
              @focus="focusField"
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
      addressData: {
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
    namePhoneEmail(){
      if (this.$store.getters.addToCart) {
        console.log('AddToCart');
      }
    },
    saveFields(){
      this.$store.commit('setAddressData', this.addressData)
    },
    focusField(){
      if (this.$store.getters.initiateCheckout && focus) {
        console.log('InitiateCheckout');
      }
      this.saveFields()
    },
    searchCep() {
			if(this.addressData.cep.length == 9) {
				axios.get(`https://viacep.com.br/ws/${ this.updatedString(this.addressData.cep) }/json/`)
				.then( (response) => {
          this.address = response.data
          if (!this.address.erro) {
            this.enableField = true
            this.cepEncontrado = true
            this.addressData.address = this.address.logradouro
            this.addressData.city = this.address.localidade
            this.addressData.district = this.address.bairro
            this.addressData.state = this.address.uf
            this.saveFields()
          }
          else{
            this.cepEncontrado = false
            this.enableField = false
          }
          
        } )
			}
		},
  },
};
</script>
