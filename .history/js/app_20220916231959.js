const mario = document.querySelector('.mario');

const jump= () => {
  mario.classList.add('jump')
}



document.addEventListenerR('keydown', jump)