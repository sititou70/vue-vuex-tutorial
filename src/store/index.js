import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

const Form = {
  namespaced: true,
  state: {
    buttonText: ["確認", "送信"],
    component: ["TextareaComp", "StringComp"]
  },
  mutations: {},
  actions: {
    buttonAction({commit, state, rootState}) {
      console.log("buttonAction");
      commit("setStepCount", null, {root: true});
      if (rootState.stepCount == 2) {
        router.push("thanks");
      }
      state;
    }
  },
  getters: {
    getButtonText (state, getters, rootState) {
      return state.buttonText[rootState.stepCount];
    },
    getComponent (state, getters, rootState) {
      return state.component[rootState.stepCount];
    }
  }
};

const Textarea = {
  namespaced: true,
  state: {
    errorMsg: "入力は必須です",
  },
  getters: {
    getError (state, getters, rootState) {
      if (rootState.errorFlag) {
        return null;
      } else {
        return state.errorMsg;
      }
    }
  }
};

const String = {
  namespaced: true,
  getters: {
    getString (state, getters, rootState) {
      return rootState.impression;
    }
  }
};

const Head = {
  state: {
    title: ["感想を入力", "確認画面", "送信完了"]
  },
  mutations: { },
  actions: { },
  getters: {
    getTitle (state, getters, rootState) {
      return state.title[rootState.stepCount];
    }
  }
};

export default new Vuex.Store({
  state: {
    stepCount: 0,
    impression: "",
    errorFlag: false
  },
  mutations: {
    setStepCount (state) {
      console.log("rootsetStepCount");
      state.stepCount++;
    },
    updateImpression (state, value) {
      state.impression = value;
      if (state.impression) {
        state.errorFlag = true;
      } else {
        state.errorFlag = false;
      }
    }
  },
  modules: {
    Form,
    Head,
    Textarea,
    String
  }
});