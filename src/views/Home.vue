<template>
  <div class="home">
    <p class="getting-started-intro prose">
      Getting started is easy.
    </p>
    <Icon :icon="icons.flag" class="logo" />
    <ol class="getting-started-list">
      <li>First, enter your hosting configuration. (S3, Azure, GCP, etc.)</li>
      <li>
        Next, start creating your environments. (dev, staging, prod, etc.)
      </li>
      <li>Then, create your feature flags.</li>
    </ol>
  </div>
</template>

<style lang="postcss" scoped>
.home {
  @apply flex flex-col justify-start items-center h-full w-full;
}

.title {
  @apply text-7xl;
}

.logo {
  font-size: 420px;
}

.getting-started-intro {
  @apply text-3xl;
}

.getting-started-list {
  & li {
    @apply text-xl mb-4;
  }
}
</style>

<script lang="ts">
import { Icon, InlineIcon } from "@iconify/vue";
import flagIcon from "@iconify-icons/dashicons/flag";
import { defineComponent } from "vue";
import store from "@/store";

export default defineComponent({
  name: "Home",
  store,
  data: function() {
    return {
      icons: {
        flag: flagIcon,
      },
    };
  },
  components: {
    Icon,
  },
});
</script>
