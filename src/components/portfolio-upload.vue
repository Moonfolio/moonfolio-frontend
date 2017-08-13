<template lang="html">
  <div class="container">
    <input type="file" id="uploadedFile" @change="readFile">
  </div>
</template>

<script>
import {transactions} from '../transactionsStore.js'
export default {
  methods: {
    readFile() {
      var selectedFile = document.getElementById('uploadedFile').files[0]
      var reader = new FileReader()
      reader.readAsText(selectedFile)
      reader.onload = function (event){
        console.log(JSON.parse(event.target.result))
        transactions.list = JSON.parse(event.target.result)
        console.log(transactions.list);
      }
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="css">
</style>
