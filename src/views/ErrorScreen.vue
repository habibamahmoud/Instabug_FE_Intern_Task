<template>
  <div class="error-card">
    <img src="../assets/error.jpg" class="error-card__img" />
    <div class="error-card__error-msg">
      <div class="error-card__error-msg__title">404 - Page Not Found !</div>
      <div class="error-card__error-msg__body">
        Sorry, that page doesn't exist. What would you like to do?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorScreen",
  mounted() {
    this.$router.push("/404");
  },
};
</script>

<style lang="scss" scoped>
@import "../styles.scss";

.error-card {
  &__img {
    width: 30%;
  }
  &__error-msg {
    @include flexCenter();

    &__title {
      flex-basis: 100%;
      color: rgb(14, 14, 70);
      font-weight: bold;
      font-size: 24px;
      margin-bottom: $margin;
      font-family: $fontFamily;
    }
    &__body {
      flex-basis: 100%;
      color: $textColor;
      font-family: $fontFamily;
    }
  }
}
</style>
