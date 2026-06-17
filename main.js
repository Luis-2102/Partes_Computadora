// =============================================
// DATOS: Partes de la computadora
// =============================================

const partesInternas = [
  {
    nombre: "CPU (Procesador)",
    icono: "&#128421;",
    corto: "El cerebro de la PC",
    desc: "La Unidad Central de Procesamiento (CPU) ejecuta todas las instrucciones de los programas. Lee, interpreta y procesa los datos a millones de operaciones por segundo.",
    dato: "Dato curioso: Los procesadores modernos pueden ejecutar mas de 3,000 millones de operaciones por segundo."
  },
  {
    nombre: "Tarjeta Madre",
    icono: "&#128179;",
    corto: "Conecta todos los componentes",
    desc: "La tarjeta madre (motherboard) es el circuito principal que une todos los componentes de la computadora. Contiene ranuras, conectores y buses de datos para que todo se comunique.",
    dato: "Dato curioso: La tarjeta madre tiene miles de pequeños circuitos impresos que miden milimetros de espesor."
  },
  {
    nombre: "RAM (Memoria)",
    icono: "&#128190;",
    corto: "Memoria de trabajo temporal",
    desc: "La Memoria de Acceso Aleatorio (RAM) almacena temporalmente los datos e instrucciones que el CPU esta usando en ese momento. Al apagar la PC, su contenido se borra.",
    dato: "Dato curioso: RAM viene de 'Random Access Memory'. Cuanta mas RAM tenga una PC, mas programas puede ejecutar al mismo tiempo."
  },
  {
    nombre: "Disco Duro (HDD/SSD)",
    icono: "&#128736;",
    corto: "Almacenamiento permanente",
    desc: "El disco duro guarda todos los datos de forma permanente: el sistema operativo, programas y archivos. Los SSD son mas rapidos porque no tienen partes moviles.",
    dato: "Dato curioso: Un SSD moderno puede transferir datos a mas de 3,500 MB por segundo, como copiar una pelicula en 1 segundo."
  },
  {
    nombre: "Fuente de Poder",
    icono: "&#9889;",
    corto: "Distribuye la electricidad",
    desc: "La fuente de poder convierte la corriente alterna (de la pared) en corriente continua de distintos voltajes para alimentar cada componente de la computadora.",
    dato: "Dato curioso: Una fuente de poder de 80 PLUS Gold desperdicia menos del 10% de energia, ahorrando electricidad."
  },
  {
    nombre: "Tarjeta de Video (GPU)",
    icono: "&#127918;",
    corto: "Procesa graficos e imagenes",
    desc: "La Unidad de Procesamiento Grafico (GPU) se especializa en calculos visuales. Permite ver videos, jugar videojuegos y hacer diseño grafico con alta calidad.",
    dato: "Dato curioso: Una GPU moderna tiene miles de nucleos pequenos que trabajan en paralelo, ideales para inteligencia artificial."
  },
  {
    nombre: "Ventilador / Cooler",
    icono: "&#10052;",
    corto: "Enfria los componentes",
    desc: "Los ventiladores y disipadores mantienen la temperatura de los componentes dentro de limites seguros. Sin ellos, el CPU se sobrecalentaria y danaria.",
    dato: "Dato curioso: Algunas PCs de alto rendimiento usan refrigeracion liquida con tubos de agua en lugar de ventiladores."
  },
  {
    nombre: "Unidad Optica (DVD)",
    icono: "&#128191;",
    corto: "Lee discos CD/DVD/Blu-ray",
    desc: "La unidad optica usa un laser para leer y escribir datos en discos. Fue muy popular para instalar programas y ver peliculas, aunque hoy es menos comun.",
    dato: "Dato curioso: Un Blu-ray puede almacenar hasta 100 GB de datos, equivalente a unos 50,000 fotos."
  }
];

