<template>
    <div>
      {{show()}}
      <img :src="this.img" width="500">
    </div>
</template>

<script>
    export default {
    methods: {
      show(){
        console.log(this.imgName)
      }
    },
    data() {
      return {
        img: this.$route.query.imgName
      }
    }
  }
</script>

<style>

</style>