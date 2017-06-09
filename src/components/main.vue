<template>
	<div class="loading-page" v-if="loading">
	    <p>Loading...</p>
	</div>
</template>
<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  padding-top: 200px;
  color:#fff;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 100;
}
</style>