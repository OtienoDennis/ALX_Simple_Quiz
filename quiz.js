function checkAnswer () {
    let correctAnswer = "4";
    let feedback = document.getElementById( "feedback" )
    let userAnswer = document.querySelector( '[name="quiz"]:checked' );
    userAnswer = userAnswer.value
    if ( userAnswer === correctAnswer ) {
        feedback.textContent = "Correct, Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

document.getElementById( 'submit-answer' ).addEventListener( 'click', checkAnswer );