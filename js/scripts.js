//Business-logic:
  var javascriptquiz = function(num1,num2,num3,num4,num5){
    var score= 0;
    if (num1=="true") {
      score= score +=10;
    } else {
      score =0;
    };
    if (num2=="true") {
      score= score +=10;
    } else {
      score = score + 0;
    };
    if (num3=="true") {
      score= score +=10;
    } else {
      score = score + 0;
    };
    if (num4=="true") {
      score= score +=10;
    } else {
      score = score + 0;
    };
      if (num5=="true") {
      score= score +=10;
    } else {
      score = score + 0;
    };
    return score;
  };

//Beginning of User Interface:
$ (document).ready(function () {
  $("#jsquiz").submit(function(event) {
    event.preventDefault();
    var num1= $("input:radio[name=question1]:checked").val();
    console.log(num1);
    var num2= $("input:radio[name=question2]:checked").val();
    console.log(num2);
    var num3= $("input:radio[name=question3]:checked").val();
    console.log(num3);
    var num4= $("input:radio[name=question4]:checked").val();
    console.log(num4);
    var num5= $("input:radio[name=question5]:checked").val();
    console.log(num5);


    var result = javascriptquiz(num1,num2,num3,num4,num5);

    document.getElementById("result").style.visibility="visible";
    console.log(result)
    $("p#announcement").text("You have scored "+ result + " points")

  });
});
