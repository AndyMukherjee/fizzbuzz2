$(document).ready(function() {

	var v = prompt("What is your number?");

	 if (typeof v != 'number') {alert("supply a valid number");

	 var z = prompt("What is your number?");
	}

	
	var m =+v || +z;

for (var i = 1; i<=m; i++)

{
	if ((i%3)==0 && (i%5)==0)
		{document.write ("Fizzbuzz");}

	else if ((i%3)==0)

		{document.write ("Fizz");}

	else if ((i%5)==0)
		{document.write ("Buzz");}

	else {document.write (i);}
};



});