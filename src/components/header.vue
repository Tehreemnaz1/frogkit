<style lang="stylus">
  @require '../stylus/mixins/header';

  .fk-header {
    header-mixin();
  }
</style>

<template>
  <header class="fk-header">
    <div class="fk-header__container">
      <div class="fk-header__top">
        <h1 class="fk-header__logo">
          <a :href="logoUrl"><img src="../assets/logo.svg" /></a>
        </h1>
        <a class="fk-header__cart" :href="navButtonItems[2].url">
          <Icon icon="shopping-cart-outline" />
        </a>
        <span class="fk-header__toggle" @click="toggleNav">
          <Icon icon="hamburger-menu" />
        </span>
      </div>
      <!-- navigation -->
      <nav class="fk-header__nav" :class="{ 'fk-header__nav--on': toggleOn }">
        <ul>
          <li v-for="item in navMainItems">
            <a :href="item.url">{{ item.label }}</a>
          </li>
          <li v-for="item in navButtonItems">
            <a :href="item.url">{{ item.label }}</a>
          </li>
        </ul> 
      </nav>
      <!-- login form -->
      <div class="fk-header__form">
         <div class="fk-header__form__field">
            <Input v-model="email" name="email" type="email" size="small" :placeholder="formItems.emailPlaceholder"></Input>
            <a :href="formItems.registerUrl">{{ formItems.registerLabel }}</a>
          </div>
           <div class="fk-header__form__field">
              <Input v-model="password" name="password" type="password" size="small" :placeholder="formItems.passwordPlaceholder"></Input>
              <a :href="formItems.retriveUrl">{{ formItems.retriveLabel }}</a>
          </div>
          <Button link color="primary" @click="login">{{ formItems.buttonLabel }}</Button>
      </div>
      <!-- top right buttons -->
      <div class="fk-header__btn">
        <Button link color="secondary" class="fk-header__btn__cart" :href="navButtonItems[2].url">
          <Icon icon="basket" />
          <span v-if="cartCounter > 0" class="fk-header__btn__cart__counter">{{ cartCounter }}</span>
        </Button>
        <Button link color="secondary" class="fk-header__btn__shop" :href="navButtonItems[1].url">
          {{ navButtonItems[1].label }}
        </Button>
        <Button link color="primary" class="fk-header__btn__login" :href="navButtonItems[0].url">
          {{ navButtonItems[0].label }}
        </Button>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      logoUrl: {
        type: String,
        default: '/'
      },
      navMainItems: {
        type: Array,
        default: () => []
      },
      navButtonItems: {
        type: Array,
        default: () => []
      },
      cartCounter: {
        type: Number,
        default: 0
      },
      formItems: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        toggleOn: false,
        email: '',
        password: ''
      }
    },
    methods: {
      toggleNav() {
        this.toggleOn = !this.toggleOn
      },
      login() {
        this.$emit('login', this.email, this.password)
      }
    },
  }
</script>
