<template>
  <div class="regi">
    <Input v-for="(value, name) in user" :value="value" :label="name" v-bind:key="name"/>
  </div>
</template>

<script>
import Input from '@/components/Input';
export default {
  name: 'RegisterPage',
  components: {Input},
  data() {
    return {
      user: {
        givenName: '',
        surname: '',
        userName: '',
        email: '',
        phoneNumber: '',
        filterValueCanton: '',
        filterValueInspector: '',
        filterValueVendor: '',
        roles: [],
        password: ''
      }
    };
  },
}
</script>

<style scoped>

</style>