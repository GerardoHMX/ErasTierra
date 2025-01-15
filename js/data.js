// Escala global estándar del tiempo geológico
//https://www.britannica.com/science/value - geologic - time
const tiempoGeologico = [
  {
    Supereon: "",
    eones: [
      {
        eon: "Fanerozoico",
        eras: [
          {
            value: "Cenozoico",
            periodos: [
              {
                periodo: "Cuaternario",
                inicia: "0,0",
                termina: "2,58",
                epocas: [
                  {
                    epoca: "Holoceno",
                    edades: [
                      { edad: "Megalayense", termina: "0,0042" },
                      { edad: "Norgripiense", termina: "0,0082" },
                      { edad: "Groenlandiense", termina: "0,0117" },
                    ],
                    intervalo: "0,0042 - 0,0117",
                    duracion: "0,0075",
                    rowspan: 3,
                    eventosRelevantes:
                      "Fin de la glaciación reciente y surgimiento de la civilización humana.",
                  },
                  {
                    epoca: "Pleistoceno",
                    edades: [
                      { edad: "Tarantiense", termina: "0,129" },
                      { edad: "Chibaniense", termina: "0,774" },
                      { edad: "Calabriense", termina: "1,8" },
                      { edad: "Gelasiense", termina: "2,58" },
                    ],
                    intervalo: "0,129 - 2,58",
                    duracion: "2,451",
                    rowspan: 4,
                    eventosRelevantes:
                      "Florecimiento y posterior extinción de muchos grandes mamíferos (megafauna del Pleistoceno). Aparece Homo habilis y se desarrollan los humanos anatómicamente modernos. Da comienzo la reciente Edad de Hielo.",
                  },
                ],
                rowspan: 7,
              },
              {
                periodo: "Neógeno",
                inicia: "2,58",
                termina: "23.03",
                epocas: [
                  {
                    epoca: "Plioceno",
                    edades: [
                      { edad: "Piacenziense", termina: "3,600" },
                      { edad: "Zancliense", termina: "5,333" },
                    ],
                    rowspan: 2,
                    intervalo: "3,600 - 5,333",
                    duracion: "1,733",
                    eventosRelevantes:
                      "Clima frío y seco. Aparecen los Australopithecina, varios géneros de los mamíferos existentes y los moluscos recientes. Se forma el istmo de Panamá, provocando el Gran Intercambio Americano.",
                  },
                  {
                    epoca: "Mioceno",
                    edades: [
                      { edad: "Messiniense", termina: "7,246" },
                      { edad: "Tortoniense", termina: "11,63" },
                      { edad: "Serravalliense", termina: "13,82" },
                      { edad: "Langhiense", termina: "15,98" },
                      { edad: "Burdigaliense", termina: "20,44" },
                      { edad: "Aquitaniense", termina: "23,03" },
                    ],
                    rowspan: 6,
                    intervalo: "7,246 - 23,03",
                    duracion: "15,784",
                    eventosRelevantes:
                      "Clima moderado; orogenia en el hemisferio norte. Desecación del Mediterráneo en el Mesiniense. Se hacen reconocibles las familias de los mamíferos y aves modernos. Los caballos y los mastodontes se diversifican. Primeros bosques de Laminariales; la hierba se hace ubicua. Aparecen los primeros simios.",
                  },
                ],
                rowspan: 8,
              },
              {
                periodo: "Paleógeno",
                inicia: "23,03",
                termina: "66",
                epocas: [
                  {
                    epoca: "Oligoceno",
                    edades: [
                      { edad: "Chattiense", termina: "28,1" },
                      { edad: "Rupeliense", termina: "33,9" },
                    ],
                    rowspan: 2,
                    intervalo: "28,1 - 33,9",
                    duracion: "5,8",
                    eventosRelevantes:
                      "Clima cálido; rápida evolución y diversificación de la fauna, especialmente mamíferos. Importante evolución y dispersión de modernos tipos de plantas con flor. Orogenia Alpina. Formación de la corriente Circumpolar Antártica y congelación de la Antártida.",
                  },
                  {
                    epoca: "Eoceno",
                    edades: [
                      { edad: "Priaboniense", termina: "37,71" },
                      { edad: "Bartoniense", termina: "41,2" },
                      { edad: "Luteciense", termina: "47,8" },
                      { edad: "Ypresiense", termina: "56,0" },
                    ],
                    rowspan: 4,
                    intervalo: "37,71 - 56,0",
                    duracion: "18,29",
                    eventosRelevantes:
                      "Extinción de final del Eoceno («Gran Ruptura» de Stehlin). Prosperan los mamíferos arcaicos (Creodonta, Condylarthra, Uintatheriidae, etc.) y continúan su desarrollo durante esta época. Aparición de varias familias modernas de mamíferos. Las ballenas primitivas se diversifican. Primeras hierbas. India colisiona con Asia. Máximo térmico del Paleoceno - Eoceno. Disminución del dióxido de carbono. Aparecen capas de hielo en la Antártida.",
                  },
                  {
                    epoca: "Paleoceno",
                    edades: [
                      { edad: "Thanetiense", termina: "59,2" },
                      { edad: "Selandiense", termina: "61,6" },
                      { edad: "Daniense", termina: "66,0" },
                    ],
                    rowspan: 3,
                    intervalo: "59,2 - 66,0",
                    duracion: "6,8",
                    eventosRelevantes:
                      "Clima tropical. Aparecen las plantas modernas; los mamíferos se diversifican en varios linajes primitivos tras el evento de extinción del Cretácico - Paleógeno. Primeros mamíferos grandes (osos y pequeños hipopótamos).",
                  },
                ],
                rowspan: 9,
              },
            ],
            rowspan: 24,
            intervalo: "0,0 - 66,0",
            duracion: "66,0",
            descripcion: "Cenozoico",
            tectonica:
              "Época en que los continentes se trasladaron a sus posiciones actuales.",
            clima:
              "Cálido y húmedo, con grandes extensiones de selva tropical.",
            biologia:
              "Período de gran evolución biológica, con la aparición de los primeros mamíferos, aves, reptiles y plantas modernas.",
            eventosRelevantes:
              "Extinción de los dinosaurios. Diversificación de los mamíferos y evolución de los primates. Aparición del Homo sapiens. Formación de los continentes modernos y cambios en el clima.",
            biota:
              "Rica en mamíferos, aves, reptiles y plantas modernas, con la aparición de la civilización humana.",
          },
          {
            value: "Mesozoico",
            periodos: [
              {
                periodo: "Cretácico",
                inicia: "66,0",
                termina: "145,0",
                epocas: [
                  {
                    epoca: "Superrio/Tardío",
                    edades: [
                      { edad: "Maastrichtiense", termina: "72,1±0,2" },
                      { edad: "Campaniense", termina: "83,6±0,2" },
                      { edad: "Santoniense", termina: "86,3±0,5" },
                      { edad: "Coniaciense", termina: "89,8±0,3" },
                      { edad: "Turoniense", termina: "93,9" },
                      { edad: "Cenomaniense", termina: "100,5" },
                    ],
                    rowspan: 6,
                    intervalo: "72,1 - 100,5",
                    duracion: "28,4",
                    eventosRelevantes:
                      "Proliferan las plantas con flor (angiospermas) y nuevos tipos de insectos. Empiezan a aparecer peces teleósteos más modernos. Son comunes ammonites, belemnites, bivalvos rudistas, equinoides y esponjas. Varios tipos de dinosaurios (como tiranosáuridos, titanosáuridos, hadrosáuridos, y ceratópsidos) evolucionaron en tierra, así como los cocodrilos modernos; mosasaurios y tiburones modernos aparecieron en el mar.",
                  },
                  {
                    epoca: "Inferior/Temprano",
                    edades: [
                      { edad: "Albiense", termina: "~113,0" },
                      { edad: "Aptiense", termina: "~121.4" },
                      { edad: "Barremiense", termina: "125,77" },
                      { edad: "Hauteriviense", termina: "~132,6" },
                      { edad: "Valanginiense", termina: "~139,8" },
                      { edad: "Berriasiense", termina: "~145,0" },
                    ],
                    rowspan: 6,
                    intervalo: "113,0 - 145,0",
                    duracion: "32,0",
                    eventosRelevantes:
                      "Las aves primitivas remplazaron gradualmente a los pterosaurios. Aparecieron monotremas, marsupiales y mamíferos placentarios. Ruptura de Gondwana.",
                  },
                ],
                rowspan: 12,
              },
              {
                periodo: "Jurásico",
                inicia: "145,0",
                termina: "201,3",
                epocas: [
                  {
                    epoca: "Superrio/Tardío",
                    edades: [
                      { edad: "Titoniense", termina: "149,2±0,7" },
                      { edad: "Kimmeridgiense", termina: "154,8±0,8" },
                      { edad: "Oxfordiense", termina: "161,5±1,0" },
                    ],
                    rowspan: 3,
                    intervalo: "149,2 - 161,5",
                    duracion: "12,3",
                    eventosRelevantes:
                      "Son comunes gimnospermas (especialmente coníferas, Bennettitales y cicadas) y helechos. Muchos tipos de dinosaurios, como saurópodos, carnosaurios, y estegosaurios.",
                  },
                  {
                    epoca: "Medio",
                    edades: [
                      { edad: "Calloviense", termina: "165,3±1,1" },
                      { edad: "Bathoniense", termina: "168,2±1,2" },
                      { edad: "Bajociense", termina: "170,9±0,8" },
                      { edad: "Aaleniense", termina: "174,7±0,8" },
                    ],
                    rowspan: 4,
                    intervalo: "165,3 - 174,7",
                    duracion: "9,4",
                    eventosRelevantes:
                      "Los mamíferos son comunes, pero pequeños. Primeras aves y lagartos. Ictiosaurios y plesiosaurios se diversifican. Bivalvos, ammonites y belemnites abundan.",
                  },
                  {
                    epoca: "Inferior / Temprano",
                    edades: [
                      { edad: "Toarciense", termina: "184,2±0,3" },
                      { edad: "Pliensbachiense", termina: "192,9±0,3" },
                      { edad: "Sinemuriense", termina: "199,3±0,3" },
                      { edad: "Hettangiense", termina: "201,4±0,2" },
                    ],
                    rowspan: 4,
                    intervalo: "184,2 - 201,4",
                    duracion: "17,2",
                    eventosRelevantes:
                      "Los erizos de mar son muy comunes, junto con crinoides, estrellas de mar, esponjas, y braquiópodos terebratúlidos y rinconélidos. Ruptura de Pangea en Gondwana y Laurasia.",
                  },
                ],
                rowspan: 11,
              },
              {
                periodo: "Triásico",
                inicia: "201,3",
                termina: "251.902",
                epocas: [
                  {
                    epoca: "Superrio/Tardío",
                    edades: [
                      { edad: "Rhaetiense", termina: "~208,5" },
                      { edad: "Noriense", termina: "~227" },
                      { edad: "Carniense", termina: "~237" },
                    ],
                    rowspan: 3,
                    intervalo: "208,5 - 237",
                    duracion: "28,5",
                    eventosRelevantes:
                      "Los arcosaurios dominan en tierra como dinosaurios, en los océanos como ictiosaurios y notosaurios, y en el cielo como pterosaurios. Los cinodontos se hacen más pequeños y se asemejan cada vez más a un mamífero.",
                  },
                  {
                    epoca: "Medio",
                    edades: [
                      { edad: "Ladiniense", termina: "~242" },
                      { edad: "Anisiense", termina: "247,2" },
                    ],
                    rowspan: 2,
                    intervalo: "242 - 247,2",
                    duracion: "5,2",
                    eventosRelevantes:
                      "Aparecen los primeros mamíferos y el orden crocodilia. Plantas del género Dicroidium eran comunes en tierra. Muchos grandes anfibios acuáticos temnospóndilos.",
                  },
                  {
                    epoca: "Inferior / Temprano",
                    edades: [
                      { edad: "Olenekiense", termina: "251,2" },
                      { edad: "Induense", termina: "251,902±0,024" },
                    ],
                    rowspan: 2,
                    intervalo: "251,2 - 251,902",
                    duracion: "0,702",
                    eventosRelevantes:
                      "Ammonoideos ceratíticos extremadamente comunes. Aparecen los corales modernos y los peces óseos (teleósteos), así como muchos de los clados modernos de insectos.",
                  },
                ],
                rowspan: 7,
              },
            ],
            rowspan: 30,
            intervalo: "66,0 - 251,902",
            duracion: "185,902",
            descripcion: "Mesozoico",
            tectonica:
              "Período de gran actividad tectónica, con la formación de los continentes actuales y la ruptura de Pangea.",
            clima:
              "Cálido y húmedo, con grandes extensiones de selva tropical.",
            biologia:
              "Período de gran evolución biológica, con la aparición de los dinosaurios y la diversificación de la fauna.",
            eventosRelevantes:
              "Extinción del Cretácico - Paleógeno y surgimiento de la civilización humana.",
            biota:
              "Rica en dinosaurios, reptiles y aves, con la aparición de los primeros mamíferos y la diversificación de la fauna.",
          },
          {
            value: "Paleozoico",
            periodos: [
              {
                periodo: "Pérmico",
                inicia: "251.902",
                termina: "298,9",
                epocas: [
                  {
                    epoca: "Lopingiense",
                    edades: [
                      { edad: "Changhsingiense", termina: "254,14±0,07" },
                      { edad: "Wuchiapingiense", termina: "259,51±0,21" },
                    ],
                    rowspan: 2,
                    intervalo: "254,14 - 259,51",
                    duracion: "5,37",
                    eventosRelevantes:
                      "Las tierras emergidas se unen formando el supercontinente Pangea, creando los Apalaches. Fin de la glaciación permo - carbonífera. Los reptiles sinápsidos (pelicosaurios y terápsidos) se hacen abundantes, siguen siendo comunes los parareptiles y anfibios temnospóndilos.",
                  },
                  {
                    epoca: "Guadalupiense",
                    edades: [
                      { edad: "Capitaniense", termina: "264,28±0,16" },
                      { edad: "Wordiense", termina: "266,9±0,4" },
                      { edad: "Roadiense", termina: "273,01±0,14" },
                    ],
                    rowspan: 3,
                    intervalo: "264,28 - 273,01",
                    duracion: "8,73",
                    eventosRelevantes:
                      "Durante el Pérmico Medio, la flora del carbonífero es reemplazada por gimnospermas con estróbilos (las primeras plantas con semilla verdaderas) y los primeros musgos verdaderos. Evolucionan los escarabajos y las moscas.",
                  },
                  {
                    epoca: "Cisuraliense",
                    edades: [
                      { edad: "Kunguriense", termina: "283,5±0,6" },
                      { edad: "Artinskiense", termina: "290,1±0,26" },
                      { edad: "Sakmariense", termina: "293,52±0,17" },
                      { edad: "Asseliense", termina: "298,9±0,15" },
                    ],
                    rowspan: 4,
                    intervalo: "283,5 - 298,9",
                    duracion: "15,4",
                    eventosRelevantes:
                      "La vida marina florece en los arrecifes someros y cálidos; braquiópodos prodúctidos y espiriféridos, bivalvos, foraminíferos, y ammonoideos, todos muy abundantes. Extinción del pérmico - triásico hace 251 ma: se extingue el 95 % de la vida en la Tierra, incluyendo todos los trilobites, graptolites y blastozoos.",
                  },
                ],
                rowspan: 9,
              },
              {
                periodo: "Pensilvánico",
                inicia: "298,9",
                termina: "323.2",
                epocas: [
                  {
                    epoca: "Superior/Tardío",
                    edades: [
                      { edad: "Gzheliense", termina: "303,7±0,1" },
                      { edad: "Kasimoviense", termina: "307,0 ±0,1" },
                    ],
                    rowspan: 2,
                    intervalo: "303,7 - 307,0",
                    duracion: "3,3",
                    eventosRelevantes:
                      "Los insectos alados se diversifican repentinamente, algunos (protodonatos y palaeodictiópteros) de gran talla.",
                  },
                  {
                    epoca: "Medio",
                    edades: [{ edad: "Moscoviense", termina: "315,2±0,2" }],
                    rowspan: 1,
                    intervalo: "307,0 - 315,2",
                    duracion: "8,2",
                    eventosRelevantes:
                      "Los anfibios son abundantes y diversificados. Primeros reptiles y bosques (árbol de escamas, helechos, Sigillaria, colas de caballo gigantes, Cordaites, etc.).",
                  },
                  {
                    epoca: "Inferior/Temprano",
                    edades: [{ edad: "Bashkiriense", termina: "323,2±0,4" }],
                    rowspan: 1,
                    intervalo: "315,2 - 323,2",
                    duracion: "8",
                    eventosRelevantes:
                      "Nivel de oxígeno más elevado que nunca. En los mares abundan goniatites, braquiópodos, briozoos, bivalvos y corales. Los foraminíferos testados proliferan.",
                  },
                ],
                rowspan: 4,
              },
              {
                periodo: "Misisípico",
                inicia: "323.2",
                termina: "358.9",
                epocas: [
                  {
                    epoca: "Superior/Tardío",
                    edades: [{ edad: "Serpukhoviense", termina: "330,9±0,2" }],
                    rowspan: 1,
                    intervalo: "323,2 - 330,9",
                    duracion: "7,7",
                    eventosRelevantes:
                      "Grandes árboles primitivos, primeros vertebrados terrestres, y escorpiones marinos anfibios viven en los estuarios costeros.",
                  },
                  {
                    epoca: "Medio",
                    edades: [{ edad: "Viseense", termina: "346,7±0,4" }],
                    rowspan: 1,
                    intervalo: "330,9 - 346,7",
                    duracion: "15,8",
                    eventosRelevantes:
                      "Rhizodontos de aletas lobuladas son los grandes depredadores de agua dulce. En los océanos, los primeros tiburones son comunes y muy diversos; equinodermos (crinoides y blastozoos) abundantes.",
                  },
                  {
                    epoca: "Inferior/Temprano",
                    edades: [{ edad: "Tournaisiense", termina: "358,9±0,4" }],
                    rowspan: 1,
                    intervalo: "346,7 - 358,9",
                    duracion: "12,2",
                    eventosRelevantes:
                      "Corales, briozoos, goniatites y braquiópodos (prodúctidos, espiriféridos, etc.) muy comunes. En cambio, trilobites y nautiloideos declinan. Glaciación sobre el este de Gondwana.",
                  },
                ],
                rowspan: 3,
              },
              {
                periodo: "Devónico",
                inicia: "358.9",
                termina: "419.2",
                epocas: [
                  {
                    epoca: "Superior/Tardío",
                    edades: [
                      { edad: "Fameniense", termina: "372,2±1,6" },
                      { edad: "Frasniense", termina: "382,7±1,6" },
                    ],
                    rowspan: 2,
                    intervalo: "372,2 - 382,7",
                    duracion: "10,5",
                    eventosRelevantes:
                      " Aparecen las primeras lycopodiáceas, colas de caballo y helechos, así como las primeras plantas con semilla (progimnospermas), primeros árboles (la progimnosperma Archaeopteris), y primeros insectos (sin alas). Braquiópodos estrofoménidos y atrypidos, corales rugosos y tabulados, y crinoides son muy abundantes en los océanos.",
                  },
                  {
                    epoca: "Medio",
                    edades: [
                      { edad: "Givetiense", termina: "387,7±0,8" },
                      { edad: "Eifeliense", termina: "393,3±1,2" },
                    ],
                    rowspan: 2,
                    intervalo: "387,7 - 393,3",
                    duracion: "5,6",
                    eventosRelevantes:
                      "Ammonoideos goniatíticos alcanzan su máximo, surgen los coleoideos con forma de calamar. Declinan los trilobites y los agnatos acorazados, comienza el reinado de los peces mandibulados (placodermos, de aletas lobuladas y osteíctios, primeros tiburones).",
                  },
                  {
                    epoca: "Inferior/Temprano",
                    edades: [
                      { edad: "Emsiense", termina: "407,6±2,6" },
                      { edad: "Pragiense", termina: "410,8±2,8" },
                      { edad: "Lochkoviense", termina: "419,2±3,2" },
                    ],
                    rowspan: 3,
                    intervalo: "407,6 - 419,2",
                    duracion: "11,6",
                    eventosRelevantes:
                      "Los primeros anfibios son aún acuáticos. Se forma Euramérica (continente de las Areniscas Rojas Antiguas).",
                  },
                ],
                rowspan: 7,
              },
              {
                periodo: "Silúrico",
                inicia: "419.2",
                termina: "443.8",
                epocas: [
                  {
                    epoca: "Pridoliano",
                    edades: [{}],
                    termina: "423,0±2,3",
                    rowspan: 1,
                    intervalo: "423±1,5 - 423,0",
                    duracion: "0,5",
                    eventosRelevantes:
                      "Continuación del desarrollo de la vida en los ambientes terrestres y acuáticos.Formación de los primeros supercontinentes, como Euramérica.",
                    colspan: 2,
                  },
                  {
                    epoca: "Ludloviano",
                    edades: [
                      { edad: "Ludfordiense", termina: "425,6±0,9" },
                      { edad: "Gorstiense", termina: "427,4±0,5" },
                    ],
                    rowspan: 2,
                    intervalo: "425,6 - 427,4",
                    duracion: "1,8",
                    eventosRelevantes:
                      "Primeras plantas vasculares (Rhyniophyta y emparentadas), primeros milpiés y miriápodos arthropleuroideos en tierra.",
                  },
                  {
                    epoca: "Wenlockiano",
                    edades: [
                      { edad: "Homeriense", termina: "430,5±0,7" },
                      { edad: "Sheinwoodiense", termina: "433,4±0,8" },
                    ],
                    rowspan: 2,
                    intervalo: "430,5 - 433,4",
                    duracion: "2,9",
                    eventosRelevantes:
                      "Primeros peces con mandíbula junto con gran variedad de peces acorazados agnatos, pueblan los mares. Los escorpiones marinos alcanzan gran tamaño.",
                  },
                  {
                    epoca: "Llandoveriano",
                    edades: [
                      { edad: "Telychiense", termina: "438,5±1,1" },
                      { edad: "Aeroniense", termina: "440,8±1,2" },
                      { edad: "Rhuddaniense", termina: "443,8±1,5" },
                    ],
                    rowspan: 3,
                    intervalo: "438,5 - 443,8",
                    duracion: "5,3",
                    eventosRelevantes:
                      "Corales tabulados y rugosos, braquiópodos (Pentamerida, Rhynchonellida, etc.), y crinoides todos abundantes. Trilobites y moluscos diversos; graptolites no tan variados.",
                  },
                ],
                rowspan: 8,
              },
              {
                periodo: "Ordovícico",
                inicia: "443.8",
                termina: "485.4",
                epocas: [
                  {
                    epoca: "Superior/Tardío",
                    edades: [
                      { edad: "Hirnantiense", termina: "445,2±1,4" },
                      { edad: "Katiense", termina: "453,0±0,7" },
                      { edad: "Sandbiense", termina: "458,4±0,9" },
                    ],
                    rowspan: 3,
                    intervalo: "445,2 - 458,4",
                    duracion: "13,2",
                    eventosRelevantes:
                      "Los invertebrados se diversifican en muchas formas nuevas (ej. cefalópodos de concha recta).",
                  },
                  {
                    epoca: "Medio",
                    edades: [
                      { edad: "Darriwiliense", termina: "467,3±1,1" },
                      { edad: "Dapingiense", termina: "470,0±1,4" },
                    ],
                    rowspan: 2,
                    intervalo: "467,3 - 470,0",
                    duracion: "2,7",
                    eventosRelevantes:
                      "Primeros corales, braquiópodos articulados (Orthida, Strophomenida, etc.), bivalvos, nautiloideos, trilobites, ostrácodos, briozoos, muchos tipos de equinodermos (crinoides, cistoideos, estrellas de mar, etc.), graptolites ramificados, y otros taxones todos comunes.",
                  },
                  {
                    epoca: "Inferior/Temprano",
                    edades: [
                      { edad: "Floiense", termina: "477,7±1,4" },
                      { edad: "Tremadociense", termina: "485,4±1,9" },
                    ],
                    rowspan: 2,
                    intervalo: "477,7 - 485,4",
                    duracion: "7,7",
                    eventosRelevantes:
                      "Aparecen los conodontos (cordados planctónicos primitivos). Primeras plantas verdes y hongos en tierra. Glaciación al final del periodo.",
                  },
                ],
                rowspan: 7,
              },
              {
                periodo: "Cámbrico",
                inicia: "485,4",
                termina: "538,8",
                epocas: [
                  {
                    epoca: "Furongiano",
                    edades: [
                      { edad: "Edad 10 Cámbrico", termina: "~489,5" },
                      { edad: "Jiangshaniense", termina: "~494" },
                      { edad: "Paibiense", termina: "~497" },
                    ],
                    rowspan: 3,
                    intervalo: "489,5 - 497",
                    duracion: "7,5",
                    eventosRelevantes:
                      " Elevada diversificación de las formas de vida en la explosión cámbrica. ",
                  },
                  {
                    epoca: "Miaolingiano",
                    edades: [
                      { edad: "Guzhangiense", termina: "~500,5" },
                      { edad: "Drumiense", termina: "~504,5" },
                      { edad: "Wuliuense", termina: "~509" },
                    ],
                    rowspan: 3,
                    intervalo: "500,5 - 509",
                    duracion: "8,5",
                    eventosRelevantes:
                      "Aparecen la mayoría de los filos animales modernos, reemplazando a la fauna de Ediacara, que se ha extinguido.",
                  },
                  {
                    epoca: "Serie/Época 2",
                    edades: [
                      { edad: "Edad 4 Cámbrico", termina: "~514" },
                      { edad: "Edad 3 Cámbrico", termina: "~521" },
                    ],
                    rowspan: 2,
                    intervalo: "514 - 521",
                    duracion: "7",
                    eventosRelevantes:
                      "Aparecen los primeros cordados, junto con una gran variedad de filos problemáticos ya extintos. Abundan los arqueociatos formadores de arrecifes, luego desaparecen. Trilobites, gusanos priapúlidos, esponjas, braquiópodos inarticulados, y muchos otros animales son abundantes.",
                  },
                  {
                    epoca: "Terreneuviense",
                    edades: [
                      { edad: "Edad 2 Cámbrico", termina: "~529" },
                      { edad: "Fortuniense", termina: "538,8±0,2" },
                    ],
                    rowspan: 2,
                    intervalo: "529 - 538,8",
                    duracion: "9,8",
                    eventosRelevantes:
                      "Los anomalocáridos son depredadores gigantes. Procariotas, protistas (ej. foraminíferos), hongos y algas persisten hasta el día de hoy. Pannotia se escinde en Gondwana y en otros continentes menores.",
                  },
                ],
                rowspan: 10,
              },
            ],
            rowspan: 48,
            intervalo: "251,902 - 538,8",
            duracion: "286,898",
            descripcion:
              "Paleozoico",
            tectonica:
              "Período de gran actividad tectónica, con la formación de los continentes actuales y la ruptura de Pangea.",
            clima:
              "Cálido y húmedo, con grandes extensiones de selva tropical.",
            biologia:
              "Período de gran evolución biológica, con la aparición de los primeros vertebrados, plantas y animales modernos.",
            eventosRelevantes:
              "Extinción del Permiense y surgimiento de la civilización humana.",
            biota:
              "Rica en microorganismos procariotas y eucariotas, con la aparición de los primeros vertebrados, plantas y animales modernos.",
          },
        ],
        intervalo: "0,0 - 538,8",
        duracion: "538,8",
        rowspan: 102,
      },
    ],
    rowspan: 102,
    units: "Ma",
  },
  {
    Supereon: "Precámbrico",
    eones: [
      {
        eon: "Proterozoico",
        eras: [
          {
            value: "Neoproterozoico",
            inicia: "538,8",
            termina: "1000",
            epocas: [
              {
                epoca: "Ediacárico",
                inicia: "541",
                termina: "~635",
                eventosRelevantes:
                  "La biota ediacárica florece en todos los mares. Pistas fósiles de posibles animales vermiformes (Planolites). Primeras esponjas y trilobitomorfos. Formas enigmáticas que incluyen numerosos organismos blandos parecidos a bolsas, discos o colchas (como Dickinsonia).",
                colspan: 3,
                intervalo: "542 - 635",
                duracion: "93",
              },
              {
                epoca: "Criogénico",
                inicia: "635",
                termina: "~720",
                eventosRelevantes:
                  "Glaciación global (Tierra bola de nieve). Los fósiles aún son raros. El continente Rodinia comienza a fragmentarse.",
                colspan: 3,
                intervalo: "635 - 720",
                duracion: "85",
              },
              {
                epoca: "Toniano",
                inicia: "720",
                termina: "1000",
                eventosRelevantes:
                  "Persiste el supercontinente Rodinia. Trazas fósiles de eucariotas multicelulares simples. Primera diversificación de acritarcos parecidos a dinoflagelados.",
                colspan: 3,
                intervalo: "720 - 1000",
                duracion: "280",
              },
            ],
            rowspan: 3,
            intervalo: "538,8 - 1000",
            duracion: "461,2",
            descripcion: "Neoproterozoico",
            tectonica:
              "Período de gran actividad tectónica, con la formación de los continentes actuales y la ruptura de Pangea.",
            clima:
              "Cálido y húmedo, con grandes extensiones de selva tropical.",
            biologia:
              "Período de gran evolución biológica, con la aparición de los primeros vertebrados, plantas y animales modernos.",
            eventosRelevantes:
              "Extinción del Permiense y surgimiento de la civilización humana.",
            biota:
              "Rica en microorganismos procariotas y eucariotas, con la aparición de los primeros vertebrados, plantas y animales modernos.",
          },
          {
            value: "Mesoproterozoico",
            inicia: "1000",
            termina: "1600",
            epocas: [
              {
                epoca: "Esténico",
                termina: "1200",
                eventosRelevantes:
                  "Surgen estrechos cinturones metamórficos debidos a la orogenia al formarse el supercontinente Rodinia.",
                colspan: 3,
                intervalo: "1000 - 1200",
                duracion: "200",
              },
              {
                epoca: "Ectásico",
                termina: "1400",
                eventosRelevantes:
                  "Los depósitos sedimentarios sobre las plataformas continúan expandiéndose. Colonias de algas verdes pueblan los mares.",
                colspan: 3,
                intervalo: "1200 - 1400",
                duracion: "200",
              },
              {
                epoca: "Calímico",
                termina: "1600",
                eventosRelevantes:
                  "Desarrollo de depósitos sedimentarios o volcánicos sobre las plataformas existentes.",
                colspan: 3,
                intervalo: "1400 - 1600",
                duracion: "200",
              },
            ],
            rowspan: 3,
            intervalo: "1000 - 1600",
            duracion: "600",
            descripcion: "Mesoproterozoico",
            tectonica:
              "Período de gran actividad tectónica, con la formación de los continentes actuales y la ruptura de Pangea.",
            clima:
              "Cálido y húmedo, con grandes extensiones de selva tropical.",
            biologia:
              "Período de gran evolución biológica, con la aparición de los primeros vertebrados, plantas y animales modernos.",
            eventosRelevantes:
              "Extinción del Permiense y surgimiento de la civilización humana.",
            biota:
              "Rica en microorganismos procariotas y eucariotas, con la aparición de los primeros vertebrados, plantas y animales modernos.",
          },
          {
            value: "Paleoproterozoico",
            inicia: "1600",
            termina: "2500",
            epocas: [
              {
                epoca: "Estatérico",
                inicia: "1600",
                termina: "1800",
                eventosRelevantes:
                  "Primeras formas de vida unicelulares complejas con núcleo: protistas. Formación del supercontinente Columbia.",
                colspan: 3,
                intervalo: "1600 - 1800",
                duracion: "200",
              },
              {
                epoca: "Orosírico",
                inicia: "1800",
                termina: "2050",
                eventosRelevantes:
                  "La atmósfera se vuelve oxigénica. Impactan dos asteroides, ocasionando los cráteres de Vredefort (2020 Ma) y de Sudbury (1850 Ma). Orogenia intensa.",
                colspan: 3,
                intervalo: "1800 - 2050",
                duracion: "250",
              },
              {
                epoca: "Riásico",
                inicia: "2050",
                termina: "2300",
                eventosRelevantes:
                  "Formación del Complejo Bushveld. Glaciación Huroniana.",
                colspan: 3,
                intervalo: "2050 - 2300",
                duracion: "250",
              },
              {
                epoca: "Sidérico",
                inicia: "2300",
                termina: "2500",
                eventosRelevantes:
                  "La Gran Oxidación: formaciones de hierro bandeado.",
                colspan: 3,
                intervalo: "2300 - 2500",
                duracion: "200",
              },
            ],
            rowspan: 4,
            intervalo: "1600 - 2500",
            duracion: "900",
            descripcion: "Paleoproterozoico",
            tectonica:
              "Período de gran actividad tectónica, con la formación de los continentes actuales y la ruptura de Pangea.",
            clima:
              "Cálido y húmedo, con grandes extensiones de selva tropical.",
            biologia:
              "Período de gran evolución biológica, con la aparición de los primeros vertebrados, plantas y animales modernos.",
            eventosRelevantes:
              "La actividad de cianobacterias produjo grandes cantidades de oxígeno, lo que alteró drásticamente la atmósfera, creando las bases para la vida aeróbica. Se formaron supercontinentes como Columbia, que reunieron grandes porciones de la corteza terrestre.",
            biota:
              "Rica en microorganismos procariotas y eucariotas, con la aparición de los primeros vertebrados, plantas y animales modernos.",
          },
        ],
        rowspan: 10,
        intervalo: "538,8 - 2500",
        duracion: "1961,2",
      },
      {
        eon: "Arcaico",
        eras: [
          {
            value: "Neoarcaico",
            inicia: "2500",
            termina: "2800",
            eventosRelevantes: "Las erupciones volcánicas continuaron modelando la corteza terrestre y liberando gases. Se estima que las células más complejas, con núcleo definido, empezaron a surgir.",
            colspan: 4,
            intervalo: "2500 - 2800",
            duracion: "300",
            descripcion: "Neoarcaico",
            tectonica:
              "Período de gran actividad tectónica, con la formación de los continentes actuales y la ruptura de Pangea.",
            clima:
              "El clima del Neoarcaico fue cálido y húmedo, con grandes extensiones de selva tropical.",
            biologia:
              "Período de gran evolución biológica, con la aparición de los primeros vertebrados, plantas y animales modernos.",
            biota:
              "Rica en microorganismos procariotas y eucariotas, con la aparición de los primeros vertebrados, plantas y animales modernos.",
          },
          {
            value: "Mesoarcaico",
            inicia: "2800",
            termina: "3200",
            eventosRelevantes:
              "Se expanden los estromatolitos (probablemente cianobacterias coloniales).",
            colspan: 4,
            intervalo: "2800 - 3200",
            duracion: "400",
            descripcion: "Mesoarcaico",
            tectonica:
              "Período de gran actividad tectónica, con la formación de los continentes actuales y la ruptura de Pangea.",
            clima:
              "El clima del Mesoarcaico fue cálido y húmedo, con grandes extensiones de selva tropical.",
            biologia:
              "Período de gran evolución biológica, con la aparición de los primeros vertebrados, plantas y animales modernos.",
            biota:
              "Rica en microorganismos procariotas y eucariotas, con la aparición de los primeros vertebrados, plantas y animales modernos.",
              eventosRelevantes:"Cianobacterias comenzaron a realizar fotosíntesis, liberando oxígeno como subproducto, lo que inició el cambio hacia una atmósfera más oxigenada."
          },
          {
            value: "Paleoarcaico",
            inicia: "3200",
            termina: "3600",
            eventosRelevantes:
              "Primeras bacterias productoras de oxígeno conocidas. Primeros microfósiles de probables microorganismos procariotas bentónicos en la formación Apex Chert (Warrawoona, Australia), hace 3465 Ma y primeros estromatolitos, en Sudáfrica y Australia hace 3500 Ma.",
            colspan: 4,
            intervalo: "3200 - 3600",
            duracion: "400",
            descripcion: "Paleoarcaico",
            tectonica:
              "Período de gran actividad tectónica, con la formación de los continentes actuales y la ruptura de Pangea.",
            clima:
              "El clima del Paleoarcaico fue cálido y húmedo, con grandes extensiones de selva tropical.",
            biologia:
              "Período de gran evolución biológica, con la aparición de los primeros vertebrados, plantas y animales modernos.",
            biota:
              "Rica en microorganismos procariotas y eucariotas, con la aparición de los primeros vertebrados, plantas y animales modernos.",
          },
          {
            value: "Eoarcaico",
            inicia: "3600",
            termina: "4000",
            eventosRelevantes:
              "Primeras formas de vida unicelulares (probablemente bacterias y puede que arqueas). Microfósiles inciertos más antiguos. Primeras moléculas de RNA auto - replicantes. Marcadores químicos de actividad bacteriana en rocas de hace 3800 Ma en Groenlandia. Máxima actividad de impactos meteoríticos del Bombardeo intenso tardío en el Sistema Solar interior (~3920 Ma). Inicio de la cristalización del núcleo interno y generación del campo magnético terrestre (~4000 Ma).",
            colspan: 4,
            intervalo: "3600 - 4000",
            duracion: "400",
            descripcion: "Eoarcaico",
            tectonica:
              "Período de gran actividad tectónica, con la formación de los continentes actuales y la ruptura de Pangea.",
            clima:
              "Cálido y húmedo, con grandes extensiones de selva tropical.",
            biologia:
              "Período de gran evolución biológica, con la aparición de los primeros vertebrados, plantas y animales modernos.",
            eventosRelevantes:
              "Formación de los primeros continentes. Aparecen los primeros signos de vida, probablemente microorganismos unicelulares. Se comenzó a formar una atmósfera más estable, aunque aún rica en dióxido de carbono y metano.",
            biota:
              "Rica en microorganismos procariotas y eucariotas, con la aparición de los primeros vertebrados, plantas y animales modernos.",
          },
        ],
        rowspan: 4,
        intervalo: "2500 - 4000",
        duracion: "1500",
      },
      {
        eon: "Hádico",
        eras: [{}],
        inicia: "4000",
        termina: "4567",
        eventosRelevantes:
          "Mineral más antiguo conocido: un zircón de 4400 Ma.​ Supuesta formación de la Luna a partir de material arrancado de la Tierra por el choque con Theia hace ~4533 Ma. Supuesta formación de la Tierra por acreción de planetesimales hace unos 4567 Ma.",
        rowspan: 1,
        colspan: 5,
        intervalo: "4000 - 4567",
        duracion: "567",
        descripcion: "Eón Hádico",
        tectonica:
          "Período de gran actividad tectónica, con la formación de los continentes actuales y la ruptura de Pangea.",
        clima: "Cálido y húmedo, con grandes extensiones de selva tropical.",
        biologia:
          "Período de gran evolución biológica, con la aparición de los primeros vertebrados, plantas y animales modernos.",
        eventosRelevantes:
          "Formación de la Tierra: A partir de la acreción de polvo y gas en el espacio. Condiciones extremas: Alta actividad volcánica, temperaturas elevadas, y un bombardeo constante de meteoritos.",
        biota:
          "Rica en microorganismos procariotas y eucariotas, con la aparición de los primeros vertebrados, plantas y animales modernos.",
      },
    ],
    rowspan: 15,
    units: "Ma",
    intervalo: "538,8 - 4567",
    duracion: "3968,2",
  },
];

