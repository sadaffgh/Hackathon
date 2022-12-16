<template>
    <div class="games">
        <h1>Games</h1>
        <CommingSoonVue />
    </div>
      <div class="footer">
      <AppFooter />
  </div>
</template>

<script>
import CommingSoonVue from '@/components/ComingSoon.vue';
import AppFooter from '@/AppFooter.vue';


export default {
    name: 'GamesView',
    components: {
        CommingSoonVue,
        AppFooter
    }
}
</script>