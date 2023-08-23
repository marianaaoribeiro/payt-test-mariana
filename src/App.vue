<template>
  <b-container 
  id="app" 
  fluid  
  class="body-bg"
  >
    <router-view />
  </b-container>
</template>

<style lang="scss">

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  background-color: #F6F6F6;
  height: 100%;
  font-family: "Inter", sans-serif;
}
</style>
