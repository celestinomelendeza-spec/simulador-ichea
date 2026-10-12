// --- CONFIGURACIÓN DE TU GOOGLE APPS SCRIPT ---
const URL_MI_API = "https://script.google.com/macros/s/AKfycbyerTsEwrLLAqX_OHtAPZnQcOu2nivb4DLAXeDI-qutZ47ug0-kT0lVwVZgD2aN9Fs/exec";

// --- ESTADO DE LA APLICACIÓN ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;
let secondsElapsed = 0;
let activeMode = "exam"; // "practice" o "exam"
let isReviewMode = false;
let studentName = "";

// --- ELEMENTOS DEL DOM ---
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

const studentNameInput = document.getElementById("student-name-input");
const userBadge = document.getElementById("user-badge");
const userBadgeName = document.getElementById("user-badge-name");

const startPracticeBtn = document.getElementById("start-practice-btn");
const startExamBtn = document.getElementById("start-exam-btn");
const practiceSubjectSelect = document.getElementById("practice-subject-select");
const examTypeSelect = document.getElementById("exam-type-select");

const quizModeTitle = document.getElementById("quiz-mode-title");
const timerBox = document.getElementById("timer-box");
const timerDisplay = document.getElementById("timer-display");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");

const hintWrapper = document.getElementById("hint-wrapper");
const toggleHintBtn = document.getElementById("toggle-hint-btn");
const hintBox = document.getElementById("hint-box");

const questionSubject = document.getElementById("question-subject");
const questionIdTag = document.getElementById("question-id-tag");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackBox = document.getElementById("feedback-box");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const reviewBtn = document.getElementById("review-btn");

// --- INICIALIZACIÓN Y EVENTOS ---
window.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("ichea_student_name");
    if (savedName) {
        studentNameInput.value = savedName;
    }
});

startPracticeBtn.addEventListener("click", () => initQuiz("practice"));
startExamBtn.addEventListener("click", () => initQuiz("exam"));
prevBtn.addEventListener("click", goToPrevQuestion);
nextBtn.addEventListener("click", goToNextQuestion);
restartBtn.addEventListener("click", returnToHome);
reviewBtn.addEventListener("click", enterReviewMode);

toggleHintBtn.addEventListener("click", () => {
    hintBox.classList.toggle("hidden");
});

