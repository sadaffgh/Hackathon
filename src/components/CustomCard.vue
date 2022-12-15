<template>
    <Card>
        <template #header>
            <img alt="Card thumbnail" :src="entry.thumbnail">
        </template>
        <template #title>
            {{ entry.title }}
        </template>
        <template #content>
            {{ entry.content }}
        </template>
        <template #footer>
            <Button icon="pi pi-play" label="Go to Animation" />
        </template>
    </Card>
</template>

<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
export default {
    name: 'CustomCard',
    props: {
        entry: {
            type: Object,
            required: true
        }
    },
    components: {
        'Card': Card,
        'Button': Button,
    }
};
</script>

