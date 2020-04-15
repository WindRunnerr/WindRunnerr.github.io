/*
*@fn: 获取随机颜色
 */
const color16 = function () {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let color = '#' + r.toString(16) + g.toString(16) + b.toString(16)
  return color
}
export default {
  color16
}