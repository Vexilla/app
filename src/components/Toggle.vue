<template>
  <label class="wrapper">
    <input
      type="checkbox"
      name="toggle"
      class="toggle-checkbox"
      :checked="toggled"
      @change="changed"
    />
    <label class="toggle-label"></label>
  </label>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply relative inline-block w-10 ml-2 mr-2 align-middle select-none transition ease-in  cursor-pointer;
}

.toggle-checkbox {
  @apply absolute border-solid block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer m-0  transition ease-in border-gray-300;
}

.toggle-label {
  @apply block overflow-hidden h-6 rounded-full bg-gray-300 pointer-events-none transition ease-in border-2 border-gray-300;
}

.toggle-checkbox:checked {
  @apply border-green-400;
  transform: translateX(1rem);
  border-color: #68d391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply bg-green-400;
  background-color: #68d391;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Toggle",
  props: {
    toggled: Boolean,
  },
  components: {},
  methods: {
    changed: function(toggled: boolean) {
      this.$emit("toggled", toggled);
    },
  },
});
</script>
