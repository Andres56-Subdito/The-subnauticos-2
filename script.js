// script.js - Interactividad del sitio del grupo
// Laboratorio 3 - Programacion de Aplicaciones

// ============================================================
// COMMIT 2: Seleccion de elementos del DOM con querySelector
// ============================================================

// Elemento del equipo: boton de modo oscuro
const btnModoOscuro = document.querySelector('#btn-modo-oscuro');

// Elemento seccion Mario: boton para mostrar/ocultar detalles
const btnDetallesMario = document.querySelector('#btn-detalles-mario');
const detallesMario = document.querySelector('#detalles-mario');

// Elemento seccion Dilan: su tarjeta completa
const tarjetaDilan = document.querySelector('#seccion-dilan');

// Elemento seccion Lucas: boton "Ver mas"
const btnVerMasLucas = document.querySelector('#btn-ver-mas-lucas');
const textoExtraLucas = document.querySelector('#texto-extra-lucas');
// nuevo boton
const btnExtraLucas = document.querySelector('#btn-extra-lucas');

// ============================================================
// COMMIT 3: Agrego addEventListener a cada elemento
// ============================================================

// Listener equipo: clic en el boton modo oscuro
if (btnModoOscuro) {
  btnModoOscuro.addEventListener('click', modoOscuro);
}

// Listener Mario: clic en boton de detalles
if (btnDetallesMario) {
  btnDetallesMario.addEventListener('click', mostrarDetallesMario);
}

// Listener Dilan: mouseover sobre su tarjeta
if (tarjetaDilan) {
  tarjetaDilan.addEventListener('mouseover', resaltarTarjetaDilan);
  tarjetaDilan.addEventListener('mouseout', restaurarTarjetaDilan);
}

// Listener Lucas: clic en boton "Ver mas"
if (btnVerMasLucas) {
  btnVerMasLucas.addEventListener('click', verMasLucas);
}

// ============================================================
// COMMIT 4: Funcion de modo oscuro (funcion compartida del equipo)
// Activa/desactiva un modo oscuro en todo el sitio mediante
// classList.toggle sobre el body
// ============================================================
function modoOscuro() {
  document.body.classList.toggle('modo-oscuro');
  if (document.body.classList.contains('modo-oscuro')) {
    btnModoOscuro.textContent = 'Modo Claro';
  } else {
    btnModoOscuro.textContent = 'Modo Oscuro';
  }
}

// ============================================================
// COMMIT 5: Funciones de cada integrante - modifican el DOM
// ============================================================

// MARIO YANEZ - Muestra u oculta detalles extra de su proyecto al hacer clic
function mostrarDetallesMario() {
  if (detallesMario) {
    detallesMario.classList.toggle('oculto');
    if (detallesMario.classList.contains('oculto')) {
      btnDetallesMario.textContent = 'Ver detalles del proyecto';
    } else {
      btnDetallesMario.textContent = 'Ocultar detalles';
    }
  }
}

// DILAN HERNANDEZ - Al pasar el cursor sobre su tarjeta, cambia el color del borde
function resaltarTarjetaDilan() {
  if (tarjetaDilan) {
    tarjetaDilan.style.borderLeftColor = '#954e3a';
    tarjetaDilan.style.boxShadow = '0 8px 16px rgba(149, 78, 58, 0.4)';
    tarjetaDilan.style.transform = 'translateY(-4px)';
    tarjetaDilan.style.transition = 'all 0.3s ease';
  }
}

function restaurarTarjetaDilan() {
  if (tarjetaDilan) {
    tarjetaDilan.style.borderLeftColor = '';
    tarjetaDilan.style.boxShadow = '';
    tarjetaDilan.style.transform = '';
  }
}

// LUCAS CAMPOS - Al hacer clic en "Ver mas" muestra texto extra del proyecto
function verMasLucas() {
  if (textoExtraLucas) {
    textoExtraLucas.classList.toggle('oculto');
    if (textoExtraLucas.classList.contains('oculto')) {
      btnVerMasLucas.textContent = 'Ver mas';
    } else {
      btnVerMasLucas.textContent = 'Ver menos';
    }
  }
}
