// --- DATASET DE PREGUNTAS COMPLETO ---
const allQuestions = [
    // --- MATEMÁTICAS / PENSAMIENTO MATEMÁTICO (ICHEA/INEA) ---
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista / Recordatorio:</b> Para sacar la fracción de una cantidad, divide el total entre el denominador (el de abajo) y multiplícalo por el numerador (el de arriba). Ejemplo: 3/4 de 1,200 = (1200 ÷ 4) × 3 = 900.",
        question: "Un tinaco de agua de 1,200 litros se encuentra lleno a 3/4 de su capacidad. Si se consumen 2/3 del agua que contenía, ¿cuántos litros de agua quedan exactamente en el tinaco?",
        options: ["300 litros", "600 litros", "400 litros", "150 litros"],
        answer: 0,
        explanation: "<b>Paso 1:</b> 3/4 de 1,200 L = (1200 ÷ 4) × 3 = 900 L.<br><b>Paso 2:</b> 2/3 de 900 L = (900 ÷ 3) × 2 = 600 L gastados.<br><b>Paso 3:</b> 900 L - 600 L = <b>300 Litros restantes</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista / Recordatorio:</b> Para sumar o restar fracciones con el mismo denominador (el número de abajo), solo sumas o restas los numeradores (los de arriba) y el denominador se queda igual.",
        question: "Doña María usó 1/4 de kilo de harina por la mañana para hacer tortillas y 2/4 de kilo por la tarde. ¿Qué cantidad total de harina utilizó en el día?",
        options: ["3/8 de kilo", "3/4 de kilo", "2/4 de kilo", "1/2 de kilo"],
        answer: 1,
        explanation: "<b>Paso 1:</b> Sumamos los numeradores directos: 1 + 2 = 3.<br><b>Paso 2:</b> El denominador permanece igual: <b>3/4 de kilo</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista / Recordatorio:</b> Para convertir una fracción a número decimal, divide el numerador (de arriba) entre el denominador (de abajo). Ejemplo: 1 ÷ 2 = 0.5.",
        question: "¿A qué número decimal equivale la fracción 3/5?",
        options: ["0.35", "0.53", "0.60", "0.15"],
        answer: 2,
        explanation: "<b>Cálculo:</b> Dividimos 3 entre 5 (3 ÷ 5 = 0.60). La respuesta es <b>0.60</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista / Recordatorio:</b> Los impuestos como el IVA (16%) siempre se aplican <i>después</i> de haber calculado y restado el descuento al precio original.",
        question: "En una tienda de ropa, una chamarra cuesta $850 pesos pero tiene un 20% de descuento. Al momento de pagar en caja, se cobra un 16% de IVA sobre el precio ya con descuento. ¿Cuánto se paga en total?",
        options: ["$680.00", "$788.80", "$816.00", "$750.00"],
        answer: 1,
        explanation: "<b>Paso 1:</b> 20% de $850 = $170. Precio rebajado = $680.<br><b>Paso 2:</b> 16% de $680 = $108.80.<br><b>Paso 3:</b> $680 + $108.80 = <b>$788.80</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista / Recordatorio:</b> Para calcular el porcentaje directo de una cantidad, multiplica la cantidad por el decimal del porcentaje (12% = 0.12).",
        question: "Un televisor cuesta $4,500 pesos. Si se compra a crédito, tiene un recargo o interés del 12%. ¿Cuánto dinero extra se pagará únicamente de interés?",
        options: ["$540 pesos", "$450 pesos", "$500 pesos", "$360 pesos"],
        answer: 0,
        explanation: "<b>Paso 1:</b> 12% en decimal = 0.12.<br><b>Paso 2:</b> $4,500 × 0.12 = <b>$540 pesos</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista / Recordatorio:</b> El <b>Perímetro</b> es la suma de las orillas (contorno en metros). El <b>Área</b> es la superficie total de adentro (Base × Altura en m²).",
        question: "Se quiere cercar un terreno rectangular de 15 metros de largo por 10 metros de ancho con malla sombra. Además, se colocará pasto sintético en toda su superficie. ¿Cuántos metros de malla y cuántos metros cuadrados de pasto se necesitan?",
        options: ["Malla: 50 m | Pasto: 150 m²", "Malla: 25 m | Pasto: 150 m²", "Malla: 150 m | Pasto: 50 m²", "Malla: 50 m | Pasto: 25 m²"],
        answer: 0,
        explanation: "<b>Perímetro:</b> 15 + 15 + 10 + 10 = <b>50 metros</b>.<br><b>Área:</b> 15 × 10 = <b>150 m²</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista / Recordatorio:</b> El área de un triángulo se calcula multiplicando la Base por la Altura y dividiendo entre 2: <i>Área = (Base × Altura) ÷ 2</i>.",
        question: "Una señal de tránsito triangular tiene una base de 60 cm y una altura de 50 cm. ¿Cuál es su superficie o área total?",
        options: ["3,000 cm²", "1,500 cm²", "110 cm²", "600 cm²"],
        answer: 1,
        explanation: "<b>Paso 1:</b> Base × Altura = 60 × 50 = 3,000.<br><b>Paso 2:</b> Dividir entre 2 = 3,000 ÷ 2 = <b>1,500 cm²</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista / Recordatorio:</b> Traduce palabras a símbolos: 'el triple de un número' es 3x, 'se le suman 8' es +8, y 'es igual a 50' se representa como =50.",
        question: "Si al triple de la edad de Juan se le suman 8 años, se obtiene la edad de su padre, quien tiene 50 años. ¿Qué ecuación representa este problema y cuál es la edad de Juan?",
        options: ["3x - 8 = 50 → Juan tiene 19 años", "3x + 8 = 50 → Juan tiene 14 años", "x + 24 = 50 → Juan tiene 26 años", "3(x + 8) = 50 → Juan tiene 14 años"],
        answer: 1,
        explanation: "<b>Ecuación:</b> 3x + 8 = 50.<br><b>Despeje:</b> 3x = 42 => x = 42 / 3 = <b>14 años</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista / Recordatorio:</b> Para despejar 'x', pasa lo que está sumando restando al otro lado del signo =, y lo que está multiplicando pasa dividiendo.",
        question: "Resuelve la siguiente ecuación para encontrar el valor de 'x': 2x + 10 = 26",
        options: ["x = 8", "x = 16", "x = 18", "x = 5"],
        answer: 0,
        explanation: "<b>Paso 1:</b> 2x = 26 - 10 => 2x = 16.<br><b>Paso 2:</b> x = 16 ÷ 2 => <b>x = 8</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Regla de Tres Directa e Inversa",
        hint: "<b>Pista / Recordatorio:</b> En la proporcionalidad Inversa (a MÁS trabajadores, MENOS horas), se calcula: (Trabajadores Iniciales × Horas Iniciales) ÷ Trabajadores Totales.",
        question: "4 trabajadores pintan una barda escolar en 6 horas. Si contratamos a 2 trabajadores más con el mismo ritmo, ¿cuánto tiempo tardarán?",
        options: ["9 horas", "4 horas", "3 horas", "8 horas"],
        answer: 1,
        explanation: "<b>Paso 1:</b> Trabajadores totales = 4 + 2 = 6.<br><b>Paso 2:</b> (4 × 6) ÷ 6 = 24 ÷ 6 = <b>4 horas</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Regla de Tres Directa e Inversa",
        hint: "<b>Pista / Recordatorio:</b> En la proporcionalidad directa (si compras más metros, pagas más dinero), puedes obtener el precio de 1 metro dividiendo el precio total entre los metros.",
        question: "Si 3 metros de tela cuestan $180 pesos, ¿cuánto se pagará por 8 metros de la misma tela?",
        options: ["$480 pesos", "$360 pesos", "$540 pesos", "$400 pesos"],
        answer: 0,
        explanation: "<b>Paso 1:</b> $180 ÷ 3 = $60 pesos por metro.<br><b>Paso 2:</b> $60 × 8 = <b>$480 pesos</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista / Recordatorio:</b> Para restar fracciones con el mismo denominador, mantén el número de abajo igual y resta los números de arriba.",
        question: "Un pastelero tenía 7/8 de una barra de mantequilla. Si utilizó 3/8 para preparar un bizcocho, ¿cuánta mantequilla le quedó?",
        options: ["4/8 de barra", "4/0 de barra", "10/8 de barra", "3/8 de barra"],
        answer: 0,
        explanation: "<b>Restamos los numeradores directos:</b> 7 - 3 = 4.<br>El denominador se mantiene igual en 8, lo que nos da <b>4/8 de barra</b> (equivalente a 1/2)."
    },

    // --- LENGUA Y COMUNICACIÓN ---
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> <i>Tubo</i> con 'b' es un cilindro. <i>Tuvo</i> con 'v' viene del verbo tener.",
        question: "Identifica la palabra que contiene un error ortográfico en la siguiente oración: 'Ella tubo que ir a la farmacia a comprar medicina.'",
        options: ["farmacia", "medicina", "comprar", "tubo"],
        answer: 3,
        explanation: "'Tubo' del verbo tener se escribe con 'v' (tuvo)."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> El tiempo <i>Pretérito</i> indica una acción terminada en el pasado.",
        question: "¿Cuál de las siguientes opciones es un verbo conjugado en tiempo pretérito (pasado)?",
        options: ["Caminaré", "Caminaba", "Caminó", "Caminar"],
        answer: 2,
        explanation: "'Caminó' expresa una acción concluida en el pasado."
    },

    // --- CIENCIAS NATURALES ---
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista / Recordatorio:</b> Todos los seres vivos están constituidos por unidades mínimas vivas llamadas células.",
        question: "¿Cuál es la unidad estructural y funcional básica de todos los seres vivos?",
        options: ["Tejido", "Célula", "Órgano", "Átomo"],
        answer: 1,
        explanation: "La célula es la unidad más pequeña con vida capaz de realizar funciones vitales."
    },

    // --- CIENCIAS SOCIALES ---
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> No confundas la Independencia (16 de septiembre de 1810) con la Revolución Mexicana (20 de noviembre de 1910).",
        question: "¿En qué fecha se conmemora el inicio de la Independencia de México?",
        options: ["20 de noviembre de 1910", "16 de septiembre de 1810", "5 de mayo de 1862", "24 de febrero de 1821"],
        answer: 1,
        explanation: "El 16 de septiembre de 1810 se conmemora el inicio de la Independencia."
    }
];