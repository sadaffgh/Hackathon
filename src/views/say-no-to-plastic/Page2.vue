<template>
    <div class="page2 pt-5" >
        <h1 class="page2-story">Once upon a time there live a happy turtle family in a beautiful pond. <br>
        The family included Baba Turtle, Mama Turtle and the siblings Nico and Nona! </h1>


        <!-- <Splitter layout="vertical" style="height: 300px width: 350px" >
            <SplitterPanel class="flex align-items-center justify-content-center">
                <img alt="swimming turtles" src="../../assets/swimming_turtles.gif" height=500  width=400>
            </SplitterPanel>
            <SplitterPanel>
                Panel 2
            </SplitterPanel>
        </Splitter> -->
    </div>

    <nav-btn :entry="this.entry" />

</template>

<script>
// import Splitter from 'primevue/splitter';
// import SplitterPanel from 'primevue/splitterpanel';
import NavBtnVue from '@/components/NavBtn.vue';

export default {
    name: 'Page-2',
    data(){
      return{
        entry: {
          previous: {
            path: "/#/say-no-to-plastic/1",
            disabled: false
          },
          next: {
            path: "/#/say-no-to-plastic/3",
            disabled: false
          },
        }
      }
    },
    components: {
      "nav-btn": NavBtnVue
        // Splitter,
        // SplitterPanel
    }
}
</script>
<style>
.page2 {
  min-height: 1200px; 
  background-image: url('../../assets/swimming_turtles.gif');
  background-repeat: no-repeat;
  background-size:cover;
  align-self: center;
}
.page2-story {
    margin-left: 73%;
    margin-top: 13%;
    text-align: center;
    max-width: 25%;
    background: rgba(247, 247, 245,0.6);
    /* font-family: cursive; */
}
</style>

