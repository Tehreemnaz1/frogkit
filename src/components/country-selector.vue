<style lang="stylus">
  @require '../stylus/mixins/country-selector'

  .fk-countries
    countries-mixin()

</style>

<template>
  <div class="fk-countries" v-click-outside="closeDropDown">
    <!-- toggle -->
    <Flex
      align="center"
      justify="space-between"
      class="fk-countries__toggle"
      :class="{ 'fk-countries__toggle--on': toggleDropdown }"
      @click="toggleDropdown = !toggleOn">
        <img :src="flagSrc(selectedCountry.countryCode)">
        <p>{{ selectedCountry.displayName }}</p>
        <Icon :icon="'angle-' + (toggleDropdown ? 'up' : 'down')" />
    </Flex>
    <!-- dropdown -->
    <Flex align="center" v-if="toggleOn" class="fk-countries__dropdown" :class="{ 'fk-countries__dropdown--on': toggleDropdown }">
      <!-- country list -->
      <Flex
        align="center"
        class="fk-countries__item"
        v-for="country in prefferedCountries"
        :key="country.countryCode"
        @click="updateCountry(country.countryCode)">
          <img :src="flagSrc(country.countryCode)">  
          <p>{{ country.displayName }}</p>
      </Flex>
      <!-- select list -->
      <Flex grow align="center" justify="space-between" class="fk-countries__select-box">
        <p>{{ selectLabel }}</p>
        <select @change="updateCountry($event.target.value)">
          <option
            v-for="country in countries"
            :key="country.countryCode"
            :value="country.countryCode"
            :selected="value == country.countryCode">
              {{country.displayName}}
          </option>
        </select>
      </Flex>
    </Flex>
  </div>
</template>

<script>
  import clickOutside from './clickOutside.directive'
  export default {
    name: 'CountrySelector',
    directives: {
      clickOutside
    },
    props: {
      countries: {
        type: Array,
        default: () => [{}]
      },
      currentCountry: {
        type: String,
        default: ''
      },
      mobileNavOpen: {
        type: Boolean,
        default: false
      },
      selectLabel: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        prefferedCountries: this.countries.filter(({preferred}) => preferred)
          .sort((i, j) => i.displayName.localeCompare(j.displayName)),
        selectedCountry: this.getCountry(this.currentCountry.toUpperCase()),
        value: this.currentCountry.toUpperCase(),
        toggleOn: false
      }
    },
    methods: {
      flagSrc(code) {
        try {
          return require(`../assets/flags/${code}.png`)

        } catch (e) {
          return require(`../assets/flags/_unknown.png`)
        }
      },
      getCountry(code) {
        return this.countries.find(country => country.countryCode === code) || {}
      },
      updateCountry(code) {
        this.value = code
        this.selectedCountry = this.getCountry(this.value)
        this.toggleDropdown = false
        this.$emit('change', this.selectedCountry)
      },
      closeDropDown () {
        this.toggleOn = false
      }
    },
    computed: {
      toggleDropdown: {
        get () {
          if (this.mobileNavOpen) this.toggleOn = false
          return this.toggleOn
        },
        set (toggleStatus) {
          this.toggleOn = toggleStatus
          this.$emit('open')
        }
      }
    }
  }
</script>
