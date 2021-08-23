<template>
  <!-- <div class="card" style="width: 10rem;"> -->
  <div>
    <div >
      
  <div class="card" style="width: 100%;">
    <div class="card-body">
      <div>
      <img class="icon" :src="require(`@/assets/icons/${id}.png`)">
      </div>
      <!-- <h4 class="card-title">1 Card title</h4> -->
      <small class="card-text" font-scale="4">{{file_name}} </small>
      <!-- <input @click="updateState()" v-model="active" type="checkbox" checked data-toggle="toggle" /> -->
    

    <div>
<label class="switch">
  <input @click="updateState()" v-model="active" type="checkbox">
  <span class="slider round"></span>
</label>    </div>
    </div>


  </div>
  </div>


</div>
 

</template>

<script>
import {Howl} from 'howler';
export default {
  components:{
  },
  data() {
    return {
      active: false,
      path : "",
      audio_file: null,
      image_path :`/assets/icons/${this.id}.png`,
    };
  },
  // computed:{
  //   set (value) {
  //     this.$store.commit('updateA', value)
  //   }
  // },
   created() {
    this.audio_file = new Howl({
        src: [require(`@/assets/${this.file_path}.mp3`)],
        loop:true
        });
  },
  methods: {
    updateState(){
        if (this.active == true) {
            this.active = false;
            this.audio_file.stop();
            this.$store.state.audios =  this.$store.state.audios.filter(obj => obj.id != this.id) 
            if ( this.$store.state.audios.length == 0)  this.$root.$refs.recorder.StopRecord(); // IF LIST EMPTY AND RECORDER IS ON - STOP RECORDING
        }
        else {
            this.active = true;
            const audio_dict_entry = {id:this.id, file:this.audio_file}
            this.$store.state.audios.push(audio_dict_entry)
            this.$store.state.change = true

        }
    }
  },
    props:{
      file_name: {
      type: String,
      required: true
    },
    file_path: {
      type: String,
      required: true
    },
    id :{
        type: Number,
        required: true
    }
  }
};
</script>

<style>
.card {
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
}

.card header {
  padding: 10px;
  background-color: #0084AD;
    color: #fff;
}

.card header h2 {
  font-size: 1.4rem;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

.card .body {
  padding: 10px;
  font-size: .9rem;
  color: #757575;
}

.icon{
  height: 20%;
  width: 20%;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #0D6EFD;
}

input:focus + .slider {
  box-shadow: 0 0 1px #0D6EFD;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}



.card:hover{
   border: #0D6EFD solid 3px;
 }


</style>
