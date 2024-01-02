const form = document.getElementById('editForm');
const fields = form.querySelectorAll('input, textarea');
let formChanged = false;
let code = 0;

function updateAPI() {

const formInputs = document.querySelectorAll('input, textarea');
    
    verificarCamposVazios();

    if (formChanged) {
        const codigo = code; // Substitua pelo código correto
        const formData = new FormData(form);
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData),
            redirect: 'follow'
        };

        fetch(`http://wheelkorner.com.br:21142/api/journey/${codigo}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log('Dados atualizados:', result);
            // Adicione aqui o que deseja fazer após a atualização dos dados
        })
        .catch(error => {
            console.error('Erro ao atualizar dados:', error);
            // Adicione aqui o tratamento de erro, se necessário
        });

        formChanged = false;
    }
}

fields.forEach(field => {
    
    field.addEventListener('input', () => {
        formChanged = true;
    });
});

form.addEventListener('submit', updateAPI);

// Adicionar evento para campos quando perderem o foco
fields.forEach(field => {
    field.addEventListener('blur', () => {
        if (formChanged) {
            updateAPI();
        }
    });
});

function verificarCamposVazios() {
    const formInputs = document.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        if (input.type !== 'file' && input.value === '') {
            input.value = ' ';
        }
    });
}


// Função para preencher os campos com os parâmetros da URL
function preencherCampos() {
    // const parametros = obterParametrosURL();
    const parametros = JSON.parse(sessionStorage.getItem('dadosLogin'));
    code =  parametros.codigo; 
    document.getElementById('caligrafia').innerText  = parametros.nome !== "null" ? parametros.nome : ' ';
    // document.getElementById('email').value = parametros.email || '';
    // document.getElementById('telefone').value = parametros.telefone || '';
    // document.getElementById('senha').value = parametros.senha || '';
    document.getElementById('revisao_ano').value = parametros.revisao_ano !== "null" ? parametros.revisao_ano : ' ';

    document.getElementById('pessoal').value = parametros.pessoal !== "null" ? parametros.pessoal : ' ';
    document.getElementById('carreira').value = parametros.carreira !== "null" ? parametros.carreira : ' ';
    document.getElementById('amigos').value = parametros.amigos !== "null" ? parametros.amigos : ' ';
    document.getElementById('descanso').value = parametros.descanso !== "null" ? parametros.descanso : ' ';
    document.getElementById('fisica').value = parametros.fisica !== "null" ? parametros.fisica : ' ';
    document.getElementById('mental').value = parametros.mental !== "null" ? parametros.mental : ' ';
    document.getElementById('habitos').value = parametros.habitos !== "null" ? parametros.habitos : ' ';
    document.getElementById('amanha').value = parametros.amanha !== "null" ? parametros.amanha : ' ';

    document.getElementById('sabia').value = parametros.sabia !== "null" ? parametros.sabia : ' ';
    document.getElementById('licao').value = parametros.licao !== "null" ? parametros.licao : ' ';
    document.getElementById('risco').value = parametros.risco !== "null" ? parametros.risco : ' ';
    document.getElementById('surpresa').value = parametros.surpresa !== "null" ? parametros.surpresa : ' ';
    document.getElementById('importante').value = parametros.importante !== "null" ? parametros.importante : ' ';
    document.getElementById('coisa').value = parametros.coisa !== "null" ? parametros.coisa : ' ';

    

    document.getElementById('orgulho').value = parametros.orgulho !== "null" ? parametros.orgulho : ' ';
    document.getElementById('ostres').value = parametros.ostres !== "null" ? parametros.ostres : ' ';
    document.getElementById('influenca').value = parametros.influenca !== "null" ? parametros.influenca : ' ';
    document.getElementById('alcancar').value = parametros.alcancar !== "null" ? parametros.alcancar : ' ';
    document.getElementById('descoberta').value = parametros.descoberta !== "null" ? parametros.descoberta : ' ';
    document.getElementById('grato').value = parametros.grato !== "null" ? parametros.grato : ' ';

    document.getElementById('momentos').value = parametros.momentos !== "null" ? parametros.momentos : ' ';

    document.getElementById('realizacoes').value = parametros.realizacoes !== "null" ? parametros.realizacoes : ' ';
    document.getElementById('atos').value = parametros.atos !== "null" ? parametros.atos : ' ';
    document.getElementById('ajuda').value = parametros.ajuda !== "null" ? parametros.ajuda : ' ';
    document.getElementById('desafios').value = parametros.desafios !== "null" ? parametros.desafios : ' ';
    document.getElementById('superar').value = parametros.superar !== "null" ? parametros.superar : ' ';
    document.getElementById('aprender').value = parametros.aprender !== "null" ? parametros.aprender : ' ';

    document.getElementById('perdao').value = parametros.perdao !== "null" ? parametros.perdao : ' ';

    document.getElementById('partir').value = parametros.partir !== "null" ? parametros.partir : ' ';

    document.getElementById('palavra1').value = parametros.palavra1 !== "null" ? parametros.palavra1 : ' ';
    document.getElementById('palavra2').value = parametros.palavra2 !== "null" ? parametros.palavra2 : ' ';
    document.getElementById('palavra3').value = parametros.palavra3 !== "null" ? parametros.palavra3 : ' ';
    document.getElementById('livro').value = parametros.livro !== "null" ? parametros.livro : ' ';
    document.getElementById('adeus').value = parametros.adeus !== "null" ? parametros.adeus : ' ';

    document.getElementById('sonhar').value = parametros.sonhar !== "null" ? parametros.sonhar : ' ';

    document.getElementById('familia').value = parametros.familia !== "null" ? parametros.familia : ' ';
    document.getElementById('estudos').value = parametros.estudos !== "null" ? parametros.estudos : ' ';
    document.getElementById('comunidade').value = parametros.comunidade !== "null" ? parametros.comunidade : ' ';
    document.getElementById('hobbies').value = parametros.hobbies !== "null" ? parametros.hobbies : ' ';
    document.getElementById('atividade').value = parametros.atividade !== "null" ? parametros.atividade : ' ';
    document.getElementById('auto').value = parametros.auto !== "null" ? parametros.auto : ' ';
    document.getElementById('definicao').value = parametros.definicao !== "null" ? parametros.definicao : ' ';
    document.getElementById('futuro').value = parametros.futuro !== "null" ? parametros.futuro : ' ';

    document.getElementById('amo').value = parametros.amo !== "null" ? parametros.amo : ' ';
    document.getElementById('pronto').value = parametros.pronto !== "null" ? parametros.pronto : ' ';
    document.getElementById('maisalcancar').value = parametros.maisalcancar !== "null" ? parametros.maisalcancar : ' ';
    document.getElementById('pilares').value = parametros.pilares !== "null" ? parametros.pilares : ' ';
    document.getElementById('atrever').value = parametros.atrever !== "null" ? parametros.atrever : ' ';
    document.getElementById('recusar').value = parametros.recusar !== "null" ? parametros.recusar : ' ';

    document.getElementById('agradavel').value = parametros.agradavel !== "null" ? parametros.agradavel : ' ';
    document.getElementById('fareiamanha').value = parametros.fareiamanha !== "null" ? parametros.fareiamanha : ' ';
    document.getElementById('mimos').value = parametros.mimos !== "null" ? parametros.mimos : ' ';
    document.getElementById('visitar').value = parametros.visitar !== "null" ? parametros.visitar : ' ';
    document.getElementById('conectar').value = parametros.conectar !== "null" ? parametros.conectar : ' ';
    document.getElementById('recompensa').value = parametros.recompensa !== "null" ? parametros.recompensa : ' ';

    document.getElementById('procrastinar').value = parametros.procrastinar !== "null" ? parametros.procrastinar : ' ';
    document.getElementById('energia').value = parametros.energia !== "null" ? parametros.energia : ' ';
    document.getElementById('coragem').value = parametros.coragem !== "null" ? parametros.coragem : ' ';
    document.getElementById('sim').value = parametros.sim !== "null" ? parametros.sim : ' ';
    document.getElementById('conselho').value = parametros.conselho !== "null" ? parametros.conselho : ' ';
    document.getElementById('especial').value = parametros.especial !== "null" ? parametros.especial : ' ';

    document.getElementById('simbolo').value = parametros.simbolo !== "null" ? parametros.simbolo : ' ';
    document.getElementById('segredo').value = parametros.segredo !== "null" ? parametros.segredo : ' ';

}

// Função para obter os parâmetros da URL
function obterParametrosURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return Object.fromEntries(urlParams.entries()); // Retorna os parâmetros como um objeto
}

// Chamar a função para preencher os campos ao carregar a página
preencherCampos();

function verificarPreenchimento() {
    const inputs = document.querySelectorAll('input[type="text"], textarea');
    const camposVazios = [];
  
    for (const input of inputs) {
      if (input.value.trim() === '') {
        camposVazios.push(input.id || input.name || 'Campo sem identificação');
      }
    }
  
    if (camposVazios.length > 0) {
      return camposVazios; // Retorna array com os campos vazios
    } else {
      return true; // Retorna true se todos os campos estiverem preenchidos
    }
  }
  
  // Exemplo de uso:
  const camposSemPreenchimento = verificarPreenchimento();
  
  if (Array.isArray(camposSemPreenchimento)) {
    console.log('Campos sem preenchimento:', camposSemPreenchimento.join(', '));
    // Mostrar os campos vazios na interface ou realizar outra ação desejada
  } else {
    console.log('Todos os campos foram preenchidos.');
    // Continuar com o processamento ou ação desejada
  }