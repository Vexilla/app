<template>
  <div class="manage-list">
    <form @submit.prevent="addItem()">
      <label> Add {{ itemLabel }} </label>
      <div class="input-button-combo">
        <input
          :placeholder="itemLabel + ' title'"
          type="text"
          v-model="inputText"
          ref="inputField"
        />
        <button type="submit">
          <Icon :icon="icons.plus" />
        </button>
      </div>
    </form>
    <ul class="list">
      <li v-for="item in list" :key="item?.name" class="item">
        <router-link
          :to="{ name: namedRoute, params: { name: item.name } }"
          class="item-link"
          :title="item?.name"
        >
          <h3 class="item-name">{{ item?.name }}</h3>
        </router-link>
        <button class="delete-button" @click="removeItem(item)">
          <Icon :icon="icons.remove" />
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="postcss">
label {
  @apply sr-only;
}

.input-button-combo {
  @apply flex flex-row w-full;

  & input {
    @apply  px-3 py-3  text-great-blue relative bg-white bg-white rounded text-sm border-2 border-transparent  outline-none focus:outline-none focus:ring w-full; 
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px
  }

  & button {
    @apply w-16  ml-2 shadow outline-none ;
  }
}

.list {
  @apply list-none p-0 flex flex-row flex-wrap justify-start items-center;

  & .item {
    @apply flex flex-row h-20 pl-4 bg-white rounded-lg  m-2 w-1/4 ;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; 


    & .item-link {
      @apply w-2/3 pl-5;
    }

    & .item-name {
      @apply pointer-events-none truncate;
    }

    & a {
      @apply w-full p-2 relative text-gray-500 no-underline;

      &::before {
        @apply absolute right-full h-20 text-transparent transition-all text-xl;

        line-height: 4rem;
        content: "✎";
      }

      &:hover,
      &:focus {
        @apply outline-none text-great-blue-500;

        &::before {
          @apply text-gray-500;
        }
      }
    }

    & button {
      @apply w-2/6 h-1/2 p-2 m-2 self-center bg-red-100 border-none outline-none;

      &:focus {
        @apply bg-red-700 outline-none border-red-700;
      }

      &:active {
        @apply bg-red-900 border-red-900;
      }
    }
  }
}
</style>

<script lang="ts">
import { Icon, InlineIcon } from "@iconify/vue";
import plusIcon from "@iconify-icons/dashicons/plus-alt2";
import removeIcon from "@iconify-icons/dashicons/remove";

import { defineComponent } from "vue";

export default defineComponent({
  name: "ManageList",
  data() {
    return {
      inputText: "" as string | null,
      icons: {
        plus: plusIcon,
        remove: removeIcon,
      },
    };
  },
  props: {
    itemLabel: String,
    list: Array,
    namedRoute: String,
  },
  components: {
    Icon,
  },
  methods: {
    addItem() {
      if (this.inputText) {
        const foundItem = this.list?.find((item: any) => {
          return item.name === this.inputText;
        });
        if (foundItem) {
          return;
        }
        this.$emit("item-added", {
          name: this.inputText,
        });
        this.inputText = null;
      }
    },
    removeItem(item: any) {
      this.$emit("item-removed", item);
    },
  },
});
</script>
