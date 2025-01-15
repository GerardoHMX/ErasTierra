const btnTabla = document.getElementById("verTabla");
const btnCalendario = document.getElementById("verCalendario");

const crearTablaHTML = () => `
  <h1>Escala global estándar del tiempo geológico</h1>
  <table id="tabla-geologica">
    <thead>
      <tr>
        <th width="10%">Supereón</th>
        <th width="10%">Eón <br> Eonotema</th>
        <th colspan="2">Era <br> Eratema</th>
        <th width="10%">Período <br> Sistema</th>
        <th width="10%">Época <br> Serie</th>
        <th width="10%">Etapa <br> Edad</th>
        <th width="10%">Tiempo<br>(Millones de años)</th>
        <th width="30%">Eventos Relevantes</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
`;

const crearcalendarioHTML = () => `
  <h1>Escala global estándar del tiempo geológico como calendario</h1>
  <div id="calendar" class="calendar"></div>
  <div class="legend">
      <div class="legend-item">
        <div class="legend-color precambrico"></div>
        <div class="legend-title">Precámbrico</div>
        <div class="legend-duration">El Precámbrico es el eón más largo de la historia geológica de la Tierra y abarca aproximadamente 4,060 millones de años, desde la formación del planeta hace unos 4,540 millones de años hasta el inicio del período Cámbrico, hace 540 millones de años.</div>
        <div class="legend-description">Se divide en tres eones principales:
          <ul>
            <li>Hádico (4,540 - 4,000 millones de años atrás).</li>
            <li>Arcaico (4,000 - 2,500 millones de años atrás).</li>
            <li>Proterozoico (2,500 - 540 millones de años atrás).</li>
          </ul>
        </div>
        <div class="legend-periods">Durante este tiempo se formó la corteza terrestre, aparecieron los primeros océanos, surgió la vida primitiva (microorganismos) y aumentó el oxígeno en la atmósfera gracias a la fotosíntesis.</div>
      </div>
      <div class="legend-item">
        <div class="legend-color primaria"></div>
        <div class="legend-title">Era Primaria</div>
        <div class="legend-duration">La Era Primaria, también conocida como Paleozoico, tuvo una duración aproximada de 290 millones de años, abarcando desde hace 541 millones de años hasta hace 252 millones de años.</div>
        <div class="legend-description">Se divide en seis períodos principales:
          <ul>
            <li>Cámbrico (541 - 485 millones de años).</li>
            <li>Ordovícico (485 - 444 millones de años).</li>
            <li>Silúrico (444 - 419 millones de años).</li>
            <li>Devónico (419 - 359 millones de años).</li>
            <li>Carbonífero (359 - 299 millones de años).</li>
            <li>Pérmico (299 - 252 millones de años).</li>
          </ul>
        </div>
        <div class="legend-periods">El Paleozoico fue una era de grandes cambios, marcada por la aparición de organismos multicelulares complejos, el desarrollo de los primeros vertebrados y plantas terrestres, y la formación del supercontinente Pangea. Terminó con la extinción masiva del Pérmico-Triásico, la más severa en la historia de la Tierra.</div>
      </div>
      <div class="legend-item">
        <div class="legend-color secundaria"></div>
        <div class="legend-title">Era Secundaria</div>
        <div class="legend-duration">La Era Secundaria, también conocida como Mesozoico, tuvo una duración aproximada de 186 millones de años, abarcando desde hace 252 millones de años hasta hace 66 millones de años.</div>
        <div class="legend-description">Se divide en tres períodos principales:
          <ul>
            <li>Cretácico (145 - 66 millones de años).</li>
            <li>Jurásico (201 - 145 millones de años).</li>
            <li>Triásico (252 - 201 millones de años).</li>
          </ul>
        </div>
        <div class="legend-periods">El Mesozoico es conocido como la "era de los dinosaurios", ya que estos dominaron los ecosistemas terrestres. También se desarrollaron las primeras aves, mamíferos primitivos y plantas con flores. La era terminó con la extinción masiva del Cretácico-Paleógeno, causada probablemente por el impacto de un asteroide, que marcó el fin de los dinosaurios no aviares.</div>
      </div>
      <div class="legend-item">
        <div class="legend-color terciaria"></div>
        <div class="legend-title">Era Terciaria</div>
        <div class="legend-duration">La Era Terciaria, tradicionalmente parte de la escala geológica clásica, corresponde aproximadamente al período que va desde hace 66 millones de años hasta hace 2,58 millones de años, abarcando una duración de 63,42 millones de años.</div>
        <div class="legend-description">En la escala geológica moderna, el Terciario ha sido reemplazado por dos períodos dentro de la Era Cenozoica:
          <ul>
            <li>Paleógeno (66 - 23 millones de años).</li>
            <li>Neógeno (23 - 2,58 millones de años).</li>
          </ul>
        </div>
        <div class="legend-periods">Durante este tiempo, los mamíferos y las aves se diversificaron enormemente, los continentes alcanzaron posiciones cercanas a las actuales, y el clima fue cambiando progresivamente, culminando en el inicio de las glaciaciones del Cuaternario.</div>
      </div>
      <div class="legend-item">
        <div class="legend-color cuaternaria"></div>
        <div class="legend-title">Era Cuaternaria</div>
        <div class="legend-duration">La Era Cuaternaria, la más reciente en la historia geológica, comenzó hace aproximadamente 2,58 millones de años y continúa hasta el presente, por lo que su duración actual es de 2,58 millones de años y contando.</div>
        <div class="legend-description">Se divide en dos períodos principales:
          <ul>
            <li>Pleistoceno (2,58 millones - 11,700 años atrás): caracterizado por repetidos ciclos de glaciaciones e interglaciaciones.</li>
            <li>Holoceno (11,700 años atrás - presente): representa el período interglaciar actual y el tiempo en el que se han desarrollado las civilizaciones humanas.</li>
          </ul>
        </div>
        <div class="legend-periods">El Cuaternario se caracteriza por la aparición y evolución de los seres humanos modernos (Homo sapiens), la megafauna del Pleistoceno y los cambios climáticos que dieron forma a los ecosistemas actuales.</div>
      </div>
    </div>
`;

