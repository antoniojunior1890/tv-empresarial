<template>
  <div id="app">
    <Carousel />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Carousel from './components/Carousel'

export default {
  name: 'app',
  components: {
    Carousel
  },
  data() {
      return {
        screen : screen.height
      }
    },
  created() {
    // eslint-disable-next-line
    // this.$http.get('/all.json').then(res => console.log(res.data))

    // eslint-disable-next-line
    // console.log(this.screen)
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height:100%;
}
</style>
