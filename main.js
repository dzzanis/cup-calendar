const brazilGamesMenu = document.querySelector('#brazilGamesMenu')
const allGamesMenu = document.querySelector('#allGamesMenu')
const todaysGamesMenu = document.querySelector('#todaysGamesMenu')

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

function createGame(player1, hour, player2, result) {
  return `
  <li>
    <div>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do time ${player1}" />
      <p>${player1}</p>
    </div>
    <div>
      <strong>${hour}</strong>
      <p class="results">${result}</p>
    </div>
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
  <div class="card" id="${date}" style="animation-delay: ${delay}s">
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
      createCard(
        '20/11',
        'domingo',
        createGame('catar', '13:00', 'equador', '0 x 2')
      ) +
      createCard(
        '21/11',
        'segunda',
        createGame('inglaterra', '10:00', 'irã', '6 x 2') +
          createGame('senegal', '13:00', 'holanda', '0 x 2') +
          createGame('estados unidos', '16:00', 'gales', '1 x 1')
      ) +
      createCard(
        '22/11',
        'terça',
        createGame('argentina', '07:00', 'arábia saudita', '1 x 2') +
          createGame('dinamarca', '10:00', 'tunísia', '0 x 0') +
          createGame('méxico', '13:00', 'polônia', '0 x 0') +
          createGame('frança', '16:00', 'austrália', '4 x 1')
      ) +
      createCard(
        '23/11',
        'quarta',
        createGame('marrocos', '07:00', 'croácia', '0 x 0') +
          createGame('alemanha', '10:00', 'japão', '1 x 2') +
          createGame('espanha', '13:00', 'costa rica', '7 x 0') +
          createGame('bélgica', '16:00', 'canadá', '1 x 0')
      ) +
      createCard(
        '24/11',
        'quinta',
        createGame('suíça', '07:00', 'camarões', '1 x 0') +
          createGame('uruguai', '10:00', 'coreia do sul', '0 x 0') +
          createGame('portugal', '13:00', 'gana', '3 x 2') +
          createGame('brasil', '16:00', 'sérvia', '2 x 0')
      ) +
      createCard(
        '25/11',
        'sexta',
        createGame('gales', '07:00', 'irã', '0 x 2') +
          createGame('catar', '10:00', 'senegal', '1 x 3') +
          createGame('holanda', '13:00', 'equador', '1 x 1') +
          createGame('inglaterra', '16:00', 'estados unidos', '0 x 0')
      ) +
      createCard(
        '26/11',
        'sábado',
        createGame('tunísia', '07:00', 'austrália', '0 x 1') +
          createGame('polônia', '10:00', 'arábia saudita', '2 x 0') +
          createGame('frança', '13:00', 'dinamarca', '2 x 1') +
          createGame('argentina', '16:00', 'méxico', '2 x 0')
      ) +
      createCard(
        '27/11',
        'domingo',
        createGame('japão', '07:00', 'costa rica', '0 x 1') +
          createGame('bélgica', '10:00', 'marrocos', '0 x 2') +
          createGame('croácia', '13:00', 'canadá', '4 x 1') +
          createGame('espanha', '16:00', 'alemanha', '1 x 1')
      ) +
      createCard(
        '28/11',
        'segunda',
        createGame('camarões', '07:00', 'sérvia', '3 x 3') +
          createGame('coreia do sul', '10:00', 'gana', '2 x 3') +
          createGame('brasil', '13:00', 'suíça', '1 x 0') +
          createGame('portugal', '16:00', 'uruguai', '2 x 0')
      ) +
      createCard(
        '29/11',
        'terça',
        createGame('equador', '12:00', 'senegal', '1 x 2') +
          createGame('holanda', '12:00', 'catar', '2 x 0') +
          createGame('irã', '16:00', 'estados unidos', '0 x 1') +
          createGame('gales', '16:00', 'inglaterra', '0 x 3')
      ) +
      createCard(
        '30/11',
        'quarta',
        createGame('tunísia', '12:00', 'frança', '') +
          createGame('austrália', '12:00', 'dinamarca', '') +
          createGame('polônia', '16:00', 'argentina', '') +
          createGame('arábia saudita', '16:00', 'méxico', '')
      ) +
      createCard(
        '01/12',
        'quinta',
        createGame('croácia', '12:00', 'bélgica', '') +
          createGame('canadá', '12:00', 'marrocos', '') +
          createGame('japão', '16:00', 'espanha', '') +
          createGame('costa rica', '16:00', 'alemanha', '')
      ) +
      createCard(
        '02/12',
        'sexta',
        createGame('coreia do sul', '12:00', 'portugal', '') +
          createGame('gana', '12:00', 'uruguai', '') +
          createGame('sérvia', '16:00', 'suíça', '') +
          createGame('brasil', '16:00', 'camarões', '')
      ) +
      createCard(
        '03/12',
        'sábado',
        createGame('a confirmar', '12:00', 'a confirmar', '') +
          createGame('a confirmar', '16:00', 'a confirmar', '')
      ) +
      createCard(
        '04/12',
        'domingo',
        createGame('a confirmar', '12:00', 'a confirmar', '') +
          createGame('a confirmar', '16:00', 'a confirmar', '')
      ) +
      createCard(
        '05/12',
        'segunda',
        createGame('a confirmar', '12:00', 'a confirmar', '') +
          createGame('a confirmar', '16:00', 'a confirmar', '')
      ) +
      createCard(
        '06/12',
        'terça',
        createGame('a confirmar', '12:00', 'a confirmar', '') +
          createGame('a confirmar', '16:00', 'a confirmar', '')
      ) +
      createCard(
        '09/12',
        'sexta',
        createGame('a confirmar', '12:00', 'a confirmar', '') +
          createGame('a confirmar', '16:00', 'a confirmar', '')
      ) +
      createCard(
        '10/12',
        'sábado',
        createGame('a confirmar', '12:00', 'a confirmar', '') +
          createGame('a confirmar', '16:00', 'a confirmar', '')
      ) +
      createCard(
        '13/12',
        'terça',
        createGame('a confirmar', '16:00', 'a confirmar', '')
      ) +
      createCard(
        '14/12',
        'quarta',
        createGame('a confirmar', '16:00', 'a confirmar', '')
      ) +
      createCard(
        '17/12',
        'sábado',
        createGame('a confirmar', '12:00', 'a confirmar', '')
      ) +
      createCard(
        '18/12',
        'domingo',
        createGame('a confirmar', '12:00', 'a confirmar', '')
      )
    allGamesMenu.classList.add('activated')
    brazilGamesMenu.classList.remove('activated')
  }
  updateFilterDate('allGamesMenu')
}

function updateFilterDate(filterMenu) {
  today = new Date()
  const formattedToday = today.getDate() + '/' + (today.getMonth() + 1)
  todaysGamesMenu.href = `#${formattedToday}`
  if (filterMenu === 'allGamesMenu') {
    if (isGameDay(formattedToday)) {
      todaysGamesMenu.classList.remove('hidden')
    } else {
      todaysGamesMenu.classList.add('hidden')
    }
  } else {
    if (isBrazilGameDay(formattedToday)) {
      todaysGamesMenu.classList.remove('hidden')
    } else {
      todaysGamesMenu.classList.add('hidden')
    }
  }
}

