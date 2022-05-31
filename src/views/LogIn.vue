<template>
  <div class="row">
    <slider-card class="child1" />
    <login-form class="child2" />
  </div>
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
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.child1 {
  flex-basis: 100%;
}
.child2 {
  flex-basis: 100%;
}
@media (min-width: 800px) {
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
