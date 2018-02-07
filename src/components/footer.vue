<style lang="stylus" scoped>
  @require '../stylus/mixins/footer'

  .fk-footer
    footer-mixin()

</style>

<template>
  <footer class="fk-footer">
    <Grid>
      <Row>
        <Col xs12 lg3>
          <ul class="fk-footer__nav">
            <li v-for="item in navItems[0]">
              <a class="fk-footer__link":href="item.url" target="_blank" rel="noopener">{{ item.label }}</a>
            </li>
          </ul>
        </Col>
        <Col xs12 lg3>
          <ul class="fk-footer__nav">
            <li v-for="item in navItems[1]">
              <a class="fk-footer__link":href="item.url" target="_blank" rel="noopener">{{ item.label }}</a>
            </li>
          </ul>
        </Col>
        <Col xs12 lg3>
          <ul class="fk-footer__nav">
          <li v-for="item in navItems[2]">
              <a class="fk-footer__link":href="item.url" target="_blank" rel="noopener">{{ item.label }}</a>
            </li>
          </ul>
        <section class="fk-footer__app-stores">
          <div>
            <h4 v-if="appStoreItems.headline">{{ appStoreItems.headline }}</h4>
            <div class="fk-footer__app-stores__buttons">
                <AppBadge v-for="btn in appStoreItems.buttons" :href="btn.url" :class="btn.name" :label="btn.label" :key="btn.name" />
            </div>
          </div>
        </section>
        </Col>
        <Col xs12 lg3>
          <ul class="fk-footer__nav">
            <li v-for="item in navItems[3]">
              <a class="fk-footer__link":href="item.url" target="_blank" rel="noopener">{{ item.label }}</a>
            </li>
          </ul>
          <section class="fk-footer__social">
            <div>
              <h4 v-if="socialItems.headline">{{ socialItems.headline }}</h4>
              <div class="fk-footer__social__icons">
                  <SocialIcon v-for="icon in socialItems.icons" :href="icon.url" :class="icon.name" label="icon.label" :key="icon.name" />
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Grid>
  </footer>
</template>

<script>

  import AppBadge from './app-badge'
  import SocialIcon from './social-icon'

  export default {
    name: 'Footer',
    components: {
      AppBadge,
      SocialIcon
    },
    props: {
      navItems: {
        type: Array,
        default: () => []
      },
      appStoreItems: {
        type: Object,
        default: () => {}
      },
      socialItems: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