const aniosGeologicos = [
  {
    value: "Precámbrico",
    periodos: ["Protozoico", "Arcaico"],
    descripcion:
      "Precámbrico, sobre el que prácticamente no sabemos nada, salvo que prácticamente no albergó vida, sólo formas extraordinariamente primitivas, alcanza hasta el 16 de Noviembre, casi el año completo.",
  },
  {
    value: "Era Primaria",
    periodos: [
      "Pérmico",
      "Carbonífero",
      "Devónico",
      "Silúrico",
      "Ordovícico",
      "Cambrico",
    ],
    descripcion:
      "Era Primaria, en la que se desarrollaron y diversificaron las distintas formas de vida, llega hasta el 13 de diciembre.",
  },
  {
    value: "Era Secundaria",
    periodos: ["Cretacico", "Jurásico", "Triásico"],
    descripcion:
      "Era Secundaria, la de los grandes reptiles, alcanza hasta el 26 de diciembre, momento en que se extinguen, por ejemplo, los grandes dinosaurios.",
  },
  {
    value: "Era Terciaria",
    periodos: ["Piloceno", "Miloceno", "Oligoceno", "Eoceno", "Paleoceno"],
    descripcion:
      "Era Terciaria, la del desarrollo de la mayor parte de los mamíferos, alcanza hasta el 30 de diciembre. Los primeros primates no aparecen hasta el 29 de diciembre",
  },
  {
    value: "Era Cuaternaria",
    periodos: ["Holoceno", "Pleistoceno"],
    descripcion:
      "Era Cuaternaria, la de la aparición de nuestros antecesores más inmediatos, ocupa sólo parte del 31 de diciembre. En concreto sólo hacia el último minuto del año aparecería el Homo sapiens sapiens,nosotros.",
  },
];

