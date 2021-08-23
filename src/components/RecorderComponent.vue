<template>
  <span>
        <button :disabled="!player_on" ><b-icon font-scale="2.5" icon="record"  @click="Record()" ></b-icon></button>
        <button v-if="record_finished && !player_on"  ><b-icon font-scale="2.5" icon=soundwave  @click="PlaySession()"></b-icon></button>
  </span>
</template>

<script>
import {Howler,Howl} from 'howler';

export default {
        data() {
    return {
        chunks:[],
        streamDest: null,
        mediaRecorder: null,
        record_finished :false,
    }
  },
  computed:{
    player_on: function(){
        return this.$store.state.audio_playing
    },
  },
    mounted(){
        this.$root.$refs.recorder = this;
        this.streamDest = Howler.ctx.createMediaStreamDestination()   
        Howler.masterGain.connect(this.streamDest) // connect masterGain to destination          
        this.mediaRecorder = new MediaRecorder(this.streamDest.stream, {mimeType: 'audio/webm'})  // set up media recorder to record output
    },
    methods:{
        Record(){
        this.chunks = []
        this.$store.state.record_on = true;
        this.mediaRecorder.onstart = () => { console.log('Started recording Howl output...') }          // connect MediaStreamDestination to Howler.masterGain 
        this.mediaRecorder.ondataavailable = (e) => { this.chunks.push(e.data) }
        this.mediaRecorder.start()  
      },
      StopRecord(){
        if (this.mediaRecorder.state != "inactive"){ // DONT STOP RECORDING IF THE RECORDER BUSY
            this.mediaRecorder.stop();
            this.$store.state.record_on = false;
            this.record_finished = true;
            this.$store.state.audio_playing = false;
            }
      },
      PlaySession(){
        console.log("Done recording. Now let's try playback...")
        let fileReader = new FileReader() // to convert blob to data url
        fileReader.onload = (e) => {  new Howl({src: e.target.result, format: ['webm']}).play() }
        fileReader.readAsDataURL(new Blob(this.chunks)) // sends url to onLoad
        }
    }
}
</script>

<style>

</style>