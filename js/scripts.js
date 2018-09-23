//Business-logic:
  function check () {
    var num1= document.js-quiz.num1.value;
    var num2= document.js-quiz.num2.value;
    var num3= document.js-quiz.num3.value;
    var num4= document.js-quiz.num4.value;
    var num5= document.js-quiz.num5.value;

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
