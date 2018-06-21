



    window.onload = function() {
        
      
        $("#start").on("click", stopwatch.start);
      };
      
      //  Variable that will hold our setInterval that runs the stopwatch
      var intervalId;

      var correctAnswerCount = 0;

      // prevents the clock from being sped up unnecessarily
      var clockRunning = false;
      
      // Our stopwatch object
      var stopwatch = {
      
        time: 10,
       
      
       
      
        
        start: function() {
      
          // DONE: Use setInterval to start the count here and set the clock to running.
          if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
          }
        },
        stop: function() {
            
           
            
          // DONE: Use clearInterval to stop the count here and set the clock to not be running.
          clearInterval(intervalId);
          clockRunning = false;
          time:0;
          //$("#display").text("00:00");
         
            
        },
        reset: function() {
            
            stopwatch.time = 5;
            
        
            // DONE: Change the "display" div to "00:00."
            $("#display").text("00:05");

        },

        
        
        // recordLap: function() {
      
          // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
          //       and save the result in a variable.
        //   var converted = stopwatch.timeConverter(stopwatch.time);
      
          // DONE: Add the current lap and time to the "laps" div.
        //   $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");
      
          // DONE: Increment lap by 1. Remember, we can't use "this" here.
        //   stopwatch.lap++;
        // },
        count: function() {
      
          // DONE: increment time by 1, remember we cant use "this" here.
          stopwatch.time--;
      
          // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
          //       and save the result in a variable.
          var converted = stopwatch.timeConverter(stopwatch.time);
          console.log(converted);
      
          // DONE: Use the variable we just created to show the converted time in the "display" div.
          $("#display").text(converted);
        },

    
        
        timeConverter: function(t) {
      
          var minutes = Math.floor(t / 60);
          var seconds = t - (minutes * 60);
          var input;
          var playAgain;
        
          if (stopwatch.time<1 && correctAnswerCount===5){
            stopwatch.stop();
            alert("Times up!")
            alert("Your score is: " + correctAnswerCount + "/5");
           
              playAgain = confirm("Would you like to play again?");
               if(playAgain){

               
               stopwatch.reset();
               stopwatch.start();
               correctAnswerCount=0;
           
            }
            else{
                console.log("stop");

                stopwatch.stop();
                $("#final-score").html("Your score was: " + correctAnswerCount + "/5")
                $("#header").html("AAAAAIIIRRRRBALLL");


                    $("#gif").attr('src',"http://lakergifs.com/wp-content/uploads/cryinglebron2.gif");   
            

            }
            
            
            };

          if (stopwatch.time<1 && correctAnswerCount===4){
            stopwatch.stop();
            alert("Times up!")
            alert("Your score is: " + correctAnswerCount + "/5");
           
              playAgain = confirm("Would you like to play again?");
               if(playAgain){

               
               stopwatch.reset();
               stopwatch.start();
               correctAnswerCount=0;
           
            }
            else{
                console.log("stop");

                stopwatch.stop();
                $("#final-score").html("Your score was: " + correctAnswerCount + "/5")
                $("#header").html("AAAAAIIIRRRRBALLL");


                    $("#gif").attr('src',"http://lakergifs.com/wp-content/uploads/cryinglebron2.gif");   
            

            }
            
            
            };

        
          if (stopwatch.time<1 && correctAnswerCount===3){
            stopwatch.stop();
            alert("Times up!")
            alert("Your score is: " + correctAnswerCount + "/5");
           
              playAgain = confirm("Would you like to play again?");
               if(playAgain){

               
               stopwatch.reset();
               stopwatch.start();
               correctAnswerCount=0;
           
            }
            else{
                console.log("stop");

                stopwatch.stop();
                $("#final-score").html("Your score was: " + correctAnswerCount + "/5")
                $("#header").html("AAAAAIIIRRRRBALLL");


                    $("#gif").attr('src',"http://lakergifs.com/wp-content/uploads/cryinglebron2.gif");   
            

            }
            
            
            };

          if (stopwatch.time<1 && correctAnswerCount===2){
            stopwatch.stop();
            alert("Times up!")
            alert("Your score is: " + correctAnswerCount + "/5");
           
              playAgain = confirm("Would you like to play again?");
               if(playAgain){

               
               stopwatch.reset();
               stopwatch.start();
               correctAnswerCount=0;
           
            }
            else{
                console.log("stop");

                stopwatch.stop();
                $("#final-score").html("Your score was: " + correctAnswerCount + "/5")
                $("#header").html("AAAAAIIIRRRRBALLL");


                    $("#gif").attr('src',"http://lakergifs.com/wp-content/uploads/cryinglebron2.gif");   
            

            }
            
            
            };
        

        if (stopwatch.time<1 && correctAnswerCount===1){
            stopwatch.stop();
            alert("Times up!")
            alert("Your score is: " + correctAnswerCount + "/5");
           
              playAgain = confirm("Would you like to play again?");
               if(playAgain){

               
               stopwatch.reset();
               stopwatch.start();
               correctAnswerCount=0;
           
            }
            else{
                console.log("stop");

                stopwatch.stop();
                $("#final-score").html("Your score was: " + correctAnswerCount + "/5")
                $("#header").html("AAAAAIIIRRRRBALLL");


                    $("#gif").attr('src',"http://lakergifs.com/wp-content/uploads/cryinglebron2.gif");   
            

            }
            
            
            };
        


       
        if (stopwatch.time<1 && correctAnswerCount===0){
            stopwatch.stop();
            alert("Times up!")
            alert("Your score is: " + correctAnswerCount + "/5");
           
              playAgain = confirm("Would you like to play again?");
               if(playAgain){

               
               stopwatch.reset();
               stopwatch.start();
               correctAnswerCount=0;
           
            }
            else{
                console.log("stop");

                stopwatch.stop();
                $("#final-score").html("Your score was: " + correctAnswerCount + "/5")
                $("#header").html("AAAAAIIIRRRRBALLL");


                    $("#gif").attr('src',"http://lakergifs.com/wp-content/uploads/cryinglebron2.gif");   
            

            }
            
            
            };
           
        

        //   if (correctAnswerCount === 3){
        //       alert("Perfect");
          
      
          if (seconds < 10) {
            seconds = "0" + seconds;
            
          }
      
          if (minutes === 0) {
            minutes = "00";
        
          
          }
          else if (minutes < 10) {
            minutes = "0" + minutes;
           
          }
         
          return minutes + ":" + seconds;
        }
    };
    
    
    $(document).ready(function () {
    

//variable to store question 1 chosen answer
var oneAnswer = "";

//variable to store question 2 chosen answer
var twoAnswer = "";

//variable to store question 3 chosen answer
var threeAnswer = "";


//variable to store question 4 chosen answer
var fourAnswer = "";


//variable to store question 5 chosen answer
var fiveAnswer = "";

//variable to store number of questions answered correctly
// var correctAnswerCount = 0;


//timer countdown begins

//timer stops at 0

//when timer = 0 print score


    
$('.form-check').one("click", function(){
    console.log(this);
    oneAnswer = $(this).attr("class");
    console.log(oneAnswer);
   
    if(oneAnswer === "form-check three"){

        correctAnswerCount++;
         console.log(correctAnswerCount);
        
        
    

    }
    else{
        correctAnswerCount ===correctAnswerCount + 0;
        console.log(correctAnswerCount);
        
       
}

});


$('.form-check').one("click", function(){
    console.log(this);
    twoAnswer = $(this).attr("class");
    console.log(twoAnswer);
   
    if(twoAnswer === "form-check five"){

        correctAnswerCount++;
         console.log(correctAnswerCount);
         
         
   

    }
    else{
        correctAnswerCount ===correctAnswerCount + 0;
        console.log(correctAnswerCount);
       
}
        
});



$('.form-check').one("click", function(){
    console.log(this);
    threeAnswer = $(this).attr("class");
    console.log(threeAnswer);
   
    if(threeAnswer === "form-check seven"){

        correctAnswerCount++;
         console.log(correctAnswerCount);
        
    
      

    }
    else{
        correctAnswerCount ===correctAnswerCount + 0;
        console.log(correctAnswerCount);
       
        
        
    }
});


    $('.form-check').one("click", function(){
        console.log(this);
        fourAnswer = $(this).attr("class");
        console.log(fourAnswer);
       
        if(fourAnswer === "form-check eleven"){
    
            correctAnswerCount++;
             console.log(correctAnswerCount);
            
       
          
    
        }
        else{
            correctAnswerCount ===correctAnswerCount + 0;
            console.log(correctAnswerCount);
        } 

    });
$('.form-check').one("click", function(){
    console.log(this);
    fiveAnswer = $(this).attr("class");
    console.log(fiveAnswer);
   
    if(fiveAnswer === "form-check thirteen"){

        correctAnswerCount++;
         console.log(correctAnswerCount);
        
   
      

    }
    else{
        correctAnswerCount ===correctAnswerCount + 0;
        console.log(correctAnswerCount);
    } 
});

    


// function perfect(){
//     if (correctAnswerCount===3){
//     prompt("3/3, you're going places");
// }
// }

// function almostPerfect(){
//     if (correctAnswerCount===3){
//     prompt("2/3, you couldn't just get one more, really?");
// }
// }

    

//score increases by 1

//else

//score does not increase


//if user clicks correct id for question 2

//score increases by 1

//else

//score does not increase


//if user clicks correct id for question 3

//score increases by 1

//else

//score does not increase

});


