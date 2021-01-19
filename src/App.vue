<template>
  <header class="header">
    <h1><Icon :icon="icons.flag" /> <span class="app-title">Vexilla</span></h1>
    <div class="publish-row">
      <div class="status-wrapper">
        <div>
          <router-link
            class="status-link"
            v-if="!configIsValid()"
            :to="'/configuration'"
          >
            <span class="status-message error">
              Config is invalid
            </span>
          </router-link>
        </div>
        <span v-if="!dataHasChanged()" class="status-message">
          No changes to push.
        </span>
        <span v-if="dataHasChanged()" class="status-message blue">
          Changes to push.
        </span>
        <span
          class="status-message"
          :class="hosting?.status?.type"
          v-if="hosting?.status?.message && !hosting?.status?.route"
        >
          {{ hosting?.status?.message }}
        </span>
        <router-link
          class="status-link"
          v-if="hosting?.status?.route"
          :to="hosting?.status?.route"
        >
          <span class="status-message" :class="hosting?.status?.type">
            {{ hosting?.status?.message }}
          </span>
        </router-link>
      </div>

      <button class="mobile-menu-button" @click="toggleSidebarShowing">
        <Icon v-if="!sidebarShowing" :icon="icons.openMenu" />
        <Icon v-if="sidebarShowing" :icon="icons.closeMenu" />
      </button>
    </div>
  </header>
  <div class="layout">
    <Sidebar></Sidebar>
    <div class="page-wrapper">
      <router-view />
    </div>
  </div>
</template>

<style lang="postcss">
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  @apply flex flex-col w-screen h-screen;
}

.header {
  @apply h-16 flex justify-between items-center p-4 fixed z-10 bg-white w-full;
}

.app-title {
  @apply hidden md:inline;
}

.publish-row {
  @apply flex flex-row items-center;
}

.status-wrapper {
  @apply text-right;

  @media (min-width: 768px) {
    @apply p-4;
    /* approximately font-size + padding-top and bottom */
    min-height: calc(3.25rem);
  }
}

.status-link {
  @apply no-underline;
}

.status-message {
  @apply block p-0 md:hidden;

  &.error {
    @apply text-red-500;
  }

  &.blue {
    @apply text-blue-500;
  }
}

.layout {
  @apply flex flex-row h-full relative pt-16;
}

.page-wrapper {
  @apply p-4 w-full overflow-y-scroll pb-24;

  height: calc(100vh - 4rem);
}

.mobile-menu-button {
  @apply h-12 w-12 inline-block px-0 py-0 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow hover:shadow-lg hover:bg-blue-800 focus:outline-none focus:shadow-lg focus:bg-blue-800 md:hidden text-4xl flex ml-4;
}

textarea,
input[type="text"],
input[type="url"],
input[type="password"],
input[type="number"],
input[type="tel"] {
  @apply flex w-full rounded-lg p-4 border-2 mr-0 text-gray-800 border-gray-200 bg-white;

  &:focus {
    @apply border-2 border-blue-500 outline-none;
  }

  &:invalid {
    @apply border-2 border-red-500 outline-none;
  }
}

textarea.blurred {
  color: transparent;
  text-shadow: 0 0 6px #000;
}

button {
  @apply px-8 rounded-lg bg-blue-400 text-white font-bold p-4 uppercase border-blue-400 border-t border-b border-r text-xl flex flex-col items-center justify-center cursor-pointer;

  &:focus {
    @apply bg-blue-500 outline-none border-blue-500;
  }

  &:active {
    @apply bg-blue-800 border-blue-800;
  }

  &:disabled {
    @apply bg-gray-300 border-gray-300 cursor-not-allowed;
  }

  &.mini {
    @apply p-1 px-2 m-2 self-center bg-blue-500 border-blue-500 text-base;

    &:focus {
      @apply bg-blue-700 outline-none border-blue-700;
    }

    &:active {
      @apply bg-blue-900 border-blue-900;
    }
  }
}

.toggle-wrapper {
  @apply flex flex-row;
}

