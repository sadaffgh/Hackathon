<template>
  <link href='https://fonts.googleapis.com/css?family=Mystery Quest' rel='stylesheet'>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/animations">Storybooks</router-link> |
    <router-link to="/games">Games</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  
  <router-view/>
  <app-footer />
</template>
<script>
  import AppFooter from '@/AppFooter.vue';
  export default {
    'app-footer': AppFooter,
  }
</script>
<style>
#app {
  font-family: 'Mystery Quest';font-size: 22px;  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.footer {
  color: beige;
  position: sticky;
}
</style>
