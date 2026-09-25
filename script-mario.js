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

// ============================================================
// COMMIT 5 (mario): Las funciones modifican el DOM al ejecutarse
// ============================================================

// Variable para contar cuantas veces se abrieron los detalles
let vistasDetalles = 0;

// Variable para rastrear si el usuario le dio like
let likeActivo = false;

// Variable para rastrear el estado actual del proyecto
const estados = [
  { texto: 'Proyecto Activo',     clase: 'badge-activo'    },
  { texto: 'En Desarrollo',       clase: 'badge-desarrollo' },
  { texto: 'Proyecto Pausado',    clase: 'badge-pausado'   },
];
let estadoActual = 0;

// FUNCION 1: Muestra u oculta los detalles del proyecto
//            e incrementa el contador de vistas
function mostrarDetallesMario() {
  if (!detallesMario) return;

  detallesMario.classList.toggle('oculto');

  if (!detallesMario.classList.contains('oculto')) {
    // Se abrio: incrementar contador y actualizar texto del boton
    vistasDetalles++;
    if (contadorMario) contadorMario.textContent = vistasDetalles;
    btnDetallesMario.textContent = 'Ocultar detalles';
  } else {
    btnDetallesMario.textContent = 'Ver detalles del proyecto';
  }
}

// FUNCION 2: Alterna el estado de like del proyecto
//            Cambia el color del boton y el contador
function toggleLikeMario() {
  if (!btnLikeMario || !numLikesMario) return;

  likeActivo = !likeActivo;
  const likes = likeActivo ? 1 : 0;
  numLikesMario.textContent = likes;

  if (likeActivo) {
    btnLikeMario.classList.add('like-activo');
    btnLikeMario.style.backgroundColor = '#954e3a';
    btnLikeMario.style.color = '#ffffff';
  } else {
    btnLikeMario.classList.remove('like-activo');
    btnLikeMario.style.backgroundColor = '';
    btnLikeMario.style.color = '';
  }
}

// FUNCION 3: Rota entre los estados del proyecto al hacer clic en el badge
function cambiarEstadoMario() {
  if (!badgeEstadoMario) return;

  // Quitar clase del estado anterior
  badgeEstadoMario.classList.remove(estados[estadoActual].clase);

  // Avanzar al siguiente estado (ciclo circular)
  estadoActual = (estadoActual + 1) % estados.length;

  // Aplicar nuevo estado
  badgeEstadoMario.textContent = '● ' + estados[estadoActual].texto;
  badgeEstadoMario.classList.add(estados[estadoActual].clase);
}
