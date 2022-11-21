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
        <div class="left">
        <router-link
          :to="{ name: namedRoute, params: { name: item.name } }"
          class="item-link"
          :title="item?.name"
        >
          <h3 class="item-name">{{ item?.name }}</h3>
        </router-link>
      </div>
      <div class="right">
        <button class="delete-button" @click="removeItem(item)">
          <Icon :icon="icons.remove" />
        </button>
        </div>
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
    @apply flex flex-row h-20 bg-white rounded-lg  m-2 w-5/12;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; 

    & .left {
      @apply w-5/6 justify-start items-center

    }
    & .right{
      @apply w-1/6 flex justify-around items-center
    }

    & .item-link {
     @apply items-center flex justify-start p-2 h-full
    }
    .router-link-active{
      @apply bg-red-500; 
    }

    & .item-name {
      @apply m-0  pointer-events-none truncate;
    }

    & a {
      @apply w-full relative text-gray-500 no-underline;

      &::before {
        @apply absolute right-full text-transparent transition-all text-xl;

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
      @apply p-2 self-center mr-2 w-1/6 bg-transparent border-none outline-none;


      &:hover,&:focus {
        @apply outline-none text-red-800 ;
      }

      &:active {
        @apply  text-red-900;
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
