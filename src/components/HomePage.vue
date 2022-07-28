<template>
  <div class="home-page">
    <div>Home Page</div>
    <div class="home-page-buttons">
      <button type="button" class="btn btn-inline" @click="Logout">Log out</button>
      <button class="btn  btn-primary" @click="changeIsTable">Show all users</button>
    </div>
    <UsersTable v-if="isTable"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import UsersTable from '@/components/UsersTable';

export default {
  name: 'HomePage',
  components: { UsersTable },
  data() {
    return {
      isTable: false
    }
  },
  methods: {
    ...mapActions({
      logout: 'account/logout'
    }),
    Logout() {
      this.logout();
    },
    changeIsTable() {
      this.isTable = !this.isTable
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

  .home-page-buttons {
    padding-top: 50px;
    width: 30%;
    display: flex;
    flex-direction: column;
  }
}

</style>