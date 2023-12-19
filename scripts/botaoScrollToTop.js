const btn = document.querySelector('#btnTop')

function ocultar() {
    if(window.scrollY > 20) {
      btn.style.display = 'flex'
    } else {
      btn.style.display = 'none'
    }
}
ocultar()

btn.addEventListener('click', () => {
    window.scrollTo(0,0)
  })

document.addEventListener('scroll', ocultar)