<template lang="html">
  <div class="container">
    <header class="card-header">
      <div class="moon">
      </div>
      <h3 class="title">MOONFOLIO</h3>
    </header>
    <main>
      <p class="text">Choose the way you would like to own your data</p>
      <router-link class="info" to="/privacy-info">tell me more</router-link>
      <div class="load-options">
        <router-link to="/local">
          <div class="link-card ">
            <p class="link">local</p>
          </div>
        </router-link>
        <router-link to="/dropbox">
          <div class="link-card ">
            <p class="link">dropbox</p>
          </div>
        </router-link>
      </div>

    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.container{
  width: 24rem;
  height: 24rem;
  margin: 20vh auto 0;
  display: flex;
  flex-direction: column;
  flex-basis: 1 2;
  justify-content: flex-start;
  align-items: center;
}
.title{
  font-size: 4.5rem;
  position: relative;
  color: #E8E8E8;
  margin: 0;
}
.title::before {
  content: '';
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: #FFFB9B;
  position: absolute;
  top: -.6rem;
  left: -1.1rem;
  z-index: -1;
}
.title::after {
  content: 'beta';
  position: absolute;
  font-size: .9rem;
  bottom: -.2rem;
  right: .1rem;
  opacity: .3;
}
.text {
  font-size: 1.3rem;
  color: #E8E8E8;
  text-align: justify;
  margin: 0;
  padding-top: 2.5rem;
}
.info {
  font-family: 'Lato', sans-serif;
  font-size: .8rem;
  color: #FFFB9B;
  float: right;
  margin: 0;
  padding-top: .5rem;
}
.load-options {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}
.link-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 7rem;
  background-color: #E8E8E8;
  cursor: pointer;
}
.link-card a {
  text-decoration: none;
}
.link {
  color: #161B33;
}
</style>
