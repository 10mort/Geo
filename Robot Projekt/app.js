// Qrscanner
function onScanSuccess(decodedText, decodedResult) {
  if (decodedText === "Robothoved") { 
        window.location.href = 'quiz.html';
    }
}

function onScanFailure(error) {
  console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: {width: 250, height: 250} },
  /* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);




//Quiz
function checkAnswer(knap, isCorrect) {
    if (isCorrect === true) {
        knap.style.backgroundColor = "#7ac143";
        document.getElementById('speechBubble').style.display = 'none';
        document.getElementById('quizRobot').src = "images/robot-correct.svg";
        
        setTimeout(function() {
            window.location.href = 'done.html';
        }, 2000);
    } else {
        knap.classList.add('wrong');
        document.getElementById('speechBubble').style.display = 'block';
        document.getElementById('quizRobot').src = "images/robot-hint.svg";
    }
}