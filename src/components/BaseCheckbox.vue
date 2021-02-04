<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('upodate:modelValue', $event.target.checked)"
    class="field"
  />
  <label v-if="label">{{ label }}</label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  }
}
</script>
