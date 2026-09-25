const botonMasInfo = document.querySelector('#btn-mas-info');
const textoExtra = document.querySelector('#texto-extra');
const botonTema = document.querySelector('#btn-tema');

botonTema.addEventListener('click', () => {
	const modoOscuroActivo = document.body.classList.toggle('modo-oscuro');
	botonTema.textContent = modoOscuroActivo ? 'Modo claro' : 'Modo oscuro';
	botonTema.setAttribute('aria-pressed', String(modoOscuroActivo));
});

botonMasInfo.addEventListener('click', () => {
	const estaOculto = textoExtra.classList.toggle('oculto');
	botonMasInfo.textContent = estaOculto ? 'Leer más' : 'Leer menos';
	botonMasInfo.setAttribute('aria-expanded', String(!estaOculto));
});
