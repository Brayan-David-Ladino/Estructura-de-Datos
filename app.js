// Datos de elementos quirúrgicos
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

// Tipos de cirugía
const tiposCirugia = [
  { id: "general", nombre: "Cirugía General" },
  { id: "ortopedica", nombre: "Cirugía Ortopédica" },
  { id: "cardiaca", nombre: "Cirugía Cardíaca" },
  { id: "neuro", nombre: "Cirugía Neurológica" },
  { id: "plastica", nombre: "Cirugía Plástica" }
];

// Relación cirugía-elementos
const elementosPorCirugia = {
  general: [1, 2, 3, 4, 5, 8, 9, 10],
  ortopedica: [1, 2, 3, 4, 6, 7, 8, 10],
  cardiaca: [1, 2, 3, 4, 5, 7, 8, 9],
  neuro: [1, 2, 3, 4, 5, 7, 8],
  plastica: [1, 2, 3, 4, 5, 6, 8, 10]
};

// Datos de medicamentos usados en Colombia
const medicamentos = [
  { nombre: "Acetaminofén", uso: "Analgesia y fiebre", presentacion: "Tabletas / Jarabe" },
  { nombre: "Amoxicilina", uso: "Antibiótico", presentacion: "Cápsulas / Suspensión" },
  { nombre: "Ibuprofeno", uso: "Antiinflamatorio", presentacion: "Tabletas / Gotas" },
  { nombre: "Omeprazol", uso: "Protector gástrico", presentacion: "Cápsulas" },
  { nombre: "Loratadina", uso: "Antialérgico", presentacion: "Tabletas" },
  { nombre: "Metformina", uso: "Antidiabético", presentacion: "Tabletas" },
  { nombre: "Salbutamol", uso: "Broncodilatador", presentacion: "Inhalador" }
];

// DOM
const selectCirugia = document.getElementById("tipoCirugia");
const tbody = document.querySelector("#tablaElementos tbody");
const medicamentosBody = document.querySelector("#tablaMedicamentos tbody");
const ctx = document.getElementById("graficoCategorias").getContext("2d");
let chart;

// Cargar tipos de cirugía
function cargarOpcionesCirugia() {
  tiposCirugia.forEach(c => {
    const option = document.createElement("option");
    option.value = c.id;
    option.textContent = c.nombre;
    selectCirugia.appendChild(option);
  });
}

// Mostrar elementos por cirugía
function mostrarElementos(cirugiaId) {
  tbody.innerHTML = "";

  if (!cirugiaId || !elementosPorCirugia[cirugiaId]) {
    tbody.innerHTML = "<tr><td colspan='3'>Seleccione un tipo de cirugía válido.</td></tr>";
    actualizarGrafico([]);
    return;
  }

  const ids = elementosPorCirugia[cirugiaId];
  const elementos = elementosQuirurgicos.filter(e => ids.includes(e.id));

  elementos.forEach(e => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${e.nombre}</td>
      <td>${e.categoria}</td>
      <td>${e.condiciones}</td>
    `;
    tbody.appendChild(tr);
  });

  const categorias = elementos.map(e => e.categoria);
  actualizarGrafico(categorias);
}

// Gráfico categorías
function actualizarGrafico(categorias) {
  const conteo = {};
  categorias.forEach(cat => conteo[cat] = (conteo[cat] || 0) + 1);

  const labels = Object.keys(conteo);
  const data = Object.values(conteo);

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Cantidad por categoría",
        data,
        backgroundColor: "rgba(41, 128, 185, 0.7)"
      }]
    },
    options: { responsive: true }
  });
}

// Cargar medicamentos
function cargarMedicamentos() {
  medicamentos.forEach(m => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${m.nombre}</td>
      <td>${m.uso}</td>
      <td>${m.presentacion}</td>
    `;
    medicamentosBody.appendChild(tr);
  });
}

// Eventos
selectCirugia.addEventListener("change", e => mostrarElementos(e.target.value));

// Inicializar
cargarOpcionesCirugia();
cargarMedicamentos();
mostrarElementos("");
