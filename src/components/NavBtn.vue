<template>

    <div class="btns mt-3 mb-3">
        <a  v-if="!entry.previous.disabled" :href="entry.previous.path" style="text-decoration:none" class="mr-2">
            <Button icon="pi pi-chevron-left" label="Previous" style="width: 120px;" />
        </a>
        <Button v-else icon="pi pi-chevron-left" label="Previous" style="width: 120px;" disabled class="mr-2"/>
        <a v-if="!entry.next.disabled" :href="entry.next.path" style="text-decoration:none">
            <Button icon="pi pi-chevron-right" label="Next" style="width: 120px;" />
        </a>
        <Button v-else icon="pi pi-chevron-right" label="next" style="width: 120px;" disabled/>
    </div>
</template>
<script>
import Button from 'primevue/button';
export default {
    name: 'nav-btn',
    props: {
        entry: {
            type: Object,
            required: true
        }
    },
    components: {
        'Button': Button,
    }
}
</script>

<style>

</style>
