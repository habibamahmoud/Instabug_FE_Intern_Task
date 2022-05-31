<template>
  <div class="slider-card">
    <div class="slider-card__slider">
      <div class="slider-card__slider__slides">
        <input
          type="radio"
          name="radio-btn"
          id="radio1"
          class="slider-card__slider__slides__input"
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio2"
          class="slider-card__slider__slides__input"
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio3"
          class="slider-card__slider__slides__input"
        />
        <div class="slider-card__slider__slides__slide first">
          <img
            src="../assets/mobile-app-dev.png"
            alt=""
            class="slider-card__slider__slides__slide__img"
          />
        </div>
        <div class="slider-card__slider__slides__slide">
          <img
            src="../assets/2.jpg"
            alt=""
            class="slider-card__slider__slides__slide__img"
          />
        </div>
        <div class="slider-card__slider__slides__slide">
          <img
            src="../assets/3.jpg"
            alt=""
            class="slider-card__slider__slides__slide__img"
          />
        </div>
        <div
          class="slider-card__slider__slides__navigation-auto navigation-auto"
        >
          <div
            class="slider-card__slider__slides__navigation-auto__btn slider-card__slider__slides__navigation-auto__btn--btn1 auto-btn1"
          ></div>
          <div
            class="slider-card__slider__slides__navigation-auto__btn slider-card__slider__slides__navigation-auto__btn--btn1 auto-btn2"
          ></div>
          <div
            class="slider-card__slider__slides__navigation-auto__btn slider-card__slider__slides__navigation-auto__btn--btn1 auto-btn3"
          ></div>
        </div>
      </div>
      <div class="slider-card__slider__slides__navigation-manual">
        <label
          for="radio1"
          class="slider-card__slider__slides__navigation-manual__btn manual-btn"
        ></label>
        <label
          for="radio2"
          class="slider-card__slider__slides__navigation-manual__btn manual-btn"
        ></label>
        <label
          for="radio3"
          class="slider-card__slider__slides__navigation-manual__btn manual-btn"
        ></label>
      </div>
    </div>
  </div>
</template>

<script>
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 3000);
export default {
  name: "SliderCard",
};
</script>

<style lang="scss" scoped>
@import "../styles.scss";

.slider-card {
  background-color: #001f6a;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__slider {
    width: 800px;
    border-radius: 10px;
    overflow: hidden;

    &__slides {
      width: 500%;
      display: flex;

      &__input {
        display: none;
      }
      &__slide {
        width: 20%;
        transition: 2s;

        &__img {
          width: 800px;
        }
      }
      &__navigation-auto {
        position: absolute;
        display: flex;
        width: 800px;
        justify-content: center;
        margin-top: 65.5 * $margin;
      }
      &__navigation-manual {
        position: absolute;
        width: 800px;
        margin-top: $margin;
        display: flex;
        justify-content: center;
        &__btn {
          border: 2px solid white;
          padding: 4px;
          border-radius: 10px;
          cursor: pointer;
          transition: 1s;
        }
      }
    }
  }
}

.manual-btn:not(:last-child) {
  margin-right: 10px;
}

.manual-btn:hover {
  background: white;
}

#radio1:checked ~ .first {
  margin-left: 0;
}

#radio2:checked ~ .first {
  margin-left: -20%;
}

#radio3:checked ~ .first {
  margin-left: -40%;
}

#radio4:checked ~ .first {
  margin-left: -60%;
}

.navigation-auto div {
  border: 2px solid white;
  padding: 4px;
  border-radius: 10px;
  transition: 1s;
}

.navigation-auto div:not(:last-child) {
  margin-right: $margin;
}

#radio1:checked ~ .navigation-auto .auto-btn1 {
  background: white;
}

#radio2:checked ~ .navigation-auto .auto-btn2 {
  background: white;
}

#radio3:checked ~ .navigation-auto .auto-btn3 {
  background: white;
}

#radio4:checked ~ .navigation-auto .auto-btn4 {
  background: white;
}
</style>
