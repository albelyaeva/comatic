<template>
  <div class="registration-page">
    <div class="registration">
      <Input v-for="(val, key) in user"
             :value="val.value"
             :label="val.label"
             :type="val.type"
             autocomplete="off"
             v-bind:key="key"
             @input="val.inputEvent"
      />
    </div>
    <button class="btn btn-primary" @click="onRegistrationClick">Sign Up</button>
  </div>
</template>

<script>
import Input from '@/components/Input';
import {mapActions } from 'vuex'

export default {
  name: 'RegisterPage',
  components: { Input },
  data() {
    return {
      user: {
        givenName: {
          label: 'Given Neme',
          value: '',
          type: 'text',
          inputEvent: this.onInputGivenName
        },
        surname: {
          label: 'Surname',
          value: '',
          type: 'text',
          inputEvent: this.onInputSurname
        },
        userName: {
          label: 'User Name',
          value: '',
          type: 'text',
          inputEvent: this.onInputUserName
        },
        email: {
          label: 'Email',
          value: '',
          type: 'email',
          inputEvent: this.onInputEmail
        },
        phoneNumber: {
          label: 'Phone Number',
          value: '',
          type: 'tel',
          inputEvent: this.onInputPhoneNumber
        },
        password: {
          label: 'Password',
          value: '',
          type: 'password',
          inputEvent: this.onInputPassword
        }
      }
    };
  },
  methods: {
    ...mapActions('account', ['register']),
    onInputGivenName: function (event) {
      this.user.givenName.value = event.target.value;
    },
    onInputSurname: function (event) {
      this.user.surname.value = event.target.value;
    },
    onInputUserName: function (event) {
      this.user.userName.value = event.target.value;
    },
    onInputEmail: function (event) {
      this.user.email.value = event.target.value;
    },
    onInputPhoneNumber: function (event) {
      this.user.phoneNumber.value = event.target.value;
    },
    onInputPassword: function (event) {
      this.user.password.value = event.target.value;
    },
    onRegistrationClick() {
      const userObj = {
        givenName: this.user.givenName.value,
        surname: this.user.surname.value,
        userName: this.user.userName.value,
        email: this.user.email.value,
        phoneNumber: this.user.phoneNumber.value,
        filterValueCanton: '',
        filterValueInspector: '',
        filterValueVendor: '',
        roles: [],
        password: this.user.password.value
      }


      this.register({...userObj})
    }
  }
}
</script>

<style scoped lang="scss">
.registration-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .btn {
    width: 10%;
  }
}
.registration {
  width: 100%;
  padding-top: 4%;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  height: 20em;
}

</style>