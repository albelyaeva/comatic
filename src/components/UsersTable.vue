<template>
  <div class="users-table">
    <ul>
      <li v-for="user in users" v-bind:key="user.id">
        {{ user.normalizedUserName }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getAll } from '@/services/user.service';

export default {
  name: 'UsersTable',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.users = getAll().then( res => {
      console.log(res);
      this.users = res.data.data;
    });
  }
}
</script>

<style scoped lang="scss">

.users-table {
  margin-top: 50px;
}

</style>