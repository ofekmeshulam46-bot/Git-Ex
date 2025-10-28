'use strict'

var gBallSize = 100

function onBallClick(ball,maxDiameter) {

  const increment = getRandomIntExclusive(20, 61)
  gBallSize = gBallSize + increment
  ball.style.width = gBallSize + 'px'
  ball.style.height = gBallSize + 'px'
  ball.innerHTML = gBallSize

  if (gBallSize > maxDiameter) {
    ball.style.width = 100 + 'px'
    ball.style.height = 100 + 'px'
    gBallSize = 100
    ball.innerHTML = gBallSize
    return
  }
}
