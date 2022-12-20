<template>
      <link href='https://fonts.googleapis.com/css?family=Mystery Quest' rel='stylesheet'>

    <Card class="mb-5" style="min-height: 670px;">
        <template #header>
            <div class="m-3 pt-3">
                <img alt="Card thumbnail" :src="entry.thumbnail" height=400 max-width=300>
            </div>
        </template>
        <template #title>
            <div style="min-height: 40px;">{{ entry.title }}</div>
        </template>
        <template #content>
            <div style="min-height: 55px;">{{ entry.content }}</div>
            
        </template>
        <template #footer>
            <a :href="entry.href" style="text-decoration:none">
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
    }
};
</script>
<style>
div {
    font-family: 'Mystery Quest';font-size: 22px;
}
</style>

