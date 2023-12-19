const chk = document.getElementById('chk')
const mpflix = document.querySelector("#mpflix")
const techflix = document.querySelector("#techflix")

chk.addEventListener('change', () => {
    document.body.classList.toggle('white')
    if(chk.checked) {
      mpflix.src = "assets/images/mpFlix-light.png"
      techflix.src = "assets/images/techFlix-light.png"
    } else {
      mpflix.src = "assets/images/mpFlix-dark.png"
      techflix.src = "assets/images/techFlix-dark.png"
    }
  })