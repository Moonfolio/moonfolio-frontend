<template lang="html">
  <div class="container">
    <input type="file" id="uploadedFile" @change="initMoonfolio">
  </div>
</template>

<script>
export default {
  methods: {
    initMoonfolio() {
      var vm = this;
      var selectedFile = document.getElementById('uploadedFile').files[0]
      var reader = new FileReader()
      reader.readAsText(selectedFile)
      reader.onload = function (event){
        vm.$store.dispatch('initMoonfolio', JSON.parse(event.target.result))
        vm.$router.push('/home')
      }
    }
  }
}
</script>

<style lang="css">
</style>
