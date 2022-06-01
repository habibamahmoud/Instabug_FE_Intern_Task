<template>
  <div class="row" v-if="!logged">
    <slider-card class="child1" />
    <login-form class="child2" />
  </div>
  <div v-else>{{ welcomePage() }}</div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import SliderCard from "../components/SliderCard.vue";
export default {
  name: "LogIn",
  components: {
    LoginForm,
    SliderCard,
  },
  data() {
    return {
      logged: JSON.parse(localStorage.getItem("logged")),
    };
  },

  methods: {
    welcomePage() {
      this.$router.push("/welcome");
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
.child1 {
  display: none;
}
.child2 {
  flex-basis: 100%;
}
@media (min-width: 800px) {
  .row {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .child1 {
    flex-basis: 50%;
    display: inline;
  }
  .child2 {
    flex-basis: 30%;
    display: inline;
  }
}
</style>