.text-button {
  @apply bg-transparent p-0 border-none text-gray-800 font-medium text-base m-0;

  &:focus {
    @apply bg-transparent underline;
  }
}

.seed-wrapper {
  @apply flex flex-row flex-wrap;
}

.row {
  @apply w-full flex flex-row items-center justify-start md:pr-8 md:pl-8;

  & .feature-input {
    @apply p-2 mx-4 flex-shrink w-auto;
  }
}

.slider-label {
  @apply p-2;
}

.feature-slider {
  @apply flex-grow;
}

.radio-options {
  @apply flex flex-row justify-evenly;

  & label {
    @apply p-2 text-center border border-solid border-2 border-gray-500 outline-none m-1 rounded;

    &.selected {
      @apply border-blue-500;
    }
  }

  & input[type="radio"] {
    @apply block my-2 mx-auto;
  }
}

.form-section {
  @apply border-solid border-0 border-b-2 py-8 px-4;

  &:last-child {
    @apply border-none border-0;
  }

  &.inline-field,
  & .inline-field {
    @apply flex flex-row justify-start items-start;

    & h3 {
      @apply m-0 w-16 md:w-36 text-right pt-4;
    }

    & .field {
      @apply pl-4 flex-grow;
    }
  }
}

/* from: https://github.com/ampproject/amphtml/ */
.sr-only {
  position: fixed !important;
  /* keep it on viewport */
  top: 0px !important;
  left: 0px !important;
  /* give it non-zero size, VoiceOver on Safari requires at least 2 pixels
     before allowing buttons to be activated. */
  width: 4px !important;
  height: 4px !important;
  /* visually hide it with overflow and opacity */
  opacity: 0 !important;
  overflow: hidden !important;
  /* remove any margin or padding */
  border: none !important;
  margin: 0 !important;
  padding: 0 !important;
  /* ensure no other style sets display to none */
  display: block !important;
  visibility: visible !important;

  & ~ .sr-only {
    left: 8px !important;

    & ~ .sr-only {
      left: 12px !important;

      & ~ .sr-only {
        left: 16px !important;
      }
    }
  }
}
</style>

<script lang="ts">
import { Icon, InlineIcon } from "@iconify/vue";
import openMenuIcon from "@iconify-icons/ant-design/menu-fold-outlined";
import closeMenuIcon from "@iconify-icons/ant-design/menu-unfold-outlined";
import flagIcon from "@iconify-icons/dashicons/flag";

import { defineComponent } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import { mapActions, mapGetters, mapState } from "vuex";

import { AppState } from "@/store/app";

import { HostingService, HostingStatusType } from "@/services/hosting.service";

export default defineComponent({
  name: "App",
  data: function() {
    return {
      HostingStatusType: HostingStatusType,
      showing: false,
      icons: {
        flag: flagIcon,
        openMenu: openMenuIcon,
        closeMenu: closeMenuIcon,
      },
      fetchInterval: null as null | NodeJS.Timeout,
    };
  },
  created() {
    this.fetchInterval = setInterval(this.synchronize, 30000);
    this.synchronize();
  },
  unmounted() {
    if (this.fetchInterval) {
      clearInterval(this.fetchInterval);
    }
  },
  computed: {
    ...mapState("app", ["hosting"]),
    ...mapState("ui", ["sidebarShowing"]),
    ...mapGetters("app", ["configIsValid", "dataHasChanged"]),
  },
  methods: {
    ...mapActions("ui", ["toggleSidebarShowing"]),
    publishChanges() {
      const appState = (this.$store as any).state.app as AppState;
      const payload = HostingService.formatPayloadFromState(appState);
      HostingService.upload(payload, appState.hosting);
      this.$store.dispatch("app/setExistingFeatures", payload);
    },
    async synchronize() {
      const isValid = this.$store.getters["app/configIsValid"]();
      if (isValid) {
        const result = await (HostingService.fetchExistingFeatures(
          (this.$store.state as any).app.hosting
        ) as any);
        console.log({ result });

        this.$store.dispatch("app/setExistingFeatures", result.data);
      }
    },
  },
  components: {
    Sidebar,
    Icon,
  },
});
</script>
