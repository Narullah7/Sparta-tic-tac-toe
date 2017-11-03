//global variables
var player1 = true
var player2 =false

function runEverything() {

//



// set up the reset button
$('#reset').click(function(){
  $('button').html('<a href="index.html">Reset Board</a>');
})
// set up the td using a for loop
function tableSelect(){
  $('td').click(function(){
    $(this).$('td') = $(this).html("change please")
  })
  // $(this)
  // $(table).click(function(){
  //   console.log("I have been clicked "+ table);
  // })
}



}


runEverything();