const partesExternas = [
  {
    nombre: "Monitor",
    icono: "&#128187;",
    corto: "Muestra la imagen",
    desc: "El monitor es el dispositivo de salida visual. Transforma las senales de video de la tarjeta grafica en imagenes que podemos ver. Existen de distintas tecnologias: LCD, LED, OLED.",
    dato: "Dato curioso: Los monitores 4K tienen mas de 8 millones de pixeles. Cada pixel tiene 3 subpixeles de color (rojo, verde y azul)."
  },
  {
    nombre: "Teclado",
    icono: "&#9000;",
    corto: "Dispositivo de entrada de texto",
    desc: "El teclado es el principal dispositivo de entrada. Permite escribir texto, numeros y dar comandos al sistema operativo y a los programas.",
    dato: "Dato curioso: La disposicion QWERTY del teclado fue disenada en 1873 para las primeras maquinas de escribir."
  },
  {
    nombre: "Mouse (Raton)",
    icono: "&#128432;",
    corto: "Control del puntero",
    desc: "El mouse es un dispositivo de entrada que controla el puntero en pantalla. Permite hacer clic, seleccionar objetos y navegar por la interfaz grafica.",
    dato: "Dato curioso: El primer mouse fue inventado por Douglas Engelbart en 1964 y estaba hecho de madera."
  },
  {
    nombre: "Impresora",
    icono: "&#128424;",
    corto: "Produce documentos fisicos",
    desc: "La impresora es un dispositivo de salida que traslada informacion digital al papel u otros materiales. Existen de tinta (inkjet) y laser, entre otras.",
    dato: "Dato curioso: Las impresoras 3D tambien son impresoras, pero crean objetos tridimensionales capa por capa."
  },
  {
    nombre: "Bocinas / Altavoces",
    icono: "&#128266;",
    corto: "Salida de audio",
    desc: "Las bocinas convierten senales electricas en sonido. Son dispositivos de salida que nos permiten escuchar musica, videos, alertas y voz en la computadora.",
    dato: "Dato curioso: Las bocinas funcionan por electromagnetismo: una bobina de metal vibra dentro de un iman para producir sonido."
  },
  {
    nombre: "Microfono",
    icono: "&#127908;",
    corto: "Captura audio",
    desc: "El microfono es un dispositivo de entrada de audio. Convierte las vibraciones del sonido en senales electricas que la computadora puede procesar.",
    dato: "Dato curioso: Los micros de condensador son los mas sensibles y se usan en estudios de grabacion profesionales."
  },
  {
    nombre: "Webcam",
    icono: "&#128247;",
    corto: "Captura video en tiempo real",
    desc: "La webcam es una camara de video conectada a la PC. Permite videoconferencias, transmisiones en vivo y reconocimiento facial.",
    dato: "Dato curioso: La primera webcam del mundo fue instalada en Cambridge en 1991 para monitorear una cafetera."
  },
  {
    nombre: "Memoria USB",
    icono: "&#128192;",
    corto: "Almacenamiento portatil",
    desc: "La memoria USB (pendrive) es un dispositivo de almacenamiento portatil que se conecta por puerto USB. Permite transportar archivos de una PC a otra facilmente.",
    dato: "Dato curioso: USB significa 'Universal Serial Bus'. Fue creado en 1996 para reemplazar decenas de tipos de conectores distintos."
  }
];

// =============================================
// PREGUNTAS DEL TEST
// =============================================

const preguntas = [
  {
    texto: "¿Cual componente es conocido como el 'cerebro' de la computadora?",
    opciones: ["RAM", "CPU", "GPU", "SSD"],
    respuesta: 1
  },
  {
    texto: "¿Que dispositivo almacena datos de forma permanente, incluso sin electricidad?",
    opciones: ["RAM", "Cache", "Disco Duro (HDD/SSD)", "Registro CPU"],
    respuesta: 2
  },
  {
    texto: "¿Cual de estos es un dispositivo de ENTRADA?",
    opciones: ["Monitor", "Bocinas", "Impresora", "Teclado"],
    respuesta: 3
  },
  {
    texto: "¿Que hace la fuente de poder?",
    opciones: [
      "Procesa graficos",
      "Almacena archivos",
      "Convierte corriente alterna en continua para alimentar la PC",
      "Conecta la PC a internet"
    ],
    respuesta: 2
  },
  {
    texto: "¿Que parte externa muestra las imagenes generadas por la GPU?",
    opciones: ["Impresora", "Monitor", "Bocinas", "Webcam"],
    respuesta: 1
  },
  {
    texto: "¿Que componente interno une y comunica a todos los demas?",
    opciones: ["RAM", "Disco Duro", "Tarjeta Madre", "Ventilador"],
    respuesta: 2
  }
];

// =============================================
// LOGICA DE TABS
// =============================================

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("tab-" + tab.dataset.tab).classList.add("active");
  });
});

// =============================================
// GENERAR TARJETAS
// =============================================

function crearTarjeta(parte, tipo) {
  const card = document.createElement("div");
  card.className = "card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", "Ver detalles de " + parte.nombre);
  card.innerHTML = `
    <div class="card-icon">${parte.icono}</div>
    <div class="card-name">${parte.nombre}</div>
    <div class="card-short">${parte.corto}</div>
    <span class="card-badge badge-${tipo}">
      ${tipo === "interna" ? "Interna" : "Externa"}
    </span>
  `;
  card.addEventListener("click", () => abrirModal(parte));
  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") abrirModal(parte);
  });
  return card;
}

