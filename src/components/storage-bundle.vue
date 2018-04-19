<style lang="stylus">
  @import '../stylus/mixins/storage-bundle'

  .fk-storage-bundle
    storage-bundle-mixin()
</style>

<template>
    <Flex v-if="show" class="fk-storage-bundle fk-storage-bundle__container" align="center" column>
      <Title size="xs" color="primary" class="fk-storage-bundle__title" center>{{storage.title}}</Title>
      <div class="fk-storage-bundle__icon">
      </div>
      <p class="fk-storage-bundle__for">{{storage.for}}</p>
      <Select class="fk-storage-bundle__devices" :options="storage.devices" :value="selectedDevice.value" @input="handleSelect"></Select>
      <div v-if="storage.canceledCamera" class="fk-storage-bundle__canceled">
          {{storage.cancelText}}
      </div>
      <template v-else>
        <p class="fk-storage-bundle__history">{{storage.history}}</p>
        <div>
          <Radio class="fk-storage-bundle__period" v-for="upgrade in storage.upgrades" :value="upgrade.value" :key="upgrade.value" :checked="selectedUpgrade.value" @change="handleChange">
            <p class="fk-storage-bundle__period__label">{{upgrade.label}}<sup>2</sup></p>
          </Radio>
        </div>
        <Flex align="center" class="fk-storage-bundle__info" column>
          <p class="m-b-15">
            <PriceTag v-if="storage.price" :value="storage.price.amount" :code="storage.price.currency" class="fk-storage-bundle__price">
              <p slot="prefix">{{storage.price.prefix}}</p>
              <p slot="suffix">{{storage.price.suffix}}<sup>2</sup></p>
            </PriceTag>
          </p>
          <Button color="secondary" size="big" class="fk-storage-bundle__action" @click="$emit('upgrade')" block>{{storage.action}}</Button>
        </Flex>
      </template>
    </Flex>
</template>

<script>
  let updateShowListner
  export default {
    name: 'StorageBundle',
    data() {
      return {
        show: false
      }
    },
    props: {
      storage: {
        type: Object,
        default: () => {{}}
      },
      selectedUpgrade: {
        type: Object,
        default: () => {{}}
      },
      selectedDevice: {
        type: Object,
        default: () => {{}}
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      active() {
        this.updateShow()
      } 
    },
    mounted () {
      updateShowListner = this.updateShow
      this.updateShow()
      window.addEventListener('resize', updateShowListner)
    },
    destroyed () {
      window.removeEventListener('resize', updateShowListner)
    },
    methods:{
      updateShow () {
        this.show = this.active || window.innerWidth > 767
      },
      handleSelect(device) {
        this.$emit('select', device)
      },
      handleChange(period) {
        this.$emit('change', period)
      }
    }
  }
</script>