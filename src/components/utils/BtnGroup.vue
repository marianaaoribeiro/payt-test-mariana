<template>
    <b-button-group class="mt-2 mb-5  d-flex justify-content-center">
    <b-row class="d-flex justify-items-center">
        <b-col
            v-for="(item, index) in buttons"
            :key="index"
            cols="12"
            sm="4"
        >
      <b-button
        class="rounded border  mx-3 my-sm-0 my-2"
        :class="index + 1 == button ? 'border-primary bg-primary01': 'border-secondary'"
        variant="white"
        style="height: 54.33px; width: 160px"
        @click="itemSelected(item)"
        >
        <b-row>
          <b-col cols="4">
            <b-img
              :src="item.image"
              alt="Responsive image"
              class="mt-1"
              />
          </b-col>
          <b-col
            class="text-start"
            align-self="center"
            >
            {{ item.name }}
          </b-col>
        </b-row>
      </b-button>
    </b-col>
    </b-row>
    </b-button-group>
</template>
<script>
export default {
    props: {
        buttons: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return{
            button: 1,
        }
    },
    methods:{
        itemSelected(item){
            this.button = item.id
            this.$emit('buttonSelect', item)
        }
    }
}
</script>