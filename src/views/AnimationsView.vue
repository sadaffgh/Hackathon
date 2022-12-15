<template>
  <h1> Storybooks Menu</h1>
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
import th1 from "../assets/Story_1.jpg";
import th2 from "../assets/Story_2.jpg";
import th3 from "../assets/Story_3.jpg";
import th4 from "../assets/Story_4.jpg";
import th5 from "../assets/Story_5.jpg";
import th6 from "../assets/Story_6.jpg";


export default {
  name: "AnimationsView",
  data() {
    return {
      animations1: [
        {
          thumbnail: th1,
          title: "Say NO to PLASTIC",
          content: "A lot of baby turtles are geting sick. But Why is That? Let's see together and learn about plastic and why it is bad for our environment!",
          href: "/#/wip"
        },
        {
          thumbnail: th2,
          title: "Super Pengu",
          content: "Learn how bad oil is for our environment with Pengu and what you can do about it!",
          href: "/#/wip"
        },
        {
          thumbnail: th4,
          title: "What does it mean to be green?",
          content: "What does green mean to me? Learn about the small and important things around you!",
          href: "/#/wip"
        },
      ],
      animations2: [
        {
          thumbnail: th5,
          title: "What can we make today? Let's see!",
          content: "Wanna learn how to make something new out of something old? Then you're at the right place!",
          href: "/#/wip"
        },
        {
          thumbnail: th3,
          title: "How to handle organic waste 🙂",
          content: "Watch and learn together with our monkey family how to handle organic waste, so no one slips on a banana peel ever again!",
          href: "/#/wip"
        },
        {
          thumbnail: th6,
          title: "Please help Planet Earth!",
          content: "Hello dear friend, planet Earth needs YOUR help! Watch and see what you can do! " ,
          href: "/#/wip"
        },
      ]
    };
  },
  components: {
    CustomCard: CustomCard,
  },
};
</script>
