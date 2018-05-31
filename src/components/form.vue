<template>
  <form @submit.prevent="displayError">
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'Form',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      showError: {
        type: Boolean,
        default: false
      }
    },
    watch:{
      showError() {
        this.displayError()
      }
    },
    data () {
      return {
        isValid: false,
        inputs: [],
        errors: {}
      }
    },
    mounted () {
      this.watchInputs()
    },
    methods: {
      watchInputs () {
        this.inputs = search(this.$children)
        this.inputs.forEach(input => input.$watch('errone', this.validate))
        this.validate()
      },
      validate() {
        this.isValid = !this.inputs.some(input => input.errone)
        this.$emit('input', this.isValid)
      },
      displayError() {
        this.inputs.forEach(input => (input.touched = true))
        this.scrollToError()
      },
      scrollToError() {
        if (this.isValid) return
        const firstInvalid = this.inputs.find(input => input.errone)
        firstInvalid.$el.scrollIntoView({ behavior: 'smooth', block: 'nearest'})
      }
    }
  }

  function search(children = []) {
    return children.reduce((acc, child) => {
      if (child.validatorElement !== undefined) {
        return acc.concat(child)
      } else {
        return acc.concat(search(child.$children))
      }
    }, [])
  }

</script>
