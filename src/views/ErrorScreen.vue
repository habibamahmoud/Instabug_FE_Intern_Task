<template>
  <div class="error-card">
    <div class="error-card__error-msg__img">
      <error-image />
    </div>
    <div class="error-card__error-msg">
      <div class="error-card__error-msg__title">404 - Page Not Found!</div>
      <div class="error-card__error-msg__body">
        Sorry, that page doesn't exist. What would you like to do?
      </div>
    </div>
  </div>
</template>

<script>
import ErrorImage from "@/components/ErrorImage.vue";

export default {
  name: "ErrorScreen",
  components: {
    ErrorImage,
  },
  mounted() {
    this.$router.push("/404");
  },
};
</script>

<style lang="scss" scoped>
@import "../styles.scss";

.error-card {
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
    &__img {
      margin: auto;
      margin-top: 5%;
    }
  }
}
</style>
