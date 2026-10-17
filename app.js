// ==========================================
// LÍNEA 1 DE APPS.JS (INICIO ABSOLUTO)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcome-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const resultsScreen = document.getElementById("results-screen");

    if (welcomeScreen) {
        welcomeScreen.classList.remove("hidden");
        welcomeScreen.style.display = "block";
    }
    if (quizScreen) {
        quizScreen.classList.add("hidden");
        quizScreen.style.display = "none"; // Forzar ocultamiento estricto
    }
    if (resultsScreen) {
        resultsScreen.classList.add("hidden");
        resultsScreen.style.display = "none"; // Forzar ocultamiento estricto
    }
});

// --- CONFIGURACIÓN DE TU GOOGLE APPS SCRIPT ---
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby9lvFYRwuNn3LfiDVkefY7P8_NxuUCUha7nlCgAVHGUKpBmvUC3hJKFbKHbQgORYYR/exec";

// --- ESTADO DE LA APLICACIÓN ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval = null;
let secondsElapsed = 0;
let activeMode = "exam"; // "practice" o "exam"
let selectedPracticeTopic = "";
let isReviewMode = false;
let studentName = "";

// --- SISTEMA DE LOGROS Y RACHAS (GAMIFICACIÓN) ---
const availableAchievements = [
    { id: 'first_step', name: 'Primer Paso', desc: 'Completar tu primer cuestionario o examen.', icon: 'fa-shoe-prints' },
    { id: 'century', name: 'Mente Brillante', desc: 'Obtener un 100% de aciertos en una sesión.', icon: 'fa-brain' }
];

function getSavedAchievements() {
    const saved = localStorage.getItem('ichea_achievements');
    return saved ? JSON.parse(saved) : [];
}

function unlockAchievement(achievementId) {
    let unlocked = getSavedAchievements();
    if (!unlocked.includes(achievementId)) {
        unlocked.push(achievementId);
        localStorage.setItem('ichea_achievements', JSON.stringify(unlocked));

        const achievement = availableAchievements.find(a => a.id === achievementId);
        if (achievement) {
            showAchievementNotification(achievement);
        }
    }
}

function showAchievementNotification(achievement) {
    const existing = document.getElementById('achievement-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'achievement-toast';
    toast.className = 'fixed bottom-5 right-5 z-50 bg-slate-900/95 border border-amber-500/50 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3.5 backdrop-blur-xl transition-all animate-bounce';
    toast.innerHTML = `
        <div class="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 text-lg">
            <i class="fa-solid ${achievement.icon}"></i>
        </div>
        <div>
            <span class="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider block">¡Nuevo Logro Desbloqueado!</span>
            <h5 class="text-sm font-bold text-white">${achievement.name}</h5>
            <p class="text-[11px] text-slate-300">${achievement.desc}</p>
        </div>
    `;
    document.body.appendChild(toast);

    if (typeof confetti === 'function') {
        confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.9, x: 0.9 }
        });
    }

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 5000);
}

// --- SISTEMA DE ESTADÍSTICAS E HISTORIAL ---
function getStudentStats() {
    const saved = localStorage.getItem('ichea_student_stats');
    return saved ? JSON.parse(saved) : { sessions: 0, totalPercentage: 0, bestScore: 0 };
}

function saveSessionStats(percentage) {
    let stats = getStudentStats();
    stats.sessions += 1;
    stats.totalPercentage += percentage;
    if (percentage > stats.bestScore) {
        stats.bestScore = percentage;
    }
    localStorage.setItem('ichea_student_stats', JSON.stringify(stats));
    updateStatsUI();
}

function updateStatsUI() {
    const stats = getStudentStats();
    const statsContainer = document.getElementById('stats-dashboard');
    if (!statsContainer) return;

    if (stats.sessions > 0) {
        statsContainer.classList.remove('hidden');
        document.getElementById('stat-total-sessions').textContent = stats.sessions;
        const avg = Math.round(stats.totalPercentage / stats.sessions);
        document.getElementById('stat-avg-score').textContent = `${avg}%`;
        document.getElementById('stat-best-score').textContent = `${stats.bestScore}%`;
    } else {
        statsContainer.classList.add('hidden');
    }
}

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
const exitQuizBtn = document.getElementById("exit-quiz-btn");

