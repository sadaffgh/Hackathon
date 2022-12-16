<template>
    <div class="games">
        <Splitter style="height: 300px">
            <SplitterPanel>
                Panel 1
            </SplitterPanel>
            <SplitterPanel>
                Panel 2
            </SplitterPanel>
        </Splitter>
    </div>
</template>

<script>
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';

export default {
    name: 'Page-1',
    components: {
        Splitter,
        SplitterPanel
    }
}
</script>