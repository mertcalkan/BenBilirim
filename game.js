// import { questions } from './questions.js';



var rules = document.getElementById("rules");
var play = document.getElementById("game");
var main = document.getElementById("main");
var letterCardsArea = document.getElementById("LetterCardsArea");
// Shuffling our array first of our code. just a preference. you can do it later. depends on algorithm which you set up
var indexStart = 1;
var indexEnd = Object.keys(questions).length;
var QuestionCount = Object.keys(questions).length;
// var QuestionCount = 1;

console.log(indexEnd);
// Object.keys(questions).length


var mediaQueryManipulator = window.matchMedia("(min-width: 300px) and (max-width: 765px)");




var UnShuffledQuestionIndexNumber = [];

while (indexStart < indexEnd + 1) {
  UnShuffledQuestionIndexNumber.push(indexStart++);
}

var flag = true;
const startingMinute = 7 / 2;
let time = startingMinute * 60;
// Countdown Variables.


// var ArrayOfLetters = ["A","B","C","Ç","D","E","F","G","H","I","İ","J","K","L","M","N","O","Ö","P","R","S","Ş","T","U","Ü","V","Y","Z"];
var indexOrigin = 0;
var totalPoint = 0;

function shuffleArray(UnShuffledQuestionIndexNumber) {
  for (var i = UnShuffledQuestionIndexNumber.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * i); // no +1 here!
    var temp = UnShuffledQuestionIndexNumber[i];
    UnShuffledQuestionIndexNumber[i] = UnShuffledQuestionIndexNumber[j];
    UnShuffledQuestionIndexNumber[j] = temp;
  }

  // return UnShuffledQuestionIndexNumber;
  // console.log(UnShuffledQuestionIndexNumber);
}



shuffleArray(UnShuffledQuestionIndexNumber);





