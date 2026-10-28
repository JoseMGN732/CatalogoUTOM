/* =====================================================
   DATOS de la carrera (tomados del mapa curricular)
   Aquí puedes editar materias, horas o textos
   ===================================================== */

// Cada cuatrimestre tiene: ciclo (1, 2 o 3) y su lista de materias
const CUATRIMESTRES = [

    {   // 1° cuatrimestre
        ciclo: 1,
        materias: [
            { nombre: "Inglés I", horas: 75 },
            { nombre: "Desarrollo humano y valores", horas: 60 },
            { nombre: "Fundamentos matemáticos", horas: 105 },
            { nombre: "Fundamentos de redes", horas: 60 },
            { nombre: "Física", horas: 90 },
            { nombre: "Fundamentos de programación", horas: 60 },
            { nombre: "Comunicación y habilidades digitales", horas: 75 }
        ]
    },

    {   // 2° cuatrimestre
        ciclo: 1,
        materias: [
            { nombre: "Inglés II", horas: 75 },
            { nombre: "Habilidades socioemocionales y manejo de conflictos", horas: 60 },
            { nombre: "Cálculo diferencial", horas: 90 },
            { nombre: "Conmutación y enrutamiento de redes", horas: 75 },
            { nombre: "Probabilidad y estadística", horas: 75 },
            { nombre: "Programación estructurada", horas: 75 },
            { nombre: "Sistemas operativos", horas: 75 }
        ]
    },

    {   // 3° cuatrimestre
        ciclo: 1,
        materias: [
            { nombre: "Inglés III", horas: 75 },
            { nombre: "Desarrollo del pensamiento y toma de decisiones", horas: 60 },
            { nombre: "Cálculo integral", horas: 60 },
            { nombre: "Tópicos de calidad para el diseño de software", horas: 90 },
            { nombre: "Bases de datos", horas: 75 },
            { nombre: "Programación orientada a objetos", horas: 105 },
            { nombre: "Proyecto integrador I", horas: 60 }
        ]
    },

    {   // 4° cuatrimestre
        ciclo: 2,
        materias: [
            { nombre: "Inglés IV", horas: 75 },
            { nombre: "Ética profesional", horas: 60 },
            { nombre: "Cálculo de varias variables", horas: 75 },
            { nombre: "Aplicaciones web", horas: 75 },
            { nombre: "Estructura de datos", horas: 75 },
            { nombre: "Desarrollo de aplicaciones móviles", horas: 90 },
            { nombre: "Análisis y diseño de software", horas: 75 }
        ]
    },

    {   // 5° cuatrimestre
        ciclo: 2,
        materias: [
            { nombre: "Inglés V", horas: 75 },
            { nombre: "Liderazgo de equipos de alto desempeño", horas: 60 },
            { nombre: "Ecuaciones diferenciales", horas: 75 },
            { nombre: "Aplicaciones web orientadas a servicios", horas: 90 },
            { nombre: "Bases de datos avanzadas", horas: 75 },
            { nombre: "Estándares y métricas para el desarrollo de software", horas: 90 },
            { nombre: "Proyecto integrador II", horas: 60 }
        ]
    },

    {   // 6° cuatrimestre (estadía)
        ciclo: 2,
        estadia: "Estadía de TSU en Desarrollo de Software Multiplataforma · 600 h",
        materias: []
    },

    {   // 7° cuatrimestre
        ciclo: 3,
        materias: [
            { nombre: "Inglés VI", horas: 75 },
            { nombre: "Habilidades gerenciales", horas: 60 },
            { nombre: "Formulación de proyectos de tecnología", horas: 60 },
            { nombre: "Fundamentos de inteligencia artificial", horas: 90 },
            { nombre: "Ética y legislación en tecnologías de la información", horas: 60 },
            { nombre: "Optativa I", horas: 90 },
            { nombre: "Seguridad informática", horas: 90 }
        ]
    },

    {   // 8° cuatrimestre
        ciclo: 3,
        materias: [
            { nombre: "Inglés VII", horas: 75 },
            { nombre: "Electrónica digital", horas: 75 },
            { nombre: "Gestión de proyectos de tecnología", horas: 60 },
            { nombre: "Programación para inteligencia artificial", horas: 75 },
            { nombre: "Administración de servidores", horas: 75 },
            { nombre: "Optativa II", horas: 90 },
            { nombre: "Informática forense", horas: 75 }
        ]
    },

    {   // 9° cuatrimestre
        ciclo: 3,
        materias: [
            { nombre: "Inglés VIII", horas: 75 },
            { nombre: "Internet de las cosas", horas: 75 },
            { nombre: "Evaluación de proyectos de tecnología", horas: 60 },
            { nombre: "Ciencia de datos", horas: 90 },
            { nombre: "Tecnologías disruptivas", horas: 75 },
            { nombre: "Optativa III", horas: 90 },
            { nombre: "Proyecto integrador III", horas: 60 }
        ]
    },

    {   // 10° cuatrimestre (estadía)
        ciclo: 3,
        estadia: "Estadía de Ingeniería en TI e Innovación Digital · 600 h",
        materias: []
    }
];


