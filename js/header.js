function carregarCabecalho() {
    var cabecalhoHTML = `
        <header class="cabecalho">
            <img class="cabecalho__imagem" src="../src/img/icon_folha.png" alt="Imagem em ícone na cor preta de uma folha de papel com um lápis">
            <nav class="cabecalho__menu">
                <a href="../index.html" class="cabecalho__menu-item">Início</a>
                <a href="../pages/page00.html" class="cabecalho__menu-item">Sobre</a>
            </nav>
        </header>
    `;

    var cabecalhoCSS = `
        <style>
        .cabecalho {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 1em 10em 0.2em 10em;
            background: var(--degrade);
            color: var(--cor-quintaria);
        }
        .cabecalho__imagem {
            height: 72px;
        }
        .cabecalho__menu-item {
            text-decoration: none;
            color: var(--branco);
            padding: 1em;
            cursor: pointer;
        }
        </style>
    `;

    document.querySelector('head').insertAdjacentHTML('beforeend', cabecalhoCSS);
    document.querySelector('body').insertAdjacentHTML('afterbegin', cabecalhoHTML);
}

document.addEventListener('DOMContentLoaded', carregarCabecalho);