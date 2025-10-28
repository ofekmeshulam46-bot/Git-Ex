'use strict'

const elBallContent = document.querySelector('.ball')

let gBallSize = 100
function onBallClick(ball) {
  const increment = 50
  gBallSize = gBallSize + increment
  ball.style.width = gBallSize + 'px'
  ball.style.height = gBallSize + 'px'
  elBallContent.innerHTML = gBallSize

  if (gBallSize > 400) {
    ball.style.width = 100 + 'px'
    ball.style.height = 100 + 'px'
    gBallSize = 100
    elBallContent.innerHTML = gBallSize
    return
  }
}
