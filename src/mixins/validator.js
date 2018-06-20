const regex = {
  text: /.*/,
  houseNumber: /^[0-9a-zA-Z ]+$/,
  phone: /^[0-9 \\+\\-\\(\\)\\/]{3,32}$/,
  password: /^[0-9a-zA-Z!*^?+-_@#$%&<>§±'":;.,/=~\[\]\{\}\`\(\)\|\\ ]{6,64}$/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  // NOTE: uk zip code is provided by goverment
  // ukZip: /^(([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2}))$/
  ukZip: /^(([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s[0-9][A-Za-z]{2}))$/
}

export default function validator (model = 'value') {
  return {
    props:{ 
      wrong: {
        type: Boolean,
        default: false
      }
    },
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
      errone() {
        return Object.values(this.errors || {}).some(Boolean)
      },
      invalid() {
        return this.wrong || this.errone && this.touched
      }
    },
    watch: {
      [model]() {
        this.touched = true
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
        if (this.required) {
          errors.required = typeof value === 'string' ? !value.length : !value
          errors.pattern = this.pattern && !this.pattern.test(value) || (typeof value === 'string' && !value.trim().length)
          const inputType = type || this.type 
          if (inputType === 'password') {
            if (value.length < 6) errors.lengthError = 'min'
            else if (value.length > 64) errors.lengthError = 'max'
            else  errors.lengthError = ''
          }
        }

        return errors
      }
    }
  }
}
