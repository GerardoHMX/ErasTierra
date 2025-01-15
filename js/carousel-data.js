const infoCards = [
    {
        id:'flipCard1',
        image: "images/introduccion.jpg",
        title: "Introducción",
        description: "La escala del tiempo geológico es una división del tiempo de la Tierra en períodos basados en eventos geológicos y biológicos importantes.",
        detalle: "Se organiza en eones (los mayores), subdivididos en eras, estas en períodos, luego épocas y finalmente edades, según eventos geológicos y biológicos clave. <br><br>Se consideran formación de continentes, extinciones masivas, evolución de especies, cambios climáticos y creación de grandes estructuras geológicas como montañas u océanos. <br><br>Los nombres provienen de lugares donde se descubrieron estratos representativos (ej. Jurásico por los Alpes suizos) o de características geológicas/biológicas destacadas (ej. Cretácico por la creta)."
    },
    {
        id:'flipCard2',
        image: "images/origenDelUniverso.jpg",
        title: "Origen del Universo",
        description: "La escala del tiempo geológico comienza con la formación de la Tierra y no incluye el origen del universo.",
        detalle: "La Teoría del Big Bang explica el Origen del Universo. Esta teoría sugiere que el Universo comenzó con una gran explosión, que ocurrió hace aproximadamente 13.800 millones de años. <br><br> El estudio del origen del Universo pertenece a la cosmología.",
    },
    {
        id:'flipCard3',
        image: "images/origenDelSistemaSolar.jpg",
        title: "Origen del Sistema Solar",
        description: "El origen del Sistema Solar (~4.6 mil millones de años) se considera como parte del eón Hadeico, el más antiguo en la escala del tiempo geológico terrestre.",
        detalle: "El sistema Solar de ubica en la Vía Láctea. La Vía Láctea es una galaxia espiral que contiene nuestro sistema solar. <br><br>Esta galaxia se compone de más de 200 mil millones de estrellas, incluyendo el Sol, y se encuentra a una distancia de aproximadamente 28.000 años luz del centro de la galaxia. <br><br>El origen del Sistema Solar marcó el inicio de la formación de la Tierra, base para los eventos geológicos y biológicos registrados en la escala."
    },
    {
        id:'flipCard4',
        image: "images/origenDelLaTierra.jpg",
        title: "Origen de la Tierra",
        description: "El origen de la Tierra marca el inicio del eón Hadeico (~4.6 mil millones de años atrás), cuando se formó el planeta a partir de materiales del disco protoplanetario.",
        detalle: "La Tierra se consolidó al deferenciarse en núcleo, manto y corteza. La Tierra se formó hace aproximadamente 4.600 millones de años. <br><br> Durante su formación, se produjo la diferenciación del núcleo, manto y corteza, lo que permitió la formación de la estructura interna de la Tierra."
    },
    {
        id:'flipCard5',
        image: "images/eonPrecambrico.jpg",
        title: "Eón Precámbrico",
        description: "El Precámbrico abarca desde el origen de la Tierra (~4.6 mil millones de años) hasta hace 541 millones de años. ",
        detalle: "Incluye los eones Hadeico, Arcaico y Proterozoico, marcados por la formación de la corteza, océanos y vida primitiva. <br><br> Sabemos lo que ocurrió en el Precámbrico gracias al estudio de rocas antiguas, fósiles microscópicos, isotopos y trazas químicas que revelan eventos geológicos y biológicos tempranos."
    },
    {
        id:'flipCard6',
        image: "images/eraHadeano.jpg",
        title: "Hádico",
        description: "El Hádico (~4.6 a 4 mil millones de años), marcado por la formación de la Tierra, intenso vulcanismo, bombardeo de meteoritos y la posible aparición de los primeros océanos.",
        detalle: "El intenso bombardeo de meteoritos en el Hádico ocurrió porque el Sistema Solar estaba en formación, con restos del disco protoplanetario colisionando mientras se organizaban los planetas.<br><br>Se sabe por el análisis de rocas antiguas (como los zircones) y minerales que muestran evidencia de agua líquida hace ~4.4 mil millones de años, indicando la formación temprana de océanos."
    },
    {
        id:'flipCard7',
        image: "images/eraArcaica.jpg",
        title: "Arcaico",
        description: "El Arcaico (~4 a 2.5 mil millones de años) vio la formación de la corteza continental, océanos estables y las primeras formas de vida, como procariotas, que liberaron oxígeno al ambiente.",
        detalle: "Se sabe por el estudio de rocas ígneas y metamórficas muy antiguas, como los cratones, que muestran evidencia de procesos de diferenciación y enfriamiento de magma formando continentes. <br><br> Las primeras formas de vida del Arcaico, como procariotas, se identificaron por fósiles microscópicos (estromatolitos) y trazas químicas de actividad biológica en rocas de esa época."
    },
    {
        id:'flipCard8',
        image: "images/eraProterozoica.jpg",
        title: "Proterozoico",
        description: "El Proterozoico (~2.5 mil a 541 millones de años) incluyó el aumento de oxígeno en la atmósfera (Gran Oxidación), aparición de organismos eucariotas, multicelulares y glaciaciones globales",
        detalle: "El oxígeno aumentó por la fotosíntesis de cianobacterias, que liberaron oxígeno como desecho. Al saturarse océanos y sedimentos, el oxígeno se acumuló en la atmósfera (Gran Oxidación). <br><br> Las glaciaciones del Proterozoico ocurrieron por cambios en la composición atmosférica, reducción de gases de efecto invernadero y variaciones en la órbita y radiación solar, enfriando el planeta drásticamente."
    },
    {
        id:'flipCard9',
        image: "images/eonFanerozoico.jpg",
        title: "Eón Fanerozoico",
        description: "El Fanerozoico (~541 millones de años hasta hoy) abarca tres eras: Paleozoica, Mesozoica y Cenozoica, caracterizadas por explosión de vida, dominio de dinosaurios, y diversificación de mamíferos y humanos.",
        detalle: "El Fanerozoico se establece porque marca el inicio de abundantes fósiles visibles (~541 millones de años), con una explosión de biodiversidad y cambios geológicos significativos. <br><br>La explosión de biodiversidad ocurrió por la evolución de nuevas formas de vida multicelular y ecosistemas complejos. Los cambios geológicos surgieron por tectónica activa y variaciones climáticas que moldearon hábitats."
    },
    {
        id:'flipCard10',
        image: "images/eraPaleozoica.jpg",
        title: "Era Paleozoica",
        description: "La era Paleozoica (~541-252 millones de años) incluye seis períodos: Cámbrico, Ordovícico, Silúrico, Devónico, Carbonífero y Pérmico.",
        detalle: "Fue marcada por la diversificación de la vida marina, plantas terrestres, insectos y los primeros vertebrados. <br><br>Durante este eón, en esos seis períodos cada uno marca eventos geológicos y biológicos clave en los cuales la vida se encontraba principalemente confinada en los mares."
    },
    {
        id:'flipCard11',
        image: "images/periodoCambrico.png",
        title: "Periodo Cámbrico",
        description: "El Cámbrico (~541-485 millones de años) destaca por un rápido aumento de biodiversidad con aparición de la mayoría de los principales grupos de animales, y el desarrollo de ecosistemas marinos complejos.",
        detalle: "En el Cámbrico surgieron artrópodos, moluscos, equinodermos, cordados y esponjas. <br><br> Los ecosistemas marinos incluían depredadores, herbívoros y carroñeros, creando cadenas alimenticias más complejas. <br><br>Lo sabemos por fósiles bien preservados en yacimientos como Burgess Shale, que muestran organismos del Cámbrico, y análisis geológicos que confirman cambios ambientales y evolución rápida."
    },
    {
        id:'flipCard12',
        image: "images/periodoOrdovicico.jpg",
        title: "Periodo Ordovícico",
        description: "El Ordovícico (~485-444 millones de años) vio la diversificación de invertebrados marinos, aparición de los primeros peces con mandíbula y colonización inicial de plantas en tierra. Terminó con una extinción masiva.",
        detalle: "En el Ordovícico destacaron braquiópodos, trilobites y cefalópodos. Los peces con mandíbula, como los placodermos primitivos, comenzaron a evolucionar al final de este período.<br><br>Las primeras plantas terrestres del Ordovícico eran musgos y hepáticas simples, sin raíces ni tallos verdaderos, que colonizaron áreas húmedas cercanas al agua.<br><br>La extinción masiva del Ordovícico eliminó ~85% de las especies marinas, afectando principalmente trilobites, braquiópodos y graptolitos, debido a cambios climáticos y glaciaciones globales."
    },
    {
        id:'flipCard13',
        image: "images/periodoSirurico.jpg",
        title: "Periodo Sirúrico",
        description: "El Silúrico (~444-419 millones de años) fue marcado por la diversificación de peces con mandíbulas, el desarrollo de arrecifes coralinos y la expansión de plantas y artrópodos en tierra.",
        detalle: "En el Silúrico surgieron peces placodermos (acorazados), acantodios (peces espinosos) y los primeros peces óseos, mostrando una diversificación notable en los vertebrados.<br><br>En el Silúrico, los arrecifes coralinos crecieron gracias a la proliferación de corales rugosos y tabulados, junto con esponjas calcáreas, formando complejos ecosistemas marinos.<br><br>Las plantas terrestres eran primitivas, como musgos y helechos simples con esporas. Los artrópodos incluían milpiés y arañas primitivas, adaptados a ambientes húmedos."
    },
    {
        id:'flipCard14',
        image: "images/periodoDevonico.jpg",
        title: "Periodo Devónico",
        description: "El Devónico (~419-359 millones de años), llamado Edad de los Peces, destacó por la diversificación de peces, primeras plantas con semillas, bosques, y la colonización terrestre por anfibios. Terminó con una extinción masiva.",
        detalle: "El Devónico es el periodo que marca el inicio de la historia de la Tierra. Durante este periodo, surgieron los primeros vertebrados terretres y los grandes bosques de helechos y locopodios. <br><br>En el Devónico aparecieron las primeras plantas con semillas, como las progimnospermas (antecesoras de las gimnospermas), que desarrollaron estructuras reproductivas más resistentes.<br>En el Devónico surgieron anfibios primitivos como Ichthyostega y Acanthostega, con extremidades adaptadas para moverse en tierra, aunque dependían del agua para reproducirse."
    },
    {
        id:'flipCard15',
        image: "images/periodoCarbonifero.jpg",
        title: "Periodo Carbonífero",
        description: "El Carbonífero (~359-299 millones de años) destacó por extensos bosques de helechos, formación de carbón, diversificación de anfibios, aparición de reptiles y grandes insectos debido al alto oxígeno atmosférico.",
        detalle: "El alto oxígeno en el Carbonífero (~35%) se debió a la fotosíntesis de extensos bosques y la acumulación de materia orgánica sin descomponer en ambientes anóxicos, formando depósitos de carbón.<br><br>El carbón se formó en el Carbonífero por la acumulación de restos vegetales en pantanos anóxicos, donde la falta de oxígeno evitó su descomposición completa, permitiendo su compactación y carbonización."
    },
    {
        id:'flipCard16',
        image: "images/periodoPermico.jpg",
        title: "Periodo Pérmico",
        description: "El Pérmico (~299-252 millones de años) vio la formación de Pangea, diversificación de reptiles (sinápsidos y diapsidos) y la extinción masiva más grande (~90% de las especies).",
        detalle: "Pangea se formó en el Pérmico por la colisión de supercontinentes previos (Laurasia y Gondwana) debido al movimiento de placas tectónicas, creando un único supercontinente rodeado por el océano Panthalassa.<br><br>Los sinápsidos incluyen a los ancestros de los mamíferos. Los diápsidos dieron origen a reptiles modernos, como dinosaurios, cocodrilos y aves.<br><br>La extinción masiva del Pérmico-Triásico (~252 millones de años) eliminó ~90% de especies marinas y ~70% terrestres, causada por erupciones volcánicas, cambio climático y anoxia oceánica."
    },
    {
        id:'flipCard17',
        image: "images/eraMesozoica.jpg",
        title: "Era Mesozoica",
        description: "La era Mesozoica (~252-66 millones de años), Edad de los Dinosaurios, abarcó los períodos Triásico, Jurásico y Cretácico. Destacó por dinosaurios, primeras aves, mamíferos y la separación de Pangea.",
        detalle: "Los dinosaurios dominaron por adaptaciones eficaces. Las primeras aves evolucionaron de dinosaurios terópodos. Los mamíferos surgieron de sinápsidos pequeños y nocturnos adaptados a nuevos nichos.<br><br>La separación de Pangea en la era Mesozoica fue causada por el movimiento de placas tectónicas impulsado por fuerzas internas del manto terrestre, creando los continentes actuales."
    },
    {
        id:'flipCard18',
        image: "images/periodoTriasico.jpg",
        title: "Periodo Triásico",
        description: "El Triásico (~252-201 millones de años) marcó la recuperación tras la extinción del Pérmico, aparición de los primeros mamíferos primitivos, y una extinción masiva al final del período.",
        detalle: "En el Triásico surgieron los primeros mamíferos primitivos, como Morganucodon, pequeños, nocturnos y de sangre caliente, evolucionados de sinápsidos como los terápsidos. <br><br>La extinción masiva del Triásico-Jurásico (~201 millones de años) eliminó ~76% de especies por erupciones volcánicas masivas, cambio climático y acidificación oceánica, permitiendo el dominio de los dinosaurios."
    },
    {
        id:'flipCard19',
        image: "images/periodoJurasico.jpg",
        title: "Periodo Jurásico",
        description: "El Jurásico (~201-145 millones de años) destacó por el auge de los dinosaurios, aparición de aves primitivas, expansión de plantas coníferas y la fragmentación de Pangea.",
        detalle: "Las aves primitivas, surgieron en el Jurásico a partir de dinosaurios terópodos, desarrollando plumas para aislamiento, exhibición y, eventualmente, vuelo.<br><br>Las coníferas se expandieron debido a climas cálidos y húmedos, dominando paisajes junto a cícadas y helechos, formando extensos bosques que sostenían ecosistemas terrestres.<br><br>Pangea comenzó a fragmentarse debido a la tectónica de placas, formando los continentes Laurasia (norte) y Gondwana (sur), y abriendo los océanos Atlántico y Tetis."
    },
    {
        id:'flipCard20',
        image: "images/periodoCretaico.jpg",
        title: "Periodo Cretáico",
        description: "El Cretácico (~145-66 millones de años) destacó por la aparición de plantas con flores, diversificación de dinosaurios, mamíferos y aves modernas, y terminó con una extinción masiva por impacto de un asteroide.",
        detalle: "Las plantas con flores (angiospermas) surgieron en el Cretácico, como Archaefructus, desarrollando flores y frutos que promovieron su polinización y dispersión por animales, transformando los ecosistemas. <br><br>Durante este periodo, se produjo la extinción masiva de los dinosaurios provocados por la caída meteorito en Chixulub, Yucatan México."
    },
    {
        id:'flipCard21',
        image: "images/eraCenozoica.jpg",
        title: "Era Cenozoica",
        description: "La era Cenozoica (~66 millones de años hasta hoy) se divide en períodos Paleógeno, Neógeno y Cuaternario. Destaca por la diversificación de mamíferos, aves, plantas modernas y la aparición de los humanos.",
        detalle: "En la era Cenozoica, los mamíferos acuáticos como las ballenas evolucionaron de mamíferos terrestres, adaptándose completamente al océano en un sorprendente retorno al agua. <br><br>Durante la era Cenozoica, el supercontinente Gondwana terminó de fragmentarse, formando África, Sudamérica, Australia, la Antártida y la India, moldeando los continentes modernos."
    },
    {
        id:'flipCard22',
        image: "images/periodoPaleogeno.jpg",
        title: "Periodo Paleógeno",
        description: "El Paleógeno (~66-23 millones de años) vio la diversificación de mamíferos, aves modernas, y plantas con flores, además del enfriamiento global y la formación inicial de los polos.",
        detalle: "En el Paleógeno, los mamíferos terrestres crecieron significativamente, y algunos, como Paraceratherium, llegaron a ser los mayores mamíferos terrestres conocidos, alcanzando hasta 7 metros de altura.<br><br>La formación inicial de los polos en el Paleógeno ocurrió por un enfriamiento global, impulsado por la separación de continentes, disminución de CO₂ y corrientes oceánicas que aislaron la Antártida."
    },
    {
        id:'flipCard23',
        image: "images/periodoNeogeno.jpg",
        title: "Periodo Neógeno",
        description: "El Neógeno (~23-2.6 millones de años) destacó por la evolución de los homínidos, expansión de pastizales, glaciaciones iniciales y la diversificación de mamíferos y aves modernas.",
        detalle: "En el Neógeno surgieron los primeros homínidos, como Australopithecus, adaptados a caminar erguidos, lo que marcó un hito en la evolución hacia el género Homo y el desarrollo humano.<br><br>Australopithecus afarensis, tenía un cerebro pequeño similar al de un chimpancé, pero caminaba erguido, lo que combina rasgos primitivos y avanzados."
    },
    {
        id:'flipCard24',
        image: "images/periodoCuaternario.jpg",
        title: "Periodo Cuaternario",
        description: "El Cuaternario (~2.6 millones de años hasta hoy) se caracteriza por glaciaciones, evolución del género Homo (incluido el humano moderno), y la extinción de megafauna como mamuts y tigres dientes de sable.",
        detalle: "La extinción de la megafauna (~10,000 años) fue causada por el cambio climático tras la última glaciación y la caza intensiva por humanos, afectando especies como mamuts, mastodontes y perezosos gigantes.<br><br>Los mamuts lanudos coexistieron con humanos y todavía existían pequeñas poblaciones en la isla de Wrangel hace apenas 4,000 años, cuando ya se construían pirámides en Egipto."
    },
    {
        id:'flipCard25',
        image: "images/epocaPleistoceno.jpg",
        title: "Época Pleistoceno",
        description: "El Pleistoceno (~2.6 millones a 11,700 años) se caracterizó por ciclos de glaciaciones, evolución del Homo sapiens y la coexistencia con megafauna como mamuts y tigres dientes de sable.",
        detalle: "En el Pleistoceno, Homo sapiens evolucionó en África (~300,000 años atrás), desarrolló herramientas avanzadas, lenguaje y cultura, y se expandió globalmente, reemplazando a otras especies humanas como los neandertales.<br><br>Durante el Pleistoceno, Homo sapiens coexistió con megafauna como mamuts, mastodontes y tigres dientes de sable, cazándolos para alimento y utilizándolos en herramientas y refugios."
    },
    {
        id:'flipCard26',
        image: "images/epocaHoloceno.jpg",
        title: "Época Holoceno",
        description: "El Holoceno (~11,700 años hasta hoy) es la época actual, marcada por el calentamiento global tras la última glaciación, el desarrollo de civilizaciones humanas, la agricultura y el impacto ambiental moderno.",
        detalle: "Los seres humanos domesticaron animales como perros, caballos y vacas, lo que transformó radicalmente la agricultura y la vida en sociedad.<br><br>La agricultura permitió la supervivencia de grandes poblaciones humanas, lo que llevó a la formación de ciudades y civilizaciones, cambiando la forma de vida humana."
    }
];