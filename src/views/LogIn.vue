<template>
  <div class="row" v-if="!logged">
    <slider-card class="child1" />
    <div class="child2">
      <login-form />
    </div>
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
  justify-content: center;
}

.child1 {
  flex-basis: 50%;
  width: 50%;
}
.child2 {
  flex-basis: 50%;
  width: 50%;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 1rem;
}
@media (max-width: 1100px) {
  .child1 {
    display: none;
  }

  .child2 {
    flex-basis: 100%;
    width: auto;
    max-width: 500px;
    padding: 0;
  }
}
</style>