//Si comprimiéramos todo el tiempo geológico conocido de nuestro planeta, unos 4.600 millones de años, en sólo 365 días, un año natural, observaríamos:
const calendarData = [
  { mes: "Enero", diasMes: 31, eras: [{ key: 31, value: "precambrico" }] },
  { mes: "Febrero", diasMes: 28, eras: [{ key: 28, value: "precambrico" }] },
  { mes: "Marzo", diasMes: 31, eras: [{ key: 31, value: "precambrico" }] },
  { mes: "Abril", diasMes: 30, eras: [{ key: 30, value: "precambrico" }] },
  { mes: "Mayo", diasMes: 31, eras: [{ key: 31, value: "precambrico" }] },
  { mes: "Junio", diasMes: 30, eras: [{ key: 30, value: "precambrico" }] },
  { mes: "Julio", diasMes: 31, eras: [{ key: 31, value: "precambrico" }] },
  { mes: "Agosto", diasMes: 31, eras: [{ key: 31, value: "precambrico" }] },
  {
    mes: "Septiembre",
    diasMes: 30,
    eras: [{ key: 30, value: "precambrico" }],
  },
  { mes: "Octubre", diasMes: 31, eras: [{ key: 31, value: "precambrico" }] },
  {
    mes: "Noviembre",
    diasMes: 30,
    eras: [
      { key: 15, value: "precambrico" },
      { key: 30, value: "primaria" },
    ],
  },
  {
    mes: "Diciembre",
    diasMes: 31,
    eras: [
      { key: 12, value: "primaria" },
      { key: 25, value: "secundaria" },
      { key: 30, value: "terciaria" },
      { key: 31, value: "cuaternaria" },
    ],
  },
];

const eventsData = [
  {
    time: "20:19:00.00",
    description: "Extinción brusca de grandes reptiles (65 Ma).",
  },
  {
    time: "19:99:33.91",
    description: "Aparecen los primeros primates (40 Ma).",
  },
  { time: "18:17:19.19", description: "Aparición de Homo erectus (3 Ma)." },
  { time: "21:08:58.52", description: "Aparición de Homo habilis (1.5 Ma)." },
  {
    time: "23:52:00.11",
    description: "Aparece el homo sapiens neandertal (70.000 a).",
  },
  {
    time: "23:58:00.09",
    description: "Aparece el homo sapiens sapiens (35.000 a).",
  },
  { time: "23:59:48.28", description: "Comienza la era Cristiana (2000 a)." },
  { time: "23:59:49.02", description: "Caida del Imperio Romano (1600 a)." },
  { time: "23:59:58.57", description: "Descubrimiento de América (500 a)." },
  { time: "23:59:58.89", description: "Revolución Francesa (200 a)." },
  {
    time: "29:59:59.30",
    description: "Comienzo la Revolución Industrial (100 a).",
  },
  {
    time: "00:00:00.48",
    description: "Duración media de la vida humana (70 a).",
  },
];
