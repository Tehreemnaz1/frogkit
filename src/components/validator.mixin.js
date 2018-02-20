const regex = {
  text: /.*/,
  phone: /^[0-9 \\+\\-\\(\\)\\/]{3,32}$/,
  password: /^[\w ]{6,64}$/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  // email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
}

export default function validator (model = 'value') {
  return {
    data() {
      return {
        validatorElement: true,
        touched: false,
        pattern: regex[this.type],
        errors: {
          pattern: false,
          required: false,
          lengthError: ''
        }
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
      [model]() {
        this.runValidation()
      }
    },
    mounted() {
      this.runValidation()
    },
    methods: {
      runValidation() {
        this.errors = this.validate(this[model])
      },
      validate(value) {
        const errors = {}
        if (this.disabled) return errors
        errors.required = this.required && (typeof value === 'string' ? !value.length : !value)
        errors.pattern = this.pattern && !this.pattern.test(value)
        if (this.type === 'password') {
          if (this.value.length < 6) errors.lengthError = 'min'
          else if (this.value.length > 64) errors.lengthError = 'max'
          else  errors.lengthError = ''
        }
        
        return errors
      }
    }
  }
}
