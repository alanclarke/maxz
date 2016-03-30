/* globals describe it */

var expect = require('chai').expect
var maxz = require('../maxz')

describe('maxz', function () {
  it('should get the max zIndex', function () {
    document.body.innerHTML = ''
    var els = [1, 10, 100, 23, 118118, 123].map(function (zIndex) {
      var el = document.createElement('div')
      el.style.position = 'relative'
      el.style.zIndex = zIndex
      return el
    })
    expect(maxz(els)).to.eql(118118)
  })
  it('should query the dom if els param is omitted', function () {
    document.body.innerHTML = ''
    ;[1, 10, 100, 23, 118118, 123].map(function (zIndex) {
      var el = document.createElement('div')
      el.style.position = 'relative'
      el.style.zIndex = zIndex
      document.body.appendChild(el)
    })
    expect(maxz()).to.eql(118118)
  })
})
