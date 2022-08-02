<template>
  <div class="home-page">
    <div class="home-page-content">
      <p>Home Page</p>
      <p class="home-page-content_main">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
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
  height: 100vh;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);;

  .home-page-content {
    padding-top: 35px;
    border-radius: 30px;
    background-color: var(--content-color);
    height: 70%;
    width: 90%;

    .home-page-content_main {
      padding: 5%;
      text-align: center;
    }
  }
}

</style>