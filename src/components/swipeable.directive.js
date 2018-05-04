const listenerOptions = {passive: true, capture: false}

export default {
  inserted: function(el, binding, vnode) {
    const threshold = binding.value || 100
    let elWidth = 0
    let startPos = null
    el.addEventListener('mousedown', onTouchStart, listenerOptions)
    el.addEventListener('touchstart', onTouchStart, listenerOptions)

    function onTouchStart(e) {
      startPos = getTouchPos(e)
      elWidth = el.clientWidth

      document.addEventListener('touchend', onTouchEnd, listenerOptions)
      document.addEventListener('mouseup', onTouchEnd, listenerOptions)

      document.addEventListener('touchmove', onTouchMove, listenerOptions)
      document.addEventListener('mousemove', onTouchMove, listenerOptions)
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

      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('mousemove', onTouchMove)
    }

    function onTouchMove(e) {
      // e.preventDefault()
      const delta = getTouchPos(e) - startPos
      const relativeDelta = delta / elWidth
      vnode.context.$emit('swiping', relativeDelta)
    }

    function getTouchPos(e) {
      return e.changedTouches ? e.changedTouches[0].pageX : e.pageX
    }
  },
}
