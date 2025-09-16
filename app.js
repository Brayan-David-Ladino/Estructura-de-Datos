// Datos de ejemplo
// Elementos quirúrgicos usados en Colombia (ficticios)
const elementosQuirurgicos = [
  { id: 1, nombre: "Bisturí", categoria: "Instrumento Cortante", condiciones: "Esterilizado, uso único" },
  { id: 2, nombre: "Pinzas", categoria: "Instrumento de Sujeción", condiciones: "Esterilizado" },
  { id: 3, nombre: "Guantes Quirúrgicos", categoria: "Protección", condiciones: "Talla adecuada, sin perforaciones" },
  { id: 4, nombre: "Mascarilla Quirúrgica", categoria: "Protección", condiciones: "Uso durante toda la cirugía" },
  { id: 5, nombre: "Sutura Absorbible", categoria: "Material de Sutura", condiciones: "Según tipo de tejido" },
  { id: 6, nombre: "Sutura No Absorbible", categoria: "Material de Sutura", condiciones: "Para piel" },
  { id: 7, nombre: "Electrocauterio", categoria: "Instrumento Eléctrico", condiciones: "Revisar funcionamiento" },
  { id: 8, nombre: "Campo Estéril", categoria: "Material Desechable", condiciones: "Colocar correctamente" },
  { id: 9, nombre: "Aguja Hipodérmica", categoria: "Instrumento de Inyección", condiciones: "Uso único" },
  { id: 10, nombre: "Tijeras", categoria: "Instrumento Cortante", condiciones: "Esterilizado" }
];
// Tipos de cirugía (ficticios)
const tiposCirugia = [
  { id: "general", nombre: "Cirugía General" },
  { id: "ortopedica", nombre: "Cirugía Ortopédica" },
  { id: "cardiaca", nombre: "Cirugía Cardíaca" },
  { id: "neuro", nombre: "Cirugía Neurológica" },
  { id: "plastica", nombre: "Cirugía Plástica" }
];

// Relación tipo cirugía - elementos recomendados (ids de elementos)
const elementosPorCirugia = {
  general: [1, 2, 3, 4, 5, 8, 9, 10],
  ortopedica: [1, 2, 3, 4, 6, 7, 8, 10],
  cardiaca: [1, 2, 3, 4, 5, 7, 8, 9],
  neuro: [1, 2, 3, 4, 5, 7, 8],
  plastica: [1, 2, 3, 4, 5, 6, 8, 10]
};
// Referencias DOM
const selectCirugia = document.getElementById("tipoCirugia");
const tbody = document.querySelector("#tablaElementos tbody");
const ctx = document.getElementById("graficoCategorias").getContext("2d");
let chart;
// Función para cargar opciones de tipo de cirugía
function cargarOpcionesCirugia() {
  tiposCirugia.forEach(c => {
    const option = document.createElement("option");
    option.value = c.id;
    option.textContent = c.nombre;
    selectCirugia.appendChild(option);
  });
}
// Función para mostrar elementos según cirugía
function mostrarElementos(cirugiaId) {
  tbody.innerHTML = "";
  if (!cirugiaId || !elementosPorCirugia[cirugiaId]) {
    tbody.innerHTML = "<tr><td colspan='3'>Seleccione un tipo de cirugía válido.</td></tr>";
    actualizarGrafico([]);
    return;
  }
  const idsElementos = elementosPorCirugia[cirugiaId];
  const elementos = elementosQuirurgicos.filter(e => idsElementos.includes(e.id));
  // Mostrar en tabla
  elementos.forEach(e => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${e.nombre}</td>
      <td>${e.categoria}</td>
      <td>${e.condiciones}</td>
    `;
    tbody.appendChild(tr);
  });

  // Actualizar gráfico de categorías
  const categorias = elementos.map(e => e.categoria);
  actualizarGrafico(categorias);
}

// Función para actualizar gráfico de barras para categorías
function actualizarGrafico(categorias) {
  // Contar ocurrencias por categoría
  const conteo = {};
  categorias.forEach(cat => {
    conteo[cat] = (conteo[cat] || 0) + 1;
  });
  const labels = Object.keys(conteo);
  const data = Object.values(conteo);
  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Cantidad de elementos por categoría",
        data,
        backgroundColor: "rgba(41, 128, 185, 0.7)"
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          precision: 0
        }
      }
    }
  });
}

// Eventos
selectCirugia.addEventListener("change", e => {
  mostrarElementos(e.target.value);
});
// Inicialización
cargarOpcionesCirugia();
mostrarElementos("");