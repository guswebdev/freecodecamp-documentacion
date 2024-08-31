const d = document;

const $btnAbrir = d.querySelector(`[data-abrir]`);
const $btnCerrar = d.querySelector(`[data-cerrar]`);

d.addEventListener('click',(e) => {
    if(e.target === $btnAbrir || e.target === $btnCerrar || location.hash == "#menu"){
        $btnAbrir.classList.toggle("d-none")
        $btnCerrar.classList.toggle("d-none")
    }
})