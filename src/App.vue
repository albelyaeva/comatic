<template>
  <div>
    <nav v-show="status.loggedIn" class="navigation-header">
      <router-link to="/">Home</router-link>
      <router-link to="/table">Table</router-link>
      <a href="#" @click="Logout"> Log Out </a>
    </nav>
    <nav v-show="!status.loggedIn" class="navigation-header">
      <router-link to="/login">Login</router-link>
      <router-link to="/registration">Registration</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex';

export default {
  name: 'App',
  components: {
  },
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
