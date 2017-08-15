<template lang="html">
  <div class="load-container">
    <div>
      <p>Create a <router-link to="/home" class="new">new moonfolio</router-link> or upload one</p>
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

<style lang="css" scoped>
.load-container{
  width: 24rem;
  height: 24rem;
  margin: 22vh auto 0;
  display: flex;
  flex-direction: column;
  flex-basis: 1 2;
  justify-content: flex-start;
  align-items: center;
  color: #161B33;
  background-color: #E8E8E8;
  position: relative;
}
.load-container::before {
  content: '';
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: #FFFB9B;
  position: absolute;
  top: -1.6rem;
  left: -1.3rem;
  z-index: -1;
}
.new {
  font-family: 'Lato', sans-serif;
  font-size: 1.1rem;
  padding: .1rem;
  background-color: #FFFB9B;
}
</style>
