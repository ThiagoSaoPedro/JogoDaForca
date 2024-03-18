const animal = [
    "cavalo",
    "cachorro",
    "gato",
    "elefante",
    "leão",
    "tigre",
    "papagaio",
    "cobra",
    "peixe",
    "girafa",
    "coelho",
    "macaco",
    "urso",
    "pato",
    "zebra",
    "aguia",
    "hipopotamo",
    "rinoceronte",
    "borboleta",
    "salamandra",
    "canguru",
    "panda",
    "foca",
    "lobo",
    "camelo",
    "baleia",
    "avestruz",
    "pomba",
    "escorpiao",
    "sardinha"
];

const objeto = [
    "Quadro",
    "caneta",
    "cadeira",
    "computador",
    "livro",
    "espelho",
    "martelo",
    "oculos",
    "bola",
    "celular",
    "teclado",
    "copo",
    "tesoura",
    "garfo",
    "faca",
    "pincel",
    "lanterna",
    "mochila",
    "relogio",
    "chave",
    "tapete",
    "microondas",
    "vassoura",
    "sofa",
    "travesseiro",
    "escova",
    "notebook",
    "balde",
    "agenda"
];

const cor = [
    "azul",
    "vermelho",
    "amarelo",
    "verde",
    "roxo",
    "laranja",
    "rosa",
    "preto",
    "branco",
    "marrom",
    "cinza",
    "bege",
    "turquesa",
    "prata",
    "dourado",
    "violeta",
    "salmao",
    "ocre",
    "indigo",
    "ciano",
    "salmon",
    "oliva",
    "creme",
    "lavanda",
    "chocolate",
    "caramelo",
    "marfim",
    "esmeralda",
    "ambar"
];

const fruta = [
    "laranja",
    "maçã",
    "banana",
    "uva",
    "morango",
    "abacaxi",
    "kiwi",
    "melancia",
    "limão",
    "pêssego",
    "pera",
    "cereja",
    "abacate",
    "amora",
    "figo",
    "melão",
    "manga",
    "pitaya",
    "jabuticaba",
    "caju",
    "acerola",
    "damasco",
    "framboesa",
    "guarana",
    "lichia",
    "tamarindo",
    "nectarina",
    "pequi",
    "caqui"
];

//escolher uma lista aleatória
function escolherLista(listas) {
    const indiceAleatorio = Math.floor(Math.random() * listas.length);
    return listas[indiceAleatorio];
}
// escolher uma palavra aleatória na lista aleatória
function escolherPalavra(lista) {
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}
//Função para extrair a dica(lista) da palavra aleatória
function EscolherDica(listaEscolhida) {
    if (listaEscolhida === animal) {
        return "Animal";
    } else if (listaEscolhida === objeto) {
        return "Objeto";
    } else if (listaEscolhida === cor) {
        return "Cor";
    } else {
        return "Fruta";
    }
}

//função para deixar a letra errada vermelha
function MudarBackGroundLetraErrada(letra) {
    var tecla = document.getElementById(letra)
    tecla.style.backgroundColor = "red"
}

//função para deixar a letra correta verde
function MudarBackGroundLetraCerta(letra) {
    var tecla = document.getElementById(letra)
    tecla.style.backgroundColor = "Green"
}


//Função de apertar letra
function ApertarLetra(letra) {
    if (tentativas > 1){
        const pos = palavraAleatoria.indexOf(letra);
        if (pos < 0) {
            MudarBackGroundLetraErrada(letra);
            tentativas--;
            AtualizarCorpo(tentativas);
            if(palavraAleatoria.toUpperCase() === PalavraSecreta.toUpperCase()) {
                AbrirAlerta();
                mostrarpalavra(palavraAleatoria);
            }
        }
        else {
            MudarBackGroundLetraCerta(letra);
            for (var i = 0; i < PalavraSecreta.length; i++) {
                if (palavraAleatoria[i] == letra) {
                    PalavraSecreta = PalavraSecreta.substring(0, i) + letra + PalavraSecreta.substring(i + 1);
                
            }
        }
            document.getElementById("PalavraSecreta").innerText = PalavraSecreta;
        }
        if(palavraAleatoria.toUpperCase() === PalavraSecreta.toUpperCase()) {
            AbrirAlerta();
            document.getElementById("mensagem").innerText = "Você Ganhou, Parabéns!";
        }
    }
}

//função para chamar o alerta
function AbrirAlerta(){
    document.getElementById("alerta").style.display = "block";
}
//função para mostrar a palavra do jogo
function mostrarpalavra(palavraAleatoria){
    document.getElementById("PalavraDoJogo").innerText = "A palavra era " + palavraAleatoria
}

//função de atualizar o corpo
function AtualizarCorpo(tentativas) {
    switch (tentativas) {
        case 7:
            document.getElementById("cabeça").style.display = "block";
            break;
        case 6:
            document.getElementById("corpo").style.display = "block";
            break;
        case 5:
            document.getElementById("braçoesquerdo").style.display = "block";
            break;
        case 4:
            document.getElementById("braçodireito").style.display = "block";
            break;
        case 3:
            document.getElementById("pernaesquerda").style.display = "block";
            break;
        case 2:
            document.getElementById("pernadireita").style.display = "block";
            break;
        case 1:
            document.getElementById("olho").style.display = "block";
                AbrirAlerta();
                document.getElementById("mensagem").innerText = "Você perdeu!";
                mostrarpalavra(palavraAleatoria);

            break;
        default:
            break;
    }
}



//parametros de listas passadas pra escolha da palavra
const listas = [animal, objeto, cor, fruta];

//chamando a função escolher lista
const listaEscolhida = escolherLista(listas);

//chamando a função escolher palavra
const palavra = escolherPalavra(listaEscolhida);
const palavraAleatoria = palavra.toUpperCase();

//chamando a função escolher dica
const Dica = EscolherDica(listaEscolhida);

//Mostrando a dica na tela HTML
document.getElementById("Dica").textContent = Dica;
tamanhoPalavra = palavraAleatoria.length;

//Mostrando a palavra na tela HTML em formato censurado
let PalavraSecreta = "_".repeat(tamanhoPalavra);
document.getElementById("PalavraSecreta").innerText = PalavraSecreta;

//variavel com valor das "chances"
let tentativas = 8;
alert(palavraAleatoria)

