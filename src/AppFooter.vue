<template>
    <div class="layout-footer grid">
        <div class="layout-footer-left col">
            <h4>Imprint </h4>
            <!-- <a href="https://www.primetek.com.tr">PrimeTek</a> -->
            <p>Kazoo Crew GmbH <br>
                Hallaluja Straße. 10/55<br>
                220011 Hamburg<br>
                <br>
                Telefon: 040 19437670 <br>
                E-Mail: kazoocrew@neverland.com<br>
            </p>
        </div>
        <div class="col">
            <h4> &copy; Copyright 2022</h4>
        </div>
        <div class="layout-footer-right col">
            <h4>Essential Links</h4>
            <a class="layout-footer-left mr-3" href="https://github.com/sadaffgh/Hackathon">
                <i class="pi pi-github layout-footer-left"></i>
            </a>
            <a href="https://twitter.com/primevue" class="mr-3 layout-footer-left">
                <em class="pi pi-twitter"></em>
            </a>
            <a class="layout-footer-left" href="https://discord.com/invite/gzKFYnpmCY">
                <i class="pi pi-discord layout-footer-left"></i>
            </a>
        </div>

        
    </div>
    <!-- <Panel :toggleable="true" :collapsed="true" class="layout-footer" >
            <template #header >
                <div class="grid layout-footer">
                    <div class="col"><h4>Imprint</h4></div>
                    <div class="col"><h4>&copy; Copyright 2022</h4> </div>
                    <div class="col"><h4>Essential Links</h4></div>
                </div>
                
            </template>
            <template #icons>
                <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                    <span class="pi pi-cog"></span>
                </button>
            </template>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Panel> -->
</template>
<script>
// import Panel from 'primevue/panel';

export default{
    name: "AppFooter",
    components: {
        // Panel
    }
}
</script>
<style>
.layout-footer {
    font-size: 1rem;
    padding: 2rem;
    display: flex;
    align-items: top;
    text-align: left;
    justify-content: space-between;
    background-color:#2c3e50;;
    
}
a {
    color: #42b983;;
    font-weight: 600;
}
</style>