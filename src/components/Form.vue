<template>
  <div class="form">
    Formページ
    <HeadComp></HeadComp>
    <component :is="isComponent"></component>
    <button v-on:click="buttonAction">{{buttonText}}</button>
  </div>
</template>

<script>
import HeadComp from "@/components/modules/HeadComp";
import TextareaComp from "@/components/modules/TextareaComp";
import StringComp from "@/components/modules/StringComp";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "form",
  methods: mapActions("Form", {
    "buttonAction": "buttonAction"
  }),
  computed: mapGetters("Form", {
    "buttonText": "getButtonText",
    "isComponent": "getComponent"
  }),
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
}
</script>
