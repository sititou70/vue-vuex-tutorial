<template>
  <div>
    <p class="error">{{error}}</p>
    <textarea name="name" rows="8" cols="80" v-model="impression"></textarea>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "textareaComp",
  computed: {
    impression: {
      get () {
        return this.$store.state.impression;
      },
      set (value) {
        this.$store.commit("updateImpression", value);
      }
    },
    ...mapGetters("Textarea", {
      "error": "getError"
    })
  }
}
</script>

<style scoped>
.error{
  color: red;
}
</style>