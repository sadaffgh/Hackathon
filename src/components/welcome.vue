<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <h1>
    Welcome to our interactive platform for sustainability! 
    </h1>
    <h3>Quick introduction</h3>
    <p>
      We would like to use this platform as a means to provide you with some basic knowledge about different issues regarding sustainability and our environment. 
    </p>
    <p>
      Our platform offers two main possibilities of interacting with our content. <br>
      One option is accessing our pool of <a href="/#/animations">Storybooks</a>.
      Our Storybooks consists of a series of different stories addressing various aspects of sustainability.
      Please feel free to click on an animation of your choice and enjoy its content. <br>
      The other option will be our series of <a href="/#/games">games</a> through which your child will enjoy learning about the impact of its actions on the environment.
    </p>
    <br>
    <!-- <h4>Essential Links</h4>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
