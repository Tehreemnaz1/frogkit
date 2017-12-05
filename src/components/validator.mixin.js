const regex = {
  text: /.*/,
  phone: /^[0-9 \\+\\-\\(\\)\\/]{3,32}$/,
  password: /^[\w ]{8,64}$/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  // email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
}

export default {
  data() {
    return {
      touched: false,
      errors: {
        pattern: false,
        required: false
      },
      pattern: regex[this.type]
    }
  },
  computed: {
    valid() {
      return Object.values(this.errors || {}).every(error => !error)
    },
    invalid() {
      return !this.valid
    }
  },
  watch: {
    value() {
      // console.log('value changed')
      this.touched = true
      this.validate()
    }
  },
  mounted() {
    this.validate()
  },
  methods: {
    validate() {
      this.errors.required = this.required && !this.value.length
      this.errors.pattern = this.pattern && !this.pattern.test(this.value)
      console.log('errors', this.errors)
    }
  }
}
