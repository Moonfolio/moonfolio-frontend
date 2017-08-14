<template>
  <div id="app">
    <main>
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
body {
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #161B33;
}

#app {
  font-family: 'Inconsolata', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
</style>
