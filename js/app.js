/* =====================================================
   LÓGICA de la página
   (usa los datos de data.js)
   ===================================================== */

// ---------- Variables generales ----------
let filtroActual = "todos";      // cuatrimestre mostrado ("todos" o 0 a 9)


// ---------- 1. NAVEGACIÓN ENTRE SECCIONES ----------
const enlaces = document.querySelectorAll("[href^='#']");
const secciones = document.querySelectorAll(".seccion");
const menu = document.getElementById("menu");

function mostrarSeccion(id) {
    // Muestra solo la sección elegida
    secciones.forEach(function (seccion) {
        seccion.classList.toggle("activa", seccion.id === id);
    });

    // Marca el enlace activo en la barra
    document.querySelectorAll(".menu__link").forEach(function (link) {
        link.classList.toggle("activo", link.getAttribute("href") === "#" + id);
    });

    menu.classList.remove("abierto");   // cierra el menú en celular
    window.scrollTo(0, 0);
}

enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (evento) {
        evento.preventDefault();
        mostrarSeccion(enlace.getAttribute("href").substring(1));
    });
});

// Botón de menú (celular)
document.getElementById("botonMenu").addEventListener("click", function () {
    menu.classList.toggle("abierto");
});


// ---------- 2. MAPA CURRICULAR ----------
function crearFiltros() {
    let html = '<button class="filtro" data-filtro="todos">Todos</button>';

    for (let i = 0; i < CUATRIMESTRES.length; i++) {
        html += '<button class="filtro" data-filtro="' + i + '">' + (i + 1) + '°</button>';
    }

    const contenedor = document.getElementById("filtros");
    contenedor.innerHTML = html;

    // Al hacer clic en un filtro, se cambia el cuatrimestre mostrado
    contenedor.querySelectorAll(".filtro").forEach(function (boton) {
        boton.addEventListener("click", function () {
            const valor = boton.dataset.filtro;
            filtroActual = (valor === "todos") ? "todos" : Number(valor);
            mostrarMaterias();
        });
    });
}

function mostrarMaterias() {
    const texto = document.getElementById("buscador").value.toLowerCase();
    let html = "";

    CUATRIMESTRES.forEach(function (cuatri, i) {

        // Si hay un filtro activo, se salta los demás cuatrimestres
        if (filtroActual !== "todos" && filtroActual !== i) {
            return;
        }

        // Cuatrimestres de estadía (sin materias)
        if (cuatri.estadia) {
            if (texto === "") {
                html += '<div class="cuatri-titulo">' + (i + 1) + '° cuatrimestre</div>';
                html += '<div class="estadia">🏢 ' + cuatri.estadia + '</div>';
            }
            return;
        }

        // Materias que coinciden con la búsqueda
        const lista = cuatri.materias.filter(function (materia) {
            return materia.nombre.toLowerCase().includes(texto);
        });

        if (lista.length === 0) {
            return;
        }

        html += '<div class="cuatri-titulo">' + (i + 1) + '° cuatrimestre</div>';
        html += '<div class="materias">';

        lista.forEach(function (materia) {
            html += '<div class="materia ciclo-' + cuatri.ciclo + '">';
            html += '  <span class="materia__horas">' + materia.horas + '<small>hrs</small></span>';
            html += '  <span>' + materia.nombre + '</span>';
            html += '</div>';
        });

        html += '</div>';
    });

    document.getElementById("listaMaterias").innerHTML = html || "<p>Sin resultados 🤔</p>";

    // Marca el filtro activo
    document.querySelectorAll(".filtro").forEach(function (boton) {
        boton.classList.toggle("activo", boton.dataset.filtro == filtroActual);
    });
}

document.getElementById("buscador").addEventListener("input", mostrarMaterias);


// ---------- 3. HABILIDADES ----------
function mostrarHabilidades() {
    let html = "";

    HABILIDADES.forEach(function (h) {
        html += '<article class="hab-card">';
        html += '  <span class="icono-circulo">' + h.icono + '</span>';
        html += '  <h3>' + h.titulo + '</h3>';
        html += '  <p>' + h.texto + '</p>';
        html += '</article>';
    });

    document.getElementById("listaHabilidades").innerHTML = html;
}


// ---------- 4. TEST DE PERFIL ----------
function mostrarPerfiles() {
    const contenedor = document.getElementById("opcionesPerfil");
    let html = "";

    PERFILES.forEach(function (perfil, i) {
        html += '<button class="opcion-perfil" data-perfil="' + i + '">';
        html += '  <span class="icono-circulo">' + perfil.icono + '</span>';
        html += '  <span>' + perfil.opcion + '</span>';
        html += '</button>';
    });

    contenedor.innerHTML = html;

    // Al elegir una opción, se llena el panel de resultado
    contenedor.querySelectorAll(".opcion-perfil").forEach(function (boton) {
        boton.addEventListener("click", function () {
            const perfil = PERFILES[boton.dataset.perfil];

            document.getElementById("perfilTitulo").textContent = perfil.icono + " " + perfil.titulo;
            document.getElementById("perfilTexto").textContent = perfil.resultado;

            let materias = "";
            perfil.materias.forEach(function (nombre) {
                materias += "<span>" + nombre + "</span>";
            });
            document.getElementById("perfilMaterias").innerHTML = materias;

            // Marca la opción elegida
            contenedor.querySelectorAll(".opcion-perfil").forEach(function (b) {
                b.classList.toggle("activo", b === boton);
            });
        });
    });
}


// ---------- 5. INICIO ----------
crearFiltros();
mostrarMaterias();
mostrarHabilidades();
mostrarPerfiles();


// ---------- 6. INSTALAR LA PWA (service worker) ----------
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
