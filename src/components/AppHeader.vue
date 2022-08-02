<template>
  <div class="app-header">
    <nav v-show="status.loggedIn" class="navigation-header">
      <router-link to="/">Home</router-link>
      <router-link to="/table">Table</router-link>
      <a href="#" class="logout" @click="Logout"> Log Out </a>
    </nav>
    <nav v-show="!status.loggedIn" class="navigation-header">
      <router-link to="/login">Login</router-link>
      <router-link to="/registration">Registration</router-link>
    </nav>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions({
      logout: 'account/logout'
    }),
    Logout() {
      this.logout();
    },
  }
}
</script>

<style scoped lang="scss">
.app-header {
  height: 60px;
  background-color: var(--app-color);
  opacity: .7;
  border-bottom: solid 1px grey;
  .navigation-header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      padding-right: 20px;
      color: white;
      font-weight: bold;
    }
    .logout {
      color: blue;
      position: absolute;
      right: 0;
    }
  }
}
</style>