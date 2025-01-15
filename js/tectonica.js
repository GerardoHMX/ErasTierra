const container = document.getElementById("container");
const table = document.createElement("table");

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const headers = ["Período", "Duración", "", "Eventos", "Aspectos importantes"];
headers.forEach(headerText => {
  const th = document.createElement("th");
  th.textContent = headerText;
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");
pangeaSeparation.forEach(periodoData => {
    const maxRows = Math.max(periodoData.eventos.length, periodoData.aspectos.length);
  
    const row = document.createElement("tr");
  
    const periodoCell = document.createElement("td");
    periodoCell.rowSpan = maxRows;
    periodoCell.textContent = periodoData.periodo;
    row.appendChild(periodoCell);
  
    const duracionCell = document.createElement("td");
    duracionCell.rowSpan = maxRows;
    duracionCell.textContent = periodoData.duracion;
    row.appendChild(duracionCell);
    
    const imageCell = document.createElement("td");
    const image = document.createElement("img");
    image.src = periodoData.imagen;
    image.style.width = "100px";
    imageCell.rowSpan = maxRows;
    imageCell.appendChild(image);
    row.appendChild(imageCell);
  
    const eventoCell = document.createElement("td");
    eventoCell.textContent = periodoData.eventos[0];
    row.appendChild(eventoCell);
  
    const aspectoCell = document.createElement("td");
    aspectoCell.textContent = periodoData.aspectos[0];
    row.appendChild(aspectoCell);
  
    tbody.appendChild(row);
  
    for (let i = 1; i < maxRows; i++) {
      const extraRow = document.createElement("tr");
  
      const extraEventoCell = document.createElement("td");
      extraEventoCell.textContent = periodoData.eventos[i] || "";
      extraRow.appendChild(extraEventoCell);
  
      const extraAspectoCell = document.createElement("td");
      extraAspectoCell.textContent = periodoData.aspectos[i] || "";
      extraRow.appendChild(extraAspectoCell);
  
      tbody.appendChild(extraRow);
    }
  });
  
  table.appendChild(tbody);
  container.appendChild(table);
