<template lang="html">
  <div class="container">
    <div class="current-mnf-name">
      {{moonfolioName}}
    </div>
    <portfolio-save-button></portfolio-save-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import portfolioSaveButton from './portfolio-save-button'
export default {
  components: {
    portfolioSaveButton
  },
  computed: {
    ...mapGetters([
      'moonfolioName'
    ])    
  }
}

</script>

<style lang="css" scoped>
</style>