// --- INICIALIZACIÓN Y EVENTOS ---
window.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("ichea_student_name");
    if (savedName) {
        studentNameInput.value = savedName;
    }
    updateStatsUI();
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
exitQuizBtn.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que deseas salir? Tu progreso actual en esta lección se perderá.")) {
        returnToHome();
    }
});

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function initQuiz(mode) {
    const inputVal = studentNameInput.value.trim();
    studentName = inputVal !== "" ? inputVal : "Estudiante";
    localStorage.setItem("ichea_student_name", studentName);

    userBadgeName.textContent = studentName;
    userBadge.classList.remove("hidden");

    activeMode = mode;
    isReviewMode = false;
    secondsElapsed = 0;

    if (activeMode === "practice") {
        selectedPracticeTopic = practiceSubjectSelect.value;
        const sub = selectedPracticeTopic;
        let filtered = [];

        if (sub === "Todas") {
            filtered = shuffleArray(allQuestions).slice(0, 20);
        } else {
            const isModule = allQuestions.some(q => q.module === sub);
            const pool = allQuestions.filter(q => q.subject === sub || q.module === sub);
            const maxQuestions = isModule ? 5 : 10;
            filtered = shuffleArray(pool).slice(0, maxQuestions);
        }

        currentQuestions = filtered;
        quizModeTitle.textContent = "Modo Práctica / Estudio";
        timerBox.classList.add("hidden");
        startTimer();

    } else {
        const examType = examTypeSelect.value;
        let filtered = [];

        if (examType === "Global") {
            filtered = shuffleArray(allQuestions).slice(0, 30);
        } else {
            const pool = allQuestions.filter(q => q.subject === examType);
            filtered = shuffleArray(pool).slice(0, 15);
        }

        currentQuestions = filtered;
        quizModeTitle.textContent = "Modo Examen";
        timerBox.classList.remove("hidden");
        startTimer();
    }

    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);

    welcomeScreen.classList.add("hidden");
    welcomeScreen.style.display = "none";

    resultsScreen.classList.add("hidden");
    resultsScreen.style.display = "none";

    quizScreen.classList.remove("hidden");
    quizScreen.style.display = "block"; // Enciende todo el bloque del quiz limpiamente

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

    if (activeMode === "practice" && !isReviewMode && q.hint) {
        hintWrapper.classList.remove("hidden");
        hintBox.innerHTML = q.hint;
        hintBox.classList.add("hidden");
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
                optBtn.className = "w-full text-left p-4 rounded-xl border-2 border-emerald-500 bg-emerald-950/80 text-emerald-100 font-medium text-sm md:text-base flex items-center justify-between";
                iconMarkup = `<span class="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs"><i class="fa-solid fa-check"></i></span>`;
            } else if (selectedOpt === index && selectedOpt !== q.answer) {
                optBtn.className = "w-full text-left p-4 rounded-xl border-2 border-rose-500 bg-rose-950/80 text-rose-100 text-sm md:text-base flex items-center justify-between";
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

    if (isReviewMode || (activeMode === "practice" && selectedOpt !== null)) {
        feedbackBox.classList.remove("hidden");
        const isCorrect = selectedOpt === q.answer;

        if (isCorrect) {
            feedbackBox.className = "p-5 rounded-2xl text-sm space-y-2 bg-emerald-950/90 border border-emerald-500/50 text-emerald-100 shadow-lg";
            feedbackTitle.className = "font-bold text-emerald-400 flex items-center gap-2 text-base";
            feedbackTitle.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400"></i> ¡Respuesta Correcta!`;
        } else {
            feedbackBox.className = "p-5 rounded-2xl text-sm space-y-2 bg-slate-900/95 border border-amber-500/50 text-amber-100 shadow-lg";
            feedbackTitle.className = "font-bold text-amber-300 flex items-center gap-2 text-base";
            feedbackTitle.innerHTML = `<i class="fa-solid fa-circle-info text-amber-400"></i> Explicación Educativa:`;
        }
        feedbackText.className = "text-slate-200 text-xs md:text-sm leading-relaxed mt-1";
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
    quizScreen.style.display = "none";

    // Asegurar que la pantalla de resultados se muestre por completo y sin restricciones
    resultsScreen.classList.remove("hidden");
    resultsScreen.style.display = "block";

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

    saveSessionStats(porcentaje);
    unlockAchievement('first_step');
    if (porcentaje === 100) {
        unlockAchievement('century');
    }

    if (porcentaje >= 60 && typeof confetti === "function") {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });

        setTimeout(() => {
            confetti({
                particleCount: 80,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 80,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });
        }, 400);
    }

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

    let tipoModalidad = "";

    if (activeMode === "practice") {
        const seleccion = practiceSubjectSelect.value;

        if (seleccion === "Todas") {
            tipoModalidad = "Práctica - General (Todas)";
        } else if (
            seleccion === "Matemáticas" ||
            seleccion === "Lengua y Comunicación" ||
            seleccion === "Ciencias Naturales" ||
            seleccion === "Ciencias Sociales"
        ) {
            tipoModalidad = `Práctica - Materia: ${seleccion}`;
        } else {
            tipoModalidad = `Práctica - Módulo: ${seleccion}`;
        }
    } else {
        const seleccionExamen = examTypeSelect.value;
        if (seleccionExamen === "Global") {
            tipoModalidad = "Examen Global";
        } else {
            tipoModalidad = `Examen - ${seleccionExamen}`;
        }
    }

    enviarAGoogleSheets(
        studentName,
        tipoModalidad,
        correctCount,
        total,
        secondsElapsed,
        materiaBaja || "Ninguna"
    );
}

