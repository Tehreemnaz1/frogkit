<style lang="stylus">
  @require '../stylus/mixins/country-selector'

  .fk-countries
    countries-mixin()

</style>

<template>
  <div class="fk-countries">
    <!-- toggle -->
    <Flex
      align="center"
      justify="space-between"
      class="fk-countries__toggle"
      :class="{ 'fk-countries__toggle--on': toggleOn }"
      @click="toggleDropdown">
        <img :src="flagSrc(selectedCountry.countryCode)">
        <p>{{ selectedCountry.countryName }}</p>
        <Icon :icon="'angle-' + arrow" />
    </Flex>
    <!-- dropdown -->
    <Flex class="fk-countries__dropdown" :class="{ 'fk-countries__dropdown--on': toggleOn }">
      <!-- country list -->
      <Flex
        align="center"
        class="fk-countries__item"
        v-for="country in prefferedCountries"
        :key="country.countryCode"
        @click="updateCountry(country.countryCode)">
          <img :src="flagSrc(country.countryCode)">  {{ country.countryName }}
      </Flex>
      <!-- select list -->
      <Flex grow align="center" justify="space-between" class="fk-countries__select-box">
        <p>{{ selectLabel }}</p>
        <select @change="updateCountry($event.target.value)">
          <option value="" :selected="!value">{{selectPlaceholder}}</option>
          <option
            v-for="country in countries"
            :key="country.countryCode"
            :value="country.countryCode"
            :selected="value == country.countryCode">
              {{country.countryName}}
          </option>
        </select>
      </Flex>
    </Flex>
  </div>
</template>

<script>
  export default {
    name: 'CountrySelector',
    props: {
      countries: {
        type: Array,
        default: () => []
      },
      currentCountry: {
        type: String,
        default: ''
      },
      navOn: {
        type: Boolean,
        default: false
      },
      selectLabel: {
        type: String,
        default: ''
      },
      selectPlaceholder: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        prefferedCountries: this.countries.filter(({preferred}) => preferred).sort((i, j) => i.countryName > j.countryName ? 1 : -1 ),
        selectedCountry: this.getCountry(this.currentCountry.toUpperCase()),
        value: this.currentCountry.toUpperCase(),
        toggleOn: false,
        arrow: 'down'
      }
    },
    methods: {
      flagSrc(code) {
        return require(`../assets/flags/${code}.png`)
      },
      getCountry(code) {
        return this.countries.find(country => country.countryCode === code)
      },
      toggleDropdown() {
        this.toggleOn = !this.toggleOn
        this.arrow = this.toggleOn ? 'up' : 'down'
      },
      updateCountry(code) {
        this.value = code
        this.selectedCountry = this.getCountry(this.value)
        this.toggleOn = false
        this.$emit('countryChange', this.selectedCountry)
      }
    },
    watch: {
      navOn: function () {
        if (this.navOn) this.toggleOn = false
      }
    }
  }
</script>
