<template>
    <div class="page3 pt-5" >
        <h1 class="page3-story"> 
        Nico and Nona spent a great amount of time playing around the pond and discovering every litle bit of it. 
    </h1>



    </div>

    <nav-btn :entry="this.entry" />

</template>

<script>

import NavBtnVue from '@/components/NavBtn.vue';

export default {
    name: 'Page-2',
    data(){
      return{
        entry: {
          previous: {
            path: "/#/say-no-to-plastic/2",
            disabled: false
          },
          next: {
            path: "/#/say-no-to-plastic/4",
            disabled: true
          },
        }
      }
    },
    components: {
      "nav-btn": NavBtnVue
    }
}
</script>
<style>
.page3 {
  min-height: 1400px; 
  background-image: url('../../assets/dancing_turtles.gif');
  background-repeat: no-repeat;
  background-size:cover;
  align-self: center;
}
.page3-story {
    margin-left: 10%;
    margin-top: 5%;
    text-align: center;
    max-width: 25%;
    background: rgba(247, 247, 245,0.6);
}
</style>

