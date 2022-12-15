<template>
    <Card class="mb-5">
        <template #header>
            <div class="m-3 pt-3">
                <img alt="Card thumbnail" :src="entry.thumbnail" height=350 width=300>
            </div>
        </template>
        <template #title>
            {{ entry.title }}
        </template>
        <template #content>
            {{ entry.content }}
        </template>
        <template #footer>
            <a :href="entry.href" class="p-button-secondary" icon="pi pi-play" style="text-decoration:none">
            <Button icon="pi pi-play" label="Go to Animation"  />
            </a>
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
    },
    methods: {
        handleClick(){

        }
    }
};
</script>

