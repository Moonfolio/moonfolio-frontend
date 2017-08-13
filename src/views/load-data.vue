<template lang="html">
  <div class="container">
    <div>
      <p>Create a <router-link to="/home">new moonfolio</router-link> or upload one</p>
    </div>
    <portfolio-upload></portfolio-upload>
  </div>
</template>

<script>
import portfolioUpload from '../components/portfolio-upload'
export default {
  components: {
    portfolioUpload
  }
}
</script>

<style lang="css">
</style>
