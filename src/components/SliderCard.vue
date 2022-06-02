<template>
  <div class="slider-card">
    <div class="slider-card__slider">
      <input
        type="radio"
        name="radio-btn"
        id="radio1"
        class="slider-card__slider__slides__input"
        checked
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

      <div class="slider-card__slider__slides">
        <div class="slider-card__slider__slides__slide first">
          <img
            src="@/assets/slider-1.svg"
            class="slider-card__slider__slides__slide__img"
          />
          <p class="slider-card__slider__slides__slide__text">
            Accelerate Your Entire Mobile Team Workflow
          </p>
        </div>
        <div class="slider-card__slider__slides__slide">
          <img
            src="@/assets/slider-2.svg"
            class="slider-card__slider__slides__slide__img"
          />
          <p class="slider-card__slider__slides__slide__text">
            The Most Comprehensive Bug Reporting Tool For Mobile Apps
          </p>
        </div>
        <div class="slider-card__slider__slides__slide">
          <img
            src="@/assets/slider-3.svg"
            class="slider-card__slider__slides__slide__img"
          />
          <p class="slider-card__slider__slides__slide__text">
            Secure Crash Reporting With Real-Time Alerts
          </p>
        </div>
      </div>

      <!-- Manual Navigation -->
      <div class="slider-card__slider__slides__navigation-manual">
        <label
          for="radio1"
          class="slider-card__slider__slides__navigation-manual__btn manual-btn manual-btn--radio1"
        ></label>
        <label
          for="radio2"
          class="slider-card__slider__slides__navigation-manual__btn manual-btn manual-btn--radio2"
        ></label>
        <label
          for="radio3"
          class="slider-card__slider__slides__navigation-manual__btn manual-btn manual-btn--radio3"
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
}, 5000);
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
  min-height: 100vh;
  display: flex;

  &__slider {
    margin-top: 6rem;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;

    &__slides {
      width: 300%;
      display: flex;

      &__input {
        display: none;
      }
      &__slide {
        width: 33.3%;
        transition: 0.5s;
        margin-top: -150px;

        &__img {
          margin-top: 15 * $margin;
          width: 521px;
          height: 400px;
        }

        &__text {
          color: #fff;
          font-size: 28px;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }
      &__navigation-auto {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &__navigation-manual {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2.5 * $margin;
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

#radio1:checked
  ~ .slider-card__slider__slides__navigation-manual
  .manual-btn--radio1,
#radio2:checked
  ~ .slider-card__slider__slides__navigation-manual
  .manual-btn--radio2,
#radio3:checked
  ~ .slider-card__slider__slides__navigation-manual
  .manual-btn--radio3 {
  background: white;
}

#radio1:checked ~ .slider-card__slider__slides .first {
  margin-left: 0;
}

#radio2:checked ~ .slider-card__slider__slides .first {
  margin-left: -33.33%;
}

#radio3:checked ~ .slider-card__slider__slides .first {
  margin-left: -66.66%;
}

#radio4:checked ~ .slider-card__slider__slides .first {
  margin-left: -100%;
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
