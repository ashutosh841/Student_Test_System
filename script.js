let correctCode = 'TEST123';
document.getElementById("studentForm").addEventListener("submit",
   function (event) {
      event.preventDefault();
      let name = document.getElementById("studentName").value;
      let code = document.getElementById("testCode").value;

      if (code === correctCode) {

         document.querySelector(".container").style.display = "none";
         document.querySelector(".quizSection").style.display = "block";
      }
      else {

         alert("Invalid Test Code!");

      }
   });
   
  
function CheckAnswer() {

    let score = 0;

    const correctAnswers = {
        q1: "a",
        q2: "b",
        q3: "a",
        q4: "c",
        q5: "b",
        q6: "a",
        q7: "c",
        q8: "b",
        q9: "c",
        q10: "a"
    };
    let totalQuestion = Object.keys(correctAnswers).length;

    for (let question in correctAnswers) {
    let answer = document.querySelector(`input[name="${question}"]:checked`);

        if (answer !== null && answer.value === correctAnswers[question]) {
            score++;
        }
    }
    document.getElementById("answerResult").innerText = "Your Score: " + score + "/10";
}