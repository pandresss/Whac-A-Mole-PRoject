jQuery(function(){
//I would like to thank joel for helping me out. We both worked out bugs in our games since we had both the same concept but different designs.
//I watch a tutorial and got some ideas and pointers for my landing page from https://www.youtube.com/watch?v=dIi6a98qOYA
//I had a GA alum help me out with pointers on local storage. Thank you Alison!
//lines 4-31 is for the landing page.

$('#form').hide();

$('#buttonPage').click(function() {

  $(this).animate({
    height: '60%',
    width: '60%'}),
  $(this).text("Enter your name below."),
  $(this).animate({fontSize:'25px'});
  $(this).children('p').animate({fontSize:'30px'});

  $('#form').delay(500).fadeIn();

});

$('#submit').click(function(){

    var playerName1 = $('#player').val();
       if(playerName1.length >= 1){
        console.log(playerName1);
        localStorage.setItem('playerName1', playerName1)
        window.location.href="game.html"
          }

    else if ((playerName1 = "")) {
      alert("Need a Name");
    }
    // return playerName1();
});



//the ...game setting up my varibles
// var mollyGame = function(){
  var $bod = $('#bod1');

  var $main = $('#container1');

  var moleScore = 0;

  var moleTime = 23;

  var pageName = localStorage.getItem('playerName1');

//creating the start button

  var $startButton = $('<div class="button1"></div>');

    $startButton.text("Welcome To Whac-A-Mole, " + pageName + " Click Here to Begin.");

    $main.append($startButton);

$('#container2').hide();
$('#moleContainer').hide();

//function for the mute button

var game_start = new Audio('./audio/horserace.mp3');

 var $muteMe = $('#muteButton');

   $muteMe.click(function(){
        console.log("mute button clicked")
        game_start.pause();
        game_start.remove();

});

$startButton.click(function(){
  console.log("start button clicked");

        game_start.play();
        $('#container2').show();
        $('#moleContainer').show();

//countdown timer function

var intervalID = setInterval(function(){
  console.log('inside interval');
  $('.timer').text('Timer: ' + moleTime --);
  if (moleTime < 0) {

//when the game is finished It will alert you of your score and to play again.

var $gameWinner = $('<div id ="gameWin"></div>');

    $bod.text("Good Job, " + pageName + "! Your score is " + moleScore + "...Click Here to restart.");
    $(this).click(function(){
      window.location.href="game.html"
    });

    $(this).delay(500).fadeIn();
    $bod.append($gameWinner);

    clearInterval(intervalID);} },1000);


// tried to make my interval randomizer but I could never call the funciton to the interval


  //  var time = function(){
  //   min = Math.ceil(1000);
  //   max = Math.floor(6000);
  //   console.log('yeah --> ', Math.floor(Math.random()*6000));
  //   return(Math.floor(Math.random()*6000));
  // }



  //  var time2 = function(){
  //   min = Math.ceil(1000);
  //   max = Math.floor(6000);
  //   console.log('yeah --> ', Math.floor(Math.random()*6000));
  //   return(Math.floor(Math.random()*6000));
  // }

  // var time3 = function(){
  //   min = Math.ceil(1000);
  //   max = Math.floor(6000);
  //   console.log('yeah --> ', Math.floor(Math.random()*6000));
  //   return(Math.floor(Math.random()*6000));
  // }

  // var tiempo = time();
  // console.log('tiempo', tiempo);


//slidedownfunction

  setInterval(function(){
       $('#mole1').slideDown('slow/1000/fast')
        }, 3000);

  setInterval(function(){
       $('#mole2').slideDown('slow/1000/fast')
        }, 4000);

  setInterval(function(){
       $('#mole3').slideDown('slow/1000/fast')
        }, 6000);

  setInterval(function(){
       $('#mole4').slideDown('slow/1000/fast')
        }, 5000);

  setInterval(function(){
       $('#mole5').slideDown('slow/1000/fast')
        }, 2000);

  setInterval(function(){
       $('#mole6').slideDown('slow/1000/fast')
        }, 3000);

  setInterval(function(){
       $('#mole7').slideDown('slow/1000/fast')
        }, 6000);



//slide up function
  setInterval(function(){
       $('#mole1').slideUp('slow/1000/fast')
        }, 8000);

  setInterval(function(){
       $('#mole2').slideUp('slow/1000/fast')
        }, 5000);

   setInterval(function(){
       $('#mole3').slideUp('slow/1000/fast')
        }, 8000);

    setInterval(function(){
       $('#mole4').slideUp('slow/1000/fast')
        }, 8000);

    setInterval(function(){
       $('#mole5').slideUp('slow/1000/fast')
        }, 5000);

      setInterval(function(){
       $('#mole6').slideUp('slow/1000/fast')
        }, 6000);

       setInterval(function(){
       $('#mole7').slideUp('slow/1000/fast')
        }, 5000);





});


// click/removal of div/add score of div

var comeBack1 = $('#mole1')


$('#mole1').click(function(){
      console.log("mole1 removed");

      moleScore ++;
      $('.score').text('Score: ' + moleScore);

      $('#mole1').hide();

      });


var comeBack2 = $('#mole2')


$('#mole2').click(function(){
      console.log("mole 2");

       moleScore ++;
     $('.score').text('Score: ' + moleScore);

    $('#mole2').hide();
      });

var comeBack3 = $('#mole3')


$('#mole3').click(function(){
      console.log("mole3 removed");
       moleScore ++;
      $('.score').text('Score: ' + moleScore);

      $('#mole3').hide();
      });

var comeBack4 = $('#mole4')


$('#mole4').click(function(){
      console.log("mole 4 removed");
       moleScore ++;
     $('.score').text('Score: ' + moleScore);

      $('#mole4').hide();
      });

var comeBack5 = $('#mole5')


$('#mole5').click(function(){
      console.log("mole 5 removed");
       moleScore ++;
     $('.score').text('Score: ' + moleScore);

    $('#mole5').hide();
      });


var comeBack6 = $('#mole6')


$('#mole6').click(function(){
      console.log("mole 6 removed");
       moleScore ++;
      $('.score').text('Score: ' + moleScore);

      $('#mole6').hide();
      });


var comeBack7 = $('#mole7')


$('#mole7').click(function(){
      console.log("mole 7");
       moleScore ++;
   $('.score').text('Score: ' + moleScore);

     $('#mole7').hide();
      });


});




