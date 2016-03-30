module.exports = function maxz (els) {
  els = els || document.body.getElementsByTagName('*')
  var indices = [0]
  var l = els.length
  while (l--) {
    var zIndex = getZzz(els[l])
    if (zIndex) indices.push(zIndex)
  }
  return Math.max.apply(Math, indices)
}

function getZzz (el) {
  if (el.style.zIndex) return Number(el.style.zIndex)
  var style = el.currentStyle || window.getComputedStyle(el)
  return Number(style.zIndex) || 0
}
