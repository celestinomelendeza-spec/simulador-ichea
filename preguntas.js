// --- DATASET DE PREGUNTAS COMPLETO ---
const allQuestions = [
    // --- MATEMÁTICAS / PENSAMIENTO MATEMÁTICO ---
    // --- BLOQUE NUEVO: MATEMÁTICAS / PENSAMIENTO MATEMÁTICO (ICHEA/INEA) ---
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista / Recordatorio:</b> Para sumar o restar fracciones con el mismo denominador (el número de abajo), solo sumas o restas los numeradores (los de arriba) y el denominador se queda igual. Ejemplo: 1/5 + 2/5 = 3/5.",
        question: "Doña María usó 1/4 de kilo de harina por la mañana para hacer tortillas y 2/4 de kilo por la tarde. ¿Qué cantidad total de harina utilizó en el día?",
        options: ["3/8 de kilo", "3/4 de kilo", "2/4 de kilo", "1/2 de kilo"],
        answer: 1,
        explanation: "<b>Paso 1:</b> Como los denominadores son iguales (4), sumamos directo los numeradores: 1 + 2 = 3.<br><b>Paso 2:</b> El denominador permanece igual: <b>3/4 de kilo</b>.<br><i>💡 Tip de Examen:</i> Nunca sumes los números de abajo cuando las fracciones tienen el mismo denominador."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista / Recordatorio:</b> Para convertir una fracción a número decimal, divide el numerador (de arriba) entre el denominador (de abajo). Ejemplo: 1 ÷ 2 = 0.5.",
        question: "¿A qué número decimal equivale la fracción 3/5?",
        options: ["0.35", "0.53", "0.60", "0.15"],
        answer: 2,
        explanation: "<b>Cálculo paso a paso:</b> Dividimos 3 entre 5 (3 ÷ 5 = 0.60).<br>Por lo tanto, 3/5 es exactamente igual a <b>0.60</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista / Recordatorio:</b> Para calcular el porcentaje directo de una cantidad, multiplica la cantidad por el decimal del porcentaje. Ejemplo: El 15% de 200 es 200 × 0.15 = 30.",
        question: "Un televisor cuesta $4,500 pesos. Si se compra a crédito, tiene un recargo o interés del 12%. ¿Cuánto dinero extra se pagará únicamente de interés?",
        options: ["$540 pesos", "$450 pesos", "$500 pesos", "$360 pesos"],
        answer: 0,
        explanation: "<b>Paso 1:</b> Convertimos 12% a decimal: 12 ÷ 100 = 0.12.<br><b>Paso 2:</b> Multiplicamos el costo por el decimal: $4,500 × 0.12 = <b>$540 pesos</b>.<br><i>💡 Tip de Examen:</i> Lee con atención; si solo piden el interés, no le sumes el costo inicial."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista / Recordatorio:</b> El área de un triángulo se calcula multiplicando la Base por la Altura y dividiendo el resultado entre 2: <i>Área = (Base × Altura) ÷ 2</i>.",
        question: "Un seño de señalización vial tiene forma de triángulo con una base de 60 cm y una altura de 50 cm. ¿Cuál es la superficie o área total de la señal?",
        options: ["3,000 cm²", "1,500 cm²", "110 cm²", "600 cm²"],
        answer: 1,
        explanation: "<b>Paso 1:</b> Multiplicamos Base por Altura: 60 × 50 = 3,000.<br><b>Paso 2:</b> Dividimos entre 2: 3,000 ÷ 2 = <b>1,500 cm²</b>.<br><i>💡 Tip de Examen:</i> En los triángulos jamás olvides dividir el resultado entre 2."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista / Recordatorio:</b> Cuando pasas un número que está sumando al otro lado del signo igual (=), pasa haciendo la operación contraria (restando). Si está multiplicando, pasa dividiendo.",
        question: "Resuelve la siguiente ecuación para encontrar el valor de 'x': 2x + 10 = 26",
        options: ["x = 8", "x = 16", "x = 18", "x = 5"],
        answer: 0,
        explanation: "<b>Paso 1 (Restar el 10):</b> 2x = 26 - 10  =>  2x = 16.<br><b>Paso 2 (Dividir entre 2):</b> x = 16 ÷ 2  =>  <b>x = 8</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Regla de Tres Directa e Inversa",
        hint: "<b>Pista / Recordatorio:</b> En la proporcionalidad directa (si compras más, pagas más), se multiplica cruzado y se divide entre el número restante.",
        question: "Si 3 metros de tela cuestan $180 pesos, ¿cuánto se pagará por 8 metros de la misma tela?",
        options: ["$480 pesos", "$360 pesos", "$540 pesos", "$400 pesos"],
        answer: 0,
        explanation: "<b>Paso 1 (Costo por metro):</b> $180 ÷ 3 = $60 pesos cada metro.<br><b>Paso 2 (Multiplicar por los metros deseados):</b> $60 × 8 = <b>$480 pesos</b>.<br>Con Regla de tres: (8 × 180) ÷ 3 = 1440 ÷ 3 = <b>$480</b>."
    }

    // --- LENGUA Y COMUNICACIÓN ---
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Ten cuidado con las palabras homófonas: <i>Tubo</i> con 'b' es una pieza cilíndrica. <i>Tuvo</i> con 'v' viene del verbo tener.",
        question: "Identifica la palabra que contiene un error ortográfico en la siguiente oración: 'Ella tubo que ir a la farmacia a comprar medicina.'",
        options: ["farmacia", "medicina", "comprar", "tubo"],
        answer: 3,
        explanation: "'Tubo' del verbo tener se escribe con 'v' (tuvo). La palabra 'tubo' con 'b' se refiere a un cilindro."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> El tiempo <i>Pretérito</i> indica una acción realizada y terminada en el pasado (ej. 'él comió', 'ella caminó').",
        question: "¿Cuál de las siguientes opciones es un verbo conjugado en tiempo pretérito (pasado)?",
        options: ["Caminaré", "Caminaba", "Caminó", "Caminar"],
        answer: 2,
        explanation: "'Caminó' expresa una acción concluida en el pasado (pretérito perfecto simple)."
    },

    // --- CIENCIAS NATURALES ---
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista / Recordatorio:</b> Todos los seres vivos están constituidos por unidades mínimas vivas llamadas células. De ahí siguen los tejidos, órganos y sistemas.",
        question: "¿Cuál es la unidad estructural y funcional básica de todos los seres vivos?",
        options: ["Tejido", "Célula", "Órgano", "Átomo"],
        answer: 1,
        explanation: "La célula es la unidad más pequeña con vida capaz de realizar funciones vitales."
    },

    // --- CIENCIAS SOCIALES ---
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> No confundas el inicio de la Independencia (16 de septiembre de 1810) con la Revolución Mexicana (20 de noviembre de 1910) o la Batalla de Puebla (5 de mayo).",
        question: "¿En qué fecha se conmemora el inicio de la Independencia de México?",
        options: ["20 de noviembre de 1910", "16 de septiembre de 1810", "5 de mayo de 1862", "24 de febrero de 1821"],
        answer: 1,
        explanation: "El 16 de septiembre de 1810 se conmemora el inicio de la Independencia con Miguel Hidalgo."
    }
];