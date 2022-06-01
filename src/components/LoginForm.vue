<template>
  <div class="login-card">
    <div class="login-card__icon">
      <img src="../assets/Instabug-icon.svg" />
    </div>
    <div class="login-card__title">Log in to Instabug</div>
    <div class="login-card__social-buttons row">
      <button
        class="login-card__social-buttons__btn login-card__social-buttons__btn--primary row"
      >
        <img
          src="@/assets/google.svg"
          class="login-card__social-buttons__btn__svg"
        />
        <p class="login-card__social-buttons__btn__paragraph">Google</p>
      </button>
      <button
        class="login-card__social-buttons__btn login-card__social-buttons__btn--black row"
      >
        <img
          src="@/assets/github.svg"
          class="login-card__social-buttons__btn__svg"
        />
        <p class="login-card__social-buttons__btn__paragraph">GitHub</p>
      </button>
      <button
        class="login-card__social-buttons__btn login-card__social-buttons__btn--white row"
      >
        <img
          src="@/assets/microsoft.svg"
          class="login-card__social-buttons__btn__svg"
        />
        <p class="login-card__social-buttons__btn__paragraph">Microsoft</p>
      </button>
    </div>
    <div class="login-card__seprator row">
      <hr class="login-card__seprator__hr" />
      <div class="login-card__seprator__text">OR</div>
      <hr class="login-card__seprator__hr" />
    </div>
    <div class="login-card--invalid-data" v-if="invalidData">
      {{ invalidData }}
    </div>
    <form class="login-card__form row" @submit.prevent="login">
      <label for="email" class="login-card__form__label">Work Email</label>
      <input
        type="text"
        id="email"
        placeholder="you@company.com"
        class="login-card__form__input"
        required
        v-model="email"
        v-bind:class="{ 'is-invalid': validation.invalid.email }"
      />
      <div
        class="login-card__form__validate-email login-card__form--invalid-feedback"
        v-if="validation.invalid.email"
      >
        {{ validation.invalid.email }}
      </div>
      <div class="login-card__form__password row">
        <div
          class="login-card__form__password__label login-card__form__password__label--left"
        >
          <label for="password">Password</label>
        </div>
        <div
          class="login-card__form__password__text login-card__form__password__text--right"
        >
          <p>Forgot Password?</p>
        </div>
      </div>
      <input
        type="password"
        id="password"
        placeholder="6+ Characters"
        class="login-card__form__input"
        required
        v-model="password"
        :class="{ 'is-invalid': validation.invalid.password }"
      />
      <div
        class="login-card__form--invalid-feedback"
        v-if="validation.invalid.password"
      >
        {{ validation.invalid.password }}
      </div>
      <button
        class="login-card__form__btn login-card__form__btn--primary"
        type="submit"
        id="login-btn"
        :disabled="
          !this.email ||
          !this.password ||
          !!validation.invalid.email ||
          !!validation.invalid.password
        "
      >
        Log in
      </button>
    </form>
    <div class="login-card__options row">
      <div class="login-card__options__child login-card__options__child--left">
        Don't have an account? <a href="#">Sign up</a>
      </div>
      <div class="login-card__options__child login-card__options__child--right">
        <a href="#">Login Via SSO</a>
      </div>
    </div>
    <div class="login-card__footer row">
      <div class="login-card__footer__header">
        Trusted by the top companies.
      </div>
    </div>
    <div class="login-card__companies row">
      <img
        class="login-card__companies__icon login-card__companies__icon--lyft"
        src="@/assets/lyft.svg"
      />
      <img
        class="login-card__companies__icon login-card__companies__icon--buzzfeed"
        src="@/assets/buzzfeed.svg"
      />
      <img
        class="login-card__companies__icon login-card__companies__icon--asana"
        src="@/assets/asana.svg"
      />
      <img
        class="login-card__companies__icon login-card__companies__icon--oneplus"
        src="@/assets/oneplus.svg"
      />
      <img
        class="login-card__companies__icon login-card__companies__icon--house-party"
        src="@/assets/houseparty.svg"
      />
    </div>
  </div>
</template>

