
 

$(".mygallery .gallery-container>.img-contaiuner>.caption").click( function(e) {
 var nsrc=$(this).closest('.img-contaiuner').find('img').attr('src');

  var indexnum=$(this).closest(".gallery-container").index() ;
 
    var total=$(".mygallery .gallery-container").length ;
 
  $(".popup-container>.img-box>.left-arrow").attr('data-total',total);
    $(".popup-container>.img-box>.right-arrow").attr('data-total',total);
  
  
  $(".popup-container>.img-box>.left-arrow").attr('data-index',indexnum);
    $(".popup-container>.img-box>.right-arrow").attr('data-index',indexnum);
  $(".popup-container>.img-box>img").attr('src',nsrc);
  
  $(".popup-container").fadeIn(500);
  
  
});





$(".popup-container>.img-box>.right-arrow").click( function(e) {
  
  var index=parseInt($(this).attr("data-index"))+1;
   var total=parseInt($(this).attr("data-total"));
if(index<total &&  index>=0){
   $(".popup-container>.img-box>.left-arrow").attr('data-index',index);
    $(".popup-container>.img-box>.right-arrow").attr('data-index',index);
  
  var nsrc=$(".mygallery .gallery-container>.img-contaiuner>img").eq(index).attr('src');
   $(".popup-container>.img-box>img").attr('src',nsrc);
  }
});



$(".popup-container>.img-box>.left-arrow").click( function(e) {
  var index=parseInt($(this).attr("data-index"))-1;
      var total=parseInt($(this).attr("data-total"));
  if(index<total &&  index>=0){
   $(".popup-container>.img-box>.left-arrow").attr('data-index',index);
    $(".popup-container>.img-box>.right-arrow").attr('data-index',index);
  
  var nsrc=$(".mygallery  .gallery-container>.img-contaiuner>img").eq(index).attr('src');
   $(".popup-container>.img-box>img").attr('src',nsrc);
  }
});




$(".img-box").click( function(e) {
  e.stopPropagation();
});

$(".popup-container").click( function(e) {
  $(this).fadeOut(700);
});

$(".close-btn").click( function(e) {
 $(".popup-container").fadeOut(700);
});


$( document ).on( 'keydown', function ( e ) {
  
    if ( e.keyCode === 27 ) { // ESC
      
       $(".popup-container").fadeOut();
      
    }else if( e.keyCode ===37 ) { // left arraw
      
      $(".popup-container>.img-box>.left-arrow").click();
      
    }else if( e.keyCode ===39 ) {  // right arraw
      
 $(".popup-container>.img-box>.right-arrow").click(); 
   
    }
});