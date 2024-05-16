import './styles/style.css'
import projects from './projects.json'
import { $get, $create, $svg } from './dom-query.js'

init()
function init () {
  const content = $get('content')
  projects.forEach((p) => {
    const card = $create('article', content)
    const img = $create('img', card)
    const cont = $create('div', card)
    const links = $create('div', card)
    const live = $create('a', links, '▶ Live')
    const source = $create('a', links, ' Code')
    cont.classList.add('text-container')
    img.classList.add('screenshot')
    img.setAttribute('width', '260')
    img.setAttribute('heigth', '148')
    img.setAttribute('src', p.preview)
    img.setAttribute('alt', p.title)
    img.setAttribute('tabindex', '0')
    $create('h3', cont, p.title)
    $create('p', cont, p.description)
    links.classList.add('desp')
    live.classList.add('redirect-link')
    live.setAttribute('href', p.live)
    live.setAttribute('target', '_blank')
    source.classList.add('redirect-link')
    source.setAttribute('href', p.source)
    source.setAttribute('target', '_blank')
    previewFunction(card, img)
  })
  $get('close-modal').addEventListener('click', (e) => {
    $get('modal').close()
  })
  $get('modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) { $get('modal').close() }
  })
  $svg('./images/icon/github.svg', $get('gh-img'))
  $svg('./images/icon/close.svg', $get('close-modal'))
}
function previewFunction (card, img) {
  const picModal = $get('modal')
  const view = $get('modal-view')
  img.addEventListener('click', () => {
    view.innerHTML = card.innerHTML
    view.classList.add('modal-card')
    picModal.showModal()
  })
}
