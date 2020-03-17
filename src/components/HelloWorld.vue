<template>
  <div>
    <img
      src="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg"
      alt="Smiley face"
      height="100%"
      :style="{ maxHeight: maxHeight }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
        maxHeight: screen.height+"px",
    };
  }
};
</script>


<style>

</style>

