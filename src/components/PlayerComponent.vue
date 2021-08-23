<template>
  <span>
    <button :disabled="audio_list_size || record_on"><b-icon font-scale="2.5" icon="play"  @click="PlayAll()" > </b-icon></button>
     <button :disabled="!audio_playing || this.$store.state.record_on " ><b-icon  font-scale="2.5" icon="stop"  @click="StopAll()" ></b-icon></button>
  </span>
</template>

<script>
import {Howler} from 'howler';
// import { mapFields } from 'vuex-map-fields';
// import { mapGetters } from 'vuex'

export default {
    data() {
        return {
          Howler: Howler,
        };
  },
    computed:{
        audio_list_size: function(){
            return this.$store.state.audios.length == 0
        },
        audio_playing: function(){
            return this.$store.state.audio_playing
        },
        record_on: function(){
          return this.$store.state.record_on
        },
        globalAudios:function(){
          return this.$store.state.audios
        },
        audios_listener: function () {
          return this.$store.state.change
        },
  },
  methods:{
      PlayAll(){
        if (this.Howler.state == "running") { this.Howler.stop(); }

        Array.from(this.globalAudios).forEach(audio => {
          audio.file.play();
          this.$store.state.change = false
          audio.file.on('end', function(){
          if (this.$store.state.change){
             audio.file.stop();
             this.PlayAll()
          }
            }.bind(this));
          })

        this.$store.state.audio_playing = true;
        
      },
      StopAll(){
        this.Howler.stop();
        this.$store.state.audio_playing = false;
      },
  },
}
</script>

<style>



#play-pause-button{
  font-size: 50px;
  cursor: pointer;
}

.btn{
  padding: 10px;
}

a:link, a:visited {
  color: black;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}


</style>