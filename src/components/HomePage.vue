<template>
  <div class="home-page">
    <div>Home Page</div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      isTable: false
    }
  }
}
</script>

<style scoped lang="scss">

.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5%;

  .home-page-buttons {
    padding-top: 50px;
    width: 30%;
    display: flex;
    flex-direction: column;
  }
}

</style>