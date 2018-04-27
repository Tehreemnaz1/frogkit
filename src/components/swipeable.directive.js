export default {
  inserted: function(el, binding, vnode) {
    const threshold = binding.value || 100
    let elWidth = 0
    let startPos = null
    el.addEventListener('mousedown', onTouchStart, false)
    el.addEventListener('touchstart', onTouchStart, false)

    function onTouchStart(e) {
      startPos = getTouchPos(e)
      elWidth = el.clientWidth

      document.addEventListener('touchend', onTouchEnd, false)
      document.addEventListener('mouseup', onTouchEnd, false)

      document.addEventListener('touchmove', onTouchMove, false)
      document.addEventListener('mousemove', onTouchMove, false)
    }

    function onTouchEnd(e) {
      const delta = getTouchPos(e) - startPos
      if (delta < -threshold) {
        vnode.context.$emit('swipeRight')
      } else if (delta > threshold) {
        vnode.context.$emit('swipeLeft')
      } else {
        vnode.context.$emit('swipeEnd')
      }
      document.removeEventListener('touchend', onTouchEnd)
      document.removeEventListener('mouseup', onTouchEnd)

      document.removeEventListener('touchmove', onTouchMove, false)
      document.removeEventListener('mousemove', onTouchMove, false)
    }

    function onTouchMove(e) {
      e.preventDefault()
      const delta = getTouchPos(e) - startPos
      const relativeDelta = delta / elWidth
      vnode.context.$emit('swiping', relativeDelta)
    }

    function getTouchPos(e) {
      return e.changedTouches ? e.changedTouches[0].pageX : e.pageX
    }
  },
}
