<template>
  <div class="about">
    <h1 class="title">This is an about page</h1>
  </div>
</template>

<style lang="postcss">
.title {
  @apply text-left;
}
</style>

<script lang="ts">
import { Icon, InlineIcon } from "@iconify/vue";
import flagIcon from "@iconify-icons/dashicons/flag";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ManageFeatures",
  components: {}
});
</script>
