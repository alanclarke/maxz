module.exports = function maxz (els) {
  els = els || document.body.getElementsByTagName('*')
  var indexes = []
  var l = els.length
  while (l--) {
    var zIndex = getZzz(els[l])
    if (zIndex) indexes.push(zIndex)
  }
  return Math.max.apply(Math, indexes)
}

function getZzz (el) {
  if (el.style.zIndex) return Number(el.style.zIndex)
  var style = el.currentStyle || window.getComputedStyle(el)
  return Number(style.zIndex) || 0
}
