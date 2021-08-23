<template>
    
<div class="container">

    <div v-for="(n,i1) in  3" :key="i1" class="row no-gutters"> 
        <div v-for="(m,i2) in 3" :key="i2" class="col"> 
            <PadComponent :file_path="audio_paths[(i1*3) +  i2][0]"
                            :file_name="audio_paths[(i1*3) +  i2][1]"
                                :id="(i1*3) +  i2"/>
        </div>
    </div>
 

</div>

</template>

<script>
import paths from '../assets/paths'
import PadComponent from './PadComponent.vue'

export default {
    components: {
    PadComponent
  },
    data() {
    return {
        audio_paths: paths,
    };
  },
  computed:{
      audios(){
          return this.$store.state.audios;
      },
  },
}
</script>

<style>


.card{
  margin: 5% 0%;
}

.card-body{
  margin: 0% 0% 0% 3%;
  padding: 6% 0%;
}



</style>