// Tarjetas de la sección "Habilidades" (8 = 4 columnas x 2 filas)
const HABILIDADES = [
    { icono: "🌐", titulo: "Desarrollo web y móvil", texto: "Crea apps y servicios web con arquitecturas orientadas a servicios y aplicaciones para celular." },
    { icono: "🤖", titulo: "Inteligencia artificial", texto: "Conoce los fundamentos de la IA y programa soluciones que aprenden de los datos." },
    { icono: "📊", titulo: "Ciencia de datos", texto: "Analiza grandes cantidades de información con probabilidad, estadística y bases de datos avanzadas." },
    { icono: "📡", titulo: "Redes y servidores", texto: "Configura conmutación y enrutamiento, y administra servidores para mantener todo en línea." },
    { icono: "🔐", titulo: "Seguridad y forense", texto: "Protege sistemas, detecta vulnerabilidades e investiga incidentes informáticos." },
    { icono: "🔌", titulo: "IoT y electrónica", texto: "Conecta dispositivos físicos con Internet de las Cosas y electrónica digital." },
    { icono: "🧩", titulo: "Calidad de software", texto: "Aplica estándares, métricas y análisis de diseño para construir software confiable." },
    { icono: "🗣️", titulo: "Inglés y liderazgo", texto: "8 niveles de inglés y habilidades gerenciales para dirigir equipos y proyectos." }
];


// Opciones del test de perfil (4 = cuadrícula de 2 x 2)
const PERFILES = [
    {
        icono: "💻",
        opcion: "Crear apps y páginas web",
        titulo: "Perfil Desarrollador",
        resultado: "Te gusta construir cosas que la gente usa todos los días. Vas a disfrutar programar desde cero hasta publicar tu propia app.",
        materias: ["Programación orientada a objetos", "Aplicaciones web", "Desarrollo de aplicaciones móviles"]
    },
    {
        icono: "🤖",
        opcion: "Entrenar máquinas que aprenden",
        titulo: "Perfil Científico de datos",
        resultado: "Te atrae descubrir patrones y hacer que un sistema tome decisiones inteligentes con la información.",
        materias: ["Fundamentos de inteligencia artificial", "Programación para inteligencia artificial", "Ciencia de datos"]
    },
    {
        icono: "🔐",
        opcion: "Proteger sistemas de ataques",
        titulo: "Perfil Ciberseguridad",
        resultado: "Te interesa pensar como atacante para defender mejor y resolver casos de investigación digital.",
        materias: ["Seguridad informática", "Informática forense", "Ética y legislación en TI"]
    },
    {
        icono: "📡",
        opcion: "Conectar dispositivos y redes",
        titulo: "Perfil Infraestructura e IoT",
        resultado: "Te emociona que todo esté conectado: desde la red de una empresa hasta sensores que miden el mundo real.",
        materias: ["Conmutación y enrutamiento de redes", "Administración de servidores", "Internet de las cosas"]
    }
];
