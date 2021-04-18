const corredores = document.querySelectorAll('.pilotos input');
const equipe = document.querySelectorAll('.equipe');
const eqscont = document.querySelector('.equipes-container');
const titleEq = document.querySelector('.equipes-title')
const btn = document.querySelector('.shuffle');
const clear = document.querySelector('.clear');
let teamCont = 0;
let equipes;
let contador;

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

if (contador === 20) return alert('O sorteio terminou, limpe a tela se quiser iniciar um novo sorteio');

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

if(typeof contador === 'undefined') contador = 0;

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
            for (i = inputPlayers.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [inputPlayers[i], inputPlayers[j]] = [inputPlayers[j], inputPlayers[i]];
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
        piloto1 = equipe[teamCont].innerHTML = `<span class="${equipesName[teamCont]}">${equipesName[teamCont]}</span> <input type="text" class="input${i} ${equipesName[teamCont]}">`;
        yield piloto1
    }
    if(i % 2 !== 0) {
        piloto2 = equipe[teamCont].firstChild.innerHTML += `<input type="text" class="input${i} ${teamCont} ${equipesName[teamCont]}"></input>` 
        teamCont++
        yield piloto2
    }
}

function putData(i){
    equipes = document.querySelector(`.input${i}`);

    console.log('executei putData')

    equipes.value = inputPlayers[i] 

}
