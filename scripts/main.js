const chk = document.getElementById('chk')
const btn = document.querySelector('#btnTop')
const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'
const myAvatar = document.querySelector('#myAvatar')
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

const myAvatarLocation = "./assets/images/myAvatar.png"
const myAvatarLikedLocation = "./assets/images/myAvatarLiked.png"

myAvatar.addEventListener('click', () => {
  if(myAvatar.classList == "myAvatar") {
    myAvatar.src = myAvatarLikedLocation
    myAvatar.classList.replace('myAvatar', 'myAvatarLiked')
  } else {
    myAvatar.src = myAvatarLocation
    myAvatar.classList.replace('myAvatarLiked', 'myAvatar')
  }
});


btn.addEventListener('click', () => {
  window.scrollTo(0,0)
})

document.addEventListener('scroll', ocultar)

function ocultar() {
  if(window.scrollY > 20) {
    btn.style.display = 'flex'
  } else {
    btn.style.display = 'none'
  }
}
ocultar()

const debounce = function(func, wait, immediate) {
  let timeout
  return function(...args) {
    const context = this
    const later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if(callNow) func.apply(context, args)
  }
}

function animeScroll() {
  const windowTop = window.scrollY + ((window.innerHeight * 3) /4 )
  target.forEach((element) => {
    if((windowTop ) > element.offsetTop) {
      element.classList.add(animationClass)
    } else {
      element.classList.remove(animationClass)
    }
  })
}
animeScroll()

if(target.length) {
  window.addEventListener('scroll', debounce(() => {
    animeScroll()
  }, 10 ))
}



class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list a",
);

mobileNavbar.init();