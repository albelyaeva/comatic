<template>
  <div class="custom-login">
    <label :for="label">
      {{ label }}
    </label>
      <input class="input form-control" :id="label" :type="type" :name="name" :value="value" @input="onInput" @change="onChange" />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event);
    },
    onChange(event) {
      this.$emit('change', event.target.value);
    },
  },
}
</script>

<style scoped lang="scss">
.custom-login {
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 5px;
}
</style>