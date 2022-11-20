const brazilGamesMenu = document.querySelector('#brazilGamesMenu')
const allGamesMenu = document.querySelector('#allGamesMenu')

window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showBackToTopButtonOnScroll()
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 1050) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
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

let delay = -0.01
function createCard(date, day, games) {
  delay += 0.01
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

function allGames() {
  const menuActivated = allGamesMenu.classList.contains('activated')
  if (!menuActivated) {
    document.querySelector('#cards').innerHTML =
      createCard('20/11', 'domingo', createGame('catar', '13:00', 'equador')) +
      createCard(
        '21/11',
        'segunda',
        createGame('inglaterra', '10:00', 'irã') +
          createGame('senegal', '13:00', 'holanda') +
          createGame('estados unidos', '16:00', 'gales')
      ) +
      createCard(
        '22/11',
        'terça',
        createGame('argentina', '07:00', 'arábia saudita') +
          createGame('dinamarca', '10:00', 'tunísia') +
          createGame('méxico', '11:00', 'polônia') +
          createGame('frança', '16:00', 'austrália')
      ) +
      createCard(
        '23/11',
        'quarta',
        createGame('marrocos', '07:00', 'croácia') +
          createGame('alemanha', '10:00', 'japão') +
          createGame('espanha', '13:00', 'costa rica') +
          createGame('bélgica', '16:00', 'canadá')
      ) +
      createCard(
        '24/11',
        'quinta',
        createGame('suíça', '07:00', 'camarões') +
          createGame('uruguai', '10:00', 'coreia do sul') +
          createGame('portugal', '13:00', 'gana') +
          createGame('brasil', '16:00', 'sérvia')
      ) +
      createCard(
        '25/11',
        'sexta',
        createGame('gales', '07:00', 'irã') +
          createGame('catar', '10:00', 'senegal') +
          createGame('holanda', '13:00', 'equador') +
          createGame('inglaterra', '16:00', 'estados unidos')
      ) +
      createCard(
        '26/11',
        'sábado',
        createGame('tunísia', '07:00', 'austrália') +
          createGame('polônia', '10:00', 'arábia saudita') +
          createGame('frança', '13:00', 'dinamarca') +
          createGame('argentina', '16:00', 'méxico')
      ) +
      createCard(
        '27/11',
        'domingo',
        createGame('japão', '07:00', 'costa rica') +
          createGame('bélgica', '10:00', 'marrocos') +
          createGame('croácia', '13:00', 'canadá') +
          createGame('espanha', '16:00', 'alemanha')
      ) +
      createCard(
        '28/11',
        'segunda',
        createGame('camarões', '07:00', 'sérvia') +
          createGame('coreia do sul', '10:00', 'gana') +
          createGame('brasil', '13:00', 'suíça') +
          createGame('portugal', '16:00', 'uruguai')
      ) +
      createCard(
        '29/11',
        'terça',
        createGame('equador', '12:00', 'senegal') +
          createGame('holanda', '12:00', 'catar') +
          createGame('irã', '16:00', 'estados unidos') +
          createGame('gales', '16:00', 'inglaterra')
      ) +
      createCard(
        '30/11',
        'quarta',
        createGame('tunísia', '12:00', 'frança') +
          createGame('austrália', '12:00', 'dinamarca') +
          createGame('polônia', '16:00', 'argentina') +
          createGame('arábia saudita', '16:00', 'méxico')
      ) +
      createCard(
        '01/12',
        'quinta',
        createGame('croácia', '12:00', 'bélgica') +
          createGame('canadá', '12:00', 'marrocos') +
          createGame('japão', '16:00', 'espanha') +
          createGame('costa rica', '16:00', 'alemanha')
      ) +
      createCard(
        '02/12',
        'sexta',
        createGame('coreia do sul', '12:00', 'portugal') +
          createGame('gana', '12:00', 'uruguai') +
          createGame('sérvia', '16:00', 'suíça') +
          createGame('brasil', '16:00', 'camarões')
      ) +
      createCard(
        '03/12',
        'sábado',
        createGame('a confirmar', '12:00', 'a confirmar') +
          createGame('a confirmar', '16:00', 'a confirmar')
      ) +
      createCard(
        '04/12',
        'domingo',
        createGame('a confirmar', '12:00', 'a confirmar') +
          createGame('a confirmar', '16:00', 'a confirmar')
      ) +
      createCard(
        '05/12',
        'segunda',
        createGame('a confirmar', '12:00', 'a confirmar') +
          createGame('a confirmar', '16:00', 'a confirmar')
      ) +
      createCard(
        '06/12',
        'terça',
        createGame('a confirmar', '12:00', 'a confirmar') +
          createGame('a confirmar', '16:00', 'a confirmar')
      ) +
      createCard(
        '09/12',
        'sexta',
        createGame('a confirmar', '12:00', 'a confirmar') +
          createGame('a confirmar', '16:00', 'a confirmar')
      ) +
      createCard(
        '10/12',
        'sábado',
        createGame('a confirmar', '12:00', 'a confirmar') +
          createGame('a confirmar', '16:00', 'a confirmar')
      ) +
      createCard(
        '13/12',
        'terça',
        createGame('a confirmar', '16:00', 'a confirmar')
      ) +
      createCard(
        '14/12',
        'quarta',
        createGame('a confirmar', '16:00', 'a confirmar')
      ) +
      createCard(
        '17/12',
        'sábado',
        createGame('a confirmar', '12:00', 'a confirmar')
      ) +
      createCard(
        '18/12',
        'domingo',
        createGame('a confirmar', '12:00', 'a confirmar')
      )
    allGamesMenu.classList.add('activated')
    brazilGamesMenu.classList.remove('activated')
  }
}

allGames()

const numeroAleatorio = Math.floor(Math.random() * 3)
if (numeroAleatorio === 1) {
  document.body.classList.add('blue')
} else if (numeroAleatorio === 2) {
  document.body.classList.add('green')
}

function brasilGames() {
  const menuActivated = brazilGamesMenu.classList.contains('activated')
  if (!menuActivated) {
    document.querySelector('#cards').innerHTML =
      createCard('24/11', 'quinta', createGame('brasil', '16:00', 'sérvia')) +
      createCard('28/11', 'segunda', createGame('brasil', '13:00', 'suíça')) +
      createCard('02/12', 'sexta', createGame('brasil', '16:00', 'camarões')) +
      `
    <h2 class="phaseSeparation" style="animation-delay: ${delay}s">
      Jogos caso o Brasil fique em 1º lugar no grupo G:
    </h2>
    ` +
      createCard(
        '05/12',
        'segunda',
        createGame('brasil', '16:00', 'a confirmar')
      ) +
      createCard(
        '09/12',
        'sexta',
        createGame('brasil', '12:00', 'a confirmar')
      ) +
      createCard(
        '13/12',
        'terça',
        createGame('brasil', '16:00', 'a confirmar')
      ) +
      `
    <h2 class="phaseSeparation" style="animation-delay: ${delay}s">
      Jogos caso o Brasil fique em 2º lugar no grupo G:
    </h2>
    ` +
      createCard(
        '06/12',
        'terça',
        createGame('brasil', '16:00', 'a confirmar')
      ) +
      createCard(
        '10/12',
        'sábado',
        createGame('brasil', '12:00', 'a confirmar')
      ) +
      createCard(
        '14/12',
        'quarta',
        createGame('brasil', '16:00', 'a confirmar')
      ) +
      `
    <h2 class="phaseSeparation" style="animation-delay: ${delay}s">
      Disputa pelo 3º lugar:
    </h2>
    ` +
      createCard(
        '17/12',
        'sábado',
        createGame('a confirmar', '12:00', 'a confirmar')
      ) +
      `
    <h2 class="phaseSeparation" style="animation-delay: ${delay}s">
      Final:
    </h2>
    ` +
      createCard(
        '18/12',
        'domingo',
        createGame('brasil', '12:00', 'a confirmar')
      )
    brazilGamesMenu.classList.add('activated')
    allGamesMenu.classList.remove('activated')
  }
}
