<template lang="html">
  <div class="container">
    <header class="card-header">
      <div class="moon">
      </div>
      <h3 class="title">moonfolio</h3>
    </header>
    <main>
      <p>Choose the way tou would like to own your data</p>
      <p>tell me more</p>
      <router-link to="/local">local</router-link>
      <router-link to="/dropbox">dropbox</router-link>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.card-header {
  background-color:#161B33;
}
.moon {
  width: 60px;
  height: 60px;
  background-color: #FFFB9B;
}
.title {
  color: #E8E8E8;
}
.main {
  color: #161B33;
  background-color: #E8E8E8;
}
</style>
