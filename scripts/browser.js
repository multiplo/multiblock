
/*
    $( "#project1" ).click(function() {
      alert( "Handler for .click() called." );
      $("#project1").hide();
    });

	$('body').on('click','.heading',function(){
	     $(this).css('color','red');  
	});   

*/

    


    $( "#my_button4" ).click(function() {
       //alert('test');        

        //return false;
       parent.sayHello();
		
    });


  $( "#my_button3" ).click(function() {
        alert('test');        

        return false;
    });

  $( "#project1" ).click(function() {
     //$( "#main" ).hide( "slow" );


	$.ajax({
	  url: "blockly.html",
	  cache: false
	})
	  .done(function( html ) {
	    $( "#main" ).html( html );
	  });
	//  $( "#main" ).show( "slow" );
  });


  $( "#project2" ).click(function() {
     //$( "#main" ).hide( "slow" );


	$.ajax({
	  url: "examples/fixed/index.html",
	  cache: false
	})
	  .done(function( html ) {
	    $( "#main" ).html( html );
	  });
	//  $( "#main" ).show( "slow" );
  });

 $( "#project3" ).click(function() {
     //$( "#main" ).hide( "slow" );


	$.ajax({
	  url: "examples/iframe/index.html",
	  cache: false
	})
	  .done(function( html ) {
	    $( "#main" ).html( html );
	  });
	//  $( "#main" ).show( "slow" );
  });

 $( "#project4" ).click(function() {
     //$( "#main" ).hide( "slow" );


	$.ajax({
	  url: "examples/axel/index.html",
	  cache: false
	})
	  .done(function( html ) {
	    $( "#main" ).html( html );
	  });
	//  $( "#main" ).show( "slow" );
  });


 $( "#project5" ).click(function() {
     //$( "#main" ).hide( "slow" );


	$.ajax({
	  url: "http://multiplo.org/multiPLY/index.html",
	  cache: false
	})
	  .done(function( html ) {
	    $( "#main" ).html( html );
	  })
	  .fail(function (html) {
	  	alert("something went wrong!"); 
	  })
	//  $( "#main" ).show( "slow" );
  });


 $( "#project6" ).click(function() {
     //$( "#main" ).hide( "slow" );


	$.ajax({
	  url: "http://multiplo.org/multiPLY/index.html",
	  cache: false
	})
	  .done(function( html ) {
	    $( "#main" ).html( "   <iframe src='http://multiplo.org/multiPLY/index.html'></iframe>  " );
	  })
	  .fail(function (html) {
	  	alert("something went wrong!"); 
	  })
	//  $( "#main" ).show( "slow" );
  });



     

/*
    $.ajax({
      url: "examples/fixed/index.html",
      cache: false
    });
    
      .done(function( html ) {
        $( "#main" ).append( html );

                $("#main").html(responseText);
                $("#main").find("script").each(function(i) {
                    eval($(this).text());
*/





/*  if ( $( "#project1:first" ).is( ":hidden" ) ) {
    
  } else {
    $( "#project1" ).hide();
  }*/


