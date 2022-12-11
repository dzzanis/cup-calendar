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
        createGame('tunísia', '12:00', 'frança', '1 x 0') +
          createGame('austrália', '12:00', 'dinamarca', '1 x 0') +
          createGame('polônia', '16:00', 'argentina', '0 x 2') +
          createGame('arábia saudita', '16:00', 'méxico', '1 x 2')
      ) +
      createCard(
        '01/12',
        'quinta',
        createGame('croácia', '12:00', 'bélgica', '0 x 0') +
          createGame('canadá', '12:00', 'marrocos', '1 x 2') +
          createGame('japão', '16:00', 'espanha', '2 x 1') +
          createGame('costa rica', '16:00', 'alemanha', '2 x 4')
      ) +
      createCard(
        '02/12',
        'sexta',
        createGame('coreia do sul', '12:00', 'portugal', '2 x 1') +
          createGame('gana', '12:00', 'uruguai', '0 x 2') +
          createGame('sérvia', '16:00', 'suíça', '2 x 3') +
          createGame('brasil', '16:00', 'camarões', '0 x 1')
      ) +
      createCard(
        '03/12',
        'sábado',
        createGame('holanda', '12:00', 'estados unidos', '3 x 1') +
          createGame('argentina', '16:00', 'austrália', '2 x 1')
      ) +
      createCard(
        '04/12',
        'domingo',
        createGame('frança', '12:00', 'polônia', '3 x 1') +
          createGame('inglaterra', '16:00', 'senegal', '3 x 0')
      ) +
      createCard(
        '05/12',
        'segunda',
        createGame('japão', '12:00', 'croácia', '1 (1) x 1 (3)') +
          createGame('brasil', '16:00', 'coreia do sul', '4 x 1')
      ) +
      createCard(
        '06/12',
        'terça',
        createGame('marrocos', '12:00', 'espanha', '0 (3) x 0 (0)') +
          createGame('portugal', '16:00', 'suíça', '6 x 1')
      ) +
      createCard(
        '09/12',
        'sexta',
        createGame('croácia', '12:00', 'brasil', '1 (4) x 1 (2)') +
          createGame('holanda', '16:00', 'argentina', '2 (3) x 2 (4)')
      ) +
      createCard(
        '10/12',
        'sábado',
        createGame('marrocos', '12:00', 'portugal', '1 x 0') +
          createGame('inglaterra', '16:00', 'frança', '1 x 2')
      ) +
      createCard(
        '13/12',
        'terça',
        createGame('argentina', '16:00', 'croácia', '')
      ) +
      createCard(
        '14/12',
        'quarta',
        createGame('frança', '16:00', 'marrocos', '')
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
  if (formattedToday.length === 5) {
    todaysGamesMenu.href = `#${formattedToday}`
  } else {
    todaysGamesMenu.href = `#${'0' + formattedToday}`
  }
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
    case '1/12':
    case '2/12':
    case '3/12':
    case '4/12':
    case '5/12':
    case '6/12':
    case '9/12':
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
    case '2/12':
    case '5/12':
    case '9/12':
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
        createGame('brasil', '16:00', 'camarões', '0 x 1')
      ) +
      createCard(
        '05/12',
        'segunda',
        createGame('brasil', '16:00', 'coreia do sul', '4 x 1')
      ) +
      createCard(
        '09/12',
        'sexta',
        createGame('croácia', '12:00', 'brasil', '1 (4) x 1 (2)')
      )
    brazilGamesMenu.classList.add('activated')
    allGamesMenu.classList.remove('activated')
  }
  updateFilterDate()
}
