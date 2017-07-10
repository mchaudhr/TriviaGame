var seconds = 20
var intervalId;
var score = 0;

var questionOne   = "<h4>"+"He -------------------- it."+"</h4>"+
                    "<blockquote>"+
                    "<input type='radio' name='q1' value='don't like'>"+" "+"don't like"+" "+
                    "<input type='radio' name='q1' value='doesn't like'>"+" "+"doesn't like"+" "+
                    "<input type='radio' name='q1' value='doesn't likes'>"+" "+"doesn't likes"+
                    "</blockquote>"

var questionTwo   = "<h4>"+"They -------------------- here very often."+"</h4>"+
                    "<blockquote>"+
                    "<input type='radio' name='q2' value='don't come'>"+" "+"don't come"+" "+
                    "<input type='radio' name='q2' value='doesn't come'>"+" "+"doesn't come"+" "+
                    "<input type='radio' name='q2' value='doesn't comes'>"+" "+"doesn't comes"+
                    "</blockquote>"

var questionThree = "<h4>"+"John and Mary -------------------- twice a week."+"</h4>"+
                    "<blockquote>"+
                    "<input type='radio' name='q3' value='come'>"+" "+"come"+" "+
                    "<input type='radio' name='q3' value='comes'>"+" "+"comes"+" "+
                    "<input type='radio' name='q3' value='coming'>"+" "+"coming"+
                    "</blockquote>"

var questionfour  = "<h4>"+"I -------------------- mind at all."+"</h4>"+
                    "<blockquote>"+
                    "<input type='radio' name='q4' value='not'>"+" "+"not"+" "+
                    "<input type='radio' name='q4' value='isn't'>"+" "+"isn't"+" "+
                    "<input type='radio' name='q4' value='don't'>"+" "+"don't"+
                    "</blockquote>"

var questionfive  = "<h4>"+"It -------------------- sense."+"</h4>"+
                    "<blockquote>"+
                    "<input type='radio' name='q5' value='don't make'>"+" "+"don't make"+" "+
                    "<input type='radio' name='q5' value='doesn't makes'>"+" "+"doesn't makes"+" "+
                    "<input type='radio' name='q5' value='doesn't make'>"+" "+"doesn't make"+
                    "</blockquote>"

var buttons       = "<div class='row button'>"+
                    "<input class='btn btn-default btn btn-md' type='button' id='getMyScore' value='Get score'>"+" "+
                    "<input class='btn btn-default btn btn-md' type='reset' value='Clear'>"+
                    "</div>"

function quiz() {
  $(".game").html("<div class='main text-left'>");
  $(".main").append(questionOne);
  $(".main").append(questionTwo);
  $(".main").append(questionThree);
  $(".main").append(questionfour);
  $(".main").append(questionfive);
  $(".main").append(buttons);


}

function scoreKeeper() {
        var scoreper = Math.round(score/numQues*100);
        $(".game").html("<div class='final'>");
        $(".final").append("<div class='result'>" + "<h2>" + "Score: " + score + "</h2>" +"</div>");
        $(".final").append("<h2>" + scoreper + "%" + "</h2>");
      }


function timeLeft() {

	seconds--;
	$("#time-left").html("<h3>" + seconds + "</h3>");
	if (seconds === 0) {
		alert("Time uP!!");
		clearInterval(intervalId);
    scoreKeeper();
	}

}

function result() {
  clearInterval(intervalId);
  scoreKeeper();
  console.log("testing");
}



function startGame() {
  $("#startGame").on("click", timer);
  $("#startGame").on("click", timeLeft);
  $("#startGame").on("click", quiz);
}

startGame();

function timer() {
      intervalId = setInterval(timeLeft, 1000);
    }

function finalScore(argument) {
  $("#getMyScore").on("click", result);
}

finalScore();

var numQues = 5;
var numChoi = 3;
var answers = new Array(5);
    answers[0] = "doesn't like";
    answers[1] = "don't come";
    answers[2] = "come";
    answers[3] = "don't";
    answers[4] = "doesn't make";

    
    function getScore(from) {
      var currElt;
      var currSelection;
      for (var i = 0; i<numQues; i++) {
        currElt = i*numChoi;
        answered=false;
        for (var j = 0; j<numChoi; j++) {
          currSelection = form.elements[currElt + j];
          if (currSelection.checked) {
            answered=true;
            if (currSelection.value == answers[i]) {
              score++;
              break;
            }
          }
        }
        if (answered ===false) {
          alert("Do answer all the questions, Please");
          return false;



// var numQues = 5;
// var numChoi = 3;
// var answers = new Array(5);
//     answers[0] = "doesn't like";
//     answers[1] = "don't come";
//     answers[2] = "come";
//     answers[3] = "don't";
//     answers[4] = "doesn't make";

// function finalScore(){

//   var correct = 0;
//   var selectValue;
  
//   var questions = document.getElementsByClassName("question");
 
//   var numOfQuestions = questions.length;

// for(var i = 0; i < questions.length; i++ ){
//  selectValue =  questions[i].options[questions[i].selectedIndex].value;
  
//   if(selectValue === "answers"){
//     correct++;
//   }
// }
// document.getElementById("getMyScore").innerHTML = (100/numQues) * correct;  
// }

// finalScore(); 
    
      }
    }
  }


    


// $("getScore").on("click", scoreper);
// $("clear").on("click", returnScore);