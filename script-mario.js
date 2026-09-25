// script-mario.js - Interaccion propia de Mario Yanez
// Laboratorio 3 - Programacion de Aplicaciones

// ============================================================
// COMMIT 3 (mario): Selecciono los elementos de mi seccion
//                   con querySelector
// ============================================================

// Boton que muestra/oculta los detalles del proyecto
const btnDetallesMario = document.querySelector('#btn-detalles-mario');
const detallesMario    = document.querySelector('#detalles-mario');

// Span que muestra el contador de vistas de detalles
const contadorMario = document.querySelector('#contador-mario');

// Boton de like y su contador numerico
const btnLikeMario  = document.querySelector('#btn-like-mario');
const numLikesMario = document.querySelector('#num-likes-mario');

// Badge de estado del proyecto
const badgeEstadoMario = document.querySelector('#badge-estado-mario');

// ============================================================
// COMMIT 4 (mario): Agrego addEventListener a cada elemento
// ============================================================

// Evento click: muestra/oculta detalles del proyecto
if (btnDetallesMario) {
  btnDetallesMario.addEventListener('click', mostrarDetallesMario);
}

// Evento click: da o quita like al proyecto
if (btnLikeMario) {
  btnLikeMario.addEventListener('click', toggleLikeMario);
}

// Evento click: cambia el badge de estado del proyecto
if (badgeEstadoMario) {
  badgeEstadoMario.addEventListener('click', cambiarEstadoMario);
}