// Función para crear una celda con rowspan
const crearCeldaRowspan = (
  contenido,
  noBorder = false,
  rowspan = null,
  colspan = null,
  duracion = null,
  descripcion = null,
  intervalo = null,
  tectonica = null,
  clima = null,
  biologia = null,
  eventosRelevantes = null,
  biota = null
) => {
  let clase = null;
  let contenidoCelda = contenido ? "<b>" + contenido + "</b>" : "";

  if (noBorder) {
    clase = "noBorder";
  }
  if (descripcion) {
    contenidoCelda += `<hr><br><b>${descripcion}</b> `;
  }
  if (duracion) {
    contenidoCelda += `<hr><br>Duración: ${duracion} `;
  }
  if (intervalo) {
    contenidoCelda += `<hr><br>Intervalo: ${intervalo} `;
  }
  if (tectonica) {
    contenidoCelda += `<hr><br>Tectónica: ${tectonica} `;
  }
  if (clima) {
    contenidoCelda += `<hr><br>Clima: ${clima} `;
  }
  if (biologia) {
    contenidoCelda += `<hr><br>Biología: ${biologia} `;
  }
  if (eventosRelevantes) {
    contenidoCelda += `<hr><br>Eventos Relevantes: ${eventosRelevantes} `;
  }
  if (biota) {
    contenidoCelda += `<hr><br>Biota: ${biota} `;
  }
  const atributos = [
    rowspan && `rowspan="${rowspan}"`,
    colspan && `colspan="${colspan}"`,
    clase && `class="${clase}"`,
  ]
    .filter(Boolean)
    .join(" ");
  return `<td ${atributos}>${contenidoCelda}</td>`;
};

// Función para crear una celda simple
const crearCelda = (
  contenido,
  rowspan = null,
  colspan = null,
  number = null
) => {
  const atributos = [
    rowspan && `rowspan="${rowspan}"`,
    colspan && `colspan="${colspan}"`,
  ]
    .filter(Boolean)
    .join(" ");

  if (colspan) {
    contenido = `<b>${contenido || ""}</b>`;
  }

  return `<td ${atributos} ${number ? 'class="number"' : ""}> ${
    contenido || ""
  }</td>`;
};

// Función para crear una celda con clase noBorder
const crearCeldaEvento = (contenido, rowspan) =>
  `<td rowspan="${rowspan}" class="noBorder">${contenido || ""}</td>`;

const container = document.getElementById("container");
container.innerHTML = crearTablaHTML();

const dataTabla = document
  .getElementById("tabla-geologica")
  .querySelector("tbody");

generarTablaGeologica(tiempoGeologico, dataTabla);
btnTabla.classList.add("active");

