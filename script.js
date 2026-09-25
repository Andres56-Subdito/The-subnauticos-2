const botonMasInfo = document.querySelector('#btn-mas-info');
const textoExtra = document.querySelector('#texto-extra');

botonMasInfo.addEventListener('click', () => {
	if (textoExtra.hidden) {
		textoExtra.hidden = false;
		botonMasInfo.textContent = 'Leer menos';
		botonMasInfo.setAttribute('aria-expanded', 'true');
	} else {
		textoExtra.hidden = true;
		botonMasInfo.textContent = 'Leer más';
		botonMasInfo.setAttribute('aria-expanded', 'false');
	}
});