function isGameDay(day) {
  switch (day) {
    case '20/11':
    case '21/11':
    case '22/11':
    case '23/11':
    case '24/11':
    case '25/11':
    case '26/11':
    case '27/11':
    case '28/11':
    case '29/11':
    case '30/11':
    case '01/12':
    case '02/12':
    case '03/12':
    case '04/12':
    case '05/12':
    case '06/12':
    case '09/12':
    case '10/12':
    case '13/12':
    case '14/12':
    case '17/12':
    case '18/12':
      return true
      break
  }
}

function isBrazilGameDay(day) {
  switch (day) {
    case '24/11':
    case '28/11':
    case '02/12':
    case '05/12':
    case '09/12':
    case '13/12':
    case '06/12':
    case '10/12':
    case '14/12':
    case '17/12':
    case '18/12':
      return true
      break
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
      createCard(
        '24/11',
        'quinta',
        createGame('brasil', '16:00', 'sérvia', '2 x 0')
      ) +
      createCard(
        '28/11',
        'segunda',
        createGame('brasil', '13:00', 'suíça', '1 x 0')
      ) +
      createCard(
        '02/12',
        'sexta',
        createGame('brasil', '16:00', 'camarões', '')
      ) +
      `
    <h2 class="phaseSeparation" style="animation-delay: ${delay}s">
      Jogos caso o Brasil fique em 1º lugar no grupo G:
    </h2>
    ` +
      createCard(
        '05/12',
        'segunda',
        createGame('brasil', '16:00', 'a confirmar', '')
      ) +
      createCard(
        '09/12',
        'sexta',
        createGame('brasil', '12:00', 'a confirmar', '')
      ) +
      createCard(
        '13/12',
        'terça',
        createGame('brasil', '16:00', 'a confirmar', '')
      ) +
      `
    <h2 class="phaseSeparation" style="animation-delay: ${delay}s">
      Jogos caso o Brasil fique em 2º lugar no grupo G:
    </h2>
    ` +
      createCard(
        '06/12',
        'terça',
        createGame('brasil', '16:00', 'a confirmar', '')
      ) +
      createCard(
        '10/12',
        'sábado',
        createGame('brasil', '12:00', 'a confirmar', '')
      ) +
      createCard(
        '14/12',
        'quarta',
        createGame('brasil', '16:00', 'a confirmar', '')
      ) +
      `
    <h2 class="phaseSeparation" style="animation-delay: ${delay}s">
      Disputa pelo 3º lugar:
    </h2>
    ` +
      createCard(
        '17/12',
        'sábado',
        createGame('a confirmar', '12:00', 'a confirmar', '')
      ) +
      `
    <h2 class="phaseSeparation" style="animation-delay: ${delay}s">
      Final:
    </h2>
    ` +
      createCard(
        '18/12',
        'domingo',
        createGame('brasil', '12:00', 'a confirmar', '')
      )
    brazilGamesMenu.classList.add('activated')
    allGamesMenu.classList.remove('activated')
  }
  updateFilterDate()
}
