<template>
    <div class="animation-comingsoon">
        <h1>We are still workng on this Animation</h1>
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
    name: 'AnimationCommingSoon',
    components: {
        CommingSoonVue,
        AppFooter
    }
}
</script>