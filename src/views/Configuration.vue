<template>
  <div class="configuration-page">
    <h1 class="title">Configuration</h1>

    <div class="field-row">
      <label>Hosting Provider</label>
      <div class="hosting-options radio-options">
        <label :class="{ selected: hosting.provider === 's3' }">
          <input
            v-model="hosting.provider"
            type="radio"
            name="provider"
            value="s3"
            @change="updateHostingProvider($event.target.value)"
          />
          AWS S3
        </label>

        <label
          v-if="false"
          :class="{ selected: hosting.provider === 'gcloud' }"
        >
          <input
            v-model="hosting.provider"
            type="radio"
            name="provider"
            value="gcloud"
            @change="updateHostingProvider($event.target.value)"
          />
          Google Cloud
        </label>

        <label :class="{ selected: hosting.provider === 'azure' }">
          <input
            v-model="hosting.provider"
            type="radio"
            name="provider"
            value="azure"
            @change="updateHostingProvider($event.target.value)"
          />
          Azure
        </label>

        <label
          v-if="false"
          :class="{ selected: hosting.provider === 'firebase' }"
        >
          <input
            v-model="hosting.provider"
            type="radio"
            name="provider"
            value="firebase"
            @change="updateHostingProvider($event.target.value)"
          />
          Firebase Storage
        </label>
      </div>
    </div>

    <div class="config-form" v-if="hosting.provider === 's3'">
      <div class="form-section">
        <label class="inline-field">
          <h3>Public base URL</h3>
          <div class="field">
            <input
              :value="hosting.config?.remoteUrl || ''"
              type="url"
              @input="updateHostingConfig('remoteUrl', $event.target.value)"
              required
            />
          </div>
        </label>
      </div>
      <div class="form-section">
        <label class="inline-field">
          <h3>Region</h3>
          <div class="field">
            <input
              :value="hosting.config?.region || ''"
              type="text"
              @input="updateHostingConfig('region', $event.target.value)"
              required
            />
          </div>
        </label>
      </div>
      <div class="form-section">
        <label class="inline-field">
          <h3>Bucket Name</h3>
          <div class="field">
            <input
              :value="hosting.config?.bucketName || ''"
              type="text"
              @input="updateHostingConfig('bucketName', $event.target.value)"
              required
            />
          </div>
        </label>
      </div>
      <div class="form-section">
        <label class="inline-field">
          <h3>Access Key</h3>
          <div class="field">
            <input
              :value="hosting.config?.accessKeyId || ''"
              type="text"
              @input="updateHostingConfig('accessKeyId', $event.target.value)"
              required
            />
          </div>
        </label>
      </div>
      <div class="form-section">
        <label class="inline-field">
          <h3>Secret Key</h3>
          <div class="field">
            <input
              :value="hosting.config?.secretAccessKey || ''"
              type="password"
              @input="
                updateHostingConfig('secretAccessKey', $event.target.value)
              "
              required
            />
          </div>
        </label>
      </div>
    </div>

    <div class="config-form" v-if="hosting.provider === 'azure'">
      <div class="form-section">
        <label class="inline-field">
          <h3>Public base URL</h3>
          <div class="field">
            <input
              :value="hosting.config?.remoteUrl || ''"
              type="url"
              @input="updateHostingConfig('remoteUrl', $event.target.value)"
              required
            />
          </div>
        </label>
      </div>
      <div class="form-section">
        <label class="inline-field">
          <h3>Storage Account</h3>
          <div class="field">
            <input
              :value="hosting.config?.storageAccount || ''"
              type="text"
              @input="
                updateHostingConfig('storageAccount', $event.target.value)
              "
              required
            />
          </div>
        </label>
      </div>
      <div class="form-section">
        <label class="inline-field">
          <h3>Container</h3>
          <div class="field">
            <input
              :value="hosting.config?.container || ''"
              type="text"
              @input="updateHostingConfig('container', $event.target.value)"
              required
            />
          </div>
        </label>
      </div>
      <div class="form-section">
        <label class="inline-field">
          <h3>Shared Access Signature</h3>
          <div class="field">
            <input
              :value="hosting.config?.sharedAccessSignature || ''"
              type="password"
              @input="
                updateHostingConfig(
                  'sharedAccessSignature',
                  $event.target.value
                )
              "
              required
            />
          </div>
        </label>
      </div>
    </div>

    <div class="config-form" v-if="hosting.provider === 'firebase'">
      <div class="form-section">
        <label class="inline-field">
          <h3>Public base URL</h3>
          <div class="field">
            <input
              :value="hosting.config?.remoteUrl || ''"
              type="url"
              @input="updateHostingConfig('remoteUrl', $event.target.value)"
              required
            />
          </div>
        </label>
      </div>

      <div class="form-section">
        <label class="inline-field">
          <h3>Bucket Name</h3>
          <div class="field">
            <input
              :value="hosting.config?.bucketName || ''"
              type="url"
              @input="updateHostingConfig('bucketName', $event.target.value)"
              required
            />
          </div>
        </label>
      </div>

      <div class="form-section">
        <label class="inline-field">
          <h3>API Key</h3>
          <div class="field">
            <input
              :value="hosting.config?.apiKey || ''"
              type="password"
              @input="updateHostingConfig('apiKey', $event.target.value)"
              required
            />
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.configuration-page {
  @apply max-w-screen-sm m-auto;
}

.title {
  @apply text-left;
}

.field {
  max-width: calc(100% - 9rem);
}

textarea {
  @apply min-w-full max-w-full;

  min-height: 6rem;
}
</style>

<script lang="ts">
import { Icon, InlineIcon } from "@iconify/vue";
import flagIcon from "@iconify-icons/dashicons/flag";
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Configuration",
  components: {},
  computed: {
    ...mapState("app", ["hosting"]),
  },
  methods: {
    ...mapActions("app", ["updateHostingProvider"]),
    updateHostingConfig(propName: string, configValue: string) {
      const payload = {
        ...this.hosting?.config,
      };
      payload[propName] = configValue;
      this.$store.dispatch("app/updateHostingConfig", payload);
    },

    selectText(event: any) {
      console.log({ event });
      event.target.select();
    },
  },
});
</script>
