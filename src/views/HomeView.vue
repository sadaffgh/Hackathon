<template>
  <div class="home">
    <img alt="welcome logo" src="../assets/welcome.gif">
    <welcome msg="Hello there &#128578; "/>
  </div>
</template>

<script>
// @ is an alias to /src
import welcome from '@/components/welcome.vue'

export default {
  name: 'HomeView',
  components: {
    welcome
  }
}
</script>
