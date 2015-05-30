function add()
{
	var operand1 = prompt( "Enter the first number to add:" );
	var operand2 = prompt( "Enter the second number to add:" );

	var equation = operand1 + " + " + operand2 + " = ";

	operand1 = parseFloat( operand1 );
	operand2 = parseFloat( operand2 );	

	displayAnswer( equation, operand1 + operand2 );
}

function subtract()
{
	var operand1 = prompt( "Enter the number to be subtracted from:" );
	var operand2 = prompt( "Enter the number to subtract:" );

	var equation = operand1 + " - " + operand2 + " = ";

	operand1 = parseFloat( operand1 );
	operand2 = parseFloat( operand2 );

	displayAnswer( equation, operand1 - operand2 );
}

function multiply()
{
	var operand1 = prompt( "Enter the first number to be multiplied:" );
	var operand2 = prompt( "Enter the second number to be multipied:" );

	var equation = operand1 + " * " + operand2 + " = ";

	operand1 = parseFloat( operand1 );
	operand2 = parseFloat( operand2 );

	displayAnswer( equation, operand1 * operand2 );
}

function divide()
{
	var operand1 = prompt( "Enter the number to be divided:" );
	var operand2 = prompt( "Enter the number to divide by:" );

	var equation = operand1 + " / " + operand2 + " = ";

	operand1 = parseFloat( operand1 );
	operand2 = parseFloat( operand2 );		

	displayAnswer( equation, operand1 / operand2 );
}

function displayAnswer( equation, answer )
{
	document.getElementById('answerBox').innerHTML = equation + answer;
}