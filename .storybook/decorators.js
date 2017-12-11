
import hljs from 'highlight.js'
import Clipboard from 'clipboard'
import Vue from 'vue'
import 'highlight.js/styles/monokai-sublime.css';

export const ComponentInfoDecorator = (storyFn, component = {}) => {
  const story = storyFn()

  return {
      components: { story },
      data() {
        return {
          code: story.template,
          props: component.props,
          showInfo: false
        }
      },
      mounted(){
        this.highlight()
        new Clipboard('#copy-code')
      },
      methods: {
        toggleInfo() {
          this.showInfo = !this.showInfo
          this.highlight()
        },
        highlight() {
          const vm = this
          Vue.nextTick(function () {
            const block = vm.$refs.codeExample
            if (!block) return
            hljs.highlightBlock(block)
          })
        }
      },
      template:
      `<div class="component-info-wrapper">
        <story/>
        <button @click="toggleInfo" class="show-info">Toggle Info</button>

        <div v-if="showInfo" class="component-info">
          <div class="usage">
            <h1> Usage </h1>
            <button id="copy-code" data-clipboard-target="#codeExample">Copy</button>
            <code ref="codeExample" id="codeExample" class="lang-html">{{code}}</code>
          </div>
          <div v-if="props">
            <h1> Props </h1>
            <table style="width:100%">
              <tr>
                <th>Prop</th>
                <th>type</th>
                <th>default</th>
              </tr>
              <tr v-for="(value, key) in props" >
                <td>{{key}}</td>
                <td>{{value.type && value.type.name}}</td>
                <td>{{value.default}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>`
  }
}
