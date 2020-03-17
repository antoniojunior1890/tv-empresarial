<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Slides with image only -->
      <!-- <b-carousel-slide
        v-for="item in images"
        :key="item.id"
        :img-src="item.image"
        :style="{ maxHeight: maxHeight }"
      ></b-carousel-slide>-->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide v-for="item in images" :key="item.id">
        <template v-slot:img>
          <img :style="{ maxHeight: maxHeight , minHeight : maxHeight }" :src="item.image" alt="image slot" />
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
      images: []
    };
  },
  created() {
    this.$http
      .get("/all.json")
      .then(res => {
        this.images = res.data;

        // eslint-disable-next-line
        // console.log(this.images);
      })
      .catch(function(error) {
        /* eslint-disable */
        console.log(error);
      });
  }
};
</script>