$("#game").click(function () {

  // rules.parentElement.removeChild(rules);
  // play.parentElement.removeChild(play);
  $("#game").remove();
  $("#rules").remove();

  const waitingText = document.createElement('h2');
  waitingText.classList.add("waitingText");
  main.appendChild(waitingText);
  waitingText.innerHTML = "Oyun kısa bir süre içinde başlayacak.";
  setTimeout(() => uploadingElements(), 3000);
  setTimeout(() => waitingText.innerHTML = "", 3000);




  function uploadingElements() {
    //Shuffling answer's letters.
    var stringLetters = questions[(UnShuffledQuestionIndexNumber[indexOrigin])].answer.split("");

    function shuffleKeyLetters() {
      for (var f = stringLetters.length - 1; f > 0; f--) {
        var l = Math.floor(Math.random() * f); // no +1 here!
        var temp = stringLetters[f];
        stringLetters[f] = stringLetters[l];
        stringLetters[l] = temp;
      }



    }
    shuffleKeyLetters();
    var countDownTimer = document.createElement("h3");
    countDownTimer.className = "countdown";
    document.body.appendChild(countDownTimer);
    if (flag) {
      setInterval(updateCountDown, 1000)
      flag = false;
    }
    if (QuestionCount == 0) {
     
   
    if (confirm(`Tebrikler! Bütün soruları doğru yanıtlandınız. Oyunda kazandığınız toplam puan : ${totalPoint}`)) {
      window.location.href = "/index.html";
      countDownTimer.style.display = "none";
      questionText.style.display = "none";
      

    } else {
      window.location.href = "/index.html";
      countDownTimer.style.display = "none";
      questionText.style.display = "none";
     
    }
    
    }

    function updateCountDown() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;

      seconds = seconds < 10 ? '0' + seconds : seconds;


      // if(seconds == seconds < 10 ? '0' + -2 : -2){
      //   return false;
      // }

      // if(time > -3){





      countDownTimer.innerHTML = `Süre: ${t_minutes} : ${seconds}`
      time--;

      if ((time == -2)) {
        countDownTimer.style.display = "none";


        // countDownTimer.innerHTML = `Süre: ${0} : ${0}`
        // countDownTimer.innerHTML =`Süre: ${0} : ${0}`
        // alert(`Süreniz bitti. Oyunda kazandığınız toplam puan : ${totalPoint}`);
        if (confirm(`Süreniz bitti. Oyunda kazandığınız toplam puan : ${totalPoint}`)) {
          window.location.href = "/index.html";
          countDownTimer.style.display = "none";

        } else {
          window.location.href = "/index.html";
        }
        // time--;
        // if((seconds == -1 && time == -2)){
        //   return false;
        // }


      }
      // }


      var t_minutes;
      if (minutes < 10) {
        t_minutes = "0" + minutes;
      } else {
        t_minutes = minutes;
      }
      countDownTimer.innerHTML = `Süre: ${t_minutes} : ${seconds}`



    }





    // if (playSoundNormalScenario() == true ) {
    // elementsCount = elementsCount - 1;
    // }
    // let elementsCount = 12;

    for (let i = 0; i < questions[UnShuffledQuestionIndexNumber[indexOrigin]].answer.length; i++) {
      const element = document.createElement('div');
      element.classList.add("letterCards");
      letterCardsArea.appendChild(element);
      var letterCardsText = document.createElement("h1");
      letterCardsText.classList.add("letterCardsText");
      element.appendChild(letterCardsText);
      //  var clickedLetter = $(" .letterCards toggle > .letterCardsText").textContent;
      //  $("div.toggle").find("").find()
      //  var clickedLetter = $('.letterCards.toggle').find('.letterCardsText').text($("h1"));
      //  var clickedLetter = document.querySelector('.letterCards').textContent;



      var node = document.querySelectorAll('.letterCardsText');
      // var currentLetters = ['A', 'P', 'H', 'E', 'X', 'T', 'W', 'İ', 'N', 'G', 'A', 'B', 'C'];
      var DomArray = Array.from(node);
      // DomArray[i].innerHTML = currentLetters[i];
      // console.log(currentLetters.values);



      // var stringLetters = questions[(UnShuffledQuestionIndexNumber[indexOrigin])].answer.split("");



      // shuffleKeyLetters();
      // function shuffleletters(stringLetters) {
      //   for (var i = stringLetters.length - 1; i > 0; i--) {
      //       var j = Math.floor(Math.random() * i); // no +1 here!
      //       var temp = stringLetters[i];
      //       stringLetters[i] = stringLetters[j];
      //       stringLetters[j] = temp;
      //   }
      //   // return UnShuffledQuestionIndexNumber;
      //   console.log(stringLetters);
      // }
      // shuffleletters(stringLetters);
      DomArray[i].innerHTML = stringLetters[i];
      // console.log(stringLetters);






      //  letterCardsText.innerHTML = ["A" ,"B"];
      // writing a click function with our letters here.




    }



    //     function startTimer(duration) {
    //       var timer = duration, minutes, seconds;
    //       setInterval(function () {
    //           minutes = parseInt(timer / 60, 10);
    //           seconds = parseInt(timer % 60, 10);

    //           minutes = minutes < 10 ? "0" + minutes : minutes;
    //           seconds = seconds < 10 ? "0" + seconds : seconds;

    //           countDownTimer.innerHTML = minutes + ":" + seconds;

    //           if (--timer < 0) {
    //               timer = duration;
    //           }
    //       }, 1000);
    //   }
    //   window.onload = function () {


    //     startTimer(600);
    // };



    var PointText = document.createElement("h3");
    PointText.className = "pointText";
    PointText.innerHTML = `Puan: ${totalPoint}`;
    document.body.appendChild(PointText);

    var questionText = document.createElement("h3");
    questionText.className = "question";
    $("#questionAndSubmit").append(questionText);
    questionText.innerHTML = questions[(UnShuffledQuestionIndexNumber[indexOrigin])].question;
    var submitAnswer = document.createElement("button");
    submitAnswer.className = "submitAnswer";
    $("#questionAndSubmit").append(submitAnswer);
    submitAnswer.innerHTML = "Doğru mu Görelim";


     window.onbeforeunload = function () {
      return "Dikkat. Sayfa yenilenecek. Ana ekrana dönmek istediğinizden emin misiniz?";
   }
    // creating elements dynamically with javascript during the game.


    var outputVocab = document.createElement("div");
    document.body.appendChild(outputVocab);
    outputVocab.className = "outputVocab";


    // CLICK AND SEE LETTER ON OUTPUT.
    $(".letterCards").click(function () {

      // checking limit of clicking letters // allowing only answer length.
      if ($(".output").length + 1 > questions[UnShuffledQuestionIndexNumber[indexOrigin]].answer.length) {
        return false;
      }

      function myFunction(mediaQueryManipulator) {
        if (mediaQueryManipulator.matches) {
          if (questions[UnShuffledQuestionIndexNumber[indexOrigin]].answer.length == 6) { // If media query matches
            outputVocab.style.gridTemplateColumns = "repeat(6, 2rem)";
            outputVocab.style.gridTemplateRows = "repeat(6, 2rem)";
            outputVocab.style.gridGap = "1.7rem";
          }
        }

      }
      myFunction(mediaQueryManipulator);


      var output = document.createElement("div");
      output.className = "output";
      outputVocab.appendChild(output);
      const outputText = document.createElement("h1");
      outputText.classList.add("outputText");
      output.appendChild(outputText);

      $(this).toggleClass("toggle");
      if ($(this).hasClass("toggle")) {
        let clickedLetter = $(this).find("H1").text();
        outputText.innerHTML = clickedLetter;






      }
      $(this).removeClass("toggle");

      const cross = document.createElement("i");
      cross.className = "cross";
      output.appendChild(cross);
      cross.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
      $("i").click(function () {
        $(this).parent("div").toggleClass("toggle");

        if ($(this).parent("div").hasClass("toggle")) {
          // $(this).closest("div").remove(); 
          // let deletedVariation = result.substring($(this).parent("div").find("H1").text());
          // console.log($(this).parent("div").find("H1").text());
          $(this).parent("div").remove();
          // let deletedVariation = result.replace(($(this).parent("div").find("H1").text()), "")
          // console.log(deletedVariation);
          // if(deletedVariation =="ARMUT"){
          //   console.log("HELAL");
          // }

          var deletedVer = $(".outputText").text();
          console.log(deletedVer);

          $(".submitAnswer").click(function () {
            var sound1 = new Audio('./sound effects/CorrectSoundEffect.mp3 ');



            function playSoundDeletedScenario() {
              if (deletedVer == questions[(UnShuffledQuestionIndexNumber[indexOrigin])].answer) {

                sound1.play(
                  // waitingText.innerHTML = "Doğru Cevap!"
                );
                // console.log("yiha");

              }
              //  else{
              //  soundSameWrong.play();
              //  }
            };
            playSoundDeletedScenario();
          });





        }



      });
      var soundSame = new Audio('./sound effects/CorrectSoundEffect.mp3 ');
      var soundSameWrong = new Audio('./sound effects/WrongSoundEffect.mp3 ');
      let result = $(".outputText").text();
      console.log(result);
      $(".submitAnswer").click(function () {



        function playSoundNormalScenario() {
          if (result == questions[(UnShuffledQuestionIndexNumber[indexOrigin])].answer) {
            //  deletedVer = "";
            // setTimeout(() => soundSame.play(


            // ), 500);
            soundSame.play(


            )

            // result = "";
            console.log("yiha");
            totalPoint = totalPoint + 20 * questions[(UnShuffledQuestionIndexNumber[indexOrigin])].answer.length;
            indexOrigin = indexOrigin + 1;
            QuestionCount--;
            console.log(QuestionCount);
            // console.log(UnShuffledQuestionIndexNumber[indexOrigin]);
            setTimeout(() => $(".pointText").remove(), 5500);
            setTimeout(() => $(".question").remove(), 5500);
            setTimeout(() => $(".output").remove(), 5500);
            setTimeout(() => $(".letterCards").remove(), 5500);
            setTimeout(() => $(".outputVocab").remove(), 5500);
            // setTimeout(() => $(".countdown").remove(), 5500);


            setTimeout(() => uploadingElements(), 5500);






            // for (let x = 0; x < questions[UnShuffledQuestionIndexNumber[indexOrigin]].answer.length; x++) {
            //   stringLetters = questions[(UnShuffledQuestionIndexNumber[indexOrigin])].answer.split("");
            //   // DomArray[i].innerHTML = stringLetters[i];
            //   setTimeout(() => DomArray[x].innerHTML = stringLetters[x], 5500);
            //   // return true;

            // }



          }
          // else{
          //   soundSameWrong.play();
          // }


        };
        playSoundNormalScenario();
      });




      //  var sound1 = new Audio('./sound effects/CorrectSoundEffect.mp3');



















    });


  };

});

// $("#rules").click(function () {

//   rules.parentElement.removeChild(rules);
//   play.parentElement.removeChild(play);
// });