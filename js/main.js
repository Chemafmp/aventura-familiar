document.addEventListener("DOMContentLoaded", function () {
  let personaje = "";

  const historia = {
    inicio: {
      texto: "Despiertas en tu habitación y notas que algo no está bien... los elfos han desaparecido. ¿Qué haces?",
      opciones: [
        { texto: "Buscar en el armario", siguiente: "armario" },
        { texto: "Ir al salón", siguiente: "salon" }
      ]
    },
    armario: {
      texto: "Abres el armario y encuentras una nota: 'Ven al mundo mágico'. ¿Vas?",
      opciones: [
        { texto: "¡Sí, vamos!", siguiente: "mundoMagico" },
        { texto: "No, da miedo...", siguiente: "finMiedo" }
      ]
    },
    salon: {
      texto: "En el salón, solo hay silencio... hasta que algo se mueve detrás del sofá.",
      opciones: [
        { texto: "Investigar detrás del sofá", siguiente: "sofa" },
        { texto: "Volver a la habitación", siguiente: "inicio" }
      ]
    },
    mundoMagico: {
      texto: "¡Has entrado en el mundo mágico! Aquí empieza tu gran aventura...",
      opciones: []
    },
    finMiedo: {
      texto: "Te escondes bajo las mantas. Tal vez otro día... Fin.",
      opciones: []
    },
    sofa: {
      texto: "¡Sorpresa! Los elfos te estaban esperando para jugar. ¡Comienza la aventura!",
      opciones: []
    }
  };

  function elegirPersonaje(nombre) {
    personaje = nombre;
    document.getElementById("pantalla-inicio").classList.add("hidden");
    document.getElementById("pantalla-historia").classList.remove("hidden");
    document.getElementById("nombre-personaje").textContent = `👤 Personaje: ${personaje}`;
    mostrarEscena("inicio");
  }

  function mostrarEscena(escena) {
    const nodo = historia[escena];
    document.getElementById("texto-historia").textContent = nodo.texto;
    const contenedorOpciones = document.getElementById("opciones");
    contenedorOpciones.innerHTML = "";
    nodo.opciones.forEach(op => {
      const btn = document.createElement("button");
      btn.textContent = op.texto;
      btn.onclick = () => mostrarEscena(op.siguiente);
      contenedorOpciones.appendChild(btn);
    });
  }

  window.elegirPersonaje = elegirPersonaje;
});
