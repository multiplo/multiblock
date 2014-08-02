jQuery(function ($) {

    /*=============================================================
     Authour URI: www.binarytheme.com
     License: Commons Attribution 3.0
 
     http://creativecommons.org/licenses/by/3.0/
 
     100% To use For Personal And Commercial Use.
     IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
    
     ========================================================  */

    /*==========================================
    GENERAL CUSTOM SCRIPTS
    =====================================================*/



    // LINKS SCROLLING FUNCTION 
	/*$('.navbar-nav > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	});
*/
	

    /*==========================================
    WRITE  YOUR  SCRIPTS BELOW
    =====================================================*/


});



$(document).ready(function() {

    $( "#my_button" ).click(function() {
       sayHello();
    });


    $( "#run" ).click(function() {
       
        $.ajax({
          url: "browser.html",
          cache: false
        })
          .done(function( html ) {
            $( "#main" ).html( html );
          });

    });



     /*   $( "#my_button2" ).click(function() {
        alert('test');

        return false;
    });
*/
    //$('#main').load('browser.html');

    /*   function doJavaScriptInAjax() {
        $.ajax({
            url: "browser.html",
            context: document.body,
            success: function(responseText) {
                $("#main").html(responseText);
                $("#main").find("script").each(function(i) {
                    eval($(this).text());
                });
            }
        });
    };
*/


    $.ajax({
      url: "browser.html",
      cache: false
    })
      .done(function( html ) {
        $( "#main" ).append( html );
      });
});






function sayHello(){
   alert("hello");
}


/*
 

$( 'body' ).on('click','div.my_button2',function() {
      sayHello();
    });

$(document).ready(function()
{
   sayHello();
});


$(document).click(function() {
  $("#test").hide();
});


*/

//$( "#sample1" ).click(function() {
 // alert( "Handler for .click() called." );
//});





