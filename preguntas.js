// --- BANCO DE 160 PREGUNTAS ÚNICAS (INEA / SECUNDARIA) ---
const allQuestions = [
    // ==========================================
    // --- MATEMÁTICAS (40 Preguntas) ---
    // ==========================================
    // Módulo 3: Fracciones y Operaciones (10 preguntas)
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista:</b> Divide el total entre el denominador y multiplica por el numerador.",
        question: "Un tinaco de 1,200 L está lleno a 3/4. Si se consumen 2/3 de eso, ¿cuántos litros quedan?",
        options: ["300 litros", "600 litros", "400 litros", "150 litros"],
        answer: 0,
        explanation: "3/4 de 1,200 = 900 L. 2/3 de 900 = 600 L gastados. 900 - 600 = 300 litros restantes."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista:</b> Suma los numeradores y mantén el denominador igual.",
        question: "Doña María usó 1/4 de kilo de harina por la mañana y 2/4 por la tarde. ¿Cuánto usó en total?",
        options: ["3/8 de kilo", "3/4 de kilo", "2/4 de kilo", "1/2 de kilo"],
        answer: 1,
        explanation: "1/4 + 2/4 = 3/4 de kilo."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista:</b> Divide el numerador entre el denominador.",
        question: "¿A qué número decimal equivale la fracción 3/5?",
        options: ["0.35", "0.53", "0.60", "0.15"],
        answer: 2,
        explanation: "3 ÷ 5 = 0.60."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista:</b> Resta los numeradores manteniendo el denominador.",
        question: "Un pastelero tenía 7/8 de barra de mantequilla y usó 3/8. ¿Cuánta mantequilla le quedó?",
        options: ["4/8 de barra", "4/0 de barra", "10/8 de barra", "3/8 de barra"],
        answer: 0,
        explanation: "7/8 - 3/8 = 4/8 de barra."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista:</b> Convierte 1/2 a cuartos (2/4) y súmalos.",
        question: "Resuelve la suma de fracciones: (1/2) + (1/4)",
        options: ["2/6", "3/4", "2/4", "5/8"],
        answer: 1,
        explanation: "1/2 equivale a 2/4. 2/4 + 1/4 = 3/4."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista:</b> Multiplica en diagonal o invierte la segunda fracción.",
        question: "Resuelve la división de fracciones: (3/4) ÷ (1/2)",
        options: ["3/8", "6/4 (3/2)", "4/6", "1/4"],
        answer: 1,
        explanation: "(3 × 2) = 6 en numerador, (4 × 1) = 4 en denominador. Resultado 6/4 = 3/2."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista:</b> Convierte 3 1/2 a fracción impropia (7/2) y divide entre 1/2.",
        question: "Si tienes una barra de madera de 3 1/2 metros y cortas tiras de 1/2 metro, ¿cuántas tiras obtienes?",
        options: ["5 tiras", "6 tiras", "7 tiras", "8 tiras"],
        answer: 2,
        explanation: "3.5 metros divididos en partes de 0.5 dan exactamente 7 tiras."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista:</b> Multiplica numerador por numerador y denominador por denominador.",
        question: "Resuelve la multiplicación de fracciones: (2/3) × (4/5)",
        options: ["6/8", "8/15", "10/12", "8/8"],
        answer: 1,
        explanation: "2 × 4 = 8 y 3 × 5 = 15. Resultado: 8/15."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista:</b> Convierte la fracción 1/2 a decimal (0.50).",
        question: "Un bote tenía 1.75 litros de jugo y se consumió 1/2 litro. ¿Cuántos litros quedan?",
        options: ["1.25 litros", "1.00 litro", "0.75 litros", "1.50 litros"],
        answer: 0,
        explanation: "1.75 - 0.50 = 1.25 litros."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista:</b> Convierte todas las fracciones a decimales para comparar.",
        question: "¿Cuál de las siguientes fracciones representa una cantidad mayor?",
        options: ["2/5", "3/4", "1/2", "3/8"],
        answer: 1,
        explanation: "3/4 = 0.75, siendo mayor que 2/5 (0.4), 1/2 (0.5) y 3/8 (0.375)."
    },

    // Módulo 3: Porcentajes e Interés (10 preguntas)
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista:</b> Calcula primero el 20% de descuento y al resultado aplícale el 16% de IVA.",
        question: "Una chamarra cuesta $850 con 20% de descuento. Al pagar se cobra 16% de IVA sobre el precio rebajado. ¿Cuánto se paga en total?",
        options: ["$680.00", "$788.80", "$816.00", "$750.00"],
        answer: 1,
        explanation: "850 - 20% = 680. 680 + 16% IVA ($108.80) = $788.80."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista:</b> Multiplica el capital por el porcentaje en decimal (0.12).",
        question: "Un televisor cuesta $4,500 y a crédito tiene un interés del 12%. ¿Cuánto se paga de interés?",
        options: ["$540 pesos", "$450 pesos", "$500 pesos", "$360 pesos"],
        answer: 0,
        explanation: "4,500 × 0.12 = $540 pesos de interés."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista:</b> Un descuento del 10% significa que pagaste el 90% del valor. Divide 720 entre 0.90.",
        question: "Unos tenis costaron $720 con un 10% de descuento aplicado. ¿Cuál era su precio original?",
        options: ["$800 pesos", "$792 pesos", "$810 pesos", "$850 pesos"],
        answer: 0,
        explanation: "720 ÷ 0.90 = $800 pesos precio original."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista:</b> Si incluye 16% de IVA, divide el costo total entre 1.16.",
        question: "Un servicio con IVA incluido costó $1,160 (16% de IVA). ¿Cuál era el costo sin IVA?",
        options: ["$1,000 pesos", "$980 pesos", "$1,020 pesos", "$950 pesos"],
        answer: 0,
        explanation: "1,160 ÷ 1.16 = $1,000 pesos."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista:</b> Divide la parte entre el total y multiplica por 100.",
        question: "En un grupo de 40 estudiantes, 10 obtuvieron la máxima nota. ¿Qué porcentaje representa?",
        options: ["15%", "20%", "25%", "30%"],
        answer: 2,
        explanation: "(10 ÷ 40) × 100 = 25%."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista:</b> Multiplica la cantidad por 0.25.",
        question: "¿A qué cantidad equivale exactamente el 25% de 840 pesos?",
        options: ["$210 pesos", "$420 pesos", "$168 pesos", "$250 pesos"],
        answer: 0,
        explanation: "840 × 0.25 = $210 pesos."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista:</b> Resta el precio rebajado al original, divídelo entre el original y multiplica por 100.",
        question: "Un artículo costaba $600 y se compró en liquidación a $450. ¿Qué porcentaje de descuento tuvo?",
        options: ["15%", "20%", "25%", "30%"],
        answer: 2,
        explanation: "Descuento de $150. (150 ÷ 600) × 100 = 25%."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista:</b> Multiplica el capital por la tasa y por los años (I = C × i × t).",
        question: "Se invierten $2,000 a un 5% de interés simple anual. ¿Cuánto se gana de interés en 3 años?",
        options: ["$100 pesos", "$200 pesos", "$300 pesos", "$400 pesos"],
        answer: 2,
        explanation: "2,000 × 0.05 = $100 por año. Por 3 años = $300 pesos."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista:</b> Calcula el 15% de 1,200 multiplicando por 0.15.",
        question: "Una cuenta en un restaurante fue de $1,200 y se dejó una propina del 15%. ¿De cuánto fue la propina?",
        options: ["$150 pesos", "$180 pesos", "$200 pesos", "$120 pesos"],
        answer: 1,
        explanation: "1,200 × 0.15 = $180 pesos."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista:</b> Divide la cantidad de IVA entre 0.16 para hallar el subtotal.",
        question: "Si pagaste $320 pesos correspondientes únicamente al 16% de IVA de una compra, ¿cuánto costaba el producto sin IVA?",
        options: ["$1,500 pesos", "$2,000 pesos", "$1,800 pesos", "$2,500 pesos"],
        answer: 1,
        explanation: "320 ÷ 0.16 = $2,000 pesos."
    },

    // Módulo 4: Áreas y Perímetros (10 preguntas)
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista:</b> Perímetro es la suma de los 4 lados; Área es base por altura.",
        question: "Terreno rectangular de 15 m de largo por 10 m de ancho. ¿Cuántos metros de malla y cuántos metros cuadrados de pasto se requieren?",
        options: ["Malla: 50 m | Pasto: 150 m²", "Malla: 25 m | Pasto: 150 m²", "Malla: 150 m | Pasto: 50 m²", "Malla: 50 m | Pasto: 25 m²"],
        answer: 0,
        explanation: "Perímetro = 15+15+10+10 = 50 m. Área = 15 × 10 = 150 m²."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista:</b> Área del triángulo = (Base × Altura) ÷ 2.",
        question: "Señal triangular con base de 60 cm y altura de 50 cm. ¿Cuál es su área total?",
        options: ["3,000 cm²", "1,500 cm²", "110 cm²", "600 cm²"],
        answer: 1,
        explanation: "(60 × 50) ÷ 2 = 1,500 cm²."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista:</b> Saca la raíz cuadrada del área total para hallar un lado.",
        question: "Un terreno cuadrado tiene un área total de 144 m². ¿Cuánto mide cada lado?",
        options: ["12 metros", "36 metros", "24 metros", "14.4 metros"],
        answer: 0,
        explanation: "La raíz cuadrada de 144 es 12 metros."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista:</b> Divide el área total entre la base conocida.",
        question: "Salón rectangular con área de 48 m² y base de 8 m. ¿Cuánto mide su ancho?",
        options: ["5 metros", "6 metros", "7 metros", "8 metros"],
        answer: 1,
        explanation: "48 ÷ 8 = 6 metros."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista:</b> Área del trapecio = ((Base Mayor + Base menor) × Altura) ÷ 2.",
        question: "Trapecio con Base Mayor de 12 m, Base menor de 8 m y altura de 6 m. ¿Cuál es su área?",
        options: ["120 m²", "60 m²", "48 m²", "80 m²"],
        answer: 1,
        explanation: "((12 + 8) × 6) ÷ 2 = (20 × 6) ÷ 2 = 60 m²."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista:</b> Multiplica π (3.14) por el diámetro.",
        question: "Una rueda de bicicleta tiene un diámetro de 50 cm. ¿Qué distancia recorre en una vuelta completa?",
        options: ["157 cm", "100 cm", "314 cm", "78.5 cm"],
        answer: 0,
        explanation: "3.14 × 50 = 157 cm."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista:</b> Multiplica la longitud de un lado por el número de lados (pentágono = 5).",
        question: "Un terreno pentágono regular mide 12 metros por cada uno de sus 5 lados. ¿Cuál es su perímetro?",
        options: ["60 metros", "48 metros", "72 metros", "50 metros"],
        answer: 0,
        explanation: "12 × 5 = 60 metros."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista:</b> Área del círculo = π × radio al cuadrado (3.14 × 3²).",
        question: "¿Cuál es el área aproximada de una carpa circular con radio de 3 metros?",
        options: ["18.84 m²", "28.26 m²", "9.42 m²", "37.68 m²"],
        answer: 1,
        explanation: "3.14 × 9 = 28.26 m²."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista:</b> Perímetro de un rectángulo = 2(largo + ancho).",
        question: "Calcula el perímetro de una cancha deportiva de 40 metros de largo por 20 metros de ancho.",
        options: ["800 metros", "120 metros", "60 metros", "100 metros"],
        answer: 1,
        explanation: "2(40 + 20) = 2(60) = 120 metros."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista:</b> Área del rombo = (Diagonal mayor × diagonal menor) ÷ 2.",
        question: "Un terreno en forma de rombo tiene diagonales de 16 m y 10 m. ¿Cuál es su superficie?",
        options: ["160 m²", "80 m²", "26 m²", "50 m²"],
        answer: 1,
        explanation: "(16 × 10) ÷ 2 = 160 ÷ 2 = 80 m²."
    },

    // Módulo 4 y 5: Álgebra y Estadística (10 preguntas)
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista:</b> Traduce: triple de x es 3x, más 8 es igual a 50.",
        question: "Si al triple de la edad de Juan se le suman 8 años se obtienen 50. ¿Qué ecuación lo resuelve y qué edad tiene?",
        options: ["3x - 8 = 50 → 19 años", "3x + 8 = 50 → 14 años", "x + 24 = 50 → 26 años", "3(x + 8) = 50 → 14 años"],
        answer: 1,
        explanation: "3x + 8 = 50 => 3x = 42 => x = 14 años."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista:</b> Pasa el 10 restando al 26 y divide entre 2.",
        question: "Resuelve la ecuación para hallar x: 2x + 10 = 26",
        options: ["x = 8", "x = 16", "x = 18", "x = 5"],
        answer: 0,
        explanation: "2x = 16 => x = 8."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista:</b> La suma de ángulos internos en un triángulo siempre da 180°.",
        question: "En un triángulo, un ángulo mide 50° y el segundo 70°. ¿Cuánto mide el tercero?",
        options: ["50°", "60°", "70°", "80°"],
        answer: 1,
        explanation: "180° - (50° + 70°) = 60°."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista:</b> Agrupa términos con x y términos con y por separado.",
        question: "Simplifica la expresión algebraica: 5x + 3y - 2x + 4y",
        options: ["7x + 7y", "3x + 7y", "3x - y", "7x + y"],
        answer: 1,
        explanation: "5x - 2x = 3x; 3y + 4y = 7y. Resultado: 3x + 7y."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista:</b> Plantea 2x - 5 = 15 y despeja x.",
        question: "El doble de un número menos 5 da 15. ¿Cuál es ese número?",
        options: ["x = 8", "x = 10", "x = 12", "x = 5"],
        answer: 1,
        explanation: "2x = 20 => x = 10."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Regla de Tres Directa e Inversa",
        hint: "<b>Pista:</b> Más trabajadores tardan menos tiempo (proporcionalidad inversa).",
        question: "4 trabajadores pintan una barda en 6 horas. Si se contratan 2 trabajadores más, ¿cuánto tardarán?",
        options: ["9 horas", "4 horas", "3 horas", "8 horas"],
        answer: 1,
        explanation: "(4 × 6) ÷ 6 trabajadores totales = 4 horas."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Regla de Tres Directa e Inversa",
        hint: "<b>Pista:</b> Si 3 metros cuestan 180, divide 180 entre 3.",
        question: "Si 3 metros de tela cuestan $180, ¿cuánto se pagará por 8 metros?",
        options: ["$480 pesos", "$360 pesos", "$540 pesos", "$400 pesos"],
        answer: 0,
        explanation: "(180 ÷ 3) × 8 = $480 pesos."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Regla de Tres Directa e Inversa",
        hint: "<b>Pista:</b> Proporcionalidad inversa: (2 bombas × 12 horas) ÷ 4 bombas.",
        question: "2 bombas de agua tardan 12 horas en llenar un estanque. Si activas 4 bombas, ¿cuánto tardan?",
        options: ["24 horas", "6 horas", "8 horas", "4 horas"],
        answer: 1,
        explanation: "24 ÷ 4 = 6 horas."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Regla de Tres Directa e Inversa",
        hint: "<b>Pista:</b> Calcula los kilómetros por litro multiplicando 40 por 75 y dividiendo entre 5.",
        question: "5 litros de gasolina rinden 75 km. ¿Cuántos km se recorren con 40 litros?",
        options: ["500 km", "600 km", "450 km", "550 km"],
        answer: 1,
        explanation: "(40 × 75) ÷ 5 = 600 km."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Estadística Básica",
        hint: "<b>Pista:</b> Suma todas las cantidades y divide entre el número de datos.",
        question: "Calificaciones de 5 estudiantes: 7, 8, 9, 10 y 6. ¿Cuál es el promedio (media)?",
        options: ["8", "7.5", "8.5", "7"],
        answer: 0,
        explanation: "Suma = 40. 40 ÷ 5 = 8."
    },

    // ==========================================
    // --- LENGUA Y COMUNICACIÓN (40 Preguntas) ---
    // ==========================================
    // Ortografía y Gramática (20 preguntas)
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> Las palabras agudas llevan tilde si terminan en n, s o vocal.",
        question: "¿Cuál palabra está acentuada correctamente por ser aguda terminada en vocal?",
        options: ["colibri", "colibrí", "cólibri", "colíbri"],
        answer: 1,
        explanation: "Colibrí es aguda terminada en vocal."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> Las graves llevan tilde si NO terminan en n, s o vocal.",
        question: "Selecciona la palabra grave que debe llevar tilde obligatoria:",
        options: ["mesa", "casa", "arbol", "libro"],
        answer: 2,
        explanation: "Árbol es grave terminada en 'l'."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> Las palabras esdrújulas siempre llevan tilde en la antepenúltima sílaba.",
        question: "¿Cuál palabra es esdrújula y lleva acento ortográfico?",
        options: ["Matematicas", "Corazon", "Pared", "Jardin"],
        answer: 0,
        explanation: "Matemáticas es esdrújula."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> Tubo de objeto con b, tuvo del verbo tener con v.",
        question: "Identifica el error en: 'Ella tubo que ir a la farmacia a comprar medicina.'",
        options: ["farmacia", "medicina", "comprar", "tubo"],
        answer: 3,
        explanation: "Del verbo tener se escribe con v (tuvo)."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> Antes de la letra b y p siempre se escribe m.",
        question: "Completa la regla: 'Antes de la letra B siempre se escribe _____.'",
        options: ["N", "M", "S", "C"],
        answer: 1,
        explanation: "La letra M precede a la B y P."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> El pretérito indica una acción concluida en el pasado.",
        question: "¿Cuál opción es un verbo conjugado en tiempo pretérito?",
        options: ["Caminaré", "Caminaba", "Caminó", "Caminar"],
        answer: 2,
        explanation: "Caminó expresa pasado concluido."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> El sujeto responde a quién realiza la acción.",
        question: "En: 'Los alumnos de la escuela repasaron sus módulos', ¿cuál es el Sujeto?",
        options: ["repasaron sus módulos", "por la tarde", "Los alumnos de la escuela", "de la escuela"],
        answer: 2,
        explanation: "Los alumnos de la escuela realizan la acción."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> El adjetivo califica o describe al sustantivo.",
        question: "En la frase: 'El perro negro corre', ¿qué palabra es adjetivo calificativo?",
        options: ["perro", "negro", "corre", "jardín"],
        answer: 1,
        explanation: "Negro describe al perro."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> Los signos de exclamación expresan emociones o sorpresa.",
        question: "¿Qué signos se colocan en: '___Qué alegría volver a verte___'?",
        options: ["¿ ?", "¡ !", "( )", "“ ”"],
        answer: 1,
        explanation: "Se usan signos de exclamación (¡ !)."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> La coma separa elementos análogos en una lista.",
        question: "¿Cuál oración usa correctamente las comas en una enumeración?",
        options: [
            "Fui y compré manzanas, peras, plátanos, y uvas.",
            "Fui y compré, manzanas peras plátanos y uvas.",
            "Fui y compré manzanas, peras, plátanos y uvas.",
            "Fui, al mercado compré manzanas peras y uvas."
        ],
        answer: 2,
        explanation: "Separa con comas y cierra antes de la conjunción."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> Los sustantivos abstractos terminados en -eza llevan z.",
        question: "Selecciona la palabra abstracta escrita correctamente:",
        options: ["tristeza", "tristesa", "tristeca", "tricesa"],
        answer: 0,
        explanation: "Tristeza se escribe con z."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> El punto y seguido separa oraciones de un mismo párrafo.",
        question: "¿Qué signo separa oraciones dentro de un mismo párrafo que abordan la misma idea?",
        options: ["Punto y aparte", "Punto y seguido", "Punto final", "Dos puntos"],
        answer: 1,
        explanation: "Punto y seguido mantiene el flujo del párrafo."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> Los pronombres sustituyen al nombre.",
        question: "En: 'Ellos entregaron el proyecto a tiempo', ¿cuál es el pronombre personal?",
        options: ["entregaron", "proyecto", "Ellos", "ciencias"],
        answer: 2,
        explanation: "Ellos sustituye a los nombres de las personas."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> Él con tilde es pronombre personal.",
        question: "Identifica la oración con acento diacrítico correcto en el pronombre:",
        options: [
            "El trae el libro.",
            "Él trae el libro.",
            "Él trae él libro.",
            "El trae él libro."
        ],
        answer: 1,
        explanation: "Él lleva tilde por ser pronombre."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> El copretérito expresa acción pasada continua (-aba, -ía).",
        question: "¿En qué opción el verbo está en copretérito?",
        options: ["Escribió", "Escribirá", "Escribía", "Escriba"],
        answer: 2,
        explanation: "Escribía indica pasado continuo."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> Los adverbios de modo responden a la pregunta ¿cómo?",
        question: "En: 'El estudiante contestó tranquilamente', ¿cuál es el adverbio de modo?",
        options: ["estudiante", "contestó", "tranquilamente", "preguntas"],
        answer: 2,
        explanation: "Tranquilamente indica el modo de la acción."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> Derivan con -ción las palabras con t o d.",
        question: "Selecciona la palabra escrita correctamente:",
        options: ["comunicasión", "comunicación", "comunikación", "comunicasion"],
        answer: 1,
        explanation: "Comunicación se escribe con c."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> Se escriben con g las palabras terminadas en -logía.",
        question: "Completa: 'La biolo____ía estudia la vida.'",
        options: ["j", "g", "cc", "x"],
        answer: 1,
        explanation: "Se escribe con g."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> El núcleo del sujeto es el sustantivo principal.",
        question: "En: 'El veloz caballo negro salta', ¿cuál es el núcleo del sujeto?",
        options: ["veloz", "salta", "caballo", "cerca"],
        answer: 2,
        explanation: "Caballo es el núcleo."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista:</b> El tiempo futuro indica una acción posterior.",
        question: "Identifica el verbo en futuro simple:",
        options: ["Cantaba", "Cantaré", "Canté", "Cante"],
        answer: 1,
        explanation: "Cantaré es futuro."
    },

    // Comprensión Lectora y Tipos de Texto (20 preguntas)
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> La idea principal resume la esencia del texto.",
        question: "Lee: 'El agua es indispensable. La contaminación amenaza con agotarla. Es urgente cuidarla.' ¿Cuál es la idea principal?",
        options: [
            "El agua es abundante.",
            "Es necesario cuidar el agua ante la amenaza de escasez.",
            "Los ríos están sucios.",
            "El consumo individual no importa."
        ],
        answer: 1,
        explanation: "Resume la importancia del agua y la necesidad de cuidarla."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> Los textos instructivos guían paso a paso.",
        question: "¿A qué texto pertenece un documento con ingredientes y pasos para cocinar?",
        options: ["Texto Narrativo", "Texto Instructivo", "Texto Poético", "Texto Argumentativo"],
        answer: 1,
        explanation: "Instructivo guía objetivos paso a paso."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> Los sinónimos tienen igual significado.",
        question: "Selecciona una pareja de sinónimos directos:",
        options: ["abundante / escaso", "comenzar / iniciar", "fuerte / débil", "comprar / vender"],
        answer: 1,
        explanation: "Comenzar e iniciar significan lo mismo."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> Un resumen extrae solo las ideas clave.",
        question: "¿Cuál es la característica principal de un buen resumen?",
        options: [
            "Copiar todo el texto original.",
            "Dar opiniones personales extensas.",
            "Extraer y sintetizar las ideas principales respetando el sentido original.",
            "Agregar historias inventadas."
        ],
        answer: 2,
        explanation: "Sintetiza las ideas clave de forma objetiva."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> Los periódicos difunden noticias de actualidad.",
        question: "¿Dónde encontramos textos periodísticos informativos?",
        options: ["Un libro de poemas", "Un periódico o diario informativo", "Una novela de ciencia ficción", "Un catálogo"],
        answer: 1,
        explanation: "El periódico publica notas periodísticas."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> El antónimo es lo opuesto.",
        question: "¿Cuál es el antónimo de 'abundante'?",
        options: ["excesivo", "escaso", "bastante", "lleno"],
        answer: 1,
        explanation: "Escaso es lo contrario."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> La fábula es un relato con moraleja.",
        question: "¿A qué género pertenece un relato con animales que deja moraleja?",
        options: ["Fábula", "Artículo científico", "Noticia", "Instructivo"],
        answer: 0,
        explanation: "La fábula deja una enseñanza moral."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> La tesis es la opinión defendida.",
        question: "En texto sobre celular y melatonina, ¿cuál es la tesis principal?",
        options: [
            "Los jóvenes usan celular.",
            "El uso nocturno del celular perjudica la calidad del sueño.",
            "La melatonina es vitamina.",
            "Los teléfonos tienen luz azul."
        ],
        answer: 1,
        explanation: "Defiende que el celular nocturno daña el sueño."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> Las fichas bibliográficas identifican obras.",
        question: "¿Qué dato es indispensable en una ficha bibliográfica?",
        options: ["Nombre del lector", "Autor, título y editorial", "Resumen de capítulos", "Páginas leídas"],
        answer: 1,
        explanation: "Identifica la fuente con autor, título y editorial."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> El lenguaje figurado usa metáforas.",
        question: "Identifica la frase en lenguaje figurado:",
        options: ["El atleta corrió 10 km.", "El examen fue largo.", "Esa mujer tiene un corazón de oro.", "El coche es rojo."],
        answer: 2,
        explanation: "'Corazón de oro' es una metáfora."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> Las enciclopedias exponen ciencia objetivamente.",
        question: "¿Dónde encontramos lenguaje expositivo de carácter científico?",
        options: ["Una enciclopedia médica", "Una novela policíaca", "Un poema", "Un cómic"],
        answer: 0,
        explanation: "La enciclopedia expone conocimientos médicos reales."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> Las acotaciones guían la actuación teatral.",
        question: "¿Cómo se llaman las notas entre paréntesis en una obra de teatro?",
        options: ["Diálogos", "Acotaciones", "Escenas", "Parlamentos"],
        answer: 1,
        explanation: "Son las acotaciones escénicas."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> Las fuentes primarias son documentos originales coetáneos.",
        question: "¿Cuál es una fuente primaria para investigar la Revolución Mexicana?",
        options: ["Un libro de 2020", "Una carta de un soldado escrita en 1912", "Un video de YouTube", "Una novela moderna"],
        answer: 1,
        explanation: "Una carta de la época es fuente directa."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> El índice ubica los capítulos.",
        question: "¿Cómo se llama la lista ordenada de capítulos y páginas en un libro?",
        options: ["Bibliografía", "Índice general", "Prólogo", "Glosario"],
        answer: 1,
        explanation: "El índice general localiza los contenidos."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> Los diptongos juntan dos vocales en una sílaba.",
        question: "¿Cuál palabra contiene un diptongo?",
        options: ["Poema", "Maíz", "Ciudad", "Baúl"],
        answer: 2,
        explanation: "Ciudad agrupa la 'iu'."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> La conclusión cierra el texto.",
        question: "¿Cuál es la función de la conclusión en un ensayo?",
        options: ["Plantear dudas", "Resumir puntos clave y cerrar la argumentación", "Dar datos biográficos", "Contar chistes"],
        answer: 1,
        explanation: "Cierra y sintetiza el trabajo."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> El texto argumentativo persuade con razones.",
        question: "¿Qué texto busca convencer mediante argumentos?",
        options: ["Texto Argumentativo", "Texto Instructivo", "Texto Poético", "Texto Narrativo"],
        answer: 0,
        explanation: "Argumenta para persuadir."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> Pesimista es lo contrario a optimista.",
        question: "¿Cuál es el antónimo de 'optimista'?",
        options: ["Alegre", "Pesimista", "Positivo", "Entusiasta"],
        answer: 1,
        explanation: "Pesimista es lo opuesto."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> La paráfrasis explica con palabras propias.",
        question: "¿Cómo se llama explicar un texto con palabras propias sin cambiar su sentido?",
        options: ["Plagio", "Paráfrasis", "Traducción", "Resumen literal"],
        answer: 1,
        explanation: "Paráfrasis reescribe manteniendo el mensaje."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista:</b> Las preposiciones unen palabras.",
        question: "En: 'Viajamos en autobús rumbo a la ciudad de Chihuahua', ¿qué palabra es preposición?",
        options: ["autobús", "de", "ciudad", "viajamos"],
        answer: 1,
        explanation: "'De' funciona como preposición."
    },
    // ==========================================
    // --- CIENCIAS NATURALES (40 Preguntas) ---
    // ==========================================
    // Biología Básica (10 preguntas)
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista:</b> Es la unidad anatómica y funcional de la vida.",
        question: "¿Cuál es la unidad mínima estructural y funcional con vida que constituye a todos los seres vivos?",
        options: ["Tejido", "Célula", "Órgano", "Molécula"],
        answer: 1,
        explanation: "La célula es la unidad viva fundamental."
    },
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista:</b> Ocurre en cloroplastos usando luz solar, agua y dióxido de carbono.",
        question: "¿Cómo se llama el proceso por el cual las plantas convierten la energía solar en alimento?",
        options: ["Respiración celular", "Digestión", "Fotosíntesis", "Fermentación"],
        answer: 2,
        explanation: "La fotosíntesis transforma luz y agua en azúcares."
    },
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista:</b> Las células eucariotas resguardan allí su material genético.",
        question: "¿Cuál es la estructura celular encargada de resguardar el ADN?",
        options: ["Membrana celular", "Núcleo celular", "Citoplasma", "Pared celular"],
        answer: 1,
        explanation: "El núcleo celular alberga el código genético."
    },
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista:</b> Consumen materia orgánica elaborada por otros.",
        question: "¿Cuál de los siguientes es un organismo heterótrofo?",
        options: ["Un pino", "Un conejo", "Un rosal", "El musgo"],
        answer: 1,
        explanation: "El conejo es un animal herbívoro heterótrofo."
    },
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista:</b> Desintegran restos orgánicos devolviendo nutrientes al suelo.",
        question: "¿Qué función ecológica vital realizan los hongos y las bacterias en un bosque?",
        options: ["Producir oxígeno", "Descomponer materia orgánica muerta y enriquecer el suelo", "Consumir luz solar", "Regular la temperatura"],
        answer: 1,
        explanation: "Son organismos descomponedores."
    },
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista:</b> Estructura rígida de celulosa exclusiva de plantas.",
        question: "¿Qué estructura rígida externa poseen exclusivamente las células vegetales para darles soporte?",
        options: ["Membrana plasmática", "Pared celular", "Núcleo", "Mitocondria"],
        answer: 1,
        explanation: "La pared celular da rigidez a las plantas."
    },
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista:</b> Orgánulo productor de energía (ATP).",
        question: "¿Qué orgánulo celular produce la mayor parte de la energía (ATP)?",
        options: ["Mitocondria", "Ribosoma", "Vacuola", "Lisosoma"],
        answer: 0,
        explanation: "Las mitocondrias realizan la respiración celular."
    },
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista:</b> Organismos que elaboran su propio alimento.",
        question: "¿Cómo se les llama a los organismos capaces de producir su propio alimento como las plantas?",
        options: ["Heterótrofos", "Autótrofos", "Descomponedores", "Parásitos"],
        answer: 1,
        explanation: "Los autótrofos sintetizan sustancias orgánicas."
    },
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista:</b> División celular para formar células sexuales o gametos.",
        question: "¿Cómo se llama el proceso de división celular que da origen a los óvulos y espermatozoides?",
        options: ["Mitosis", "Meiosis", "Fisión binaria", "Gemación"],
        answer: 1,
        explanation: "La meiosis reduce a la mitad el número de cromosomas."
    },
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista:</b> Unidad de herencia que determina características físicas.",
        question: "¿Cómo se denomina a la unidad fundamental de la herencia biológica localizada en los cromosomas?",
        options: ["Gen", "Proteína", "Enzima", "Lípido"],
        answer: 0,
        explanation: "El gen transmite la información hereditaria."
    },

    // Cuerpo Humano y Salud (10 preguntas)
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista:</b> Órgano muscular impulsor de la sangre.",
        question: "¿Cuál es la función principal del corazón en el cuerpo humano?",
        options: ["Filtrar toxinas", "Bombear la sangre oxigenada a todo el cuerpo", "Producir jugos gástricos", "Controlar impulsos"],
        answer: 1,
        explanation: "Bombea sangre hacia los tejidos."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista:</b> Órganos respiratorios con alvéolos.",
        question: "¿En qué órgano se realiza principalmente la absorción de oxígeno del aire?",
        options: ["Pulmones", "Estómago", "Hígado", "Riñones"],
        answer: 0,
        explanation: "Los pulmones realizan el intercambio gaseoso."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista:</b> Nutrimentos constructores de músculos.",
        question: "¿Qué nutrimento construye, reparte y mantiene los tejidos musculares?",
        options: ["Carbohidratos", "Proteínas", "Vitaminas", "Minerales"],
        answer: 1,
        explanation: "Las proteínas reparan tejidos."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista:</b> Leucocitos defensores contra infecciones.",
        question: "¿Qué células sanguíneas defienden al organismo contra infecciones?",
        options: ["Glóbulos rojos", "Plaquetas", "Glóbulos blancos (Leucocitos)", "Plasma"],
        answer: 2,
        explanation: "Los glóbulos blancos combaten agentes patógenos."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista:</b> Segmento digestivo de absorción masiva de nutrientes.",
        question: "¿En qué parte del tubo digestivo ocurre la absorción de nutrimentos a la sangre?",
        options: ["Boca", "Estómago", "Intestino delgado", "Esófago"],
        answer: 2,
        explanation: "El intestino delgado absorbe los nutrientes."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista:</b> Inmunización preventiva mediante anticuerpos.",
        question: "¿Cuál es el objetivo principal de la aplicación de vacunas?",
        options: ["Curar infecciones inmediatas", "Prevenir enfermedades mediante producción de defensas", "Sustituir la alimentación", "Bajar la presión"],
        answer: 1,
        explanation: "Las vacunas previenen enfermedades estimulando defensas."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista:</b> Centro de control del sistema nervioso central.",
        question: "¿Cuál es el órgano principal que procesa la información de los sentidos y toma decisiones?",
        options: ["Corazón", "Cerebro", "Pulmón", "Hígado"],
        answer: 1,
        explanation: "El cerebro coordina las respuestas del cuerpo."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista:</b> Doble protección contra embarazos e ITS.",
        question: "¿Qué método anticonceptivo previene embarazos y protege contra ITS?",
        options: ["Pastillas", "Condón o preservativo", "DIU", "Inyecciones"],
        answer: 1,
        explanation: "El condón evita fluidos y contagios."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista:</b> Vasos sanguíneos que salen con sangre rica en oxígeno.",
        question: "¿Cómo se llaman los vasos que llevan sangre oxigenada del corazón al cuerpo?",
        options: ["Venas", "Arterias", "Capilares", "Alvéolos"],
        answer: 1,
        explanation: "Las arterias transportan sangre oxigenada."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista:</b> Depuradores sanguíneos formadores de orina.",
        question: "¿Cuál es el órgano principal del sistema urinario que filtra la sangre y produce orina?",
        options: ["Hígado", "Riñones", "Páncreas", "Vesícula"],
        answer: 1,
        explanation: "Los riñones filtran toxinas."
    },

    // Ecosistemas y Medio Ambiente (10 preguntas)
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista:</b> Las plantas ocupan este rol al sintetizar su alimento.",
        question: "En una cadena trófica, ¿qué papel desempeñan los árboles y plantas?",
        options: ["Consumidores", "Descomponedores", "Productores", "Depredadores"],
        answer: 2,
        explanation: "Las plantas son productores primarios."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista:</b> Dar un nuevo uso a objetos antes de desechar.",
        question: "Reutilizar un frasco de vidrio viejo para guardar objetos es un ejemplo de:",
        options: ["Reciclar", "Reutilizar", "Reducir", "Reparar"],
        answer: 1,
        explanation: "Reutilizar prolonga la vida útil de los objetos."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista:</b> Destrucción de bosques que destruye hábitats.",
        question: "La pérdida de hábitats naturales por tala desmedida afecta directamente a la:",
        options: ["Gravedad", "Biodiversidad", "Rotación", "Composición del núcleo"],
        answer: 1,
        explanation: "Reduce la biodiversidad regional."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista:</b> Factores sin vida de un ecosistema (luz, temperatura).",
        question: "¿Cuál de los siguientes es un factor abiótico?",
        options: ["Bacterias del suelo", "Temperatura y luz solar", "Hongos", "Insectos polinizadores"],
        answer: 1,
        explanation: "Son elementos físicos no vivos."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista:</b> Gas liberado por combustibles fósiles causante de efecto invernadero.",
        question: "¿Qué gas se libera a la atmósfera por la quema de combustibles fósiles?",
        options: ["Oxígeno", "Dióxido de Carbono (CO2)", "Nitrógeno", "Helio"],
        answer: 1,
        explanation: "El CO2 intensifica el calentamiento global."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista:</b> Caída de agua meteorológica (lluvia, nieve).",
        question: "Fase del ciclo del agua donde el vapor acumulado se enfría y cae como lluvia:",
        options: ["Evaporación", "Precipitación", "Filtración", "Transpiración"],
        answer: 1,
        explanation: "La precipitación devuelve el agua a la superficie."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista:</b> Carnívoros que cazan herbívoros.",
        question: "¿Cómo se les llama a los carnívoros que se alimentan de herbívoros?",
        options: ["Productores", "Consumidores secundarios", "Descomponedores", "Autótrofos"],
        answer: 1,
        explanation: "Ocupan el nivel de consumidores secundarios."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista:</b> Transformación industrial de residuos para materia prima.",
        question: "¿Qué proceso recolecta aluminio, papel y vidrio para procesarlos y crear nuevos productos?",
        options: ["Reutilización", "Reciclaje", "Combustión", "Sedimentación"],
        answer: 1,
        explanation: "El reciclaje reintroduce materiales al ciclo."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista:</b> Relación estrecha y duradera entre dos especies diferentes.",
        question: "¿Cómo se le llama a la interacción biológica estrecha entre dos especies diferentes?",
        options: ["Competencia", "Simbiosis", "Depredación", "Erosión"],
        answer: 1,
        explanation: "La simbiosis asocia especies en beneficio mutuo o neutro."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista:</b> Capa gaseosa protectora contra radiación ultravioleta.",
        question: "¿Qué capa de la atmósfera terrestre protege la vida filtrando los rayos ultravioleta del Sol?",
        options: ["Capa de ozono", "Troposfera baja", "Ionosfera", "Magnetosfera"],
        answer: 0,
        explanation: "La capa de ozono absorbe la radiación dañina."
    },

    // Física y Química Básica (10 preguntas)
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista:</b> Moléculas separadas sin forma ni volumen fijo.",
        question: "¿En qué estado las moléculas están muy separadas y se mueven libremente?",
        options: ["Sólido", "Líquido", "Gaseoso", "Plasmático"],
        answer: 2,
        explanation: "El estado gaseoso ocupa todo el espacio disponible."
    },
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista:</b> Transición de líquido a gas por calor.",
        question: "Cambio de estado cuando el agua líquida se calienta y pasa a vapor:",
        options: ["Condensación", "Evaporación", "Solidificación", "Fusión"],
        answer: 1,
        explanation: "Ocurre evaporación por aumento térmico."
    },
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista:</b> Energía limpia e inagotable obtenida de la luz solar.",
        question: "¿Cuál es una fuente limpia de energía renovable?",
        options: ["Carbón", "Petróleo", "Energía Solar", "Gas natural"],
        answer: 2,
        explanation: "La energía solar no contamina."
    },
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista:</b> Distancia dividida entre tiempo.",
        question: "Un autobús recorre 180 km en 2 horas. ¿Cuál fue su velocidad promedio?",
        options: ["80 km/h", "90 km/h", "100 km/h", "360 km/h"],
        answer: 1,
        explanation: "180 ÷ 2 = 90 km/h."
    },
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista:</b> Transmisión de calor por ondas espaciales.",
        question: "¿Cómo se transmite el calor del Sol a la Tierra a través del vacío?",
        options: ["Conducción", "Convección", "Radiación", "Evaporación"],
        answer: 2,
        explanation: "Viaja por radiación electromagnética."
    },
    {
        subject: "Ciencias Naturales",
        module: "Química Básica",
        hint: "<b>Pista:</b> Unión química de dos o más elementos en proporción fija.",
        question: "El agua (H2O) está formada por Hidrógeno y Oxígeno combinados. Es un:",
        options: ["Elemento químico", "Compuesto químico", "Mezcla heterogénea", "Mineral simple"],
        answer: 1,
        explanation: "El H2O es un compuesto químico."
    },
    {
        subject: "Ciencias Naturales",
        module: "Química Básica",
        hint: "<b>Pista:</b> Sus componentes se distinguen a simple vista.",
        question: "¿Cuál es un ejemplo de mezcla heterogénea?",
        options: ["Agua con sal disuelta", "Ensalada de verduras", "Aire limpio", "Refresco"],
        answer: 1,
        explanation: "Se aprecian los ingredientes por separado."
    },
    {
        subject: "Ciencias Naturales",
        module: "Química Básica",
        hint: "<b>Pista:</b> Cambio que altera la composición interna creando sustancias nuevas.",
        question: "¿Cuál evento representa un cambio químico?",
        options: ["Romper papel", "Derretir hielo", "Oxidación de una barra de hierro", "Disolver azúcar"],
        answer: 2,
        explanation: "La oxidación crea una sustancia nueva (óxido)."
    },
    {
        subject: "Ciencias Naturales",
        module: "Química Básica",
        hint: "<b>Pista:</b> pH inferior a 7.",
        question: "¿Qué tipo de pH tiene el jugo de un limón fresco?",
        options: ["Ácido", "Alcalino o básico", "Neutro", "Plasmático"],
        answer: 0,
        explanation: "Los cítricos son ácidos (pH menor a 7)."
    },
    {
        subject: "Ciencias Naturales",
        module: "Química Básica",
        hint: "<b>Pista:</b> Símbolo universal de una sola letra para el oxígeno.",
        question: "¿Cuál es el símbolo químico universal del Oxígeno?",
        options: ["Ox", "O", "Oxg", "Om"],
        answer: 1,
        explanation: "Su símbolo en la tabla periódica es O."
    },

    // ==========================================
    // --- CIENCIAS SOCIALES (40 Preguntas) ---
    // ==========================================
    // Historia de México (10 preguntas)
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista:</b> Iniciada por Madero el 20 de noviembre de 1910 contra Díaz.",
        question: "¿En qué fecha dio inicio el movimiento armado de la Revolución Mexicana dirigido por Madero?",
        options: ["16 sep 1810", "20 nov 1910", "5 may 1862", "21 mar 1806"],
        answer: 1,
        explanation: "Inició el 20 de noviembre de 1910."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista:</b> Civilización mesoamericana preclásica considerada cultura madre.",
        question: "¿Qué cultura prehispánica es conocida como la 'Cultura Madre' de Mesoamérica?",
        options: ["Azteca", "Maya", "Olmeca", "Tolteca"],
        answer: 2,
        explanation: "Los olmecas sentaron las bases mesoamericanas."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista:</b> Presidente liberal impulsor de las Leyes de Reforma.",
        question: "¿Qué presidente promovió las Leyes de Reforma para separar Iglesia y Estado?",
        options: ["Porfirio Díaz", "Benito Juárez", "Lázaro Cárdenas", "Madero"],
        answer: 1,
        explanation: "Benito Juárez consolidó las leyes laicas."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista:</b> Decreto de 1938 que nacionalizó los hidrocarburos.",
        question: "¿Qué acontecimiento histórico nacional ocurrió el 18 de marzo de 1938 con Lázaro Cárdenas?",
        options: ["Firma de Constitución", "Expropiación Petrolera", "Guerra de Reforma", "Independencia"],
        answer: 1,
        explanation: "La Expropiación Petrolera nacionalizó la industria."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista:</b> Sacerdote iniciador de la Independencia en Dolores.",
        question: "¿Qué héroe patrio es reconocido como el 'Padre de la Patria'?",
        options: ["Morelos", "Miguel Hidalgo y Costilla", "Guerrero", "Allende"],
        answer: 1,
        explanation: "Miguel Hidalgo dio el Grito de Dolores en 1810."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista:</b> Colonia española establecida tras la caída de Tenochtitlan.",
        question: "¿Cómo se llamó la entidad territorial fundada sobre las ruinas de Tenochtitlan en 1521?",
        options: ["Virreinato de la Nueva España", "Capitanía de Guatemala", "Virreinato del Perú", "Nueva Granada"],
        answer: 0,
        explanation: "Se denominó Virreinato de la Nueva España."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista:</b> Redactor de los Sentimientos de la Nación.",
        question: "¿Qué líder independentista escribió los 'Sentimientos de la Nación'?",
        options: ["Guerrero", "José María Morelos y Pavón", "Allende", "Iturbide"],
        answer: 1,
        explanation: "Morelos redactó este documento fundamental."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista:</b> Dictadura de más de 30 años finalizada en 1911.",
        question: "¿Qué periodo de la historia mexicana duró más de 30 años bajo Porfirio Díaz?",
        options: ["Maximato", "El Porfiriato", "Cardenismo", "Reforma"],
        answer: 1,
        explanation: "El Porfiriato abarcó desde 1876 hasta 1911."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista:</b> Tratado de 1848 donde México cedió territorios del norte.",
        question: "¿Qué tratado se firmó en 1848 cediendo Alta California y Texas a EE. UU.?",
        options: ["Tratado de Córdoba", "Tratado de Guadalupe Hidalgo", "Tratado de Miramar", "Tratado de Versalles"],
        answer: 1,
        explanation: "El Tratado de Guadalupe Hidalgo concluyó la guerra."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista:</b> General vencedor en la Batalla de Puebla del 5 de mayo.",
        question: "¿Qué general comandó al ejército para derrotar a los franceses en Puebla?",
        options: ["Porfirio Díaz", "Ignacio Zaragoza", "Vicente Guerrero", "Mariano Matamoros"],
        answer: 1,
        explanation: "Ignacio Zaragoza dirigió la defensa patriótica."
    },

    // Geografía (10 preguntas)
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista:</b> Meridiano 0° que divide oriente y occidente.",
        question: "¿Cómo se llama la línea imaginaria que divide verticalmente la Tierra en Hemisferio Oriental y Occidental?",
        options: ["Ecuador", "Trópico de Cáncer", "Meridiano de Greenwich", "Círculo Polar Ártico"],
        answer: 2,
        explanation: "El Meridiano de Greenwich divide este y oeste."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista:</b> Países limítrofes al sur de México.",
        question: "¿Cuáles son los países con los que limita la frontera sur de México?",
        options: ["Guatemala y Belice", "Honduras y El Salvador", "Panamá y Costa Rica", "Colombia y Venezuela"],
        answer: 0,
        explanation: "Colinda al sur con Guatemala y Belice."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista:</b> Salir del país de origen.",
        question: "¿Cómo se le llama al desplazamiento de personas que abandonan su lugar de origen?",
        options: ["Emigración", "Inmigración", "Importación", "Urbanización"],
        answer: 0,
        explanation: "Emigrar es salir del sitio de origen."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista:</b> Búsqueda de empleo y servicios motiva este traslado.",
        question: "¿Cuál es la principal razón de la migración del campo a la ciudad?",
        options: ["Trabajar en agricultura", "Buscar mejores oportunidades de empleo, salud y educación", "Falta de terreno agrícola", "Evitar transporte"],
        answer: 1,
        explanation: "La búsqueda de mejores condiciones impulsa el éxodo rural."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista:</b> Movimiento de la Tierra sobre su propio eje.",
        question: "¿Qué consecuencia directa tiene el movimiento de rotación de la Tierra?",
        options: ["Estaciones del año", "La sucesión del día y la noche", "Eclipses", "Mareas oceánicas"],
        answer: 1,
        explanation: "La rotación origina el día y la noche."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista:</b> Mapas que muestran entidades y fronteras.",
        question: "¿Qué mapa consulta si desea conocer los límites de estados y municipios?",
        options: ["Mapa topográfico", "Mapa de división política", "Mapa climático", "Mapa de vegetación"],
        answer: 1,
        explanation: "El mapa de división política muestra fronteras estatales."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista:</b> Agricultura y ganadería.",
        question: "¿A qué sector económico pertenecen la agricultura y la pesca?",
        options: ["Sector Primario", "Sector Secundario", "Sector Terciario", "Sector Financiero"],
        answer: 0,
        explanation: "El sector primario extrae recursos naturales."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista:</b> Comercio y servicios turísticos.",
        question: "¿A qué sector económico pertenecen el transporte y el turismo?",
        options: ["Sector Primario", "Sector Secundario", "Sector Terciario", "Sector Extractivo"],
        answer: 2,
        explanation: "El sector terciario engloba servicios y comercio."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista:</b> Sierra occidental paralela al Pacífico.",
        question: "¿Qué cadena montañosa bordea la costa del Pacífico desde Sonora hasta Jalisco?",
        options: ["Sierra Madre Oriental", "Sierra Madre Occidental", "Eje Neovolcánico", "Sierra Madre del Sur"],
        answer: 1,
        explanation: "La Sierra Madre Occidental cruza el oeste del país."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista:</b> Habitantes por kilómetro cuadrado.",
        question: "¿Qué indicador demográfico mide la concentración de habitantes por km²?",
        options: ["Tasa de natalidad", "Densidad de población", "Índice de migración", "Esperanza de vida"],
        answer: 1,
        explanation: "La densidad de población relaciona habitantes y superficie."
    },

    // Formación Cívica y Ética (10 preguntas)
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista:</b> Carta Magna suprema del país.",
        question: "¿Cuál es la norma jurídica suprema que rige las leyes de todos los mexicanos?",
        options: ["Código Civil", "La Constitución Política de los Estados Unidos Mexicanos", "Ley Federal del Trabajo", "Reglamento de Tránsito"],
        answer: 1,
        explanation: "La Constitución de 1917 es la ley máxima."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista:</b> Artículo tercero constitucional sobre educación laica y gratuita.",
        question: "¿Qué artículo constitucional establece el derecho a la educación laica y gratuita?",
        options: ["Artículo 1º", "Artículo 3º", "Artículo 27º", "Artículo 123º"],
        answer: 1,
        explanation: "El Artículo 3º garantiza la educación pública."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista:</b> Gobierno del pueblo mediante voto libre.",
        question: "¿Cómo se llama la forma de gobierno donde los ciudadanos eligen representantes por voto?",
        options: ["Monarquía", "Dictadura", "Democracia", "Oligarquía"],
        answer: 2,
        explanation: "La democracia se basa en la participación electoral."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista:</b> Derechos universales e inalienables de las personas.",
        question: "¿Cuál es una característica fundamental de los Derechos Humanos?",
        options: ["Solo para empleados formales", "Son universales, inalienables y corresponden a toda persona", "Se pueden vender", "Solo para mayores de edad"],
        answer: 1,
        explanation: "Los derechos humanos pertenecen a todos sin excepción."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista:</b> Trato desfavorable por origen o religión.",
        question: "Rechazar a una persona para un empleo por su origen étnico es una acción de:",
        options: ["Inclusión", "Discriminación", "Equidad", "Justicia"],
        answer: 1,
        explanation: "La discriminación viola la igualdad de oportunidades."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista:</b> Poder encargado de elaborar leyes en el Congreso.",
        question: "¿Qué Poder de la Unión elabora y aprueba las leyes en el Congreso?",
        options: ["Poder Ejecutivo", "Poder Legislativo", "Poder Judicial", "Poder Electoral"],
        answer: 1,
        explanation: "El Poder Legislativo crea las leyes."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista:</b> Nivel de gobierno local encabezado por un Alcalde.",
        question: "¿Cuál es el nivel de gobierno más cercano a los ciudadanos presidido por un Presidente Municipal?",
        options: ["Gobierno Federal", "Gobierno Estatal", "Gobierno Municipal", "Gobierno Regional"],
        answer: 2,
        explanation: "El municipio administra los servicios de la localidad."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista:</b> Artículo 39 sobre el origen del poder soberano.",
        question: "¿En quién reside esencial y originalmente la soberanía nacional según la Constitución?",
        options: ["En el Presidente", "En el Pueblo de México", "En partidos políticos", "En fuerzas armadas"],
        answer: 1,
        explanation: "La soberanía reside en el pueblo (Art. 39)."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista:</b> Artículo 123 sobre derechos laborales y jornada de 8 horas.",
        question: "¿Qué artículo constitucional consagra los derechos laborales y la jornada de 8 horas?",
        options: ["Artículo 3º", "Artículo 27º", "Artículo 123º", "Artículo 130º"],
        answer: 2,
        explanation: "El Artículo 123 protege las garantías sociales del trabajador."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista:</b> Impartición de justicia a través de tribunales y la Suprema Corte.",
        question: "¿Qué poder federal administra la justicia mediante tribunales y la Suprema Corte?",
        options: ["Poder Ejecutivo", "Poder Legislativo", "Poder Judicial", "Poder Ciudadano"],
        answer: 2,
        explanation: "El Poder Judicial imparte justicia y vigila la ley."
    }
];