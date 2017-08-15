<template lang="html">
  <div class="header-container">
    <div class="name-and-description">
      <div class="current-mnf-name">
        {{moonfolioName}}
      </div>
      <div class="description">
        description text adasdlk asijpo eoi daisj poajs pdoportjoi
      </div>
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
.header-container {
  background-color: #161B33;
  padding: 10px 0 25px 0;
  display: flex;
  justify-content: space-between;
}
.name-and-description {
  color: #65727F;
}

.current-mnf-name {
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  z-index: 3;
  padding-left: 10px;
}
.current-mnf-name::before {
  content:'';
  width: 25px;
  height: 25px;
  border-radius: 20px;
  background-color: #FFFB9B;
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: -1;
}
.description {
  padding: 10px 0 0 12px;
}
</style>