function generarTablaGeologica(tiempoGeologico, dataTabla) {
  tiempoGeologico.forEach((supereon) => {
    supereon.eones.forEach((eon, eonIndex) => {
      eon.eras.forEach((era, eraIndex) => {
        const eraRowSpan = era.rowspan || 1;

        if (era.periodos) {
          era.periodos.forEach((periodo, periodoIndex) => {
            const periodoRowSpan = periodo.rowspan || 1;

            if (periodo.epocas) {
              periodo.epocas.forEach((epoca, epocaIndex) => {
                if (epoca.edades) {
                  epoca.edades.forEach((edad, edadIndex) => {
                    const row = document.createElement("tr");
                    let html = "";

                    if (
                      eonIndex === 0 &&
                      eraIndex === 0 &&
                      periodoIndex === 0 &&
                      epocaIndex === 0 &&
                      edadIndex === 0
                    ) {
                      html += crearCeldaRowspan(
                        supereon.Supereon,
                        false,
                        supereon.rowspan,
                        null,
                        supereon.duracion,
                        supereon.intervalo
                      );
                    }

                    if (
                      (eonIndex === 0 || eonIndex !== 0) &&
                      eraIndex === 0 &&
                      periodoIndex === 0 &&
                      epocaIndex === 0 &&
                      edadIndex === 0
                    ) {
                      html += crearCeldaRowspan(
                        eon.eon,
                        false,
                        eon.rowspan,
                        null,
                        eon.duracion,
                        eon.intervalo
                      );
                    }

                    if (
                      (eraIndex === 0 || eraIndex !== 0) &&
                      periodoIndex === 0 &&
                      epocaIndex === 0 &&
                      edadIndex === 0
                    ) {
                      html += crearCeldaRowspan(
                        era.era,
                        true,
                        eraRowSpan,
                        null
                      );
                      html += crearCeldaRowspan(
                        null,
                        false,
                        eraRowSpan,
                        null,
                        era.duracion,
                        era.descripcion,
                        era.intervalo,
                        era.tectonica,
                        era.clima,
                        era.biologia,
                        era.eventosRelevantes,
                        era.biota
                      );
                    }

                    if (
                      (periodoIndex === 0 || periodoIndex !== 0) &&
                      epocaIndex === 0 &&
                      edadIndex === 0
                    ) {
                      html += crearCeldaRowspan(
                        periodo.periodo,
                        false,
                        periodoRowSpan,
                        null
                      );
                    }

                    if (
                      (epocaIndex === 0 || epocaIndex !== 0) &&
                      edadIndex === 0
                    ) {
                      html += crearCeldaRowspan(
                        epoca.epoca,
                        false,
                        epoca.rowspan,
                        null
                      );
                    }

                    html += crearCeldaRowspan(edad.edad, false);
                    html += crearCelda(
                      edad.termina || epoca.termina,
                      null,
                      null,
                      true
                    );

                    if (
                      (epocaIndex === 0 || epocaIndex !== 0) &&
                      edadIndex === 0
                    ) {
                      html += crearCeldaEvento(
                        epoca.eventosRelevantes,
                        epoca.rowspan
                      );
                    }

                    row.innerHTML = html;
                    dataTabla.appendChild(row);
                  });
                } else {
                  const row = document.createElement("tr");
                  let html = "";

                  if (
                    eonIndex === 0 &&
                    eraIndex === 0 &&
                    periodoIndex === 0 &&
                    epocaIndex === 0
                  ) {
                    html += crearCeldaRowspan(
                      supereon.Supereon,
                      false,
                      supereon.rowspan,
                      null,
                      supereon.duracion,
                      supereon.intervalo
                    );
                  }

                  if (
                    eonIndex === 0 &&
                    eraIndex === 0 &&
                    periodoIndex === 0 &&
                    epocaIndex === 0
                  ) {
                    html += crearCeldaRowspan(
                      eon.eon,
                      false,
                      eon.rowspan,
                      null,
                      eon.duracion,
                      eon.intervalo
                    );
                  }

                  if (
                    eraIndex === 0 &&
                    periodoIndex === 0 &&
                    epocaIndex === 0
                  ) {
                    html += crearCeldaRowspan(
                      era.era,
                      true,
                      eraRowSpan,                      
                      era.duracion,
                      era.descripcion,
                      era.intervalo,
                      era.tectonica,
                      era.clima,
                      era.biologia,
                      era.eventosRelevantes,
                      era.biota
                    );
                    html += crearCeldaRowspan(
                      null,
                      false,
                      eraRowSpan,                      
                      era.duracion,
                      era.descripcion,
                      era.intervalo,
                      era.tectonica,
                      era.clima,
                      era.biologia,
                      era.eventosRelevantes,
                      era.biota
                    );
                  }

                  if (periodoIndex === 0 && epocaIndex === 0) {
                    html += crearCeldaRowspan(
                      periodo.periodo || epoca.periodo,
                      false,
                      periodoRowSpan,
                      null
                    );
                  }

                  html += crearCelda(epoca.epoca);
                  html += crearCelda(epoca.termina, null, null, true);
                  html += crearCeldaEvento(
                    epoca.eventosRelevantes || era.eventosRelevantes,
                    epoca.rowspan
                  );

                  row.innerHTML = html;
                  dataTabla.appendChild(row);
                }
              });
            }
          });
        } else if (era.epocas) {
          era.epocas.forEach((epoca, epocaIndex) => {
            const row = document.createElement("tr");
            let html = "";

            if (epocaIndex === 0 && eonIndex === 0 && eraIndex === 0) {
              html += crearCeldaRowspan(
                supereon.Supereon,
                false,
                supereon.rowspan,
                null,
                supereon.duracion,
                supereon.intervalo
              );
            }

            if (epocaIndex === 0 && eonIndex === 0 && eraIndex === 0) {
              html += crearCeldaRowspan(
                eon.eon,
                false,
                eon.rowspan,
                null,
                eon.duracion,
                eon.intervalo
              );
            }

            if (epocaIndex === 0 && (eraIndex === 0 || eraIndex !== 0)) {
              html += crearCeldaRowspan(era.era, true, eraRowSpan, null);
              html += crearCeldaRowspan(
                null,
                false,
                eraRowSpan,
                null,
                era.duracion,
                era.descripcion,
                era.intervalo,
                era.tectonica,
                era.clima,
                era.biologia,
                era.eventosRelevantes,
                era.biota
              );
            }

            html += crearCelda(epoca.epoca, null, epoca.colspan);
            html += crearCelda(epoca.termina, null, null, true);
            html += crearCeldaEvento(epoca.eventosRelevantes, epoca.rowspan);

            row.innerHTML = html;
            dataTabla.appendChild(row);
          });
        } else {
          const row = document.createElement("tr");
          let html = "";

          if (eonIndex === 0 && eraIndex === 0) {
            html += crearCeldaRowspan(
              supereon.Supereon,
              false,
              supereon.rowspan,
              null,
              supereon.duracion,
              supereon.intervalo
            );
          }

          if (eon.eras.length > 1) {
            if ((eonIndex === 0 || eonIndex !== 0) && eraIndex === 0) {
              html += crearCeldaRowspan(
                eon.eon,
                false,
                eon.rowspan,
                null,
                eon.duracion,
                eon.intervalo
              );
            }

            html += crearCeldaRowspan(era.era, true, null, null);
            html += crearCeldaRowspan(
              null,
              false,
              null,
              era.colspan,
              era.duracion,
              era.descripcion,
              era.intervalo,
              era.tectonica,
              era.clima,
              era.biologia,
              era.eventosRelevantes,
              era.biota
            );
            html += crearCelda(era.termina, null, null, true);
            html += crearCeldaEvento(era.eventosRelevantes, era.rowspan);
          } else {
            html += crearCeldaRowspan(eon.eon, true, null, null);
            html += crearCeldaRowspan(
              null,
              false,
              null,
              eon.colspan,
              eon.duracion,
              eon.descripcion,
              eon.intervalo,
              eon.tectonica,
              eon.clima,
              eon.biologia,
              eon.eventosRelevantes,
              eon.biota
            );
            html += crearCelda(eon.termina, null, null, true);
            html += crearCeldaEvento(eon.eventosRelevantes, eon.rowspan);
          }

          row.innerHTML = html;
          dataTabla.appendChild(row);
        }
      });
    });
  });
}

