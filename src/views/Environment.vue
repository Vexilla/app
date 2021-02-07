<template>
  <div class="environment-page">
    <h1 class="title">Environment: {{ environment?.name }}</h1>

    <div>
      <div>
        <label>
          Name
          <input v-model="name" type="text" />
        </label>
      </div>

      <button
        class="save-button"
        @click="save()"
        :disabled="environment?.name === name"
      >
        Save
      </button>
    </div>
    <hr />
    <h2>Default Values</h2>
    <div>
      <h3>Toggle</h3>
      <div class="form-section inline-field">
        <div class="toggle-wrapper field">
          <button
            class="text-button"
            @click="updateDefaultEnvironmentValues(false, 'toggle')"
          >
            Off
          </button>
          <Toggle
            :toggled="
              defaultEnvironmentFeatureValues[environment.name]?.toggle
                ?.value || false
            "
            @toggled="updateDefaultEnvironmentValues($event, 'toggle')"
          />
          <button
            class="text-button"
            @click="updateDefaultEnvironmentValues(true, 'toggle')"
          >
            On
          </button>
        </div>
      </div>

      <h3>Gradual</h3>
      <div class="form-section inline-field">
        <div>
          <div class="seed-wrapper">
            <div class="row">
              <h4>Seed: {{ environment.name }}</h4>
              <input
                class="feature-input"
                type="number"
                step="0.01"
                min="0.01"
                max=".099"
                :value="
                  defaultEnvironmentFeatureValues[environment.name]?.gradual
                    ?.seed
                "
              />
            </div>
            <div class="row">
              <label class="slider-label">.01</label>
              <input
                class="feature-slider left"
                id="{{environment}}-seed"
                name="{{environment}}-seed"
                :value="
                  defaultEnvironmentFeatureValues[environment.name]?.gradual
                    ?.seed * 100
                "
                type="range"
                min="1"
                max="99"
                step="1"
                @input="
                  updateDefaultEnvironmentValues(
                    +$event.target.value / 100,
                    'gradual',
                    'seed'
                  )
                "
              />
              <label class="slider-label">.99</label>
              <button class="right mini" @click="randomizeSeed(environment)">
                Randomize
              </button>
            </div>
          </div>
          <hr />
          <div class="threshold-wrapper">
            <div class="row">
              <h4>Threshhold:</h4>
              <input
                class="feature-input"
                type="number"
                step="1"
                min="0"
                max="100"
                :value="
                  defaultEnvironmentFeatureValues[environment.name]?.gradual
                    ?.value
                "
              />
            </div>
            <div class="row">
              <label class="slider-label">1</label>
              <input
                id="{{environment}}-threshold"
                class="feature-slider"
                name="{{environment}}-threshold"
                :value="
                  defaultEnvironmentFeatureValues[environment.name]?.gradual
                    ?.value
                "
                type="range"
                min="0"
                max="100"
                step="1"
                @input="
                  updateDefaultEnvironmentValues(
                    +$event.target.value,
                    'gradual',
                    'value'
                  )
                "
              />
              <label class="slider-label">100</label>
            </div>
          </div>
        </div>
      </div>

      <h3 v-if="false">Selective</h3>
      <div v-if="false" class="form-section">
        <div>selective</div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.environment-page {
  @apply max-w-screen-sm m-auto;
}

.title {
  @apply text-left;
}

.save-button {
  @apply mt-4;
}
</style>

<script lang="ts">
import { Icon, InlineIcon } from "@iconify/vue";
import flagIcon from "@iconify-icons/dashicons/flag";
import { defineComponent } from "vue";
import { mapGetters, mapState } from "vuex";
import Toggle from "@/components/Toggle.vue";
import { Environment, VexillaFeatureTypeString } from "@/store/app";
import { VexillaFeatureType } from "@vexilla/client";

export default defineComponent({
  name: "Environment",
  data() {
    return {
      name: null as string | null,
    };
  },
  created() {
    if (!this.environment) {
      this.$router.replace("/");
    } else {
      this.name = this.environment.name;
    }
  },
  methods: {
    save() {
      this.$store.dispatch("app/editEnvironment", {
        previous: this.environment,
        current: {
          ...this.environment,
          name: this.name,
        },
      });

      this.$router.push(`/environment/${this.name}`);
    },

    randomizeSeed(environment: Environment) {
      const randomValue = Math.floor(Math.random() * 100);
      this.updateDefaultEnvironmentValues(randomValue / 100, "gradual", "seed");
    },

    updateDefaultEnvironmentValues(
      value: boolean | number,
      featureType: VexillaFeatureTypeString,
      propName = "value"
    ) {
      console.log("update value", value);

      this.$store.dispatch("app/updateDefaultEnvironmentValues", {
        environment: this.environment,
        defaultValues: {
          ...this.defaultEnvironmentFeatureValues[this.environment.name],
          [featureType]: {
            ...this.defaultEnvironmentFeatureValues[this.environment.name][
              featureType
            ],
            [propName]: value,
          },
        },
      });
    },
  },
  watch: {
    environment(newEnvironment, oldEnvironment) {
      this.name = newEnvironment?.name;
    },
  },
  computed: {
    ...mapState("app", [
      "hosting",
      "features",
      "defaultEnvironmentFeatureValues",
    ]),
    environment() {
      const environment = this.$store.getters["app/environmentByName"](
        this.$route.params.name
      );
      return environment;
    },
  },
  components: { Toggle },
});
</script>
