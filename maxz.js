module.exports = function maxz (els) {
  els = els || document.body.getElementsByTagName('*')
  return Math.max.apply(Math, [].map.call(els, getZzz))
}

function getZzz (el) {
  if (el.style.zIndex) return Number(el.style.zIndex)
  var style = el.currentStyle || window.getComputedStyle(el)
  return Number(style.zIndex) || 0
}
