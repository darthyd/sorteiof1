const corredores = document.querySelectorAll('.pilotos input');
const equipe = document.querySelectorAll('.equipe');
const eqscont = document.querySelector('.equipes-container');
const titleEq = document.querySelector('.equipes-title')
const btn = document.querySelector('.shuffle');
const clear = document.querySelector('.clear');

let equipesName = ['Mercedes', 'RBR', 'Mclaren', 'Aston Martin', 'Alpine', 'Ferrari', 'Alpha Tauri', 'Alfa Romeo', 'Hass', 'Williams'];
let inputPlayers = [];

btn.addEventListener('click', e => {
      e.preventDefault;
      const el = e.target;

      inputPlayers = [];

      for (i = 0; i < corredores.length; ++i) {
        if(corredores[i].value !== '') {
              inputPlayers.push(corredores[i].value);
        } else {
            inputPlayers = [];
              return alert('Os 20 campos de pilotos precisam estar preenchidos!')
        }
      }
      /// Embaralhar--------------------------------------
      for (i = inputPlayers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [inputPlayers[i], inputPlayers[j]] = [inputPlayers[j], inputPlayers[i]];
      }
      for (i = equipesName.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [equipesName[i], equipesName[j]] = [equipesName[j], equipesName[i]];
      }
      ///--------------------------------------------------

      if(titleEq.innerHTML === '') titleEq.innerHTML += `<h1>Equipes</h1>`;
      
      console.log(eqscont)
      eqscont.classList.add('visible')

      for (i = 0; i < equipe.length; ++i) {
            equipe[i].innerHTML = `<span class="${equipesName[i]}">${equipesName[i]}</span> <input type="text" class="${equipesName[i]}"><input type="text" class="${equipesName[i]}">`;
      } 

      const equipes = document.querySelectorAll('.equipe input');

      for (i = 0; i < equipes.length; ++i) {
            equipes[i].value = inputPlayers[i];
      } 

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

})
