// =========================================================
// 1. CONTROLE DO CARROSSEL (BOTÕES, BOLINHAS E AUTOMÁTICO)
// =========================================================
const slides = document.querySelectorAll('.slide');
const pontos = document.querySelectorAll('.ponto');
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

let indiceAtual = 0;
let intervaloCarrossel;

// Função principal para exibir o slide escolhido
function mostrarSlide(indice) {
    // Garante que o índice fique dentro dos limites
    if (indice >= slides.length) {
        indiceAtual = 0;
    } else if (indice < 0) {
        indiceAtual = slides.length - 1;
    } else {
        indiceAtual = indice;
    }

    // Remove a classe 'ativo' de todos os slides e bolinhas
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('ativo');
        if (pontos[i]) {
            pontos[i].classList.remove('ativo');
        }
    }

    // Ativa apenas o slide e a bolinha atual
    slides[indiceAtual].classList.add('ativo');
    if (pontos[indiceAtual]) {
        pontos[indiceAtual].classList.add('ativo');
    }
}

// Botão Próximo (>)
if (btnAvancar) {
    btnAvancar.addEventListener('click', function () {
        mostrarSlide(indiceAtual + 1);
        reiniciarTimer();
    });
}

// Botão Anterior (<)
if (btnVoltar) {
    btnVoltar.addEventListener('click', function () {
        mostrarSlide(indiceAtual - 1);
        reiniciarTimer();
    });
}

// Clique nas bolinhas indicadoras
for (let i = 0; i < pontos.length; i++) {
    pontos[i].addEventListener('click', function () {
        mostrarSlide(i);
        reiniciarTimer();
    });
}

// Troca automática a cada 5 segundos
function iniciarTimer() {
    intervaloCarrossel = setInterval(function () {
        mostrarSlide(indiceAtual + 1);
    }, 5000);
}

function reiniciarTimer() {
    clearInterval(intervaloCarrossel);
    iniciarTimer();
}

// Inicia o carrossel automático se houver slides na tela
if (slides.length > 0) {
    iniciarTimer();
}


// =========================================================
// 2. INTERAÇÃO: BOTÃO "MOSTRAR CURIOSIDADE" COM CONTADOR
// =========================================================
const btnCuriosidade = document.getElementById('btn-curiosidade');
const btnLimparCuriosidade = document.getElementById('btn-limpar-curiosidade');
const textoCuriosidade = document.getElementById('texto-curiosidade');
const contadorCuriosidade = document.getElementById('contador-curiosidade');

const listaCuriosidades = [
    "🏎️ 1. Força Aerodinâmica: Os carros de Fórmula 1 modernos geram tanta pressão aerodinâmica (downforce) que poderiam rodar de cabeça para baixo em um teto a partir de 180 km/h!",
    "🔥 2. Frenagem Extrema: Durante uma freada forte na F1, os pilotos sofrem uma desaceleração de até 5G, fazendo o capacete e a cabeça parecerem 5 vezes mais pesados.",
    "⏱️ 3. Pit Stop Relâmpago: O recorde mundial de troca de quatro pneus na Fórmula 1 é de apenas 1,80 segundo, realizado pela equipe McLaren.",
    "🌡️ 4. Calor nos Pneus: Os pneus de competição atingem entre 90°C e 110°C para oferecer máxima aderência no asfalto.",
    "🇧🇷 5. Interlagos Histórico: Inaugurado em 1940, o Autódromo José Carlos Pace (Interlagos) é um dos poucos circuitos do calendário mundial com traçado no sentido anti-horário.",
    "🏁 6. Bandeira Quadriculada: Usada desde 1906, a bandeira quadriculada foi escolhida por ser facilmente visível mesmo em meio à poeira e fumaça das primeiras corridas."
];

let indiceCuriosidade = 0;

if (btnCuriosidade && textoCuriosidade) {
    btnCuriosidade.addEventListener('click', function () {
        // Exibe a curiosidade atual
        textoCuriosidade.textContent = listaCuriosidades[indiceCuriosidade];
        
        // Atualiza o contador (ex: 1 / 6)
        if (contadorCuriosidade) {
            contadorCuriosidade.textContent = (indiceCuriosidade + 1) + " / " + listaCuriosidades.length;
        }

        // Muda o texto do botão após o primeiro clique
        btnCuriosidade.textContent = "Próxima curiosidade";

        // Avança para a próxima ou volta ao início
        indiceCuriosidade++;
        if (indiceCuriosidade >= listaCuriosidades.length) {
            indiceCuriosidade = 0;
        }
    });
}

// Botão para resetar a caixa de curiosidades
if (btnLimparCuriosidade) {
    btnLimparCuriosidade.addEventListener('click', function () {
        indiceCuriosidade = 0;
        textoCuriosidade.textContent = "Clique no botão abaixo para descobrir fatos impressionantes sobre o automobilismo!";
        btnCuriosidade.textContent = "Mostrar curiosidade";
        if (contadorCuriosidade) {
            contadorCuriosidade.textContent = "0 / " + listaCuriosidades.length;
        }
    });
}


// =========================================================
// 3. DESTAQUE DO LINK ATIVO NO MENU DE NAVEGAÇÃO
// =========================================================
const linksMenu = document.querySelectorAll('.link-menu');

for (let i = 0; i < linksMenu.length; i++) {
    linksMenu[i].addEventListener('click', function () {
        // Remove 'ativo' de todos os links
        for (let j = 0; j < linksMenu.length; j++) {
            linksMenu[j].classList.remove('ativo');
        }
        // Adiciona 'ativo' no link clicado
        this.classList.add('ativo');
    });
}