function initQuiz(mode) {
    const inputVal = studentNameInput.value.trim();
    studentName = inputVal !== "" ? inputVal : "Estudiante";
    localStorage.setItem("ichea_student_name", studentName);

    userBadgeName.textContent = studentName;
    userBadge.classList.remove("hidden");

    activeMode = mode;
    isReviewMode = false;

    // Filtrar preguntas según materia o módulo
    if (activeMode === "practice") {
        const sub = practiceSubjectSelect.value;
        if (sub === "Todas") {
            currentQuestions = [...allQuestions];
        } else {
            currentQuestions = allQuestions.filter(q => q.subject === sub || q.module === sub);
        }
        quizModeTitle.textContent = "Modo Práctica / Estudio";
        timerBox.classList.add("hidden");
    } else { // Modo Examen
        const examType = examTypeSelect.value;
        if (examType === "Global") {
            currentQuestions = [...allQuestions];
        } else {
            currentQuestions = allQuestions.filter(q => q.subject === examType);
        }
        quizModeTitle.textContent = "Modo Examen";
        timerBox.classList.remove("hidden");
        startTimer();
    }

    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);

    welcomeScreen.classList.add("hidden");
    resultsScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    renderQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    secondsElapsed = 0;
    timerDisplay.textContent = "00:00";
    timerInterval = setInterval(() => {
        secondsElapsed++;
        const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
        const secs = (secondsElapsed % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${mins}:${secs}`;
    }, 1000);
}

function renderQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    const total = currentQuestions.length;

    progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${total}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / total) * 100}%`;

    questionSubject.textContent = q.subject;
    questionIdTag.textContent = `Reactivo #${currentQuestionIndex + 1}`;
    questionText.textContent = q.question;

    // Manejo de Pistas
    if (activeMode === "practice" && !isReviewMode && q.hint) {
        hintWrapper.classList.remove("hidden");
        hintBox.innerHTML = q.hint;
        hintBox.classList.add("hidden"); // Se oculta por defecto hasta dar clic en el botón
    } else {
        hintWrapper.classList.add("hidden");
    }

    optionsContainer.innerHTML = "";
    const selectedOpt = userAnswers[currentQuestionIndex];

    q.options.forEach((optText, index) => {
        const optBtn = document.createElement("button");
        optBtn.type = "button";
        optBtn.className = "option-card w-full text-left p-4 rounded-xl border border-slate-200 text-slate-800 text-sm md:text-base flex items-center justify-between group";

        let iconMarkup = `<span class="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-xs font-semibold text-slate-500 group-hover:border-sky-500 group-hover:text-sky-600 transition-colors">${String.fromCharCode(65 + index)}</span>`;

        if (selectedOpt === index) {
            optBtn.classList.add("option-selected");
            iconMarkup = `<span class="w-7 h-7 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold"><i class="fa-solid fa-check"></i></span>`;
        }

        if (isReviewMode || (activeMode === "practice" && selectedOpt !== null)) {
            if (index === q.answer) {
                optBtn.className = "w-full text-left p-4 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-950 font-medium text-sm md:text-base flex items-center justify-between";
                iconMarkup = `<span class="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs"><i class="fa-solid fa-check"></i></span>`;
            } else if (selectedOpt === index && selectedOpt !== q.answer) {
                optBtn.className = "w-full text-left p-4 rounded-xl border-2 border-rose-500 bg-rose-50 text-rose-950 text-sm md:text-base flex items-center justify-between";
                iconMarkup = `<span class="w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs"><i class="fa-solid fa-xmark"></i></span>`;
            }
        }

        if (!isReviewMode && !(activeMode === "practice" && selectedOpt !== null)) {
            optBtn.onclick = () => selectOption(index);
        } else {
            optBtn.disabled = true;
        }

        optBtn.innerHTML = `<span class="pr-3 leading-snug">${optText}</span>${iconMarkup}`;
        optionsContainer.appendChild(optBtn);
    });

    // Explicación
    if (isReviewMode || (activeMode === "practice" && selectedOpt !== null)) {
        feedbackBox.classList.remove("hidden");
        const isCorrect = selectedOpt === q.answer;

        if (isCorrect) {
            feedbackBox.className = "p-4 rounded-xl text-sm space-y-1 bg-emerald-50 border-emerald-200 text-emerald-900";
            feedbackTitle.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600"></i> ¡Respuesta Correcta!`;
        } else {
            feedbackBox.className = "p-4 rounded-xl text-sm space-y-1 bg-amber-50 border-amber-200 text-amber-900";
            feedbackTitle.innerHTML = `<i class="fa-solid fa-circle-info text-amber-600"></i> Explicación Educativa:`;
        }
        feedbackText.innerHTML = q.explanation;
    } else {
        feedbackBox.classList.add("hidden");
    }

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = selectedOpt === null;

    if (currentQuestionIndex === total - 1) {
        nextBtn.innerHTML = activeMode === "practice" ? 
            `Finalizar Práctica <i class="fa-solid fa-flag-checkered ml-1.5"></i>` : 
            `Finalizar Examen <i class="fa-solid fa-flag-checkered ml-1.5"></i>`;
    } else {
        nextBtn.innerHTML = `Siguiente <i class="fa-solid fa-arrow-right ml-1.5"></i>`;
    }
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    renderQuestion();
}

function goToPrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function goToNextQuestion() {
    const total = currentQuestions.length;
    if (currentQuestionIndex < total - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    clearInterval(timerInterval);
    showResultsScreen();
}

function showResultsScreen() {
    quizScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    document.getElementById("result-student-name").textContent = studentName;

    let correctCount = 0;
    const subjectStats = {};
    const subjectTotals = {};

    currentQuestions.forEach((q, index) => {
        const sub = q.subject;
        if (!subjectStats[sub]) {
            subjectStats[sub] = 0;
            subjectTotals[sub] = 0;
        }
        subjectTotals[sub]++;
        if (userAnswers[index] === q.answer) {
            correctCount++;
            subjectStats[sub]++;
        }
    });

    const total = currentQuestions.length;
    const porcentaje = Math.round((correctCount / total) * 100);

    document.getElementById("score-text").innerText = `${correctCount} / ${total}`;
    document.getElementById("percentage-text").innerText = `${porcentaje}%`;

    const breakdownContainer = document.getElementById("subject-breakdown");
    breakdownContainer.innerHTML = "";

    let materiaBaja = "";
    let menorPorcentaje = 101;

    for (let sub in subjectStats) {
        const aciertosSub = subjectStats[sub];
        const totalSub = subjectTotals[sub];
        const pctSub = Math.round((aciertosSub / totalSub) * 100);

        if (pctSub < menorPorcentaje) {
            menorPorcentaje = pctSub;
            materiaBaja = sub;
        }

        const card = document.createElement("div");
        card.className = "bg-slate-50 border border-slate-200 rounded-xl p-3 flex justify-between items-center text-xs";
        card.innerHTML = `
            <span class="font-medium text-slate-700">${sub}</span>
            <span class="font-bold text-slate-900">${aciertosSub}/${totalSub} (${pctSub}%)</span>
        `;
        breakdownContainer.appendChild(card);
    }

    document.getElementById("recommendation-text").innerText = 
        `Se recomienda repasar prioritariamente los temas de ${materiaBaja || "todas las materias"}.`;

    if (activeMode === "exam") {
        enviarAGoogleSheets(studentName, correctCount, total, porcentaje, materiaBaja || "N/A");
    }
}

function enviarAGoogleSheets(nombre, aciertos, total, porcentaje, materiaReforzar) {
    if (!URL_MI_API) return;

    const payload = {
        nombre: nombre,
        aciertos: `${aciertos}/${total}`,
        porcentaje: porcentaje,
        materiaReforzar: materiaReforzar
    };

    fetch(URL_MI_API, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(() => console.log("¡Resultados guardados exitosamente en Google Sheets!"))
    .catch(err => console.error("Error al enviar a Google Sheets:", err));
}

function enterReviewMode() {
    resultsScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    isReviewMode = true;
    currentQuestionIndex = 0;
    renderQuestion();
}

function returnToHome() {
    resultsScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");
    clearInterval(timerInterval);
}
