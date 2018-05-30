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
        this.inputs.forEach(input => input.$watch('valid', this.validate))
        this.validate()
      },
      validate() {
        this.isValid = this.inputs.every(input => input.valid)
        this.$emit('input', this.isValid)
      },
      displayError() {
        this.inputs.forEach(input => (input.touched = true))
        this.scrollToError()
      },
      scrollToError() {
        if (this.isValid) return
        const firstInvalid = this.inputs.find(input => !input.valid)
        firstInvalid.$el.scrollIntoView({ behavior: 'smooth', inline: 'nearest'})
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
