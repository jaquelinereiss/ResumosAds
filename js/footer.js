function carregarRodape() {
    var rodapeHTML = `
        <footer class="rodape">
            <p>Página desenvolvida apenas para fins acadêmicos</p>
        </footer>
    `;

    var rodapeCSS = `
        <style>
        .rodape {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 0.2em;
            padding-bottom: 1em;
            background: var(--degrade);
            color: var(--cor-quintaria);
            text-align: center;
        }
        </style>
    `;

    document.querySelector('head').insertAdjacentHTML('beforeend', rodapeCSS);
    document.querySelector('body').insertAdjacentHTML('beforeend', rodapeHTML);
}

document.addEventListener('DOMContentLoaded', carregarRodape);