function generarCalendarioGeologico() {
  container.innerHTML = crearcalendarioHTML();

  // Generar calendario
  const calendarElement = document.getElementById("calendar");
  calendarData.forEach((mes) => {
    const separadorMes = document.createElement("div");
    separadorMes.className = "mes";

    // Añadir nombre del mes
    const monthElement = document.createElement("div");
    monthElement.className = "nombreMes";
    monthElement.textContent = mes.mes;
    separadorMes.appendChild(monthElement);

    // Añadir días del mes
    for (let i = 1; i <= mes.diasMes; i++) {
      const dayElement = document.createElement("div");
      const eraActual = mes.eras.find((era) => era.key >= i);
      dayElement.className = `dia ${eraActual.value}`;
      dayElement.textContent = i;
      separadorMes.appendChild(dayElement);
    }

    if (mes.diasMes < 31) {
      for (let i = mes.diasMes + 1; i <= 31; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.className = "dia";
        separadorMes.appendChild(emptyDay);
      }
    }

    calendarElement.appendChild(separadorMes);
  });
}

btnTabla.addEventListener("click", () => {
  container.innerHTML = crearTablaHTML();
  const dataTabla = document
    .getElementById("tabla-geologica")
    .querySelector("tbody");
  generarTablaGeologica(tiempoGeologico, dataTabla);
  btnTabla.classList.add("active");
  btnCalendario.classList.remove("active");
});

btnCalendario.addEventListener("click", () => {
  container.innerHTML = "";
  generarCalendarioGeologico();
  btnCalendario.classList.add("active");
  btnTabla.classList.remove("active");
});
