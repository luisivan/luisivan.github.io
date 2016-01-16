var email = document.getElementById('email'),
	emailText = 'Please keep in mind that I have LOTS of emails.\nAnyway my email is me AT luisivan DOT net',
	emailText = emailText.replace(' AT ', '@').replace(' DOT ', '.')

email.onclick = function() {
	alert(emailText)
}
