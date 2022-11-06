window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showBackToTopButtonOnScroll()
}

function createGame(player1, hour, player2) {
  return `
  <li>
    <div>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do time ${player1}" />
      <p>${player1}</p>
    </div>
    <strong>${hour}</strong>
    <div>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira do time ${player2}" />
      <p>${player2}</p>
    </div>
  </li>
  `
}

let delay = -0.2
function createCard(date, day, games) {
  delay += 0.2
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector('#cards').innerHTML =
  createCard('24/11', 'quinta', createGame('brazil', '16:00', 'serbia')) +
  createCard(
    '28/11',
    'segunda',
    createGame('switzerland', '13:00', 'brazil') +
      createGame('portugal', '16:00', 'uruguay')
  ) +
  createCard('02/12', 'sexta', createGame('brazil', '16:00', 'cameroon'))

function showBackToTopButtonOnScroll() {
  if (scrollY > 50) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
