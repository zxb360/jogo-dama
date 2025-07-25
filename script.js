const tabuleiro = document.querySelector('#tabuleiro');
let selecionePedra = null;

function jogo() {
    tabuleiroDama();
    partidaInitial();
    moverPedraAzul();
}

function tabuleiroDama() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {        
            const letras = String.fromCharCode(65 + j);
            const numero = 8 - i;
            const casa = document.createElement("div");
            casa.classList.add(`${letras}${numero}`);
            tabuleiro.appendChild(casa);          
            
            if ((i + j) % 2 == 0) {
                casa.style.background = 'white';
            } else {
                casa.style.background = 'black';
            } 
        }
    };
}

function partidaInitial() {
    for (let i = 0; i < 8; i++) {
       for (let j = 0; j < 8; j++) {        
            const letras = String.fromCharCode(65 + j);
            const numeroAzul = (i + 6);
            const numeroRed = (3 - i);
            const localePedrasAzul = document.querySelector(`.${letras}${numeroAzul}`);

            const localePedrasVermelha = document.querySelector(`.${letras}${numeroRed}`);
            const pedraAzul = document.createElement("div");
            const pedraRed = document.createElement("div");

            pedraAzul.setAttribute("class", `${letras}${numeroAzul} pedra-azul`)
            pedraRed.setAttribute("class", `${letras}${numeroRed} pedra-vermelha`)

            if (localePedrasVermelha && (i + j) % 2 === 1) localePedrasVermelha.appendChild(pedraRed);
            if (localePedrasAzul && (i + j) % 2 === 0) localePedrasAzul.appendChild(pedraAzul);
        }
    }
}



function moverPedraAzul() {
    // const casa = document.querySelectorAll(".casa");
    // casa.forEach(casas => {
        addEventListener("click", (e) => {
            const evento = e.target;
            if (evento.classList.contains("pedra-azul")) selecionePedra = evento.classList 
            else if (evento.classList.contains("pedra-vermelha")) console.log("Não é sua vez!");
            else console.log("Clique em uma pedra");
            
            console.log(selecionePedra[0]);
        selecionePedra = null
        // })
    })
}

// moverPedra()



window.onload = jogo();