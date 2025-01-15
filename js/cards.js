// Referencias al contenedor de las cards y al modal
const cardContainer = document.getElementById("cardContainer");
const modal = document.getElementById("infoModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

// Función para crear las cards dinámicamente
function createCards(category, data) {
  const { descripcion, lista } = data;
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h2>${category.toUpperCase()}</h2>
    <p>${descripcion}</p>
  `;
  card.addEventListener("click", () => showModal(category, data));
  cardContainer.appendChild(card);
}

// Función para mostrar el modal con detalles
function showModal(category, data) {
  const { descripcion, lista } = data;

  modalContent.innerHTML = `
    <h2>${category.toUpperCase()}</h2>
    <p>${descripcion}</p>
    ${Object.entries(lista)
      .map(
        ([key, value]) => `
            <h3>${key.toUpperCase()}</h3>
            <p><strong>Período:</strong> ${value.periodo}</p>
            <p><strong>Duración:</strong> ${value.duracion || "N/A"}</p>
            <p><strong>Clima:</strong> ${value.clima}</p>
            <p><strong>Tectónica:</strong> ${value.tectonica}</p>
            <p><strong>Biota:</strong> ${value.biota}</p>
            <p><strong>Dato curioso:</strong> ${value.datoCurioso}</p>
          `
      )
      .join("")}
  `;
  modal.style.display = "flex";
}

// Cerrar el modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Crear las cards al cargar la página
createCards("eones", historiaGeologica.eones);
createCards("eras", historiaGeologica.eras);
