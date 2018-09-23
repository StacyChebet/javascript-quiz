//Business-logic:
function check () {
  var qn1= document.js-quiz.qn1.value;
  var qn2= document.js-quiz.qn2.value;
  var qn3= document.js-quiz.qn3.value;
  var qn4= document.js-quiz.qn4.value;
  var qn5= document.js-quiz.qn5.value;

  var score= 10;

  if (num1=="true") {
    score= 10;
  } else {
    score =0;
  };
  if (num2=="true") {
    score= score + 10;
  } else {
    score = score + 0;
  };
  if (num3=="true") {
    score= score + 10;
  } else {
    score = score + 0;
  };
  if (num4=="true") {
    score= score + 10;
  } else {
    score = score + 0;
  };
    if (num5=="true") {
    score= score + 10;
  } else {
    score = score + 0;
  };


//Beginning of User Interface:
  document.getElementById("result").styles.visibility="visible";
  document.getElementById("announcement").innerHTML="You have scored" + score + "points";
};
















}
































}
