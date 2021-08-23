<template>
  <div>
  <div v-for="(n,i1) in  3" :key="i1" class="row" > 
    <td v-for="(m,i2) in 3" :key="i2" class="col"> 
        <PadComponent :file_path="audio_paths[i1 + i2]" :id="(i1*3) +  i2"/>
    </td>
  </div>
</div>
</template>

<script>
import PadComponent from './PadComponent.vue'
import paths from '../assets/paths'


export default {
  components: {
    PadComponent,
  },
    data() {
    return {
        key:-1,
        audio_paths: paths,
        record_state: false,
        audio_size : this.$store.state.audios.length
    };
  },
  computed:{
      audios(){
          return this.$store.state.audios;
      },
  },

  methods:{
  },
}
</script>

<style>

</style>