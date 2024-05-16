export const $get = (i) => {
  return document.getElementById(i)
}
export const $text = (e, n) => {
  $get(e).textContent = n
}
export const $create = (tag, ele, content) => {
  const newElement = document.createElement(tag)
  if (content !== undefined) {
    newElement.textContent = content
  }
  if (ele !== undefined) {
    ele.append(newElement)
  }
  return newElement
}
export const $svg = (path, ele) => {
  fetch(path)
    .then(response => response.text())
    .then(svgData => {
      ele.innerHTML += svgData
    })
}
