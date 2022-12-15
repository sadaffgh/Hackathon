<template>
    <div class="games">
        <h1>Games</h1>
        <CommingSoonVue />
    </div>
</template>

<script>
import CommingSoonVue from '@/components/ComingSoon.vue';

export default {
    name: 'GamesView',
    components: {
        CommingSoonVue
    }
}
</script>