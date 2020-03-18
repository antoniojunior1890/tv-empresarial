<template>
  <div>
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="interval"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide v-for="item in images" :key="item.id">
        <template v-slot:img>
          <img
            :style="{ maxHeight: maxHeight , minHeight : maxHeight }"
            :src="item.image"
            :alt="item.name"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxHeight: screen.height + "px",
      images: [],
      interval: 2000,
      slide: 0,
    };
  },
  created() {
    this.$http
      .get("/all.json")
      .then(res => {
        this.images = res.data;
      })
      .catch(function(error) {
        /* eslint-disable */
        console.log(error);
      });
  },
  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
  watch: {
    slide : function() {
      this.interval = this.getRndInteger(1, 5) * 1000
      console.log(this.interval)
    }
  }
};
</script>
