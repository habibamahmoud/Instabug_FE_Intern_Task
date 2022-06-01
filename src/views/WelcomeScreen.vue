<template>
  <div class="welcome-card" v-if="logged">
    <div class="welcome-card__title">Welcome to {{ user }}</div>
    <button class="welcome-card__btn" @click="logout">Log out</button>
  </div>
  <div v-else>{{ login() }}</div>
</template>

<script>
export default {
  name: "WelcomeScreen",
  data() {
    return {
      user: localStorage.getItem("email"),
      logged: localStorage.getItem("logged"),
    };
  },
  mounted() {
    this.logged = JSON.parse(this.logged);
    console.log(this.logged);
  },

  methods: {
    logout() {
      localStorage.setItem("email", "");
      localStorage.setItem("logged", false);
      this.$router.push("/login");
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles.scss";
.welcome-card {
  &__title {
    font-size: 24px;
    font-weight: bold;
    color: $textColor;
    margin: 2 * $margin;
  }

  &__btn {
    box-shadow: 0px 0px 20px rgba(163, 171, 185, 0.24);
    border-radius: 5px;
    border: none;
    font-weight: bold;
    margin-bottom: 0.8em;
    width: 100px;
    height: 50px;
    background-color: $primaryBtn;
  }
}
</style>
