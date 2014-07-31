

    $( "#project1" ).click(function() {
      alert( "Handler for .click() called." );
      $("#project1").hide();
    });


    

	$('body').on('click','.heading',function(){
	     $(this).css('color','red');  
	});   

    $( "#my_button4" ).click(function() {
       //alert('test');        

        //return false;
       parent.sayHello();
		
    });

  $( "#my_button3" ).click(function() {
        alert('test');        

        return false;
    });