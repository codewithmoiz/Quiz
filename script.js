var questions = ["Q1: Which of the following CSS selectors are used to specify a group of elements?", "Q2: Which of the following type of HTML tag is used to define an internal style sheet?", "Q3: Guess the output: h1 {color: 'green';}", "Q4: Which of the following is the correct way to apply CSS Styles?", "Q5: Which of the following is not the property of the CSS box model?", "Q6: Which of the following CSS property defines the space between cells in a table?", "Q7: what is the purpose of the translate function in the transform property?", "Q8: What is the role of the CSS property 'cursor'?", "Q9: What does the box-sizing: border-box; property do?", "Q10: What does the CSS property 'clear' do?"];
var opt1 = ["1: Tag", "1: <script>", "1: Nothing will happen", "1: In an external CSS file", "1: margin", "1: border-spacing", "1: It changes the font of the transformed element", "1: Adjusts cursor size on hover", "1: Adjusts spacing between elements", "1: Adjusts spacing between elements"];
var opt2 = ["2: ID", "2: <link>", "2: Error occurs", "2: Inside an HTML element", "2: color", "2: border-style", "2: Adjusts the position of the transformed element on x & y-axis", "2: Defines cursor style on hover", "2: Includes padding and border in the element's total size", "2: Controls element visibility"];
var opt3 = ["3: Class", "3: <css>", "3: Heading becomes dark-green", "3: Inside the <head> section of an HTML page", "3: width", "3: border", "3: It rotates the transformed element", "3: Specifies cursor arrow color", "3: Sets background color of an element", "3: Sets left or right positioning in a container"];
var opt4 = ["4: Both class and tag", "4: <style>", "4: Heading becomes green", "4: All of the mentioned", "4: height", "4: None of the mentioned", "4: It applies a shadow effect to the transformed element", "4: Controls text input cursor position", "4: Controls element visibility", "4: Clears floated elements"];
var correctedAnswers = ["4: Both class and tag", "4: <style>", "1: Nothing will happen", "4: All of the mentioned", "2: color", "1: border-spacing", "2: Adjusts the position of the transformed element on x & y-axis", "2: Defines cursor style on hover", "2: Includes padding and border in the element's total size", "4: Clears floated elements"];

var currentQuestionIndex = 0;
var userScore = 0;

var userName = prompt("Enter your name: ");

function displayQuestion() {

    document.getElementById('option1').style.backgroundColor = "";
    document.getElementById('option2').style.backgroundColor = "";
    document.getElementById('option3').style.backgroundColor = "";
    document.getElementById('option4').style.backgroundColor = "";

    document.getElementById('ques').innerText = questions[currentQuestionIndex];
    document.getElementById('option1').innerText = opt1[currentQuestionIndex];
    document.getElementById('option2').innerText = opt2[currentQuestionIndex];
    document.getElementById('option3').innerText = opt3[currentQuestionIndex];
    document.getElementById('option4').innerText = opt4[currentQuestionIndex];

     currentQuestionIndex++;
}

function nextQuestion() {
    if (selectedOption === null) {
        Swal.fire({
            title: "Oops!",
            text: "Please select an option before moving to the next question.",
            icon: "warning"
        });
    } else {
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
            selectedOption = null;
        } else {
            Swal.fire({
                title: "You're done",
                text: `Quiz completed! Your score was: ${userScore} out of ${questions.length}`,
                icon: "success"
            });
        }
        localStorage.setItem("Quiz-test-User", userName);
        localStorage.setItem("Quiz-Score", userScore);
    }
}

var selectedOption = null;

function changeColor(op) {
    if (selectedOption !== null) {
        selectedOption.style.backgroundColor = "";
    }

    op.style.backgroundColor = "#fff";

    selectedOption = op;

    for(var i = 0; i < correctedAnswers.length; i++){
        if(op.style.backgroundColor = "yellow" && selectedOption.innerText === correctedAnswers[i]){
            userScore++;
        }
   
    }
  
}


displayQuestion();
