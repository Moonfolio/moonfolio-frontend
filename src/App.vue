<template>
  <div id="app">
    <main class="app-main-container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data(){
    return{
      transactions:[]
    }
  }
}
</script>

<style>
html {
  font-size: 18px;
  margin: 0;
  width: 100%;
  height: 100%;
}
body {
  position: absolute;
  margin: 0;
  background-color: #161B33;
  height:100;
  width: 100%;
  top: 0;
}
.app-main-container{
  box-sizing: border-box;
  height: calc(100vh - 32px);
  margin: 16px;
}

#app {
  font-family: 'Roboto Mono', monospace;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;*/
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
}
a {
  text-decoration: none;
}
</style>
