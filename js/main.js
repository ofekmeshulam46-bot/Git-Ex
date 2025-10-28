'use strict'

const elBallContent = document.querySelector('.ball')

function onBallClick(ball) {
  const currBallWidth = ball.offsetWidth
  const currBallHeight = ball.offsetHeight
  const increment = 50
  const newBallWidth = currBallWidth + increment
  const newBallHeight = currBallHeight + increment

  ball.style.width = newBallWidth + 'px'
  ball.style.height = newBallHeight + 'px'

  elBallContent.innerHTML=newBallHeight

}
