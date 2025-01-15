const fossilsData = [
    {
      eon: "Arqueano",
      era: "Precámbrico",
      period: "Hádico",
      fossils: "Primeras formas de vida microbiana (fósiles de estromatolitos), estromatolitos, microfósiles de cianobacterias",
      image: "images/fosilEstromatolitos.png",
      locations: "Canadá, Australia, Sudáfrica",
      fossilizationType: "Fosilización por reemplazo químico, estromatolitos",
      datingMethod: "Datación por isotopía de uranio-plomo",
      informacionFosil:"Proporcionan información sobre la fotosíntesis y el origen de la vida en la Tierra"
    },
    {
      eon: "Arqueano",
      era: "Precámbrico",
      period: "Arcaico",
      fossils: "Cianobacterias, primeros organismos fotosintéticos, cianobacterias, microfósiles de organismos primitivos",
      image: "images/fosilCianobacterias.png",
      locations: "Groenlandia, Sudáfrica",
      fossilizationType: "Impresión, fosilización microbiana",
      datingMethod: "Datación por radiactividad de isótopos de carbono-14",
      informacionFosil:"Evidencia de vida en la tierra más antigua."
    },
    {
      eon: "Arqueano",
      era: "Precámbrico",
      period: "Proterozoico",
      fossils: "Fósiles de organismos multicelulares simples (alga y esponjas), algas, esponjas, microfósiles de organismos multicelulares simples",
      image: "images/microfosiles.png",
      locations: "Canadá, Rusia, China",
      fossilizationType: "Fosilización por impresiones y carbono",
      datingMethod: "Datación por isotopía de uranio-plomo"
    },
    {
      eon: "Fanerozoico",
      era: "Paleozoico",
      period: "Cámbrico",
      fossils: "Primeros artrópodos, trilobites, braquiópodos, trilobites (Paradoxides), braquiópodos, anomalocarididos",
      image: "images/fosilTrilobites.png",
      locations: "Canadá, China, Marruecos",
      fossilizationType: "Fosilización por reemplazo mineral y moldes",
      datingMethod: "Datación por estratigrafía y radiometría de uranio"
    },
    {
      eon: "Fanerozoico",
      era: "Paleozoico",
      period: "Ordovícico",
      fossils: "Primeros peces (Acanthodii) y plantas terrestres, Acanthodii (peces), graptolitos, primeras plantas terrestres",
      image: "images/fosilGraptolitos.png",
      locations: "Reino Unido, Estados Unidos, Marruecos",
      fossilizationType: "Fosilización por reemplazo mineral, inclusiones en ámbar",
      datingMethod: "Datación por radiactividad de potasio-argón"
    },
    {
      eon: "Fanerozoico",
      era: "Paleozoico",
      period: "Silúrico",
      fossils: "Primeros animales terrestres, como arácnidos y milpiés, arácnidos (Palaeotarbus), milpiés, primeras plantas vasculares",
      image: "images/fosilPlantasVasculares.png",
      locations: "Escocia, China, Sudáfrica",
      fossilizationType: "Fosilización por carbonización, impresión",
      datingMethod: "Datación por carbono-14, análisis de estratos"
    },
    {
      eon: "Fanerozoico",
      era: "Paleozoico",
      period: "Devónico",
      fossils: "Primeros anfibios, peces con aletas lobuladas (fósiles de Tiktaalik), Tiktaalik (fósil de pez con aletas), Devonian Coelacanthus, primeros anfibios",
      image: "images/fosilTiktaalik.png",
      locations: "Canadá, Estados Unidos, Europa",
      fossilizationType: "Fosilización por descomposición rápida y carbonización",
      datingMethod: "Datación por estratigrafía, radiactividad de uranio"
    },
    {
      eon: "Fanerozoico",
      era: "Paleozoico",
      period: "Carbonífero",
      fossils: "Abundancia de insectos gigantes y primeros reptiles, insectos gigantes (Meganeura), reptilales (Dimetrodon), primeras plantas con semillas",
      image: "images/fosilInsectoGigante.png",
      locations: "Estados Unidos, Bélgica, Alemania",
      fossilizationType: "Inclusiones en ámbar, fosilización por petrificación",
      datingMethod: "Datación por carbono-14, datación por ámbar"
    },
    {
      eon: "Fanerozoico",
      era: "Paleozoico",
      period: "Pérmico",
      fossils: "Primeros mamíferos, reptiles sinápsidos (como Dimetrodon), Dimetrodon, primeros mamíferos (Morganucodon), plantas con semillas",
      image: "images/fosilDimetrodon.png",
      locations: "Rusia, China, Estados Unidos",
      fossilizationType: "Fosilización por descomposición rápida y petrificación",
      datingMethod: "Datación por radiometría de uranio-plomo"
    },
    {
      eon: "Fanerozoico",
      era: "Mesozoico",
      period: "Triásico",
      fossils: "Primeros dinosaurios, como Coelophysis, y los primeros mamíferos, Coelophysis, primeros dinosaurios y mamíferos (Eozostrodon)",
      image: "images/fosilEozostrodon.png",
      locations: "Alemania, Estados Unidos, China",
      fossilizationType: "Fosilización por reemplazo mineral, moldes",
      datingMethod: "Datación por estratigrafía, radiactividad de uranio"
    },
    {
      eon: "Fanerozoico",
      era: "Mesozoico",
      period: "Jurásico",
      fossils: "Dinosaurios herbívoros y carnívoros (como Allosaurus) y primeros pájaros (Archaeopteryx), Archaeopteryx (primer pájaro), Allosaurus, Brachiosaurus",
      image: "images/fosilArchaeopteryx.png",
      locations: "Alemania, Estados Unidos, China",
      fossilizationType: "Fosilización por reemplazo mineral, impresiones",
      datingMethod: "Datación por radiometría de potasio-argón"
    },
    {
      eon: "Fanerozoico",
      era: "Mesozoico",
      period: "Cretácico",
      fossils: "Dinosaurios como Tyrannosaurus rex y Triceratops, y mamíferos primitivos (como el Eomaia), Tyrannosaurus rex, Triceratops, Eomaia (mamífero), dinosaurios, Ámbar de Berlín",
      image: "images/fosilTyrannosaurus.png",
      locations: "Mongolia, Estados Unidos, Canadá",
      fossilizationType: "Fosilización por reemplazo mineral, ámbar",
      datingMethod: "Datación por carbono-14, radiactividad de uranio"
    },
    {
      eon: "Fanerozoico",
      era: "Cenozoico",
      period: "Paleógeno",
      fossils: "Mamíferos como el mamut, felinos y primeros cetáceos (fósiles de Basilosaurus), Mamut (Mammuthus), Basilosaurus (cetáceo), Hyaenodon",
      image: "images/fosilMamut.png",
      locations: "Egipto, Norteamérica, Rusia",
      fossilizationType: "Fosilización por mineralización, inclusiones en ámbar",
      datingMethod: "Datación por carbono-14, análisis de estratos"
    },
    {
      eon: "Fanerozoico",
      era: "Cenozoico",
      period: "Neógeno",
      fossils: "Diversificación de primates y grandes mamíferos (como el Mastodonte), Mastodonte (Mammut americanum), Hipparion (caballos), Sabre-tooth Tiger",
      image: "images/fosilDienteDeSable.png",
      locations: "África, Europa, América del Norte",
      fossilizationType: "Fosilización por petrificación, fósiles en ámbar",
      datingMethod: "Datación por radiometría de potasio-argón"
    },
    {
      eon: "Fanerozoico",
      era: "Cenozoico",
      period: "Cuaternario",
      fossils: "Fósiles de Homo sapiens y otros homínidos como Homo neanderthalensis, además de mamíferos extintos como el mamut y el mastodonte, Homo sapiens, Neanderthalensis, Mammuthus, Megafauna (Bisontes, Caballos)",
      image: "images/fosilOtzi.png",
      locations: "Europa, Asia, América del Norte, África",
      fossilizationType: "Fosilización por carbonización, impresiones, ámbar",
      datingMethod: "Datación por carbono-14, datación de estratos, termoluminiscencia"
    }
  ];
  

