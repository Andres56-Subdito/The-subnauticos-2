// script.js – Interactividad del sitio del grupo
// Laboratorio 3 – Programación de Aplicaciones

// ============================================================
// COMMIT 2: Seleccion de elementos del DOM con querySelector
// ============================================================

// Elemento del equipo: botón de modo oscuro
const btnModoOscuro = document.querySelector('#btn-modo-oscuro');

// Elemento sección Mario: botón para mostrar/ocultar detalles
const btnDetallesMario = document.querySelector('#btn-detalles-mario');
const detallesMario = document.querySelector('#detalles-mario');

// Elemento sección Dilan: su tarjeta completa
const tarjetaDilan = document.querySelector('#seccion-dilan');

// Elemento sección Lucas: botón "Ver más"
const btnVerMasLucas = document.querySelector('#btn-ver-mas-lucas');
const textoExtraLucas = document.querySelector('#texto-extra-lucas');

// ============================================================
// COMMIT 3: Agrego addEventListener a cada elemento
// ============================================================

// Listener equipo: clic en el botón modo oscuro
if (btnModoOscuro) {
  btnModoOscuro.addEventListener('click', modoOscuro);
}

// Listener Mario: clic en botón de detalles
if (btnDetallesMario) {
  btnDetallesMario.addEventListener('click', mostrarDetallesMario);
}

// Listener Dilan: mouseover sobre su tarjeta
if (tarjetaDilan) {
  tarjetaDilan.addEventListener('mouseover', resaltarTarjetaDilan);
  tarjetaDilan.addEventListener('mouseout', restaurarTarjetaDilan);
}

// Listener Lucas: clic en botón "Ver más"
if (btnVerMasLucas) {
  btnVerMasLucas.addEventListener('click', verMasLucas);
}

// ============================================================
// COMMIT 4: Función de modo oscuro (función compartida del equipo)
// Activa/desactiva un modo oscuro en todo el sitio mediante
// classList.toggle sobre el body
// ============================================================
function modoOscuro() {
  document.body.classList.toggle('modo-oscuro');
  // Cambia el texto del botón según el estado
  if (document.body.classList.contains('modo-oscuro')) {
    btnModoOscuro.textContent = '☀️ Modo Claro';
  } else {
    btnModoOscuro.textContent = '🌙 Modo Oscuro';
  }
}
