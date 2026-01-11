function checkQuiz() {
    const answers = {
        q1: 'b', // Vor 2500 Jahren
        q2: 'b', // Orange
        q3: 'b', // Ein Reliquienbehälter
        q4: 'b', // Nein
        q5: 'b', // Pali-Kanon
        q6: 'a', // Vesak
        q7: 'a', // Rezitation und Opfergaben
        q8: 'b', // Fünf
        q9: 'a'  // Die Lehren Buddhas
    };
    
    let score = 0;
    const form = document.getElementById('quiz-form');
    const questions = Object.keys(answers);
    
    questions.forEach(q => {
        const selected = form.querySelector(input[name="${q}"]:checked);
        if (selected && selected.value === answers[q]) {
            score++;
        }
    });
    
    document.getElementById('result').innerHTML = Du hast ${score} von ${questions.length} Fragen richtig beantwortet!;
}
