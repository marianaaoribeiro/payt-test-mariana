<template>
  <b-card
    class="border-secondary mt-4"
    no-body
    >
    <b-card-body class=" d-flex align-items-center">
      <b-row>
        <b-col class="text-center">
          <b-img
            :src="image"
            alt="Responsive image"
          />
          <div class="font-weight-bold">
            {{ title }}
            </div>
          <p>{{ text }}</p>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
