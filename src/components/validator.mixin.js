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
      validate(value, type='') {
        const errors = {}
        if (this.disabled) return errors
        if(this.match) {
          errors.pattern = value !== this.match
          return errors
        }
        errors.required = this.required && (typeof value === 'string' ? !value.length : !value)
        errors.pattern = this.required && this.pattern && !this.pattern.test(value) || !value.trim().length
        const inputType = type || this.type 
        if (inputType === 'password') {
          if (value.length < 6) errors.lengthError = 'min'
          else if (value.length > 64) errors.lengthError = 'max'
          else  errors.lengthError = ''
        }

        return errors
      }
    }
  }
}
