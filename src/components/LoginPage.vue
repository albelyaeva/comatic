<template>
  <div class="login-form">
    <Input label="Username" :value="username" @input="onInputUsername"/>
    <Input label="Password" :value="password" type="password" @input="onInputPassword"/>
    <button type="button" class="btn btn-primary" @click="onLoginClick">Sign in</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Input from '@/components/Input';

export default {
  name: 'LoginForm',
  components: {Input},

  data() {
    return {
      username: '',
      password: '',
      submitted: false
    };
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['login']),
    onInputUsername: function (event) {
      this.username = event.target.value
    },
    onInputPassword: function (event) {
      this.password = event.target.value
    },
    onLoginClick: function () {
      const { username, password } = this;
      this.login({username, password})
    }
  }
}
</script>

<style scoped lang="scss">
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4%;
}
</style>