<template>
    <div class="page1 pt-5" >
        <h1>Say No to Plastic</h1>
        <p>written by: Christos kolombos</p>
        <h3>Click on next button to start your journey</h3>

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
    name: 'Page-1',
    data(){
      return{
        entry: {
          previous: {
            path: "/#/",
            disabled: true
          },
          next: {
            path: "/#/say-no-to-plastic/2",
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
.page1 {
  min-height: 1200px; 
  background-image: url('../../assets/turtles_on_docks.jpg');
  background-repeat: no-repeat;
  background-size:cover;
}
</style>

