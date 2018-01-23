export default {
  // When the bound element is inserted into the DOM...
  inserted: function (el,binding, vnode) {
    // Focus the element
    console.log('swipeable', el)
    window.el = el
    let startPos = null
    el.addEventListener('mousedown', _onTouchStart, false)
    // el.focus()

    function _onTouchStart(e) {
      startPos = _getTouchPos(e);
      console.log('touch started', startPos)

      document.addEventListener('touchend', _onTouchEnd, false);
      document.addEventListener('mouseup', _onTouchEnd, false)
    }

    function _getTouchPos(e) {
      var key = 'pageX'
      return e.changedTouches ? e.changedTouches[0][key] : e[key]
    }

    function _onTouchEnd(e) {
      // this.dragging = false;
      // this.transitionDuration = this.speed;
      const delta = _getTouchPos(e) - startPos
      console.log('touch end', _getTouchPos(e), delta)
        if (delta < -100 ) {
          console.log('prev')
          vnode.context.$emit('swipeleft')
            // this.moveTo(this.selected + 1)
        } else if (delta > 100) {
          vnode.context.$emit('swiperight')
          
          console.log('next')
            // this.moveTo(this.selected - 1)
        }
        document.removeEventListener('touchend', this._onTouchEnd);
        document.removeEventListener('mouseup', _onTouchEnd);
    }
  }
}