const gridInternas = document.getElementById("cards-internas");
const gridExternas = document.getElementById("cards-externas");

partesInternas.forEach(p => gridInternas.appendChild(crearTarjeta(p, "interna")));
partesExternas.forEach(p => gridExternas.appendChild(crearTarjeta(p, "externa")));

// =============================================
// TARJETA INDIVIDUAL
// =============================================

const overlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalIcon = document.getElementById("modal-icon");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalFun = document.getElementById("modal-fun");

function abrirModal(parte) {
  modalIcon.innerHTML = parte.icono;
  modalTitle.textContent = parte.nombre;
  modalDesc.textContent = parte.desc;
  modalFun.textContent = parte.dato;
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function cerrarModal() {
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", cerrarModal);
overlay.addEventListener("click", e => {
  if (e.target === overlay) cerrarModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") cerrarModal();
});

// =============================================
// TEST
// =============================================

const quizContainer = document.getElementById("quiz-container");
const quizResult = document.getElementById("quiz-result");
const btnQuiz = document.getElementById("btn-quiz");
const btnReset = document.getElementById("btn-reset");

let respuestasUsuario = new Array(preguntas.length).fill(null);

function renderQuiz() {
  quizContainer.innerHTML = "";
  respuestasUsuario = new Array(preguntas.length).fill(null);
  quizResult.className = "quiz-result hidden";
  quizResult.textContent = "";
  btnQuiz.classList.remove("hidden");
  btnReset.classList.add("hidden");

  preguntas.forEach((preg, i) => {
    const bloque = document.createElement("div");
    bloque.className = "quiz-question";
    bloque.innerHTML = `<p>${i + 1}. ${preg.texto}</p>`;

    const grid = document.createElement("div");
    grid.className = "quiz-options";

    preg.opciones.forEach((op, j) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.textContent = op;
      btn.dataset.q = i;
      btn.dataset.o = j;
      btn.addEventListener("click", () => seleccionarOpcion(i, j, bloque));
      grid.appendChild(btn);
    });

    bloque.appendChild(grid);
    quizContainer.appendChild(bloque);
  });
}

function seleccionarOpcion(pregIdx, opIdx, bloque) {
  respuestasUsuario[pregIdx] = opIdx;
  const opciones = bloque.querySelectorAll(".quiz-option");
  opciones.forEach(btn => btn.classList.remove("selected"));
  opciones[opIdx].classList.add("selected");
}

btnQuiz.addEventListener("click", () => {
  // Verificar que respondio todo
  if (respuestasUsuario.includes(null)) {
    alert("Por favor responde todas las preguntas antes de enviar.");
    return;
  }

  let correctas = 0;

  preguntas.forEach((preg, i) => {
    const bloques = quizContainer.querySelectorAll(".quiz-question");
    const opciones = bloques[i].querySelectorAll(".quiz-option");

    opciones.forEach((btn, j) => {
      btn.disabled = true;
      btn.classList.remove("selected");
      if (j === preg.respuesta) {
        btn.classList.add("correct");
      } else if (j === respuestasUsuario[i] && respuestasUsuario[i] !== preg.respuesta) {
        btn.classList.add("wrong");
      }
    });

    if (respuestasUsuario[i] === preg.respuesta) correctas++;
  });

  const total = preguntas.length;
  const porcentaje = Math.round((correctas / total) * 100);

  quizResult.classList.remove("hidden", "result-great", "result-ok", "result-low");

  if (porcentaje >= 80) {
    quizResult.classList.add("result-great");
    quizResult.textContent = `Excelente! Obtuviste ${correctas} de ${total} correctas (${porcentaje}%). Dominas el tema.`;
  } else if (porcentaje >= 50) {
    quizResult.classList.add("result-ok");
    quizResult.textContent = `Bien! Obtuviste ${correctas} de ${total} correctas (${porcentaje}%). Puedes mejorar repasando las tarjetas.`;
  } else {
    quizResult.classList.add("result-low");
    quizResult.textContent = `Obtuviste ${correctas} de ${total} correctas (${porcentaje}%). Te recomendamos repasar las partes internas y externas.`;
  }

  btnQuiz.classList.add("hidden");
  btnReset.classList.remove("hidden");
});

btnReset.addEventListener("click", renderQuiz);

// Iniciar quiz al cargar
renderQuiz();