function enviarAGoogleSheets(nombreEstudiante, tipoExamen, aciertos, totalPreguntas, segundosTranscurridos, materiaDebil) {
    const minutos = Math.floor(segundosTranscurridos / 60);
    const segundos = segundosTranscurridos % 60;
    const tiempoTexto = `${minutos}m ${segundos}s`;
    const porcentaje = Math.round((aciertos / totalPreguntas) * 100);

    const payload = {
        studentName: nombreEstudiante,
        examType: tipoExamen,
        scoreText: `${aciertos} / ${totalPreguntas}`,
        percentage: porcentaje,
        timeTaken: tiempoTexto,
        weakestSubject: materiaDebil || "Ninguna (¡Excelente!)"
    };

    fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
        .then(() => console.log("¡Resultados enviados a Google Sheets con éxito!"))
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
    resultsScreen.style.display = "none";

    quizScreen.classList.add("hidden");
    quizScreen.style.display = "none"; // Oculta todo el bloque del quiz por completo al salir

    welcomeScreen.classList.remove("hidden");
    welcomeScreen.style.display = "block";

    clearInterval(timerInterval);
    updateStatsUI();

    questionText.textContent = "Cargando pregunta...";
    questionSubject.textContent = "Matemáticas";
}
// --- SISTEMA DE LEADERBOARD GLOBAL (CORREGIDO Y AJUSTADO A TU HTML) ---
const leaderboardScreen = document.getElementById("leaderboard-screen");
const openLeaderboardBtn = document.getElementById("open-leaderboard-btn");
const closeLeaderboardBtn = document.getElementById("close-leaderboard-btn");
const leaderboardBody = document.getElementById("leaderboard-body");

function cargarLeaderboard() {
    if (welcomeScreen) {
        welcomeScreen.classList.add("hidden");
        welcomeScreen.style.display = "none";
    }
    if (leaderboardScreen) {
        leaderboardScreen.classList.remove("hidden");
        leaderboardScreen.style.display = "flex";
    }
    fetchGlobalLeaderboard();
}

if (openLeaderboardBtn) {
    openLeaderboardBtn.addEventListener("click", () => {
        cargarLeaderboard();
    });
}

if (closeLeaderboardBtn) {
    closeLeaderboardBtn.addEventListener("click", () => {
        leaderboardScreen.classList.add("hidden");
        leaderboardScreen.style.display = "none";
        welcomeScreen.classList.remove("hidden");
        welcomeScreen.style.display = "block";
    });
}

function fetchGlobalLeaderboard() {
    if (!leaderboardBody) return;

    leaderboardBody.innerHTML = `
        <tr>
            <td colspan="5" class="text-center py-8 text-slate-400 text-sm">
                <i class="fa-solid fa-spinner animate-spin mr-2 text-sky-400"></i> Sincronizando tabla de clasificación global...
            </td>
        </tr>
    `;

    fetch(SCRIPT_URL)
        .then(res => res.json())
        .then(data => {
            if (!data || data.length === 0) {
                leaderboardBody.innerHTML = `
                    <tr>
                        <td colspan="5" class="text-center py-8 text-slate-400 text-sm">
                            <i class="fa-solid fa-info-circle mr-2 text-amber-400"></i> Aún no hay registros en la nube. ¡Sé el primero en completar un examen!
                        </td>
                    </tr>
                `;
                return;
            }

            leaderboardBody.innerHTML = "";
            data.forEach((item, index) => {
                let medalla = index === 0 ? "🥇 " : index === 1 ? "🥈 " : index === 2 ? "🥉 " : `#${index + 1} `;

                const row = document.createElement("tr");
                row.className = "hover:bg-slate-800/40 transition border-b border-slate-800/50";
                row.innerHTML = `
                    <td class="py-3 px-4 font-bold text-amber-400">${medalla}</td>
                    <td class="py-3 px-4 font-semibold text-white">
                        ${item.name}
                        <span class="block text-[10px] text-slate-500 font-normal">${item.date || ''}</span>
                    </td>
                    <td class="py-3 px-4 text-xs text-slate-400">${item.mode}</td>
                    <td class="py-3 px-4 text-slate-300">${item.scoreText}</td>
                    <td class="py-3 px-4 font-bold text-emerald-400">${item.percentage}%</td>
                `;
                leaderboardBody.appendChild(row);
            });
        })
        .catch(err => {
            console.error("Error al obtener la tabla de líderes:", err);
            leaderboardBody.innerHTML = `
                <tr>
                    <td colspan="5" class="text-center py-8 text-rose-400 text-sm">
                        <i class="fa-solid fa-triangle-exclamation mr-2"></i> No se pudo conectar con Google Sheets.
                    </td>
                </tr>
            `;
        });
}

function mostrarPantalla(id) {
    if (id === 'leaderboard-screen') {
        cargarLeaderboard();
    } else {
        cerrarLeaderboard();
    }
}
function cerrarLeaderboard() {
    const leaderboardScreen = document.getElementById("leaderboard-screen");
    const welcomeScreen = document.getElementById("welcome-screen");

    if (leaderboardScreen) {
        leaderboardScreen.classList.add("hidden");
        leaderboardScreen.style.display = "none";
    }
    if (welcomeScreen) {
        welcomeScreen.classList.remove("hidden");
        welcomeScreen.style.display = "block";
    }
}