// --- DATASET DE PREGUNTAS COMPLETO ---
const allQuestions = [
    // --- MATEMÁTICAS / PENSAMIENTO MATEMÁTICO ---
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista / Recordatorio:</b> Para sacar la fracción de una cantidad, divide el total entre el denominador (el número de abajo) y multiplícalo por el numerador (el número de arriba). Por ejemplo: 3/4 de 1,200 = (1200 ÷ 4) × 3 = 900.",
        question: "Un tinaco de agua de 1,200 litros se encuentra lleno a 3/4 de su capacidad. Si se consumen 2/3 del agua que contenía, ¿cuántos litros de agua quedan exactamente en el tinaco?",
        options: ["300 litros", "600 litros", "400 litros", "150 litros"],
        answer: 0,
        explanation: "<b>Paso 1 (Cantidad inicial):</b> 3/4 de 1,200 L = (1200 ÷ 4) × 3 = 900 L.<br><b>Paso 2 (Lo consumido):</b> Se gastaron 2/3 de esos 900 L = (900 ÷ 3) × 2 = 600 L gastados.<br><b>Paso 3 (Restante):</b> 900 L - 600 L = <b>300 Litros restantes</b>.<br><i>💡 Tip de Examen:</i> Lee con cuidado si te preguntan 'cuánto se gastó' o 'cuánto queda'."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista / Recordatorio:</b> Los impuestos como el IVA (16%) siempre se aplican <i>después</i> de haber calculado y restado el descuento al precio original.",
        question: "En una tienda de ropa, una chamarra cuesta $850 pesos pero tiene un 20% de descuento. Al momento de pagar en caja, se cobra un 16% de IVA sobre el precio ya con descuento. ¿Cuánto se paga en total?",
        options: ["$680.00", "$788.80", "$816.00", "$750.00"],
        answer: 1,
        explanation: "<b>Paso 1 (Descuento):</b> 20% de $850 = $170. Precio rebajado = $850 - $170 = $680.<br><b>Paso 2 (Impuesto IVA):</b> 16% de $680 = $680 × 0.16 = $108.80.<br><b>Paso 3 (Total final):</b> $680 + $108.80 = <b>$788.80</b>.<br><i>💡 Tip de Examen:</i> Los impuestos siempre se calculan sobre el precio final rebajado."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista / Recordatorio:</b> El <b>Perímetro</b> es la suma de las orillas o contorno (metros lineales). El <b>Área</b> es la superficie total de adentro (Base × Altura en metros cuadrados m²).",
        question: "Se quiere cercar un terreno rectangular de 15 metros de largo por 10 metros de ancho con malla sombra. Además, se colocará pasto sintético en toda su superficie. ¿Cuántos metros de malla y cuántos metros cuadrados de pasto se necesitan?",
        options: ["Malla: 50 m | Pasto: 150 m²", "Malla: 25 m | Pasto: 150 m²", "Malla: 150 m | Pasto: 50 m²", "Malla: 50 m | Pasto: 25 m²"],
        answer: 0,
        explanation: "<b>Perímetro (Malla):</b> 15 + 15 + 10 + 10 = <b>50 metros</b>.<br><b>Área (Pasto):</b> Base × Altura = 15 × 10 = <b>150 m²</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista / Recordatorio:</b> Traduce las palabras a símbolos: 'el triple de un número' es 3x, 'se le suman 8' es +8, y 'se obtiene 50' es =50.",
        question: "Si al triple de la edad de Juan se le suman 8 años, se obtiene la edad de su padre, quien tiene 50 años. ¿Qué ecuación representa este problema y cuál es la edad de Juan?",
        options: ["3x - 8 = 50 → Juan tiene 19 años", "3x + 8 = 50 → Juan tiene 14 años", "x + 24 = 50 → Juan tiene 26 años", "3(x + 8) = 50 → Juan tiene 14 años"],
        answer: 1,
        explanation: "<b>Ecuación:</b> 3x + 8 = 50.<br><b>Despeje:</b> 3x = 50 - 8 => 3x = 42 => x = 42 / 3 = <b>14 años</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Regla de Tres Directa e Inversa",
        hint: "<b>Pista / Recordatorio:</b> Si aumentas el número de trabajadores, el tiempo de trabajo DEBE disminuir. Esto se resuelve con Regla de Tres Inversa: (Trabajadores Iniciales × Horas Iniciales) ÷ Trabajadores Totales.",
        question: "4 trabajadores pintan una barda escolar en 6 horas. Si contratamos a 2 trabajadores más con el mismo ritmo de trabajo, ¿cuánto tiempo tardarán en pintar la misma barda?",
        options: ["9 horas", "4 horas", "3 horas", "8 horas"],
        answer: 1,
        explanation: "Trabajadores totales = 4 + 2 = 6.<br><b>Cálculo Inverso:</b> (4 × 6) ÷ 6 = 24 ÷ 6 = <b>4 horas</b>."
    },

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
