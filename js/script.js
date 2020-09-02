console.log('hi');
$('.step1, .step2, .step3, .final,.cakeDiv').hide();



$(document).ready(function(){

//testing
$('h1').click(function(){
	 // $('body').css('background','red');
	 $('body').addClass('new');
	$('h1').hide();
  $('.step1').show();

});



$( function() {
    $( "#draggableBis, #draggableBut, #draggableSug,#draggableCream, #draggableChoc, #draggableCocoa" ).draggable();


    $( "#droppable1" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .attr( 'title','added biscuit, butter, sugar' )

          .addClass('ui-state-highlight')
          .find( "p" )
            .html( "Dropped!" );
         $("#draggableBis, #draggableBut, #draggableSug").css('z-index', 3);
          $("#biscuits, #butter, #sugar").addClass('resizeImg');
      }

    }); //droppable1



 $( "#droppable2" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .attr( 'title','added cream, chocolate, cocoa' )

          .addClass('ui-state-highlight')
          .find( "p" )
            .html( "Dropped!" );
         $("#draggableCream, #draggableChoc, #draggableCocoa").css('z-index', 3);
          $("#cream, #chocolate, #cocoa").addClass('resizeImg');
      }

    }); //droppable2
  });

 $('#pressTin').click(function(){
    $('#tin').attr('src','images/pressbiscuits.jpg');
    $("#biscuits, #butter, #sugar").hide();


 });



$('#blendWell').click(function(){
    $('#blend').attr('src','images/blending.gif');
    $("#cream, #chocolate, #cocoa").hide();
  });

$('#setAside').click(function(){
    $('#blend').attr('src','images/blending.gif');
    $("#cream, #chocolate, #cocoa").hide();
    $('.step3').show();
  });


$('#fridgeBtn').click(function(){
  console.log('move');

  var tin =document.getElementById("droppable1");
  console.log(tin);
  var start=0;
  speed = setInterval(move, 3);
  function move() {
    if (start >=300) {
      stopTin();
    } else {
      //start=start+1;
      start++;
      tin.style.top=start + "px";
      console.log(tin.style.right)

    }
  }
  function stopTin() {
  clearInterval(speed);
  alert("Refrigerated!");
}

$('.step2').show();

 }); //tin moved to fridge



//bowl moved to table
$('#setAside').click(function(){
  console.log('move');

  var movingBowl =document.getElementById("droppable2");
  console.log(table);
  var start=0;
  var sstart =0;
  speed = setInterval(move, 3);
  function move() {
    if (start >=230) {


      sspeed = setInterval(mmove,3);

      function mmove(){

        if (sstart >=120){
          stopBowl();
        }
        else {
        sstart++;
        movingBowl.style.left=sstart +"px";
         }
      }

     } else {
      //start=start+1;
      start++;
      movingBowl.style.top=start + "px";

    }

    $('#droppable2').css('z-index','5');
    $('#blend').addClass('resizeImg');
  }

  function stopBowl() {
  clearInterval(sspeed);
  //alert("Set Aside!");
}


 }); //tin moved to fridge
 $('#refrigerate').click(function(){
	 $('.final').show();
 })
$('.serve').click(function(){
	$('.cake').show();
})
$('.servecake').click(function(){
	$('.container').hide();
	$('.serve').text('Enjoy your cake. Happy Christmas to you').css('font-size','35px');
  $('.cakeDiv').show();
	

});

});//end of document ready
