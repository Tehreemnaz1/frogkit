<template>
  <form @submit.prevent="showError">
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
        this.inputs.forEach(input => {
          input.$watch('valid', this.validate)
        })
        this.validate()
      },
      validate() {
        this.isValid = this.inputs.every(input => input.valid)
        this.$emit('input', this.isValid)
      },
      showError() {
        this.inputs.forEach(input => {
          input.touched = true
        })
      }
    }
  }

  function search (children = [], depth = 0, results = []) {
    children.forEach(child => {
      if (child.validatorElement !== undefined) {
        results.push(child)
      } else {
        search(child.$children, depth + 1, results)
      }
    })

    if (depth === 0) return results
  }
</script>
