<template lang="html">
  <div class="container">
    <input type="file" id="uploadedFile" @change="readFile">
  </div>
</template>

<script>

export default {
  methods: {
    readFile() {
      var selectedFile = document.getElementById('uploadedFile').files[0]
      var reader = new FileReader()
      reader.readAsText(selectedFile)
      reader.onload = function (event){
        console.log(JSON.parse(event.target.result))
      }
    }
  }
}
</script>

<style lang="css">
</style>
