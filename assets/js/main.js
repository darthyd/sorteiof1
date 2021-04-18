const corredores = document.querySelectorAll('.pilotos input');
const equipe = document.querySelectorAll('.equipe');
const eqscont = document.querySelector('.equipes-container');
const titleEq = document.querySelector('.equipes-title')
const btn = document.querySelector('.shuffle');
const clear = document.querySelector('.clear');
let teamCont = 0;
let equipes;
let contador;
let contador2;

let equipesName = [
    'Alfa Romeo', 
    'Alpha Tauri', 
    'Ferrari', 
    'Hass', 
    'Mclaren', 
    'Mercedes', 
    'Racing Point', 
    'Renault', 
    'RBR', 
    'Williams'
];

let inputPlayers = [];

btn.addEventListener('click', e => {
      e.preventDefault;
      const el = e.target;

if(typeof contador === 'undefined') contador = 0;
if(typeof contador2 === 'undefined') contador2 = 0;

if (contador === 20) {
    if (equipe[9].firstChild.innerText === 'Equipe 10') {
        const iterator = putTeamsData(Number(contador2));
        iterator.next();
        contador2++;
        return;
    }
    return alert('O sorteio terminou, limpe a tela se quiser iniciar um novo sorteio');
} 
    


/*-------------------------------------  BLOCO 1 ---------------------------------------*/
    // getdata PUXA OS DADOS DO INPUT
    if (!eqscont.classList.contains('visible')){
        if (getData()) return alert('Os 20 campos de pilotos precisam estar preenchidos!')
    }

    // shuffle no array de players e no array de equipes
    if (!eqscont.classList.contains('visible')){
        shuffle(equipesName);
        shuffle(inputPlayers);
    }

    // expande a area de equipes
    if (!eqscont.classList.contains('visible')) expandTeams()
    // cria um input e insere um nome
/*--------------------------------------------------------------------------------------*/    

const iterator = insertTeam(Number(contador));
iterator.next()
putData(contador);
contador++
})

clear.addEventListener('click', e => {
      e.preventDefault;
      const el = e.target;

      const inputs = document.querySelectorAll('input');

      eqscont.classList.remove('visible')

      for (i = 0; i < inputs.length; ++i) {
            inputs[i].value = '';
      } 

      for (i = 0; i < equipe.length; ++i) {
            equipe[i].innerHTML = '';
      } 

      contador = 0;
      teamCont = 0;
})

function shuffle(array){
    for (i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
    }
}


function getData(){
    inputPlayers = [];

    console.log('Chamou getData')

    for (i = 0; i < corredores.length; ++i) {
      if(corredores[i].value !== '') {
            inputPlayers.push(corredores[i].value);
      } else {
          inputPlayers = [];
            return true;
      }
    }
}

function expandTeams(){
    console.log('Chamou expandTeams')
    if(titleEq.innerHTML === '') titleEq.innerHTML += `<h1>Equipes</h1>`;
    eqscont.classList.add('visible');
}

function* insertTeam(i){
    let piloto1;
    let piloto2;
    console.log('Iniciei insertTeam', i, teamCont) 
    if(i % 2 === 0) {
        piloto1 = equipe[teamCont].innerHTML = `<span class="${equipesName[teamCont]}">Equipe ${teamCont+1}</span> <input type="text" class="input${i} input">`;
        yield piloto1
    }
    if(i % 2 !== 0) {
        piloto2 = equipe[teamCont].innerHTML += `<input type="text" class="input${i} input">` 
        teamCont++
        yield piloto2
    }
}

function putData(i){
    equipes = document.querySelectorAll(`.input`);

    console.log('executei putData')

    for (c = 0; c < equipes.length; ++c) {
        equipes[c].value = inputPlayers[c];
  } 
cont = 0;
}

function* putTeamsData(i){
    console.log(i)
    console.log(equipe[i].firstChild.innerText)
    equipe[i].firstChild.innerText = equipesName[i]
    equipe[i].firstChild.style.color = 'red'
    yield
}
