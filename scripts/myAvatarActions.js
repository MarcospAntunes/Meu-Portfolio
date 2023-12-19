const myAvatar = document.querySelector('#myAvatar')
const download = document.querySelector("#download")
const myAvatarLocation = "./assets/images/myAvatar.png"
const myAvatarLikedLocation = "./assets/images/myAvatarLiked.png"

download.addEventListener('click', () => {
  myAvatar.src = "assets/images/myAvatarDownloadedCV.png"
})

myAvatar.addEventListener('click', () => {
  if(myAvatar.classList == "myAvatar") {
    myAvatar.src = myAvatarLikedLocation
    myAvatar.classList.replace('myAvatar', 'myAvatarLiked')
  } else {
    myAvatar.src = myAvatarLocation
    myAvatar.classList.replace('myAvatarLiked', 'myAvatar')
  }
});