<script>
import googleSVG from "@/assets/google.svg";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      logged: false,
      usersData: [
        { email: "mohamed@instabug.com", password: "A12345678" },
        { email: "mohamed1@instabug.com", password: "A12345678" },
        { email: "mohamed2@instabug.com", password: "A12345678" },
        { email: "mohamed3@instabug.com", password: "A12345678" },
        { email: "mohamed4@instabug.com", password: "A12345678" },
        { email: "mohamed5@instabug.com", password: "A12345678" },
        { email: "mohamed6@instabug.com", password: "A12345678" },
        { email: "mohamed7@instabug.com", password: "A12345678" },
      ],
      validation: {
        invalid: {
          email: "",
          password: "",
        },
      },
      email_name: "",
      invalidData: "",
      mySVG: googleSVG,
    };
  },
  computed: {},
  methods: {
    validateEmail() {
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.validation.invalid.email = "Enter a valid email address.";
        console.log(this.validation.invalid.email);
      } else {
        this.validation.invalid.email = "";
      }
    },
    validatePassword() {
      this.email_name = this.email?.match(/.+?(?=@)/)?.[0];
      if (this.password.includes(this.email_name)) {
        this.validation.invalid.password =
          "Your password shouldn't include your email address name";
      } else if (!/(?=.*[A-Z])(?=.*\d)/.test(this.password)) {
        this.validation.invalid.password =
          "Password must contain at least one uppercase letter and number";
      } else if (this.password.length < 6) {
        this.validation.invalid.password =
          "Password must be 6 characters or more";
      } else {
        this.validation.invalid.password = "";
      }
    },
    validateFields() {
      this.validateEmail();
      this.validatePassword();
    },
    login() {
      this.validateFields();
      this.usersData.filter((user) => {
        if (this.password == user.password && this.email == user.email) {
          this.logged = true;
          localStorage.setItem("logged", this.logged);
          localStorage.setItem("email", this.email);
          this.invalidData = "";
        } else {
          this.invalidData = "Your email and/or password are incorrect";
        }
      });
      if (JSON.parse(localStorage.getItem("logged"))) {
        this.$router.push("/welcome");
      }
      console.log(this.logged);
      console.log(localStorage.getItem("email"));
    },
  },
  watch: {
    email() {
      this.validateEmail();
    },
    password() {
      this.validatePassword();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../styles.scss";

.login-card {
  padding: 5 * $padding;
  margin-top: 6 * $margin;
  position: relative;

  &__icon {
    position: absolute;
    top: 0em;
    left: 50%;
    margin: 0 auto;
    transform: translateX(-50%) translateY(-50%);
  }

  &__title {
    font-size: 2rem;
    margin-bottom: 1em;
    color: $textColor;
    font-family: $fontFamily;
  }

  &__social-buttons {
    &__btn {
      flex-basis: 100%;
      &--primary {
        background-color: $primaryBtn;
        color: white;
        border: 1px solid $primaryBtn;
      }
      &__svg {
        height: 30px;
        flex-basis: 6%;
        padding-top: $padding;
        align-content: flex-start;
      }
      &__paragraph {
        flex-basis: 94%;
      }
      &--black {
        background-color: #333333;
        color: white;
        border: 1px solid #acacac;
      }
      &--white {
        background-color: transparent;
        color: #6b6b6b;
        border: 1px solid #acacac;
      }
    }
  }
  &__seprator {
    margin-top: 1.8 * $margin;
    margin-bottom: 1.8 * $margin;
    align-items: flex-start;
    &__text {
      color: $textColor;
      font-weight: bold;
      flex-basis: 18%;
      margin: -10px;
      margin-left: -30px;
      margin-right: -30px;
    }
    &__hr {
      flex-basis: 45%;
      margin: 0px;
      color: #edeff1;
      background-color: #edeff1;
    }
  }
  &--invalid-data {
    background-color: #fce6e2;
    color: $textColor;
    border: 1px solid #dcdee3;
    height: 50px;
    font-weight: 500;
    padding-top: 3 * $padding;
    padding-left: $padding;
    text-align: left;
    margin-bottom: 1.5 * $margin;
  }
  &__form {
    &__label {
      flex-basis: 100%;
      color: $textColor;
      margin-bottom: $margin;
      text-align: left;
    }
    &__input {
      flex-basis: 100%;
      height: 40px;
      border-radius: 4px;
      border: 1px solid #dcdee3;
      margin-bottom: $margin;
      padding: $padding;
    }
    &__btn {
      flex-basis: 100%;
      height: 40px;
      margin-top: $margin;
      &--primary {
        background-color: $primaryBtn;
        color: white;
        border: 1px solid #acacac;
      }
    }
    &__password {
      flex-basis: 100%;
      &__label {
        flex-basis: 46%;
        color: $textColor;
        padding: 0;
        &--left {
          text-align: left;
          padding-top: 3.4 * $padding;
        }
      }
      &__text {
        flex-basis: 46%;
        color: rgb(190, 188, 188);
        display: inline-block;
        &--right {
          text-align: right;
        }
      }
    }
    &--invalid-feedback {
      color: red;
      font-size: 14px;
      flex-basis: 100%;
      text-align: left;
      margin-bottom: 3 * $margin;
    }
  }
  &__options {
    &__child {
      flex-basis: 46%;
      padding: 0;
      margin-top: 2 * $margin;
      color: $textColor;
      &--left {
        text-align: left;
      }
      &--right {
        text-align: right;
      }
    }
  }
  &__footer {
    &__header {
      color: $lightGray;
      margin-top: 2 * $margin;
      font-size: 1.2rem;
      flex-basis: 100%;
      font-family: $fontFamily;
    }
  }
  &__companies {
    &__icon {
      flex-basis: 16%;
      color: $lightGray;
      margin-top: 1.2em;
      width: 60px;
      height: 25px;
      &--lyft {
        flex-basis: 10%;
      }
      &--house-party {
        flex-basis: 21%;
        width: 120px;
      }
      &--oneplus {
        height: 40px;
        position: relative;
        top: -10px;
      }
    }
  }
}

.row {
  @include flexCenter();
}
.is-invalid {
  border: 1px solid red;
}
@media (min-width: 800px) {
  .login-card {
    width: 100%;
    padding: 5 * $padding;
    margin-top: 6 * $margin;
    position: relative;
  }
}
</style>
