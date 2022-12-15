<template>
  <h1> Animations Menu</h1>
  <div class="grid gap-3 mr-7 ml-7">
    <div class="col" v-for="animation in animations1" :key="animation.id">
      <CustomCard :entry="animation" />
    </div>
  </div>
  <div class="grid gap-3 mr-7 ml-7">
    <div class="col" v-for="animation in animations2" :key="animation.id">
      <CustomCard :entry="animation" />
    </div>
  </div>
</template>

<script>
import CustomCard from "../components/CustomCard.vue";
import th from "../assets/logo.png";
export default {
  name: "AnimationsView",
  data() {
    return {
      animations1: [
        {
          thumbnail: th,
          title: "yuhu",
          content: "some content",
        },
        {
          thumbnail: th,
          title: "yuhu",
          content: "some content",
        },
        {
          thumbnail: th,
          title: "yuhu",
          content: "some content",
        },
      ],
      animations2: [
        {
          thumbnail: th,
          title: "yuhu",
          content: "some content",
        },
        {
          thumbnail: th,
          title: "yuhu",
          content: "some content",
        },
        {
          thumbnail: th,
          title: "yuhu",
          content: "some content",
        },
      ],
      entry: {
        thumbnail: th,
        title: "yuhu",
        content: "some content",
      },
    };
  },
  components: {
    CustomCard: CustomCard,
  },
};
</script>
