document.addEventListener("DOMContentLoaded", function() {
    // Obter o elemento do parágrafo
    const paragrafoData = document.getElementById('DataHoje');

    // Obter a data atual
    const dataAtual = new Date();

    // Obter o ano, mês e dia atuais
    const ano = dataAtual.getFullYear();
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0'); // Adiciona um zero à esquerda, se necessário
    const dia = dataAtual.getDate().toString().padStart(2, '0'); // Adiciona um zero à esquerda, se necessário

    // Formatar a data para o formato DD/MM/AAAA
    const dataFormatada = `${dia}/${mes}/${ano}`;

    // Atualizar o texto do parágrafo com a data atual
    paragrafoData.textContent = `Data: ${dataFormatada}`;


    // const fullscreenBtn = document.getElementById('fullscreen-button');
    // const exitFullscreenBtn = document.getElementById('exit-fullscreen-button');

    // fullscreenBtn.addEventListener('click', () => {
    //     if (document.documentElement.requestFullscreen) {
    //     document.documentElement.requestFullscreen();
    //     } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
    //     document.documentElement.mozRequestFullScreen();
    //     } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    //     document.documentElement.webkitRequestFullscreen();
    //     } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
    //     document.documentElement.msRequestFullscreen();
    //     }
    // fullscreenBtn.style.display = 'none';
    // exitFullscreenBtn.style.display = 'inline-block';

    // });

    // exitFullscreenBtn.addEventListener('click', () => {
    //     if (document.exitFullscreen) {
    //     document.exitFullscreen();
    //     } else if (document.mozCancelFullScreen) { /* Firefox */
    //     document.mozCancelFullScreen();
    //     } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
    //     document.webkitExitFullscreen();
    //     } else if (document.msExitFullscreen) { /* IE/Edge */
    //     document.msExitFullscreen();
    //     }
    // exitFullscreenBtn.style.display = 'none';
    // fullscreenBtn.style.display = 'inline-block';
    // });

    document.querySelectorAll('.topbtn').forEach(button => {
        button.addEventListener('click', function(e) {
          e.preventDefault(); // Previne o comportamento padrão do link
          
          const targetId = this.getAttribute('href'); // Obtém o ID da seção alvo
          const targetElement = document.querySelector(targetId); // Seleciona a seção alvo
          const offset = 70; // Offset desejado (70px) entre o topo da janela e a seção
          
          if (targetElement) {
            const targetOffset = targetElement.offsetTop - offset; // Calcula a posição da seção com o offset
            
            window.scrollTo({
              top: targetOffset,
              behavior: 'smooth' // Scroll suave
            });
          }
        });
    });


    const btnAssinar = document.getElementById('btn_assinar');
    const divAssinatura = document.querySelector('.assinatura');
    const btn_pg20 = document.getElementById('btn_pg20');
  
    // divAssinatura.addEventListener('click', function() {
    //   this.style.display = 'none'; // Esconde a div de assinatura ao clicar nela
    //   btnAssinar.style.display = 'block'; // Mostra o botão ao esconder a div
    // });
  
    btnAssinar.addEventListener('click', function() {
      this.style.display = 'none'; // Esconde o botão ao clicar nele
      divAssinatura.style.display = 'block'; // Mostra a div de assinatura ao esconder o botão
      btn_pg20.classList.add('filled-textarea');
    });


    // INTERAÇÃO DE BOTOES PARA MUDANÇA DE COR QUANDO PREENCHIDOS
    
    const textarea4 = document.querySelector('textarea[name="revisao_ano"]');
    const btn_pg04 = document.getElementById('btn_pg04');
    textarea4.addEventListener('input', function() {
        verificarPreenchimento();
    });

    const textarea8 = document.querySelector('textarea[name="momentos"]');
    const btn_pg08 = document.getElementById('btn_pg08');
    textarea8.addEventListener('input', function() {
        verificarPreenchimento();
    });

    const textarea10 = document.querySelector('textarea[name="perdao"]');
    const btn_pg10 = document.getElementById('btn_pg10');
    textarea10.addEventListener('input', function() {
        verificarPreenchimento();
    });

    const textarea11 = document.querySelector('textarea[name="partir"]');
    const btn_pg11 = document.getElementById('btn_pg11');
    textarea11.addEventListener('input', function() {
      verificarPreenchimento();
    });

    const textarea14 = document.querySelector('textarea[name="sonhar"]');
    const btn_pg14 = document.getElementById('btn_pg14');
    textarea14.addEventListener('input', function() {
      verificarPreenchimento();
    });

    verificarPreenchimento();

    function verificarPreenchimento() {
        if (textarea4.value.trim() !== '') {
            btn_pg04.classList.add('filled-textarea');
        } else {
            btn_pg04.classList.remove('filled-textarea');
        }

        if (textarea8.value.trim() !== '') {
            btn_pg08.classList.add('filled-textarea');
        } else {
            btn_pg08.classList.remove('filled-textarea');
        }

        if (textarea10.value.trim() !== '') {
            btn_pg10.classList.add('filled-textarea');
        } else {
            btn_pg10.classList.remove('filled-textarea');
        }

        if (textarea11.value.trim() !== '') {
            btn_pg11.classList.add('filled-textarea');
        } else {
            btn_pg11.classList.remove('filled-textarea');
        }

        if (textarea14.value.trim() !== '') {
          btn_pg14.classList.add('filled-textarea');
        } else {
          btn_pg14.classList.remove('filled-textarea');
        }
    }
    












    // script para mudança de menu com base no SCROLL

    const btnA = document.getElementById('btn_topA');
    const btnB = document.getElementById('btn_topB');
    const section2 = document.getElementById('pg13');
  
    window.addEventListener('scroll', function() {

      const section2Top = section2.getBoundingClientRect().top;
      
      if (section2Top < 0) {
        btnA.style.display = 'none';
        btnB.style.display = 'block';
      } else {
        btnA.style.display = 'block';
        btnB.style.display = 'none';
      }
    });




// CHAMADA DA SECCTION 5 ====================================================================
    const textAreas5 = [
        document.querySelector('textarea[name="pessoal"]'),
        document.querySelector('textarea[name="carreira"]'),
        document.querySelector('textarea[name="amigos"]'),
        document.querySelector('textarea[name="descanso"]'),
        document.querySelector('textarea[name="fisica"]'),
        document.querySelector('textarea[name="mental"]'),
        document.querySelector('textarea[name="habitos"]'),
        document.querySelector('textarea[name="amanha"]')
    ];
    const qtdepg05 = document.getElementById('stpg05');
    function countpg05() {
        let filledCount = 0;
        textAreas5.forEach(textArea => {
            if (textArea && textArea.value.trim() !== '') {
                filledCount++;
            }
        });
        const remaining = textAreas5.length - filledCount;
        qtdepg05.textContent = remaining;
        const btn_pg05 = document.getElementById('btn_pg05');
        if (remaining === 0) {
            btn_pg05.classList.add('filled-textarea');
        } else {
            btn_pg05.classList.remove('filled-textarea');
        }
    }
    textAreas5.forEach(textArea => {
        if (textArea) {
            textArea.addEventListener('input', countpg05);
            textArea.addEventListener('change', countpg05);
        }
    });
    countpg05();

// CHAMADA DA SECCTION 6 ====================================================================

const textAreas6 = [
    document.querySelector('textarea[name="sabia"]'),
    document.querySelector('textarea[name="licao"]'),
    document.querySelector('textarea[name="risco"]'),
    document.querySelector('textarea[name="surpresa"]'),
    document.querySelector('textarea[name="importante"]'),
    document.querySelector('textarea[name="coisa"]')
];
const qtdepg06 = document.getElementById('stpg06');
function countpg06() {
    let filledCount = 0;
    textAreas6.forEach(textArea => {
        if (textArea && textArea.value.trim() !== '') {
            filledCount++;
        }
    });
    const remaining = textAreas6.length - filledCount;
    qtdepg06.textContent = remaining;
    const btn_pg06 = document.getElementById('btn_pg06');
    if (remaining === 0) {
        btn_pg06.classList.add('filled-textarea');
    } else {
        btn_pg06.classList.remove('filled-textarea');
    }
}
textAreas6.forEach(textArea => {
    if (textArea) {
        textArea.addEventListener('input', countpg06);
        textArea.addEventListener('change', countpg06);
    }
});
countpg06();

// CHAMADA DA SECTION 7 ====================================================================

const textAreas7 = [
    document.querySelector('textarea[name="orgulho"]'),
    document.querySelector('textarea[name="ostres"]'),
    document.querySelector('textarea[name="influenca"]'),
    document.querySelector('textarea[name="alcancar"]'),
    document.querySelector('textarea[name="descoberta"]'),
    document.querySelector('textarea[name="grato"]')
];
const qtdepg07 = document.getElementById('stpg07');
function countpg07() {
    let filledCount = 0;
    textAreas7.forEach(textArea => {
        if (textArea && textArea.value.trim() !== '') {
            filledCount++;
        }
    });
    const remaining = textAreas7.length - filledCount;
    qtdepg07.textContent = remaining;
    const btn_pg07 = document.getElementById('btn_pg07');
    if (remaining === 0) {
        btn_pg07.classList.add('filled-textarea');
    } else {
        btn_pg07.classList.remove('filled-textarea');
    }
}
textAreas7.forEach(textArea => {
    if (textArea) {
        textArea.addEventListener('input', countpg07);
        textArea.addEventListener('change', countpg07);
    }
});
countpg07();

// CHAMADA DA SECTION 9 ====================================================================

const textAreas9 = [
    document.querySelector('textarea[name="realizacoes"]'),
    document.querySelector('textarea[name="atos"]'),
    document.querySelector('textarea[name="ajuda"]'),
    document.querySelector('textarea[name="desafios"]'),
    document.querySelector('textarea[name="superar"]'),
    document.querySelector('textarea[name="aprender"]')
];
const qtdepg09 = document.getElementById('stpg09');
function countpg09() {
    let filledCount = 0;
    textAreas9.forEach(textArea => {
        if (textArea && textArea.value.trim() !== '') {
            filledCount++;
        }
    });
    const remaining = textAreas9.length - filledCount;
    qtdepg09.textContent = remaining;
    const btn_pg09 = document.getElementById('btn_pg09');
    if (remaining === 0) {
        btn_pg09.classList.add('filled-textarea');
    } else {
        btn_pg09.classList.remove('filled-textarea');
    }
}
textAreas9.forEach(textArea => {
    if (textArea) {
        textArea.addEventListener('input', countpg09);
        textArea.addEventListener('change', countpg09);
    }
});
countpg09();

// CHAMADA DA SECTION 12 ====================================================================

const textAreas12 = [
    document.querySelector('input[name="livro"]'),
    document.querySelector('textarea[name="adeus"]'),
    document.querySelector('input[name="palavra1"]'),
    document.querySelector('input[name="palavra2"]'),
    document.querySelector('input[name="palavra3"]')
];
const qtdepg12 = document.getElementById('stpg12');
function countpg12() {
    let filledCount = 0;
    textAreas12.forEach(textArea => {
        if (textArea && textArea.value.trim() !== '') {
            filledCount++;
        }
    });
    const remaining = textAreas12.length - filledCount;
    qtdepg12.textContent = remaining;
    const btn_pg12 = document.getElementById('btn_pg12');
    if (remaining === 0) {
        btn_pg12.classList.add('filled-textarea');
    } else {
        btn_pg12.classList.remove('filled-textarea');
    }
}
textAreas12.forEach(textArea => {
    if (textArea) {
        textArea.addEventListener('input', countpg12);
        textArea.addEventListener('change', countpg12);
    }
});
countpg12();

// CHAMADA DA SECTION 15 ====================================================================

const textAreas15 = [
    document.querySelector('textarea[name="familia"]'),
    document.querySelector('textarea[name="estudos"]'),
    document.querySelector('textarea[name="comunidade"]'),
    document.querySelector('textarea[name="hobbies"]'),
    document.querySelector('textarea[name="atividade"]'),
    document.querySelector('textarea[name="auto"]'),
    document.querySelector('textarea[name="definicao"]'),
    document.querySelector('textarea[name="futuro"]')
];
const qtdepg15 = document.getElementById('stpg15');
function countpg15() {
    let filledCount = 0;
    textAreas15.forEach(textArea => {
        if (textArea && textArea.value.trim() !== '') {
            filledCount++;
        }
    });
    const remaining = textAreas15.length - filledCount;
    qtdepg15.textContent = remaining;
    const btn_pg15 = document.getElementById('btn_pg15');
    if (remaining === 0) {
        btn_pg15.classList.add('filled-textarea');
    } else {
        btn_pg15.classList.remove('filled-textarea');
    }
}
textAreas15.forEach(textArea => {
    if (textArea) {
        textArea.addEventListener('input', countpg15);
        textArea.addEventListener('change', countpg15);
    }
});
countpg15();

// CHAMADA DA SECTION 16 ====================================================================

const textAreas16 = [
    document.querySelector('textarea[name="amo"]'),
    document.querySelector('textarea[name="pronto"]'),
    document.querySelector('textarea[name="maisalcancar"]'),
    document.querySelector('textarea[name="pilares"]'),
    document.querySelector('textarea[name="atrever"]'),
    document.querySelector('textarea[name="recusar"]')
];
const qtdepg16 = document.getElementById('stpg16');
function countpg16() {
    let filledCount = 0;
    textAreas16.forEach(textArea => {
        if (textArea && textArea.value.trim() !== '') {
            filledCount++;
        }
    });
    const remaining = textAreas16.length - filledCount;
    qtdepg16.textContent = remaining;
    const btn_pg16 = document.getElementById('btn_pg16');
    if (remaining === 0) {
        btn_pg16.classList.add('filled-textarea');
    } else {
        btn_pg16.classList.remove('filled-textarea');
    }
}
textAreas16.forEach(textArea => {
    if (textArea) {
        textArea.addEventListener('input', countpg16);
        textArea.addEventListener('change', countpg16);
    }
});
countpg16();

// CHAMADA DA SECTION 17 ====================================================================

const textAreas17 = [
    document.querySelector('textarea[name="fareiamanha"]'),
    document.querySelector('textarea[name="agradavel"]'),
    document.querySelector('textarea[name="mimos"]'),
    document.querySelector('textarea[name="visitar"]'),
    document.querySelector('textarea[name="conectar"]'),
    document.querySelector('textarea[name="recompensa"]')
];
const qtdepg17 = document.getElementById('stpg17');
function countpg17() {
    let filledCount = 0;
    textAreas17.forEach(textArea => {
        if (textArea && textArea.value.trim() !== '') {
            filledCount++;
        }
    });
    const remaining = textAreas17.length - filledCount;
    qtdepg17.textContent = remaining;
    const btn_pg17 = document.getElementById('btn_pg17');
    if (remaining === 0) {
        btn_pg17.classList.add('filled-textarea');
    } else {
        btn_pg17.classList.remove('filled-textarea');
    }
}
textAreas17.forEach(textArea => {
    if (textArea) {
        textArea.addEventListener('input', countpg17);
        textArea.addEventListener('change', countpg17);
    }
});
countpg17();

// CHAMADA DA SECTION 18 ====================================================================

const textAreas18 = [
    document.querySelector('textarea[name="procrastinar"]'),
    document.querySelector('textarea[name="energia"]'),
    document.querySelector('textarea[name="coragem"]'),
    document.querySelector('textarea[name="sim"]'),
    document.querySelector('textarea[name="conselho"]'),
    document.querySelector('textarea[name="especial"]')
];
const qtdepg18 = document.getElementById('stpg18');
function countpg18() {
    let filledCount = 0;
    textAreas18.forEach(textArea => {
        if (textArea && textArea.value.trim() !== '') {
            filledCount++;
        }
    });
    const remaining = textAreas18.length - filledCount;
    qtdepg18.textContent = remaining;
    const btn_pg18 = document.getElementById('btn_pg18');
    if (remaining === 0) {
        btn_pg18.classList.add('filled-textarea');
    } else {
        btn_pg18.classList.remove('filled-textarea');
    }
}
textAreas18.forEach(textArea => {
    if (textArea) {
        textArea.addEventListener('input', countpg18);
        textArea.addEventListener('change', countpg18);
    }
});
countpg18();


// CHAMADA DA SECTION 19 ====================================================================

const textAreas19 = [
    document.querySelector('textarea[name="simbolo"]'),
    document.querySelector('textarea[name="segredo"]')
];
const qtdepg19 = document.getElementById('stpg19');
function countpg19() {
    let filledCount = 0;
    textAreas19.forEach(textArea => {
        if (textArea && textArea.value.trim() !== '') {
            filledCount++;
        }
    });
    const remaining = textAreas19.length - filledCount;
    qtdepg19.textContent = remaining;
    const btn_pg19 = document.getElementById('btn_pg19');
    if (remaining === 0) {
        btn_pg19.classList.add('filled-textarea');
    } else {
        btn_pg19.classList.remove('filled-textarea');
    }
}
textAreas19.forEach(textArea => {
    if (textArea) {
        textArea.addEventListener('input', countpg19);
        textArea.addEventListener('change', countpg19);
    }
});
countpg19();



}); // END DOMContentLoaded


function previewImage() {
    const preview = document.getElementById('preview');
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function() {
      preview.src = reader.result;
      preview.style.display = 'block';
      const uploadContainer = document.querySelector('.custum-file-upload');
      uploadContainer.style.display = 'none'; // Oculta o campo de upload após selecionar a imagem
    }

    if(file) {
      reader.readAsDataURL(file);
    }
}


