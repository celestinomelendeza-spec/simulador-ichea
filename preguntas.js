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
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista / Recordatorio:</b> Para encontrar la cantidad original antes de aplicar un descuento del 10%, recuerda que el precio con descuento representa el 90% del valor total (Regla de tres: Precio final ÷ 0.90).",
        question: "Unos tenis costaron $720 pesos en oferta ya con un 10% de descuento aplicado. ¿Cuál era el precio original de los tenis antes de la rebaja?",
        options: ["$800 pesos", "$792 pesos", "$810 pesos", "$850 pesos"],
        answer: 0,
        explanation: "<b>Paso 1:</b> Si se descontó el 10%, $720 representa el 90% del costo total.<br><b>Paso 2:</b> Dividimos el precio pagado entre 0.90 ($720 ÷ 0.90 = <b>$800 pesos</b>)."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista / Recordatorio:</b> El área de un cuadrado se obtiene multiplicando Lado por Lado ($Área = L^2$). Si conoces el área total, saca la raíz cuadrada ($\sqrt{Área}$) para conocer la medida de un solo lado.",
        question: "Un terreno cuadrado tiene un área total de 144 metros cuadrados. ¿Cuántos metros mide cada uno de sus lados?",
        options: ["12 metros", "36 metros", "24 metros", "14.4 metros"],
        answer: 0,
        explanation: "<b>Cálculo:</b> La raíz cuadrada de 144 es 12 ($\sqrt{144} = 12$), porque 12 × 12 = <b>144 m²</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Regla de Tres Directa e Inversa",
        hint: "<b>Pista / Recordatorio:</b> Para calcular la velocidad o tiempo de recorrido, usa la fórmula de velocidad constante: $Distancia = Velocidad × Tiempo$.",
        question: "Un automóvil viaja a una velocidad constante de 80 km/h por carretera. ¿Qué distancia logrará recorrer en un viaje de 3 horas y media (3.5 horas)?",
        options: ["280 km", "240 km", "260 km", "320 km"],
        answer: 0,
        explanation: "<b>Paso 1:</b> Multiplicamos la velocidad por el tiempo: 80 × 3.5.<br><b>Paso 2:</b> 80 × 3 = 240, más la mitad de 80 (40) = <b>280 km</b>."
    },
    // --- MATEMÁTICAS / SEGUNDO BLOQUE (PREGUNTAS 16 A 30) ---
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista / Recordatorio:</b> Para comparar dos fracciones y saber cuál es mayor, puedes convertirlas a decimales dividiendo el numerador entre el denominador, o multiplicar en cruz.",
        question: "¿Cuál de las siguientes fracciones representa una cantidad mayor?",
        options: ["2/5", "3/4", "1/2", "3/8"],
        answer: 1,
        explanation: "En decimales: 2/5 = 0.40, 3/4 = <b>0.75</b>, 1/2 = 0.50 y 3/8 = 0.375. Por lo tanto, <b>3/4</b> es la mayor."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista / Recordatorio:</b> Para multiplicar fracciones, se multiplica directo: numerador por numerador (los de arriba) y denominador por denominador (los de abajo).",
        question: "Resuelve la siguiente multiplicación de fracciones: (2/3) × (4/5)",
        options: ["6/8", "8/15", "10/12", "8/8"],
        answer: 1,
        explanation: "<b>Numeradores:</b> 2 × 4 = 8.<br><b>Denominadores:</b> 3 × 5 = 15.<br>Resultado = <b>8/15</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista / Recordatorio:</b> Un número mixto combina un entero y una fracción. Para convertir 2 1/2 a fracción impropia: multiplica el entero por el denominador y súmale el numerador (2 × 2 + 1 = 5/2).",
        question: "Un carpintero necesita cortar tiras de madera de 1/2 metro. Si tiene una barra que mide 3 metros y medio (3 1/2 m), ¿cuántas tiras de 1/2 metro obtendrá en total?",
        options: ["5 tiras", "6 tiras", "7 tiras", "8 tiras"],
        answer: 2,
        explanation: "3 1/2 metros equivalen a 7/2 metros. Si los divide en partes de 1/2 metro, obtiene exactamente <b>7 tiras</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista / Recordatorio:</b> Para obtener el porcentaje que representa una cantidad respecto a un total: divide la cantidad parcial entre el total y multiplica por 100.",
        question: "En un grupo de estudio de secundaria INEA de 40 estudiantes, 10 obtuvieron la calificación máxima. ¿Qué porcentaje del grupo obtuvo la calificación máxima?",
        options: ["15%", "20%", "25%", "30%"],
        answer: 2,
        explanation: "(10 ÷ 40) × 100 = 0.25 × 100 = <b>25%</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista / Recordatorio:</b> Si un precio ya incluye el 16% de IVA, el precio sin IVA se calcula dividiendo el costo total entre 1.16.",
        question: "Un recibo de mantenimiento indica un cobro total de $1,160 pesos con IVA del 16% incluido. ¿Cuál era el costo del servicio antes de aplicarle el IVA?",
        options: ["$1,000 pesos", "$980 pesos", "$1,020 pesos", "$950 pesos"],
        answer: 0,
        explanation: "$1,160 ÷ 1.16 = <b>$1,000 pesos</b>.<br><i>Comprobación:</i> $1,000 + 16% ($160) = $1,160."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista / Recordatorio:</b> El área de un rectángulo es $Base × Altura$. Si conoces el área y la base, despeja la altura dividiendo el área entre la base.",
        question: "Un salón rectangular de clases tiene un área de 48 metros cuadrados. Si la base o largo del salón mide 8 metros, ¿cuánto mide el ancho o altura?",
        options: ["5 metros", "6 metros", "7 metros", "8 metros"],
        answer: 1,
        explanation: "<b>Área ÷ Base:</b> 48 m² ÷ 8 m = <b>6 metros</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista / Recordatorio:</b> El área de un trapecio se calcula sumando las dos bases, multiplicando por la altura y dividiendo entre 2: $Área = ((Base Mayor + Base menor) × Altura) ÷ 2$.",
        question: "Un terreno en forma de trapecio tiene una Base Mayor de 12 m, una Base menor de 8 m y una altura de 6 m. ¿Cuál es su área total?",
        options: ["120 m²", "60 m²", "48 m²", "80 m²"],
        answer: 1,
        explanation: "<b>Paso 1:</b> Sumar bases: 12 + 8 = 20.<br><b>Paso 2:</b> Multiplicar por altura: 20 × 6 = 120.<br><b>Paso 3:</b> Dividir entre 2: 120 ÷ 2 = <b>60 m²</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista / Recordatorio:</b> La suma de los tres ángulos internos de cualquier triángulo siempre es igual a 180°.",
        question: "En un triángulo, un ángulo mide 50° y el segundo ángulo mide 70°. ¿Cuánto mide el tercer ángulo interno?",
        options: ["50°", "60°", "70°", "80°"],
        answer: 1,
        explanation: "<b>Paso 1:</b> Sumar los dos ángulos conocidos: 50° + 70° = 120°.<br><b>Paso 2:</b> Restar de 180°: 180° - 120° = <b>60°</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista / Recordatorio:</b> Para simplificar términos semejantes en álgebra, suma o resta únicamente las variables que son exactamente iguales (las 'x' con las 'x' y los números solos con números solos).",
        question: "Simplifica la siguiente expresión algebraica: 5x + 3y - 2x + 4y",
        options: ["7x + 7y", "3x + 7y", "3x - y", "7x + y"],
        answer: 1,
        explanation: "<b>Términos en x:</b> 5x - 2x = 3x.<br><b>Términos en y:</b> 3y + 4y = 7y.<br>Resultado = <b>3x + 7y</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista / Recordatorio:</b> 'El doble de un número disminuido en 5 es igual a 15' se escribe como $2x - 5 = 15$.",
        question: "Encuentra el número desconocido 'x' en la siguiente afirmación: El doble de un número menos 5 da como resultado 15.",
        options: ["x = 8", "x = 10", "x = 12", "x = 5"],
        answer: 1,
        explanation: "2x - 5 = 15 => 2x = 20 => x = 20 ÷ 2 => <b>x = 10</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Regla de Tres Directa e Inversa",
        hint: "<b>Pista / Recordatorio:</b> En la proporcionalidad directa, si se duplica la cantidad de ingrediente, la cantidad producida se duplica en la misma proporción.",
        question: "Para preparar un pastel para 6 personas se necesitan 300 gramos de harina. ¿Cuánta harina se necesitará para preparar un pastel con la misma receta para 15 personas?",
        options: ["600 gramos", "750 gramos", "900 gramos", "800 gramos"],
        answer: 1,
        explanation: "<b>Gramo por persona:</b> 300 ÷ 6 = 50 g por persona.<br><b>Para 15 personas:</b> 50 g × 15 = <b>750 gramos</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Regla de Tres Directa e Inversa",
        hint: "<b>Pista / Recordatorio:</b> En proporcionalidad inversa (más bombas de agua, menos horas para llenar un estanque), la constante es el producto inicial: $Bombas \times Horas$.",
        question: "2 bombas de agua tardan 12 horas en llenar un estanque. Si se activan 4 bombas idénticas al mismo tiempo, ¿cuántas horas tardarán en llenarlo?",
        options: ["24 horas", "6 horas", "8 horas", "4 horas"],
        answer: 1,
        explanation: "(2 bombas × 12 horas) ÷ 4 bombas = 24 ÷ 4 = <b>6 horas</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista / Recordatorio:</b> El interés simple se calcula multiplicando el Capital por la Tasa de interés en decimal por el Tiempo en años: $I = C \times i \times t$.",
        question: "Se invierten $2,000 pesos en una cuenta que paga un 5% de interés simple anual. ¿Cuánto dinero de interés acumulado se ganará al cabo de 3 años?",
        options: ["$100 pesos", "$200 pesos", "$300 pesos", "$400 pesos"],
        answer: 2,
        explanation: "<b>Interés anual:</b> $2,000 × 0.05 = $100 pesos por año.<br><b>En 3 años:</b> $100 × 3 = <b>$300 pesos</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista / Recordatorio:</b> El perímetro de un círculo es su circunferencia: $Perímetro = \pi \times Diámetro$ (considera $\pi \approx 3.14$).",
        question: "Una rueda de bicicleta tiene un diámetro de 50 cm. ¿Qué distancia recorre la rueda al dar exactamente una vuelta completa?",
        options: ["157 cm", "100 cm", "314 cm", "78.5 cm"],
        answer: 0,
        explanation: "<b>Perímetro:</b> 3.14 × 50 cm = <b>157 cm</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista / Recordatorio:</b> Para restar un decimal de una fracción, convierte la fracción a decimal primero (ejemplo: 1/2 = 0.50).",
        question: "Un bote tenía 1.75 litros de jugo. Si un niño se toma 1/2 litro de jugo, ¿cuántos litros de jugo quedan en el bote?",
        options: ["1.25 litros", "1.00 litro", "0.75 litros", "1.50 litros"],
        answer: 0,
        explanation: "1/2 litro = 0.50 litros.<br>1.75 L - 0.50 L = <b>1.25 litros</b>."
    },
    // --- MATEMÁTICAS ---
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista / Recordatorio:</b> Para sumar fracciones con diferente denominador, puedes usar el método de productos cruzados o buscar un denominador común.",
        question: "Resuelve la siguiente suma de fracciones con distinto denominador: (1/2) + (1/4)",
        options: ["2/6", "3/4", "2/4", "5/8"],
        answer: 1,
        explanation: "<b>Paso 1:</b> Convertimos 1/2 a cuartos (2/4).<br><b>Paso 2:</b> Sumamos 2/4 + 1/4 = <b>3/4</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Fracciones y Operaciones",
        hint: "<b>Pista / Recordatorio:</b> Para dividir fracciones, multiplica en diagonal o invierte la segunda fracción y multiplícala directo.",
        question: "Resuelve la división de fracciones: (3/4) ÷ (1/2)",
        options: ["3/8", "6/4 (equivalente a 3/2)", "4/6", "1/4"],
        answer: 1,
        explanation: "<b>Multiplicación cruzada:</b> (3 × 2) en el numerador = 6, y (4 × 1) en el denominador = 4. Resultado: 6/4 = <b>3/2</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista / Recordatorio:</b> Para calcular el 50% sacas mitad, para el 25% sacas cuarta parte, y para el 10% divides entre 10.",
        question: "¿A qué cantidad numérica equivale exactamente el 25% de 840 pesos?",
        options: ["$210 pesos", "$420 pesos", "$168 pesos", "$250 pesos"],
        answer: 0,
        explanation: "<b>Cálculo:</b> Multiplicar por 0.25 o dividir entre 4. $840 ÷ 4 = <b>$210 pesos</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 3: Porcentajes e Interés",
        hint: "<b>Pista / Recordatorio:</b> Si un artículo de $500 baja a $400, el descuento fue de $100. Divide la rebaja entre el precio original y multiplica por 100.",
        question: "Un artículo que costaba originalmente $600 pesos se adquiere en una liquidación por $450 pesos. ¿Qué porcentaje de descuento se le aplicó?",
        options: ["15%", "20%", "25%", "30%"],
        answer: 2,
        explanation: "<b>Paso 1:</b> Descuento = $600 - $450 = $150.<br><b>Paso 2:</b> ($150 ÷ $600) × 100 = 0.25 × 100 = <b>25%</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista / Recordatorio:</b> El perímetro de una figura geométrica se obtiene sumando la longitud de todos sus lados externos.",
        question: "Un terreno en forma de pentágono regular mide 12 metros por cada uno de sus 5 lados iguales. ¿Cuál es su perímetro total?",
        options: ["60 metros", "48 metros", "72 metros", "50 metros"],
        answer: 0,
        explanation: "<b>Perímetro:</b> Lado × número de lados = 12 × 5 = <b>60 metros</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Áreas y Perímetros",
        hint: "<b>Pista / Recordatorio:</b> El área de un círculo se calcula con la fórmula: <i>Área = π × radio al cuadrado</i> ($\pi \cdot r^2$), considerando $\pi \approx 3.14$.",
        question: "¿Cuál es el área aproximada de una carpa circular que tiene un radio de 3 metros?",
        options: ["18.84 m²", "28.26 m²", "9.42 m²", "37.68 m²"],
        answer: 1,
        explanation: "<b>Cálculo:</b> 3.14 × ($3^2$) = 3.14 × 9 = <b>28.26 m²</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista / Recordatorio:</b> Al sustituir un valor numérico en una letra (variable), respeta las operaciones indicadas.",
        question: "Si la expresión algebraica es <i>3x + 5</i>, ¿qué valor se obtiene si la letra x vale 4?",
        options: ["17", "12", "27", "15"],
        answer: 0,
        explanation: "<b>Paso 1:</b> Multiplicar 3 × 4 = 12.<br><b>Paso 2:</b> Sumar 5 = 12 + 5 = <b>17</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 4: Lenguaje Algebraico",
        hint: "<b>Pista / Recordatorio:</b> En una ecuación con incógnita en ambos lados, agrupa las 'x' de un lado y los números independientes del otro.",
        question: "Resuelve la ecuación lineal: <i>5x - 3 = 2x + 9</i>",
        options: ["x = 2", "x = 4", "x = 6", "x = 3"],
        answer: 1,
        explanation: "<b>Paso 1:</b> 5x - 2x = 9 + 3 => 3x = 12.<br><b>Paso 2:</b> x = 12 ÷ 3 => <b>x = 4</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Regla de Tres Directa e Inversa",
        hint: "<b>Pista / Recordatorio:</b> En la regla de tres directa, multiplica cruzado y divide entre el número restante: $(Valor_2 \times Valor_3) ÷ Valor_1$.",
        question: "Si 5 litros de gasolina rinden para recorrer 75 kilómetros en carretera, ¿cuántos kilómetros se podrán recorrer con un tanque lleno de 40 litros?",
        options: ["500 km", "600 km", "450 km", "550 km"],
        answer: 1,
        explanation: "<b>Cálculo:</b> (40 litros × 75 km) ÷ 5 litros = 3,000 ÷ 5 = <b>600 km</b>."
    },
    {
        subject: "Matemáticas",
        module: "Módulo 5: Estadística Básica",
        hint: "<b>Pista / Recordatorio:</b> La <b>Moda</b> es el valor o número que más se repite en un conjunto de datos estadísticos.",
        question: "En una tienda se registraron las tallas de calzado vendidas en el día: 25, 26, 24, 26, 27, 26, 25, 26. ¿Cuál es la moda de las ventas?",
        options: ["25", "27", "26", "24"],
        answer: 2,
        explanation: "La talla <b>26</b> es la que aparece más veces (se repite 4 ocasiones), por lo tanto es la moda."
    },

    // --- LENGUA Y COMUNICACIÓN (ICHEA/INEA) ---
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Las palabras <b>agudas</b> llevan tilde (acento gráfico) cuando terminan en las letras <b>N</b>, <b>S</b> o en <b>Vocal</b> (a, e, i, o, u). Ejemplo: <i>canción</i>, <i>café</i>, <i>compás</i>.",
        question: "¿Cuál de las siguientes palabras está acentuada correctamente por ser una palabra aguda terminada en vocal?",
        options: ["colibri", "colibrí", "cólibri", "colíbri"],
        answer: 1,
        explanation: "<b>colibrí</b> es una palabra aguda (la última sílaba 'brí' suena más fuerte) y termina en vocal 'i', por lo que debe llevar acento gráfico o tilde."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Las palabras <b>graves</b> llevan tilde únicamente cuando <b>NO</b> terminan en N, S ni vocal. Ejemplo: <i>árbol</i>, <i>lápiz</i>, <i>fácil</i>.",
        question: "Selecciona la palabra grave que debe llevar tilde (acento ortográfico):",
        options: ["mesa", "casa", "arbol", "libro"],
        answer: 2,
        explanation: "<b>árbol</b> es una palabra grave (la penúltima sílaba 'ár' es la tónica) y termina en la letra 'L' (diferente a N, S o vocal), por lo que se acentúa obligatoriamente."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Las palabras <b>esdrújulas</b> son las que se acentúan en la antepenúltima sílaba y <b>SIEMPRE</b> llevan tilde, sin excepción. Ejemplo: <i>música</i>, <i>pájaro</i>.",
        question: "¿Cuál de las siguientes palabras es esdrújula y por lo tanto siempre lleva acento ortográfico?",
        options: ["Matematicas", "Corazon", "Pared", "Jardin"],
        answer: 0,
        explanation: "<b>Matemáticas</b> lleva el énfasis en la antepenúltima sílaba (Ma-te-<b>má</b>-ti-cas) y todas las esdrújulas se acentúan sin excepción."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Ten cuidado con las palabras homófonas: <i>Tubo</i> con 'b' es una pieza cilíndrica. <i>Tuvo</i> con 'v' viene del verbo tener.",
        question: "Identifica la palabra que contiene un error ortográfico en la siguiente oración: 'Ella tubo que ir a la farmacia a comprar medicina.'",
        options: ["farmacia", "medicina", "comprar", "tubo"],
        answer: 3,
        explanation: "'Tubo' del verbo tener se escribe obligatoriamente con 'v' (<b>tuvo</b>). La palabra 'tubo' con 'b' se refiere a un objeto cilíndrico."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Se escribe con <b>B</b> después de la letra <b>M</b> (ejemplo: <i>tambor</i>, <i>sombra</i>, <i>cambio</i>) y con <b>V</b> después de la letra <b>N</b> (ejemplo: <i>envase</i>, <i>invierno</i>).",
        question: "Elige la opción que completa correctamente la siguiente regla ortográfica: 'Antes de la letra B siempre se escribe _____.'",
        options: ["N", "M", "S", "C"],
        answer: 1,
        explanation: "La regla ortográfica establece que antes de las letras <b>B</b> y <b>P</b> siempre se escribe la letra <b>M</b> (ejemplos: <i>campo</i>, <i>sombrero</i>)."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> El tiempo <b>Pretérito</b> (pasado) indica una acción realizada y terminada. El tiempo <b>Futuro</b> indica algo que sucederá después.",
        question: "¿Cuál de las siguientes opciones es un verbo conjugado en tiempo pretérito (pasado)?",
        options: ["Caminaré", "Caminaba", "Caminó", "Caminar"],
        answer: 2,
        explanation: "<b>Caminó</b> expresa una acción puntual concluida en el pasado (pretérito perfecto simple)."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> En una oración, el <b>Sujeto</b> es de quien se habla o realiza la acción, y el <b>Predicado</b> es lo que se dice del sujeto o la acción que realiza (incluye al verbo).",
        question: "En la oración: 'Los alumnos de la escuela repasaron sus módulos por la tarde', ¿cuál es el Sujeto?",
        options: ["repasaron sus módulos", "por la tarde", "Los alumnos de la escuela", "de la escuela"],
        answer: 2,
        explanation: "<b>Los alumnos de la escuela</b> responde a la pregunta '¿Quiénes repasaron sus módulos?'. Es el sujeto completo de la oración."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Los <b>Sustantivos</b> son las palabras que nombran personas, animales, cosas o lugares. Los <b>Adjetivos</b> describen cómo son o cómo están esos sustantivos.",
        question: "En la frase: 'El perro negro corre por el jardín', ¿cuál palabra funciona como un adjetivo calificativo?",
        options: ["perro", "negro", "corre", "jardín"],
        answer: 1,
        explanation: "<b>negro</b> es el adjetivo calificativo porque nos dice una característica o cualidad del sustantivo (perro)."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> La <b>Idea Principal</b> sintetiza la información más relevante de un texto. Si la quitas, el texto pierde su sentido esencial.",
        question: "Lee el siguiente fragmento: 'El agua es indispensable para la vida humana y el desarrollo de los ecosistemas. Sin embargo, la contaminación y el desperdicio amenazan con agotarla. Es urgente tomar medidas comunitarias para su cuidado.' ¿Cuál es la idea principal del texto?",
        options: [
            "El agua es la sustancia más abundante del planeta.",
            "Es necesario cuidar el agua debido a su importancia y la amenaza de su escasez.",
            "Los ríos están contaminados por la basura.",
            "El consumo individual no afecta la cantidad de agua disponible."
        ],
        answer: 1,
        explanation: "La idea central resume la importancia vital del agua unida a la urgencia de cuidarla frente a la amenaza de desabasto."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> Los textos <b>Instructivos</b> contienen pasos ordenados, explicaciones o indicaciones para realizar una tarea o armar algo (ejemplo: recetas de cocina, manuales de uso).",
        question: "¿A qué tipo de texto pertenece un documento que contiene ingredientes, medidas y pasos ordenados para preparar un platillo?",
        options: ["Texto Narrativo", "Texto Instructivo", "Texto Poético", "Texto Argumentativo"],
        answer: 1,
        explanation: "Los textos <b>instructivos</b> guían al usuario paso a paso para cumplir un objetivo específico, como las recetas o instructivos de uso."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> Un <b>Sinónimo</b> es una palabra que tiene el mismo significado que otra (ejemplo: <i>bonito / lindo</i>). Un <b>Antónimo</b> es lo opuesto (ejemplo: <i>alto / bajo</i>).",
        question: "Selecciona la pareja de palabras que corresponden a un par de Sinónimos:",
        options: ["abundante / escaso", "comenzar / iniciar", "fuerte / débil", "comprar / vender"],
        answer: 1,
        explanation: "<b>comenzar</b> e <b>iniciar</b> significar exactamente lo mismo, por lo que son sinónimos. Las demás opciones son antónimos."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> Un <b>Resumen</b> debe conservar las ideas principales del texto original usando lenguaje claro, sin agregar opiniones personales ni inventar datos.",
        question: "¿Cuál es la característica principal de un buen resumen?",
        options: [
            "Copiar todo el texto original cambiando solo las mayúsculas.",
            "Redactar una opinión personal sobre lo que nos gustó del tema.",
            "Extraer y sintetizar las ideas principales respetando el sentido del texto original.",
            "Hacer el texto más largo agregando ejemplos e historias inventadas."
        ],
        answer: 2,
        explanation: "Un resumen destaca exclusivamente las ideas clave del texto original de forma breve y precisa."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Los signos de <b>Interrogación</b> (¿?) se usan para formular preguntas directas. Los signos de <b>Exclamación</b> (¡!) expresan sorpresa, emoción o mandato.",
        question: "¿Qué signos de puntuación se deben colocar en la expresión: '___Qué alegría volver a verte después de tanto tiempo___'?",
        options: ["¿ ?", "¡ !", "( )", "“ ”"],
        answer: 1,
        explanation: "Expresa una emoción de entusiasmo y alegría, por lo que requiere signos de exclamación (<b>¡ !</b>)."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> El texto <b>Periodístico o Informativo</b> busca dar a conocer hechos reales de interés público de manera objetiva y oportuna (ejemplo: noticias, reportajes).",
        question: "¿En cuál de los siguientes medios o documentos encontramos principalmente textos periodísticos?",
        options: ["Un libro de poemas", "Un periódico o diario informativo", "Una novela de ciencia ficción", "Un catálogo de juguetes"],
        answer: 1,
        explanation: "Los periódicos y diarios son el soporte tradicional donde se publican noticias e información de actualidad (textos periodísticos)."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> La coma (<b>,</b>) se utiliza para separar elementos en una lista o enumeración. No se coloca coma antes de las conjunciones <i>y</i>, <i>e</i>, <i>ni</i> al final de la lista.",
        question: "¿Cuál de las siguientes oraciones utiliza correctamente las comas para enumerar elementos?",
        options: [
            "Fui al mercado y compré manzanas, peras, plátanos, y uvas.",
            "Fui al mercado y compré, manzanas peras plátanos y uvas.",
            "Fui al mercado y compré manzanas, peras, plátanos y uvas.",
            "Fui, al mercado y compré manzanas peras plátanos y uvas."
        ],
        answer: 2,
        explanation: "Las comas separan adecuadamente los elementos de la lista y la conjunción 'y' cierra la enumeración sin coma previa."
    },
    // --- LENGUA Y COMUNICACIÓN / SEGUNDO BLOQUE (PREGUNTAS 16 A 30) ---
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Se escriben con <b>Z</b> las palabras que terminan en <i>-anza</i>, <i>-ez</i>, <i>-eza</i> (ejemplos: <i>esperanza</i>, <i>vejez</i>, <i>belleza</i>).",
        question: "Selecciona la palabra abstracta que está escrita con la ortografía correcta:",
        options: ["tristeza", "tristeza", "tristesa", "tristeca"],
        answer: 0,
        explanation: "Los sustantivos abstractos terminados en <i>-eza</i> se escriben obligatoriamente con la letra <b>Z</b> (<b>tristeza</b>)."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> El <b>Antónimo</b> de una palabra es aquella que significa exactamente lo opuesto (ejemplo: <i>claro / oscuro</i>).",
        question: "¿Cuál es el antónimo directo de la palabra 'abundante'?",
        options: ["excesivo", "escaso", "bastante", "lleno"],
        answer: 1,
        explanation: "<b>Escaso</b> significa insuficiente o poco, por lo que es lo contrario (antónimo) de <b>abundante</b>."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> El punto y seguido (<b>.</b>) se utiliza para separar oraciones independientes dentro de un mismo párrafo que tratan sobre la misma idea general.",
        question: "¿Qué signo de puntuación se debe colocar al terminar una oración dentro de un mismo párrafo para continuar desarrollando el tema?",
        options: ["Punto y aparte", "Punto y seguido", "Punto final", "Dos puntos"],
        answer: 1,
        explanation: "El <b>punto y seguido</b> separa oraciones que pertenecen al mismo párrafo y mantienen la misma unidad temática."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Los <b>Pronombres Personales</b> sustituyen al nombre o sustantivo en la oración (<i>yo, tú, él, ella, nosotros, ustedes, ellos</i>).",
        question: "En la oración: 'Ellos entregaron el proyecto de ciencias a tiempo', ¿cuál palabra funciona como pronombre personal?",
        options: ["entregaron", "proyecto", "Ellos", "ciencias"],
        answer: 2,
        explanation: "<b>Ellos</b> es un pronombre personal que sustituye a los nombres de los alumnos o personas que hicieron la entrega."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> El acento diacrítico sirve para diferenciar dos palabras que se escriben igual pero tienen distinto significado: <b>él</b> (pronombre) lleva tilde, mientras que <b>el</b> (artículo) no la lleva.",
        question: "Identifica la oración que utiliza correctamente el acento diacrítico en el pronombre:",
        options: [
            "El trae el libro de matemáticas.",
            "Él trae el libro de matemáticas.",
            "Él trae él libro de matemáticas.",
            "El trae él libro de matemáticas."
        ],
        answer: 1,
        explanation: "<b>Él</b> lleva tilde porque se refiere a una persona (pronombre), mientras que 'el libro' no la lleva porque funciona como artículo."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> Un texto <b>Narrativo</b> relata una secuencia de hechos ficticios o reales producidos en un tiempo y lugar determinados (ejemplos: cuentos, fabulas, leyendas).",
        question: "¿A qué género pertenece un relato breve que narra la historia ficticia de unos personajes y deja una enseñanza o moraleja al final?",
        options: ["Fábula", "Artículo científico", "Noticia periodística", "Instructivo de uso"],
        answer: 0,
        explanation: "La <b>fábula</b> es una narración breve cuyos personajes suelen ser animales que dejan una enseñanza moral o moraleja."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> En un texto argumentativo, la <b>Tesis</b> u opinión es la idea central que el autor defiende o intenta demostrar a través de razones o argumentos.",
        question: "Lee la frase: 'El uso excesivo del teléfono celular durante la noche altera el sueño de los jóvenes porque la luz azul interfiere con la producción de melatonina.' ¿Cuál es la tesis o afirmación principal?",
        options: [
            "Los jóvenes prefieren usar el celular en la noche.",
            "El uso nocturno del celular perjudica la calidad del sueño de los jóvenes.",
            "La melatonina es una vitamina diurna.",
            "Todos los teléfonos tienen luz azul."
        ],
        answer: 1,
        explanation: "La afirmación o tesis que el texto defiende es que utilizar el celular por la noche <b>perjudica la calidad del sueño</b> de los jóvenes."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> Las <b>Fichas Bibliográficas</b> son tarjetas de registro que contienen los datos esenciales de identificación de un libro (autor, título, editorial, año, etc.).",
        question: "¿Cuál de los siguientes datos es indispensable incluir en la ficha bibliográfica de un libro de texto?",
        options: [
            "Nombre del lector y fecha de préstamo",
            "Nombre del autor, título de la obra y editorial",
            "Resumen completo de todos los capítulos",
            "Número de páginas leídas por día"
        ],
        answer: 1,
        explanation: "Una ficha bibliográfica debe identificar la fuente mediante el <b>autor, título, ciudad, editorial y año de publicación</b>."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> El lenguaje <b>Figurado</b> expresa una idea recurriendo a una semejanza o metáfora (no se debe interpretar de forma literal). El lenguaje <b>Literal</b> dice exactamente lo que significa.",
        question: "Identifica la expresión que utiliza el lenguaje figurado o metafórico:",
        options: [
            "El atleta corrió 10 kilómetros por la mañana.",
            "El examen de matemáticas estuvo muy largo.",
            "Esa mujer tiene un corazón de oro.",
            "El coche rojo está estacionado afuera."
        ],
        answer: 2,
        explanation: "'Tiene un corazón de oro' es una metáfora (lenguaje figurado) que significa que la persona es muy buena y generosa."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> El tiempo verbal <b>Copretérito</b> indica una acción pasada que se realizaba de forma continua o repetida (los verbos terminan en <i>-aba</i> o <i>-ía</i>; ej. <i>jugaba</i>, <i>comía</i>).",
        question: "¿En qué opción el verbo se encuentra conjugado en tiempo copretérito?",
        options: ["Escribió", "Escribirá", "Escribía", "Escriba"],
        answer: 2,
        explanation: "<b>Escribía</b> está en copretérito porque señala una acción pasada que ocurría con continuidad y termina en <i>-ía</i>."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> Los textos <b>Expositivos o Informativos</b> transmiten conocimientos objetivos sobre un tema de forma clara sin incluir opiniones del autor.",
        question: "¿En cuál de los siguientes documentos encontramos principalmente lenguaje expositivo e informativo de carácter científico?",
        options: ["Una enciclopedia médica", "Una novela policíaca", "Un poema de amor", "Un cómic de superhéroes"],
        answer: 0,
        explanation: "Una <b>enciclopedia médica</b> expone datos reales, objetivos y fundamentados sobre temas de salud de forma expositiva."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Los <b>Adverbios de Modo</b> expresan la manera en que se realiza la acción del verbo (responden a la pregunta: ¿cómo se hizo?; ejemplos: <i>rápidamente</i>, <i>bien</i>, <i>mal</i>, <i>despacio</i>).",
        question: "En la oración: 'El estudiante contestó tranquilamente las preguntas del examen', ¿cuál es el adverbio de modo?",
        options: ["estudiante", "contestó", "tranquilamente", "preguntas"],
        answer: 2,
        explanation: "<b>Tranquilamente</b> es un adverbio de modo porque nos indica cómo o de qué manera contestó las preguntas."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> En un texto dramático o guion teatral, las <b>Acotaciones</b> son las indicaciones entre paréntesis que señalan las acciones, tonos de voz o movimientos de los actores.",
        question: "¿Cómo se les llama a las notas escritas entre paréntesis en una obra de teatro para guiar la actuación y movimientos de los personajes?",
        options: ["Diálogos", "Acotaciones", "Escenas", "Parlamentos"],
        answer: 1,
        explanation: "Las <b>acotaciones</b> son las instrucciones del autor sobre escenografía, gestos y movimientos de los actores."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Las palabras con el sufijo <i>-ción</i> se escriben con <b>C</b> cuando derivan de palabras que contienen las letras <i>t</i> o <i>d</i> (ejemplo: <i>canto -> canción</i>, <i>atento -> atención</i>).",
        question: "Selecciona la palabra que está escrita con la ortografía correcta:",
        options: ["comunicasión", "comunicación", "comunikación", "comunicasion"],
        answer: 1,
        explanation: "<b>Comunicación</b> finaliza con la terminación correcta <i>-ción</i> escrita con la letra <b>C</b>."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> Las <b>Fuentes de Información Primarias</b> son documentos originales producidos de primera mano (ejemplos: cartas históricas, testimonios directos, autobiografías).",
        question: "¿Cuál de las siguientes opciones constituye una fuente primaria para investigar la Revolución Mexicana?",
        options: [
            "Un libro de texto publicado en 2020",
            "El diario personal o carta de un soldado revolucionario escrito en 1912",
            "Un video explicativo en YouTube sobre Emiliano Zapata",
            "Una novela moderna inspirada en la Revolución"
        ],
        answer: 1,
        explanation: "Las cartas o diarios contemporáneos al hecho histórico (1912) son <b>fuentes primarias</b> de primera mano."
    },
    // --- LENGUA Y COMUNICACIÓN ---
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Las palabras agudas llevan tilde si terminan en n, s o vocal. Las graves si terminan en consonante diferente a n o s.",
        question: "¿Cuál de las siguientes palabras es un ejemplo clásico de palabra esdrújula?",
        options: ["Camión", "Lápiz", "Brújula", "Pared"],
        answer: 2,
        explanation: "<b>Brújula</b> se acentúa en la antepenúltima sílaba (<b>brú</b>-ju-la) y cumple la regla de que todas las esdrújulas llevan tilde."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Se escriben con 'g' las palabras que empiezan o contienen la sílaba 'geo-', o terminan en '-logía'.",
        question: "Elige la opción que completa correctamente la palabra: 'La biolo____ía estudia a los seres vivos.'",
        options: ["j", "g", "cc", "x"],
        answer: 1,
        explanation: "La terminación científica correspondiente es <b>'-logía'</b>, escrita con la letra <b>g</b>."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> El núcleo del sujeto es siempre un sustantivo o pronombre principal que concuerda con el verbo.",
        question: "En la oración: 'El veloz caballo negro salta la cerca', ¿cuál es el núcleo del sujeto?",
        options: ["veloz", "salta", "caballo", "cerca"],
        answer: 2,
        explanation: "El sujeto principal es 'El veloz caballo negro', y su palabra más importante (núcleo) es el sustantivo <b>caballo</b>."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> El tiempo futuro indica una acción que todavía no ocurre pero que se llevará a cabo después.",
        question: "Identifica el verbo conjugado en tiempo futuro simple:",
        options: ["Cantaba", "Cantaré", "Canté", "Cante"],
        answer: 1,
        explanation: "<b>Cantaré</b> expresa una acción que se realizará posteriormente (futuro)."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> Las preposiciones sirven para relacionar palabras dentro de una oración (ej. a, ante, bajo, con, contra, de, desde...).",
        question: "En la oración: 'Viajamos en autobús rumbo a la ciudad de Chihuahua', ¿qué palabra cumple la función de preposición?",
        options: ["autobús", "de", "ciudad", "viajamos"],
        answer: 1,
        explanation: "La palabra <b>de</b> funciona como preposición que conecta los sustantivos."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> La conclusión de un texto resume el cierre de las ideas analizadas a lo largo del documento.",
        question: "¿Cuál es la función principal de la conclusión en un ensayo o texto informativo?",
        options: [
            "Plantear dudas nuevas sin resolver.",
            "Resumir los puntos clave y cerrar la argumentación del tema expuesto.",
            "Presentar los datos biográficos del autor.",
            "Escribir una lista de chistes o anécdotas."
        ],
        answer: 1,
        explanation: "La conclusión sintetiza el razonamiento final y los resultados principales del escrito."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> Un texto argumentativo busca persuadir al lector mediante opiniones respaldadas por razones lógicas.",
        question: "¿Qué tipo de texto busca convencer o persuadir al lector sobre un punto de vista particular mediante razones y argumentos?",
        options: ["Texto Argumentativo", "Texto Instructivo", "Texto Poético", "Texto Narrativo"],
        answer: 0,
        explanation: "El <b>texto argumentativo</b> defiende una tesis mediante argumentos lógicos para convencer al receptor."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> Los antónimos expresan significados opuestos o contrarios.",
        question: "¿Cuál es el antónimo correcto de la palabra 'optimista'?",
        options: ["Alegre", "Pesimista", "Positivo", "Entusiasta"],
        answer: 1,
        explanation: "<b>Pesimista</b> es la persona que tiende a ver el lado desfavorable de las cosas, siendo el opuesto directo de optimista."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Ortografía y Gramática",
        hint: "<b>Pista / Recordatorio:</b> El punto y coma (<b>;</b>) indica una pausa mayor que la coma pero menor que el punto, útil para separar oraciones compuestas largas.",
        question: "¿Qué signo de puntuación se recomienda para separar oraciones sintácticamente independientes pero que guardan estrecha relación temática?",
        options: ["La coma (,)", "El punto y coma (;)", "Los dos puntos (:)", "Las comillas (“ ”)"],
        answer: 1,
        explanation: "El <b>punto y coma</b> vincula frases relacionadas donde una coma se queda corta."
    },
    {
        subject: "Lengua y Comunicación",
        module: "Comprensión Lectora",
        hint: "<b>Pista / Recordatorio:</b> Una paráfrasis consiste en explicar un texto utilizando nuestras propias palabras sin alterar la idea central del autor.",
        question: "¿Cómo se le llama al ejercicio de explicar o reescribir un texto empleando palabras propias sin cambiar su mensaje original?",
        options: ["Plagio literario", "Paráfrasis", "Traducción simultánea", "Resumen literal"],
        answer: 1,
        explanation: "La <b>paráfrasis</b> demuestra comprensión lectora al expresar con estilo propio el sentido de un texto."
    },

    // --- CIENCIAS NATURALES (ICHEA/INEA) ---
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista / Recordatorio:</b> Todos los seres vivos están formados por unidades vivas microscópicas llamadas <b>células</b>. Los tejidos se forman por la agrupación de células, y los órganos por la unión de tejidos.",
        question: "¿Cuál es la unidad mínima estructural y funcional con vida que constituye a todos los seres vivos?",
        options: ["Tejido", "Célula", "Órgano", "Molécula"],
        answer: 1,
        explanation: "La <b>célula</b> es la unidad viva fundamental. Todo ser vivo (plantas, animales, humanos, bacterias) está constituido por una o más células."
    },
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista / Recordatorio:</b> La <b>Fotosíntesis</b> es el proceso mediante el cual las plantas producen su propio alimento (glucosa) utilizando la luz del sol, agua y dióxido de carbono, liberando oxígeno al ambiente.",
        question: "¿Cómo se llama el proceso biológico por el cual las plantas autótrofas convierten la energía solar en alimento?",
        options: ["Respiración celular", "Digestión", "Fotosíntesis", "Fermentación"],
        answer: 2,
        explanation: "Durante la <b>fotosíntesis</b>, la clorofila de las plantas atrapa la luz solar para transformar el agua y el CO₂ en azúcares y oxígeno."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista / Recordatorio:</b> El <b>Sistema Circulatorio</b> se encarga de bombear y distribuir la sangre, oxígeno y nutrientes a todo el cuerpo por medio del corazón, arterias y venas.",
        question: "¿Cuál es la función principal del corazón en el cuerpo humano?",
        options: [
            "Filtrar las toxinas de la orina",
            "Bombear la sangre oxigenada a todo el cuerpo",
            "Producir jugos gástricos para la digestión",
            "Controlar los impulsos nerviosos y recuerdos"
        ],
        answer: 1,
        explanation: "El corazón funciona como una bomba muscular que impulsa la sangre a través del sistema circulatorio hacia todos los tejidos del organismo."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista / Recordatorio:</b> El intercambio de gases (tomar oxígeno $O_2$ y expulsar dióxido de carbono $CO_2$) ocurre exactamente en los <b>alvéolos pulmonares</b> del Sistema Respiratorio.",
        question: "¿En qué órgano del cuerpo humano se realiza principalmente la absorción de oxígeno del aire?",
        options: ["Pulmones", "Estómago", "Hígado", "Riñones"],
        answer: 0,
        explanation: "Los <b>pulmones</b> contienen millones de alvéolos donde el oxígeno del aire pasa a la sangre y se expulsa el dióxido de carbono."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista / Recordatorio:</b> Una alimentación equilibrada debe incluir nutrientes de todos los grupos: carbohidratos (energía), proteínas (construcción de músculos) y grasas saludables.",
        question: "¿Cuál de los siguientes nutrimentos tiene como función principal construir, reparar y mantener los tejidos musculares del cuerpo?",
        options: ["Carbohidratos", "Proteínas", "Vitaminas", "Minerales"],
        answer: 1,
        explanation: "Las <b>proteínas</b> (presentes en carne, huevo, pescado, frijoles y lentejas) son los 'ladrillos' que construyen y reparan los tejidos del cuerpo."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista / Recordatorio:</b> En una cadena alimenticia, los <b>Productores</b> son las plantas (fabrican su alimento), los <b>Consumidores</b> son los animales y los <b>Descomponedores</b> son hongos y bacterias.",
        question: "Dentro de una cadena trófica o alimenticia, ¿qué papel desempeñan los pastos, árboles y plantas?",
        options: ["Consumidores primarios", "Descomponedores", "Productores", "Depredadores"],
        answer: 2,
        explanation: "Las plantas son <b>productores</b> porque generan su propia materia orgánica a partir de la luz del sol mediante la fotosíntesis."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista / Recordatorio:</b> La regla ecológico-ambiental de las <b>3 R</b> significa: <b>R</b>educir (usar menos), <b>R</b>eutilizar (volver a usar) y <b>R</b>eciclar (transformar la materia prima).",
        question: "Volver a utilizar un frasco de vidrio viejo de café para guardar hilo o botones es un ejemplo directo de la acción ambiental de:",
        options: ["Reciclar", "Reutilizar", "Reducir", "Reparar"],
        answer: 1,
        explanation: "<b>Reutilizar</b> consiste en darle una nueva vida o uso a un objeto antes de desecharlo, sin necesidad de someterlo a un proceso industrial de reciclaje."
    },
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista / Recordatorio:</b> Los tres estados fundamentales de la materia son: <b>Sólido</b> (forma y volumen definidos), <b>Líquido</b> (volumen definido pero adopta la forma del recipiente) y <b>Gaseoso</b> (sin forma ni volumen definidos).",
        question: "¿En qué estado de agregación de la materia las moléculas se encuentran muy separadas y se mueven libremente ocupando todo el espacio disponible?",
        options: ["Sólido", "Líquido", "Gaseoso", "Plasmático"],
        answer: 2,
        explanation: "En el estado <b>gaseoso</b>, las fuerzas de atracción entre moléculas son casi nulas, permitiéndoles expandirse libremente."
    },
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista / Recordatorio:</b> Los cambios de estado ocurren por temperatura: la <b>Evaporación</b> pasa de líquido a gas, la <b>Fusión</b> de sólido a líquido, y la <b>Condensación</b> de gas a líquido.",
        question: "¿Cómo se llama el cambio de estado cuando el agua líquida se calienta hasta hervir y se convierte en vapor de agua?",
        options: ["Condensación", "Evaporación", "Solidificación", "Fusión"],
        answer: 1,
        explanation: "La <b>evaporación</b> es la transición física de un líquido al estado gaseoso debido al aumento de temperatura."
    },
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista / Recordatorio:</b> La <b>Energía Renovable</b> proviene de fuentes naturales inagotables que se regeneran de forma constante (ej. sol, viento, agua).",
        question: "¿Cuál de las siguientes es una fuente limpia de energía renovable?",
        options: ["Carbón", "Petróleo", "Energía Solar", "Gas natural"],
        answer: 2,
        explanation: "La <b>energía solar</b> es inagotable, no emite gases de efecto invernadero y proviene de un recurso natural renovable."
    },
    {
        subject: "Ciencias Naturales",
        module: "Química Básica",
        hint: "<b>Pista / Recordatorio:</b> Un <b>Elemento químico</b> es una sustancia pura formada por un solo tipo de átomo (ej. Oxígeno $O$, Hierro $Fe$). Un <b>Compuesto</b> es la unión de dos o más elementos diferentes (ej. Agua $H_2O$).",
        question: "El agua ($H_2O$) está formada por la combinación de átomos de Hidrógeno y Oxígeno. Por lo tanto, el agua es considerada:",
        options: ["Un elemento químico", "Un compuesto químico", "Una mezcla heterogénea", "Un mineral simple"],
        answer: 1,
        explanation: "Al combinar químicamente dos elementos distintos (Hidrógeno y Oxígeno) en una proporción fija, el $H_2O$ forma un <b>compuesto químico</b>."
    },
    {
        subject: "Ciencias Naturales",
        module: "Química Básica",
        hint: "<b>Pista / Recordatorio:</b> Una <b>Mezcla Homogénea</b> es aquella en la que sus componentes están tan bien unidos que no se pueden distinguir a simple vista (ej. agua con sal disuelta). En la <b>Heterogénea</b> sí se distinguen sus partes (ej. agua y aceite).",
        question: "¿Cuál de las siguientes opciones representa un ejemplo de mezcla heterogénea?",
        options: ["Agua con sal completamente disuelta", "Una ensalada de verduras", "El aire limpio que respiramos", "Un refresco embotellado"],
        answer: 1,
        explanation: "En una <b>ensalada de verduras</b> se distinguen fácilmente a simple vista cada uno de sus ingredientes separados."
    },
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista / Recordatorio:</b> El <b>ADN</b> (Ácido Desoxirribonucleico) es la molécula que contiene toda la información genética hereditaria que los padres transmiten a sus hijos.",
        question: "¿Cuál es la estructura celular encargada de resguardar el material genético o ADN en las células eucariotas?",
        options: ["La membrana celular", "El núcleo celular", "El citoplasma", "La pared celular"],
        answer: 1,
        explanation: "El <b>núcleo celular</b> actúa como el 'centro de mando' de la célula, protegiendo y albergando el código genético (ADN)."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista / Recordatorio:</b> El <b>Sistema Inmunológico</b> o inmunitario es la defensa natural del cuerpo contra organismos infecciosos como bacterias, virus y parásitos.",
        question: "¿Qué células de la sangre son las principales encargadas de defender al organismo contra las infecciones y enfermedades?",
        options: ["Glóbulos rojos", "Plaquetas", "Glóbulos blancos (Leucocitos)", "Plasma"],
        answer: 2,
        explanation: "Los <b>glóbulos blancos</b> identifican y destruyen gérmenes, bacterias y virus para mantener el cuerpo sano."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista / Recordatorio:</b> La <b>Biodiversidad</b> se refiere a la amplia variedad de seres vivos (plantas, animales y microorganismos) que habitan en un ecosistema o en el planeta.",
        question: "La pérdida de hábitats naturales por la deforestación desmedida afecta directamente a la:",
        options: ["Gravedad de la Tierra", "Biodiversidad de la región", "Velocidad de rotación del planeta", "Composición del núcleo terrestre"],
        answer: 1,
        explanation: "Destruir bosques y selvas elimina el hogar de miles de especies, disminuyendo la <b>biodiversidad</b> silvestre."
    },
    // --- CIENCIAS NATURALES / SEGUNDO BLOQUE (PREGUNTAS 16 A 30) ---
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista / Recordatorio:</b> Los organismos <b>Autótrofos</b> producen su propio alimento (plantas y algas mediante la fotosíntesis). Los <b>Heterótrofos</b> dependen de consumir a otros seres vivos (animales, hongos y humanos).",
        question: "¿Cuál de los siguientes seres vivos es un organismo heterótrofo?",
        options: ["Un pino", "Un conejo", "Un rosal", "El musgo"],
        answer: 1,
        explanation: "El <b>conejo</b> es un animal herbívoro heterótrofo porque necesita alimentarse de plantas para obtener energía, a diferencia de las plantas que son autótrofas."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista / Recordatorio:</b> La <b>Digestión</b> transforma los alimentos en nutrimentos absorbibles. El viaje comienza en la boca (masticación y saliva) y continúa en el estómago e intestinos.",
        question: "¿En qué parte del tubo digestivo ocurre principalmente la absorción de los nutrimentos hacia la corriente sanguínea?",
        options: ["Boca", "Estómago", "Intestino delgado", "Esófago"],
        answer: 2,
        explanation: "Las vellosidades del <b>intestino delgado</b> absorben la gran mayoría de los nutrientes de los alimentos digeridos y los pasan a la sangre."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista / Recordatorio:</b> Las <b>Vacunas</b> estimulan al sistema inmunitario para producir anticuerpos y defensas contra virus y bacterias sin causar la enfermedad grave.",
        question: "¿Cuál es el objetivo principal de la aplicación de vacunas en la población?",
        options: [
            "Curar una infección de forma inmediata",
            "Prevenir enfermedades infecciosas mediante la producción de defensas y anticuerpos",
            "Sustituir la alimentación diaria",
            "Disminuir la presión arterial de forma permanente"
        ],
        answer: 1,
        explanation: "Las <b>vacunas</b> son una medida preventiva que entrena al sistema inmune para reconocer y combatir patógenos específicos antes de contagiarte."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista / Recordatorio:</b> Los factores <b>Bióticos</b> son todos los seres vivos de un ecosistema (plantas, animales, bacterias). Los factores <b>Abióticos</b> son los componentes sin vida que condicionan el entorno (agua, luz solar, suelo, temperatura).",
        question: "¿Cuál de los siguientes elementos representa un factor abiótico de un ecosistema?",
        options: ["Las bacterias del suelo", "La temperatura y luz solar", "Los hongos de los árboles", "Los insectos polinizadores"],
        answer: 1,
        explanation: "La <b>temperatura y la luz solar</b> son componentes físicos no vivos (abióticos) esenciales para la supervivencia en el ecosistema."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista / Recordatorio:</b> El <b>Efecto Invernadero</b> es un fenómeno natural que retiene parte del calor del Sol en la atmósfera. La quema excesiva de combustibles fósiles aumenta los gases de efecto invernadero, causando el <b>Calentamiento Global</b>.",
        question: "¿Qué gas de efecto invernadero se libera principalmente a la atmósfera por la quema de gasolina, diésel y carbón?",
        options: ["Oxígeno ($O_2$)", "Dióxido de Carbono ($CO_2$)", "Nitrógeno ($N_2$)", "Helio ($He$)"],
        answer: 1,
        explanation: "La combustión de derivados del petróleo y carbón libera grandes cantidades de <b>Dióxido de Carbono ($CO_2$)</b> a la atmósfera."
    },
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista / Recordatorio:</b> La <b>Velocidad</b> es la distancia recorrida dividida entre el tiempo empleado ($Velocidad = Distancia ÷ Tiempo$).",
        question: "Un autobús recorre una distancia de 180 kilómetros en un tiempo de 2 horas. ¿A qué velocidad promedio viajó el vehículo?",
        options: ["80 km/h", "90 km/h", "100 km/h", "360 km/h"],
        answer: 1,
        explanation: "<b>Velocidad:</b> 180 km ÷ 2 horas = <b>90 km/h</b>."
    },
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista / Recordatorio:</b> Las tres formas de transferencia de calor son: <b>Conducción</b> (contacto directo sólido), <b>Convección</b> (movimiento de fluidos/gases) y <b>Radiación</b> (ondas electromagnéticas como el Sol).",
        question: "¿Cómo se transmite el calor desde el Sol hacia la Tierra atravesando el espacio vacío?",
        options: ["Conducción", "Convección", "Radiación", "Evaporación"],
        answer: 2,
        explanation: "La energía térmica del Sol viaja por el espacio libre mediante ondas electromagnéticas a través de la <b>radiación</b>."
    },
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista / Recordatorio:</b> La <b>Gravedad</b> es la fuerza de atracción que ejercen la Tierra y otros cuerpos celestes sobre los objetos con masa.",
        question: "¿Qué fuerza provoca que los objetos caigan hacia el suelo al soltarlos desde una cierta altura?",
        options: ["Fuerza de fricción", "Fuerza magnética", "Fuerza de gravedad", "Fuerza centrífuga"],
        answer: 2,
        explanation: "La <b>fuerza de gravedad</b> atrae a todos los cuerpos masivos hacia el centro de la Tierra."
    },
    {
        subject: "Ciencias Naturales",
        module: "Química Básica",
        hint: "<b>Pista / Recordatorio:</b> La materia no se crea ni se destruye, solo se transforma. En los cambios <b>Físicos</b> la sustancia sigue siendo la misma (ej. hielo derretido). En los cambios <b>Químicos</b> se transforman las sustancias creando otras nuevas (ej. quemar papel).",
        question: "¿Cuál de los siguientes eventos representa un cambio químico en la materia?",
        options: [
            "Romper una hoja de papel en pedazos pequeños",
            "Derretir un cubo de hielo en un vaso",
            "La oxidación o combustión de una barra de hierro expuesta a la intemperie",
            "Disolver azúcar en una taza de café caliente"
        ],
        answer: 2,
        explanation: "La <b>oxidación del hierro</b> altera su composición química interna produciendo una sustancia totalmente nueva (óxido de hierro)."
    },
    {
        subject: "Ciencias Naturales",
        module: "Química Básica",
        hint: "<b>Pista / Recordatorio:</b> Las sustancias de la escala de pH van del 0 al 14: del 0 al 6 son <b>Ácidas</b> (ej. limón, vinagre), el 7 es <b>Neutro</b> (ej. agua pura), y del 8 al 14 son <b>Básicas o Alcalinas</b> (ej. jabón, antiácidos).",
        question: "¿Qué tipo de pH tiene el jugo de un limón fresco o el vinagre comercial?",
        options: ["Ácido", "Alcalino o Básico", "Neutro", "Plasmático"],
        answer: 0,
        explanation: "El limón y el vinagre contienen ácidos naturales (cítrico y acético) con valores de pH inferiores a 7 (<b>ácido</b>)."
    },
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista / Recordatorio:</b> Los <b>Organismos Descomponedores</b> (hongos y bacterias) reciclan la materia orgánica de restos vegetales y animales muertos, devolviendo los nutrientes al suelo.",
        question: "¿Qué función ecológica vital realizan los hongos y las bacterias en un bosque?",
        options: [
            "Producir oxígeno mediante fotosíntesis",
            "Descomponer la materia orgánica muerta y enriquecer el suelo",
            "Consumir directamente la luz solar para crecer",
            "Regular la temperatura atmosférica mundial"
        ],
        answer: 1,
        explanation: "Los <b>descomponedores</b> desintegran hojas secas y restos orgánicos convirtiéndolos en sales minerales para el suelo."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista / Recordatorio:</b> El <b>Sistema Nervioso</b> (cerebro, médula espinal y nervios) coordina e integra todas las funciones corporales, sensaciones y respuestas del organismo.",
        question: "¿Cuál es el órgano principal del sistema nervioso central encargado de procesar la información de los sentidos y tomar decisiones?",
        options: ["El corazón", "El cerebro", "El pulmón", "El hígado"],
        answer: 1,
        explanation: "El <b>cerebro</b> recibe señales de los órganos sensoriales, procesa la información y coordina la respuesta del cuerpo."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista / Recordatorio:</b> La <b>Ciclo del Agua</b> incluye: <i>Evaporación</i> (del suelo/océanos al cielo), <i>Condensación</i> (formación de nubes) y <i>Precipitación</i> (llave o nieve).",
        question: "¿Cómo se llama la fase del ciclo del agua en la que el vapor acumulado en las nubes se enfría y cae a la tierra en forma de lluvia?",
        options: ["Evaporación", "Precipitación", "Filtración", "Transpiración"],
        answer: 1,
        explanation: "La <b>precipitación</b> ocurre cuando el agua acumulada en las nubes cae a la superficie de la Tierra como lluvia, granizo o nieve."
    },
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista / Recordatorio:</b> Las <b>Lentes Convergentes</b> o lupas concentran los rayos de luz en un punto y se utilizan para corregir problemas de la vista como la presbicia o la hipermetropía.",
        question: "¿Qué instrumento óptico utiliza lentes para amplificar la imagen de objetos o microorganismos extremadamente pequeños invisibles al ojo humano?",
        options: ["Telescopio", "Microscopio", "Periscopio", "Termómetro"],
        answer: 1,
        explanation: "El <b>microscopio</b> utiliza un sistema de lentes para magnificar organismos microscópicos como células y bacterias."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista / Recordatorio:</b> Los métodos anticonceptivos de barrera, como el <b>condón masculino y femenino</b>, son los únicos que además de prevenir embarazos no planeados protegen contra Enfermedades de Transmisión Sexual (ITS).",
        question: "¿Cuál de los siguientes métodos anticonceptivos ofrece doble protección al prevenir embarazos e Infecciones de Transmisión Sexual (ITS)?",
        options: ["Pastillas anticonceptivas", "Condón o preservativo", "Dispositivo Intrauterino (DIU)", "Inyecciones hormonales"],
        answer: 1,
        explanation: "El <b>condón</b> forma una barrera física que evita el intercambio de fluidos, previniendo tanto embarazos como el contagio de ITS."
    },
    {
        subject: "Ciencias Naturales",
        module: "Química Básica",
        hint: "<b>Pista / Recordatorio:</b> En la Tabla Periódica, el símbolo químico de los elementos suele formarse con la primera letra en mayúscula y, si se requiere, una segunda en minúscula (ejemplo: <i>O</i> para Oxígeno, <i>Fe</i> para Hierro, <i>Na</i> para Sodio).",
        question: "¿Cuál es el símbolo químico universal del Oxígeno en la Tabla Periódica de los Elementos?",
        options: ["Ox", "O", "Oxg", "Om"],
        answer: 1,
        explanation: "El símbolo químico del <b>Oxígeno</b> es simplemente la letra mayúscula <b>O</b>. Se trata de uno de los elementos indispensables para la vida y la combustión."
    },
    // --- CIENCIAS NATURALES ---
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista / Recordatorio:</b> Las células eucariotas se dividen principalmente en células animales y vegetales. Estas últimas poseen cloroplastos y pared celular.",
        question: "¿Qué estructura rígida externa poseen exclusivamente las células vegetales para darles soporte y protección?",
        options: ["Membrana plasmática", "Pared celular", "Núcleo", "Mitocondria"],
        answer: 1,
        explanation: "La <b>pared celular</b> de celulosa protege y da rigidez estructural a las células de las plantas."
    },
    {
        subject: "Ciencias Naturales",
        module: "Biología Básica",
        hint: "<b>Pista / Recordatorio:</b> Las mitocondrias son conocidas como las 'centrales energéticas' de la célula porque generan ATP mediante la respiración.",
        question: "¿Qué orgánulo celular se encarga de producir la mayor parte de la energía (ATP) necesaria para las funciones celulares?",
        options: ["Mitocondria", "Ribosoma", "Vacuola", "Lisosoma"],
        answer: 0,
        explanation: "Las <b>mitocondrias</b> transforman los nutrientes en energía química aprovechable para la célula."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista / Recordatorio:</b> El sistema circulatorio transporta la sangre impulsada por el corazón a través de arterias y venas.",
        question: "¿Cómo se llaman los vasos sanguíneos encargados de llevar la sangre oxigenada desde el corazón hacia todos los tejidos y órganos del cuerpo?",
        options: ["Venas", "Arterias", "Capilares linfáticos", "Alvéolos"],
        answer: 1,
        explanation: "Las <b>arterias</b> transportan sangre rica en oxígeno y nutrientes impulsada directamente por los latidos cardíacos."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista / Recordatorio:</b> Los riñones actúan como filtros purificadores que eliminan los desechos de la sangre a través de la orina.",
        question: "¿Cuál es el órgano principal del sistema urinario encargado de filtrar la sangre para eliminar urea y toxinas en forma de orina?",
        options: ["Hígado", "Riñones", "Páncreas", "Vesícula biliar"],
        answer: 1,
        explanation: "Los <b>riñones</b> depuran constantemente la sangre regulando el agua y eliminando sustancias de desecho."
    },
    {
        subject: "Ciencias Naturales",
        module: "Cuerpo Humano y Salud",
        hint: "<b>Pista / Recordatorio:</b> Las vitaminas y minerales se necesitan en pequeñas cantidades pero son vitales para prevenir enfermedades y regular funciones metabólicas.",
        question: "¿Qué tipo de nutrimentos protegen al cuerpo previniendo enfermedades y regulando los procesos internos, encontrándose en frutas y verduras?",
        options: ["Carbohidratos y grasas", "Vitaminas y minerales", "Proteínas pesadas", "Azúcares refinados"],
        answer: 1,
        explanation: "Las <b>vitaminas y minerales</b> actúan como reguladores bioquímicos indispensables para el sistema inmune y la salud."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista / Recordatorio:</b> En una red alimentaria, los consumidores secundarios se alimentan de los herbívoros (consumidores primarios).",
        question: "¿Cómo se les denomina a los animales carnívoros que se alimentan de herbívoros en una cadena trófica?",
        options: ["Productores primarios", "Consumidores secundarios", "Descomponedores", "Organismos autótrofos"],
        answer: 1,
        explanation: "Los carnívoros ocupan el nivel de <b>consumidores secundarios</b> al depredar a los herbívoros."
    },
    {
        subject: "Ciencias Naturales",
        module: "Ecosistemas y Medio Ambiente",
        hint: "<b>Pista / Recordatorio:</b> El reciclaje transforma residuos industriales o domésticos en materias primas reutilizables.",
        question: "¿Qué proceso industrial permite recolectar materiales como aluminio, papel y vidrio para fundirlos o procesarlos y crear nuevos productos?",
        options: ["Reutilización", "Reciclaje", "Combustión", "Sedimentación"],
        answer: 1,
        explanation: "El <b>reciclaje</b> somete los desechos a transformación física o química para reintegrarlos al ciclo productivo."
    },
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista / Recordatorio:</b> La temperatura de ebullición del agua pura a nivel del mar es de 100 grados Celsius.",
        question: "¿A qué temperatura numérica en la escala Celsius hierve el agua pura bajo condiciones normales de presión atmosférica?",
        options: ["0 °C", "50 °C", "100 °C", "212 °C"],
        answer: 2,
        explanation: "El agua cambia de estado líquido a vapor (ebullición) exactamente a los <b>100 °C</b>."
    },
    {
        subject: "Ciencias Naturales",
        module: "Física Básica",
        hint: "<b>Pista / Recordatorio:</b> La energía cinética está asociada al movimiento de los cuerpos, mientras que la potencial depende de su posición.",
        question: "¿Qué tipo de energía mecánica posee un objeto debido exclusivamente a su movimiento a una cierta velocidad?",
        options: ["Energía Potencial", "Energía Cinética", "Energía Térmica", "Energía Química"],
        answer: 1,
        explanation: "La <b>energía cinética</b> es la energía que manifiesta un cuerpo en virtud de su movimiento."
    },
    {
        subject: "Ciencias Naturales",
        module: "Química Básica",
        hint: "<b>Pista / Recordatorio:</b> Una solución química se compone de un soluto (lo que se disuelve) y un solvente (el medio disolvente, comúnmente agua).",
        question: "En una mezcla de agua azucarada, ¿cómo se le llama técnicamente al azúcar que se disuelve por completo en el líquido?",
        options: ["Solvente", "Soluto", "Precipitado", "Catalizador"],
        answer: 1,
        explanation: "El <b>soluto</b> es la sustancia minoritaria que se disuelve dentro del solvente líquido."
    },

    // --- CIENCIAS SOCIALES (ICHEA/INEA) ---
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> No confundas las tres etapas históricas clave: la <b>Independencia</b> arrancó en 1810 con Miguel Hidalgo, la <b>Reforma</b> fue encabezada por Benito Juárez a mediados del siglo XIX, y la <b>Revolución Mexicana</b> inició en 1910 con Francisco I. Madero.",
        question: "¿En qué fecha dio inicio el movimiento armado de la Revolución Mexicana dirigido por Francisco I. Madero?",
        options: ["16 de septiembre de 1810", "20 de noviembre de 1910", "5 de mayo de 1862", "21 de marzo de 1806"],
        answer: 1,
        explanation: "El <b>20 de noviembre de 1910</b> inició la Revolución Mexicana con el objetivo de terminar con la dictadura de Porfirio Díaz."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> Las tres grandes civilizaciones prehispánicas fueron: los <b>Olmecas</b> (cultura madre), los <b>Mayas</b> (astronomía y matemáticas en el sur) y los <b>Mexicas/Aztecas</b> (fundadores de Tenochtitlan).",
        question: "¿Qué cultura prehispánica es conocida como la 'Cultura Madre' de Mesoamérica por haber sentado las bases del calendario y la escultura monumental?",
        options: ["Cultura Azteca", "Cultura Maya", "Cultura Olmeca", "Cultura Tolteca"],
        answer: 2,
        explanation: "La cultura <b>Olmeca</b> es considerada la cultura madre por ser la civilización más antigua de Mesoamérica que influyó en las posteriores."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> Benito Juárez promulgó las <b>Leyes de Reforma</b>, las cuales establecieron la separación entre la Iglesia y el Estado, la libertad de cultos y el registro civil.",
        question: "¿Qué presidente mexicano promovió las Leyes de Reforma para separar los asuntos de la Iglesia del Estado en el siglo XIX?",
        options: ["Porfirio Díaz", "Benito Juárez", "Lázaro Cárdenas", "Francisco I. Madero"],
        answer: 1,
        explanation: "<b>Benito Juárez</b> lideró la causa liberal y consolidó la separación entre las funciones de la Iglesia y las leyes del Estado."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> En <b>1938</b>, el presidente Lázaro Cárdenas declaró la <b>Expropiación Petrolera</b>, recuperando para la nación el control sobre los recursos del subsuelo.",
        question: "¿Qué acontecimiento histórico nacional ocurrió el 18 de marzo de 1938 bajo el gobierno del presidente Lázaro Cárdenas?",
        options: [
            "La firma de la Constitución Política",
            "La Expropiación Petrolera",
            "El inicio de la Guerra de Reforma",
            "La Independencia de México"
        ],
        answer: 1,
        explanation: "La <b>Expropiación Petrolera</b> en 1938 devolvió el control de la industria y los yacimientos de petróleo al pueblo mexicano."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista / Recordatorio:</b> Las <b>Líneas Imaginarias</b> del planeta son: los <b>Paralelos</b> (como el Ecuador, miden Latitud Norte/Sur) y los <b>Meridianos</b> (como Greenwich, miden Longitud Este/Oeste).",
        question: "¿Cómo se llama la línea imaginaria que divide verticalmente a la Tierra en Hemisferio Oriental y Hemisferio Occidental?",
        options: ["Ecuador", "Trópico de Cáncer", "Meridiano de Greenwich", "Círculo Polar Ártico"],
        answer: 2,
        explanation: "El <b>Meridiano de Greenwich</b> o Meridiano Cero divide horizontalmente el planeta en los hemisferios Este (Oriental) y Oeste (Occidental)."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista / Recordatorio:</b> México colinda al norte con Estados Unidos. Al sur colinda directamente con dos países centroamericanos: <b>Guatemala</b> y <b>Belice</b>.",
        question: "¿Cuáles son los países con los que limita la frontera sur de la República Mexicana?",
        options: ["Guatemala y Belice", "Honduras y El Salvador", "Panamá y Costa Rica", "Colombia y Venezuela"],
        answer: 0,
        explanation: "La frontera sur de México colinda con <b>Guatemala y Belice</b>."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista / Recordatorio:</b> La <b>Migración</b> comprende dos procesos: <i>Emigración</i> (salir del lugar de origen) e <i>Inmigración</i> (llegar a vivir al lugar de destino).",
        question: "¿Cómo se le llama al desplazamiento de personas que abandonan su lugar de origen para establecerse en otra ciudad o país?",
        options: ["Emigración", "Inmigración", "Importación", "Urbanización"],
        answer: 0,
        explanation: "<b>Emigración</b> se refiere al acto de salir o abandonar el lugar de origen. Cuando esa persona llega al nuevo destino, se convierte en inmigrante."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista / Recordatorio:</b> La mayor parte de la población en México se concentra en las zonas <b>Urbanas</b> (ciudades) debido a la búsqueda de fuentes de empleo, servicios de salud y educación.",
        question: "¿Cuál es la principal razón por la cual se da la migración del campo (zona rural) a la ciudad (zona urbana)?",
        options: [
            "Para trabajar únicamente en actividades agrícolas",
            "En busca de mejores oportunidades de empleo, salud y educación",
            "Porque en el campo no hay terreno para construir casas",
            "Para evitar el uso de transporte público"
        ],
        answer: 1,
        explanation: "La búsqueda de mejores ingresos económicos, acceso a hospitales y opciones educativas motiva la migración del campo a las ciudades."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> La <b>Constitución Política de los Estados Unidos Mexicanos de 1917</b> es la Ley Suprema de nuestro país. Ninguna otra ley o reglamento puede estar por encima de ella.",
        question: "¿Cuál es el documento o norma jurídica suprema que rige las leyes, derechos y obligaciones de todos los mexicanos?",
        options: [
            "El Código Civil Estatal",
            "La Constitución Política de los Estados Unidos Mexicanos",
            "La Ley Federal del Trabajo",
            "El Reglamento de Tránsito"
        ],
        answer: 1,
        explanation: "La <b>Constitución Política de 1917</b> es la carta magna que establece las bases del Estado mexicano y garantiza las garantías individuales."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> Los artículos constitucionales clave son: <b>Artículo 3º</b> (Educación gratuita y laica), <b>Artículo 27º</b> (Propiedad de la tierra y agua), y <b>Artículo 123º</b> (Derecho al trabajo digno).",
        question: "¿Qué artículo de la Constitución Mexicana establece que toda persona tiene derecho a recibir educación laica, gratuita y de calidad?",
        options: ["Artículo 1º", "Artículo 3º", "Artículo 27º", "Artículo 123º"],
        answer: 1,
        explanation: "El <b>Artículo 3º</b> garantiza la educación obligatoria, laica (sin dogmas religiosos) y gratuita en todo el territorio nacional."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> En una <b>Democracia</b>, la soberanía reside en el pueblo, quien ejerce su poder eligiendo libremente a sus gobernantes mediante el voto o sufragio.",
        question: "¿Cómo se llama la forma de gobierno en la que los ciudadanos eligen a sus representantes mediante el voto libre y secreto?",
        options: ["Monarquía", "Dictadura", "Democracia", "Oligarquía"],
        answer: 2,
        explanation: "La <b>Democracia</b> permite a los ciudadanos participar en la vida política y tomar decisiones colectivas a través del voto."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> Los <b>Derechos Humanos</b> son prerrogativas inherentes a todos los seres vivos, sin distinción de género, nacionalidad, origen étnico, religión o condición económica.",
        question: "¿Cuál de las siguientes es una característica fundamental de los Derechos Humanos?",
        options: [
            "Solo se otorgan a las personas que tienen trabajo formal.",
            "Son universales, inalienables y corresponden a todas las personas.",
            "Pueden venderse o quitarse si la persona cambia de país.",
            "Solo aplican para los mayores de edad."
        ],
        answer: 1,
        explanation: "Los Derechos Humanos son <b>universales</b> e inalienables; pertenecen a toda persona por el simple hecho de existir."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> La <b>Discriminación</b> es la conducta de dar un trato desfavorable, de desprecio o exclusión a una persona o grupo por sus características físicas, origen, género o ideas.",
        question: "Rechazar a una persona para un empleo basándose únicamente en su origen étnico, edad o religión es una acción de:",
        options: ["Inclusión social", "Discriminación", "Equidad de género", "Justicia distributiva"],
        answer: 1,
        explanation: "La <b>discriminación</b> atenta contra la dignidad humana y viola la igualdad de oportunidades garantizada por la ley."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> El Estado Mexicano divide su poder en tres partes para evitar dictaduras: <b>Ejecutivo</b> (Presidente), <b>Legislativo</b> (Diputados y Senadores) y <b>Judicial</b> (Jueces y Magistrados).",
        question: "¿Qué Poder de la Unión se encarga de discutir, redactar y aprobar las leyes en el Congreso de la Unión?",
        options: ["Poder Ejecutivo", "Poder Legislativo", "Poder Judicial", "Poder Electoral"],
        answer: 1,
        explanation: "El <b>Poder Legislativo</b> (constituido por la Cámara de Diputados y la Cámara de Senadores) elabora y modifica las leyes del país."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> El movimiento de la <b>Independencia de México</b> inició el 16 de septiembre de 1810 con el Grito de Dolores y culminó 11 años después con la entrada del Ejército Trigarante el 27 de septiembre de 1821.",
        question: "¿Qué héroe patrio es reconocido históricamente como el 'Padre de la Patria' por haber iniciado el Grito de Dolores?",
        options: ["José María Morelos", "Miguel Hidalgo y Costilla", "Vicente Guerrero", "Ignacio Allende"],
        answer: 1,
        explanation: "<b>Miguel Hidalgo y Costilla</b> encabezó la insurrección en Dolores, Guanajuato, dando inicio a la lucha por la Independencia."
    },
    // --- CIENCIAS SOCIALES / SEGUNDO BLOQUE (PREGUNTAS 16 A 30) ---
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> La época colonial o Virreinato abarcó tres siglos (1521-1821), desde la caída de Tenochtitlan a manos de los españoles hasta la consumación de la Independencia.",
        question: "¿Cómo se llamó la entidad territorial del Imperio Español fundada sobre las ruinas de Tenochtitlan tras la conquista de 1521?",
        options: ["Virreinato de la Nueva España", "Capitanía General de Guatemala", "Virreinato del Perú", "Nueva Granada"],
        answer: 0,
        explanation: "Durante tres siglos, el territorio de México se denominó <b>Virreinato de la Nueva España</b>, gobernado por un virrey enviado por la corona española."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> José María Morelos y Pavón redactó el documento <i>'Sentimientos de la Nación'</i> en el Congreso de Chilpancingo de 1813, donde declaró la abolición de la esclavitud.",
        question: "¿Qué líder de la Independencia escribió el célebre documento histórico titulado 'Sentimientos de la Nación'?",
        options: ["Vicente Guerrero", "José María Morelos y Pavón", "Ignacio Allende", "Agustín de Iturbide"],
        answer: 1,
        explanation: "<b>José María Morelos y Pavón</b> presentó los <i>Sentimientos de la Nación</i> proponiendo la soberanía del pueblo y la abolición de la esclavitud."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> El **Porfiriato** (1876-1911) trajo avances económicos y la construcción de la red ferrocarrilera, pero provocó una profunda desigualdad social y falta de libertad democrática.",
        question: "¿Qué periodo de la historia de México duró más de 30 años en el poder bajo la dictadura de Porfirio Díaz?",
        options: ["El Maximato", "El Porfiriato", "El Cardenismo", "La Reforma"],
        answer: 1,
        explanation: "El <b>Porfiriato</b> fue el periodo gubernamental encabezado por el general Porfirio Díaz desde 1876 hasta su renuncia en 1911 por la Revolución."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista / Recordatorio:</b> La Tierra realiza dos movimientos principales: **Rotación** (gira sobre su propio eje en 24 horas y provoca el día y la noche) y **Traslación** (gira alrededor del Sol en 365 días y genera las estaciones del año).",
        question: "¿Qué consecuencia directa tiene el movimiento de rotación de la Tierra sobre su propio eje?",
        options: [
            "Las cuatro estaciones del año",
            "La sucesión del día y la noche",
            "Los eclipses solares y lunares",
            "Las mareas de los océanos"
        ],
        answer: 1,
        explanation: "El movimiento de <b>rotación</b> hace que distintas partes de la Tierra reciban la luz del Sol progresivamente, creando el día y la noche."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista / Recordatorio:</b> Los **Mapas Temáticos** representan datos específicos como división política, tipos de relieve, clima, producción agrícola o densidad de población.",
        question: "¿Qué tipo de mapa debemos consultar si deseamos conocer los límites fronterizos entre los estados y municipios de México?",
        options: ["Mapa topográfico", "Mapa de división política", "Mapa climático", "Mapa de vegetación"],
        answer: 1,
        explanation: "Un mapa de <b>división política</b> muestra claramente las fronteras internacionales, las entidades federativas y sus capitales."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista / Recordatorio:</b> Las **Actividades Económicas Primarias** obtienen los recursos directo de la naturaleza (agricultura, ganadería, pesca, minería y silvicultura).",
        question: "¿A qué sector de la economía pertenecen la agricultura, la cría de ganado y la pesca comercial?",
        options: ["Sector Primario", "Sector Secundario", "Sector Terciario", "Sector Financiero"],
        answer: 0,
        explanation: "Las actividades del <b>Sector Primario</b> extraen y aprovechan materias primas directo de la naturaleza sin transformación industrial."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista / Recordatorio:</b> Las **Actividades Económicas Terciarias** no producen bienes materiales directos, sino que prestan servicios (comercio, educación, turismo, transporte, salud).",
        question: "¿A qué sector económico pertenecen las actividades de transporte de pasajeros, comercio y servicios turísticos?",
        options: ["Sector Primario", "Sector Secundario", "Sector Terciario", "Sector Extractivo"],
        answer: 2,
        explanation: "El <b>Sector Terciario</b> engloba todas las actividades de comercio y prestación de servicios a la población."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> Los tres niveles o órdenes de gobierno en México son: **Federal** (para todo el país), **Estatal** (para cada entidad federativa) y **Municipal** (para el municipio o alcaldía).",
        question: "¿Cuál es el nivel de gobierno más cercano a los ciudadanos en su localidad, presidido por un Alcalde o Presidente Municipal?",
        options: ["Gobierno Federal", "Gobierno Estatal", "Gobierno Municipal", "Gobierno Regional"],
        answer: 2,
        explanation: "El <b>Gobierno Municipal</b> administra los servicios públicos básicos de la comunidad inmediata (alumbrado, agua, recolección de basura)."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> La **Soberanía Nacional** significa que el poder supremo de decisión reside en el pueblo mexicano, quien lo ejerce a través de los poderes de la Unión.",
        question: "¿En quién reside esencial y originalmente la soberanía de la nación mexicana de acuerdo con la Constitución?",
        options: ["En el Presidente de la República", "En el Pueblo de México", "En los partidos políticos", "En las fuerzas armadas"],
        answer: 1,
        explanation: "El Artículo 39º constitucional dicta que la **Soberanía reside en el Pueblo**, el cual tiene en todo tiempo el derecho de alterar o modificar su forma de gobierno."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> Las **Garantías Individuales** son los derechos fundamentales consignados en la Constitución que protegen la libertad, la igualdad, la propiedad y la seguridad jurídica.",
        question: "¿Cuál de las siguientes acciones representa una violación al derecho constitucional a la libertad de expresión?",
        options: [
            "Prohibir o censurar a un ciudadano por publicar sus opiniones pacíficas en redes sociales",
            "Pedir identificación a los conductores en una revisión de tránsito",
            "Cobrar impuestos sobre las ventas comerciales",
            "Establecer horarios de cierre para parques públicos"
        ],
        answer: 0,
        explanation: "Censurar o sancionar a una persona por expresar sus opiniones e ideas viola el derecho a la <b>libertad de expresión</b> garantizado en el Artículo 6º."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> El **Tratado de Guadalupe Hidalgo** de 1848 dio fin a la intervención estadounidense, resultando en la pérdida de más de la mitad del territorio nacional mexicano.",
        question: "¿Qué tratado internacional se firmó en 1848 tras la invasión de Estados Unidos a México, cediento los territorios de Alta California, Nuevo México y Texas?",
        options: ["Tratado de Córdoba", "Tratado de Guadalupe Hidalgo", "Tratado de Miramar", "Tratado de Versalles"],
        answer: 1,
        explanation: "Con la firma del <b>Tratado de Guadalupe Hidalgo</b>, México cedió más de 2 millones de kilómetros cuadrados de territorio a EE. UU."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> La **Megalópoli** o zona metropolitana se forma cuando varias ciudades cercanas crecen hasta unirse física y económicamente (ejemplo: la Zona Metropolitana del Valle de México).",
        question: "¿Cómo se denomina al crecimiento urbano en el que la ciudad principal se une con municipios o ciudades vecinas formando una gran conurbación?",
        options: ["Zona Metropolitano o Megalópolis", "Comunidad rural", "Zona pesquera", "Reserva ecológica"],
        answer: 0,
        explanation: "Una <b>Zona Metropolitana</b> integra una ciudad central con municipios vecinos interconectados diariamente por empleo y transporte."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista / Recordatorio:</b> La **Sierra Madre Occidental** recorre el oeste de México (paralela al Océano Pacífico), mientras que la **Sierra Madre Oriental** recorre el este (paralela al Golfo de México).",
        question: "¿Qué gran cadena montañosa mexicana bordea la costa del Océano Pacífico desde Sonora hasta Jalisco?",
        options: ["Sierra Madre Oriental", "Sierra Madre Occidental", "Eje Neovolcánico", "Sierra Madre del Sur"],
        answer: 1,
        explanation: "La <b>Sierra Madre Occidental</b> es la cadena montañosa más extensa del oeste mexicano."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> La **Equidad de Género** implica garantizar las mismas oportunidades, derechos y responsabilidades a hombres y mujeres sin discriminación alguna.",
        question: "Asegurar que hombres y mujeres reciban el mismo salario por realizar el mismo trabajo en una empresa es un ejemplo práctico de:",
        options: ["Discriminación laboral", "Equidad e igualdad de género", "Preferencias individuales", "Competencia económica"],
        answer: 1,
        explanation: "La **equidad de género** promueve la igualdad de derechos, retribución económica y oportunidades sin importar el sexo del trabajador."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> Las **Reformas Agrarias** impulsadas tras la Revolución distribuyeron la tierra a campesinos bajo el régimen ejidal, permitiendo el trabajo comunal de la tierra.",
        question: "¿Qué figura jurídica de propiedad comunal de la tierra se creó para beneficiar a los campesinos tras el movimiento revolucionario de 1910?",
        options: ["El Ejido", "La Latifundio", "La Encomienda", "El Feudo"],
        answer: 0,
        explanation: "El **Ejido** otorgó tierras a las comunidades campesinas para su explotación agrícola sin riesgo de ser despojados por terratenientes."
    },
    // --- CIENCIAS SOCIALES ---
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> La Constitución de 1857 fue promulgada durante el gobierno liberal de Ignacio Comonfort, con fuerte influencia de Benito Juárez.",
        question: "¿Qué importante Constitución liberal se promulgó en el año de 1857 consagrando las garantías individuales de los ciudadanos?",
        options: ["Constitución de Apatzingán", "Constitución de 1824", "Constitución de 1857", "Constitución de 1917"],
        answer: 2,
        explanation: "La <b>Constitución de 1857</b> estableció los derechos del hombre y fortaleció el régimen liberal frente al clero y los conservadores."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> La Batalla de Puebla del 5 de mayo de 1862 enfrentó al ejército mexicano comandado por Ignacio Zaragoza contra las tropas invasoras francesas.",
        question: "¿Qué general mexicano comandó heroicamente al ejército nacional para derrotar a las tropas francesas en la histórica Batalla de Puebla?",
        options: ["Porfirio Díaz", "Ignacio Zaragoza", "Vicente Guerrero", "Mariano Matamoros"],
        answer: 1,
        explanation: "El general <b>Ignacio Zaragoza</b> dirigió la defensa patriótica que logró la victoria en Puebla el 5 de mayo de 1862."
    },
    {
        subject: "Ciencias Sociales",
        module: "Historia de México",
        hint: "<b>Pista / Recordatorio:</b> El Plan de San Luis fue promulgado por Francisco I. Madero en 1910 para convocar al pueblo a levantarse en armas contra la dictadura porfirista.",
        question: "¿Qué plan político redactado por Francisco I. Madero convocaba a la población mexicana a levantarse en armas el 20 de noviembre de 1910?",
        options: ["Plan de Ayala", "Plan de San Luis", "Plan de Agua Prieta", "Plan de Tuxtepec"],
        answer: 1,
        explanation: "El <b>Plan de San Luis</b> proclamaba el sufragio efectivo, la no reelección y el levantamiento armado contra Porfirio Díaz."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista / Recordatorio:</b> El relieve terrestre incluye montañas, mesetas, llanuras y depresiones modificadas por la erosión.",
        question: "¿Cómo se denominan las formas de la superficie terrestre caracterizadas por grandes extensiones planas ubicadas a baja altitud cerca de las costas?",
        options: ["Mesetas o altiplanos", "Llanuras costeras", "Sierras nevadas", "Depresiones profundas"],
        answer: 1,
        explanation: "Las <b>llanuras costeras</b> son planicies amplias situadas a nivel del mar."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista / Recordatorio:</b> La densidad de población mide cuántos habitantes viven en promedio por kilómetro cuadrado.",
        question: "¿Qué indicador demográfico mide la concentración promedio de habitantes que viven por cada kilómetro cuadrado en un territorio?",
        options: ["Tasa de natalidad", "Densidad de población", "Índice de migración", "Esperanza de vida"],
        answer: 1,
        explanation: "La <b>densidad de población</b> se calcula dividiendo el número total de habitantes entre la superficie territorial en km²."
    },
    {
        subject: "Ciencias Sociales",
        module: "Geografía",
        hint: "<b>Pista / Recordatorio:</b> Las actividades secundarias transforman las materias primas en productos manufacturados (industria, manufactura, construcción).",
        question: "¿A qué sector de la economía pertenecen las fábricas de automóviles, la industria textil y la construcción de viviendas?",
        options: ["Sector Primario", "Sector Secundario", "Sector Terciario", "Sector Agropecuario"],
        answer: 1,
        explanation: "El <b>Sector Secundario</b> se enfoca en la transformación industrial de materias primas."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> El Artículo 123 constitucional protege los derechos laborales, jornada máxima y salario mínimo.",
        question: "¿Qué artículo constitucional consagra los derechos de los trabajadores, la jornada laboral de 8 horas y el derecho a huelga en México?",
        options: ["Artículo 3º", "Artículo 27º", "Artículo 123º", "Artículo 130º"],
        answer: 2,
        explanation: "El <b>Artículo 123º</b> regula las relaciones laborales y protege las garantías sociales de la clase trabajadora."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> Los poderes de la Unión se dividen para garantizar equilibrios y evitar el abuso de autoridad.",
        question: "¿Qué poder de la Unión en México es depositado en la Suprema Corte de Justicia de la Nación y tribunales colegiados para impartir justicia?",
        options: ["Poder Ejecutivo", "Poder Legislativo", "Poder Judicial", "Poder Ciudadano"],
        answer: 2,
        explanation: "El <b>Poder Judicial de la Federación</b> vigila el cumplimiento de la Constitución y administra la justicia en el país."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> Los derechos humanos son inalienables, lo que significa que no se pueden quitar ni negociar bajo ninguna circunstancia.",
        question: "¿Qué significa que los Derechos Humanos sean considerados 'inalienables'?",
        options: [
            "Que cambian de valor dependiendo del país donde vivas.",
            "Que ninguna autoridad ni persona puede quitártelos, venderlos o renunciar a ellos.",
            "Que únicamente aplican para los ciudadanos mayores de edad.",
            "Que caducan al cumplir un determinado periodo de años."
        ],
        answer: 1,
        explanation: "Ser <b>inalienables</b> implica que son inherentes a la persona y no pueden enajenarse, cederse ni arrebatarse."
    },
    {
        subject: "Ciencias Sociales",
        module: "Formación Cívica y Ética",
        hint: "<b>Pista / Recordatorio:</b> La participación ciudadana fortalece la vida democrática más allá de emitir un voto en las urnas electorales.",
        question: "¿Cuál de las siguientes acciones demuestra una participación ciudadana activa y responsable en una comunidad?",
        options: [
            "Ignorar los problemas del vecindario y esperar que otros los resuelvan.",
            "Organizarse con los vecinos para mejorar la seguridad, limpieza y servicios de la colonia.",
            "Destruir el mobiliario urbano de los parques públicos.",
            "No informarse sobre las propuestas de los gobernantes."
        ],
        answer: 1,
        explanation: "La organización comunitaria colaborativa es una muestra ejemplar de responsabilidad y participación ciudadana democrática."
    }
];