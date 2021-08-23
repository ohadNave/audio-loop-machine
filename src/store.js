import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        audios: [],
        audio_playing : false,
        record_on: false,
        change: false,
    },
    getters: {
        getField,
      },
      mutations: {
        updateField,
      },
})