function generateFossilTable() {

  let eonCount = {};
  let eraCount = {};
  let lastEon = null;
  let lastEra = null;

  fossilsData.forEach(fossil => {
    if (lastEon !== fossil.eon) {
      eonCount[fossil.eon] = (eonCount[fossil.eon] || 0) + 1;
      lastEon = fossil.eon;
    } else {
      eonCount[fossil.eon]++;
    }

    if (lastEra !== fossil.era) {
      eraCount[fossil.era] = (eraCount[fossil.era] || 0) + 1;
      lastEra = fossil.era;
    } else {
      eraCount[fossil.era]++;
    }
  });

  lastEon = null;
  lastEra = null;

  let table =
    `<table>
        <thead>
            <tr>
                <th>Eón</th><th>Era</th>
                <th>Periodo</th>
                <th>Fósiles relevantes</th>
                <th></th>
                <th>Lugares de descubrimiento</th>
                <th>Tipo de fosilización</th>
                <th>Prueba realizada para datar</th>
            </tr>
        </thead>
    <tbody>`;

  fossilsData.forEach((fossil) => {
    table += '<tr>';
    
    if (lastEon !== fossil.eon) {
      table += `<td rowspan="${eonCount[fossil.eon]}">${fossil.eon}</td>`;
      lastEon = fossil.eon;
    }
    
    if (lastEra !== fossil.era) {
      table += `<td rowspan="${eraCount[fossil.era]}">${fossil.era}</td>`;
      lastEra = fossil.era;
    }

    table += `
          <td>${fossil.period}</td>
          <td>${fossil.fossils}</td>
          <td><img src="${fossil.image}" style="width: 100px; height: auto;"></td>
          <td>${fossil.locations}</td>
          <td>${fossil.fossilizationType}</td>
          <td>${fossil.datingMethod}</td>
        </tr>
    `;
  });

  table += "</tbody></table>";
  document.getElementById("container").innerHTML = table;
}

generateFossilTable();
