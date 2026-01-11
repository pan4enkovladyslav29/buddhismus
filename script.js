function checkAnswers() {
    const answers = {
        q1: "a", // ~500 v. Chr.
        q2: "b", // Safran/Orange
        q3: "b", // 5
        q4: "b"  // Reinheit & Erleuchtung
    };

    let score = 0;
    const total = Object.keys(answers).length;

    for (let key in answers) {
        const selected = document.querySelector(input[name="${key}"]:checked);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    const resultDiv = document.getElementById("quizResult");

    if (score === total) {
        resultDiv.innerHTML = Perfekt! \( {score}/ \){total} – Du bist ein echter Kenner des Buddhismus! 🙏;
        resultDiv.style.backgroundColor = "#d4f4dd";
        resultDiv.style.color = "#006400";
    } else if (score >= total - 1) {
        resultDiv.innerHTML = Sehr gut! \( {score}/ \){total} – fast perfekt! 🌿;
        resultDiv.style.backgroundColor = "#fff3cd";
        resultDiv.style.color = "#856404";
    } else {
        resultDiv.innerHTML = Noch etwas üben? \( {score}/ \){total} richtige Antworten 😊;
        resultDiv.style.backgroundColor = "#f8d7da";
        resultDiv.style.color = "#721c24";
    }
}
