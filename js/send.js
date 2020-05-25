

    $(document).ready(function(){
        $("#sendEmail").click(function(){
            var name = $("#myName").val();
            var email = $("#myEmail").val();
            var message = $("#myMessage").val();
            var finalMessage = "\nName: "+name+"\nE-mail: "+email+"\nMessage: "+message;

            	 Email.send({
							SecureToken: '7109a5ca-91c1-4d96-bb40-082d029e3ccb',
							    To : "worksend876@gmail.com",
							    From : "worksend876@gmail.com",
							    Subject : "From Email: "+email,
							    Body : finalMessage}).then(
							  message => alert(message)
							);

            	return false;
            })
        });
        

	
	
