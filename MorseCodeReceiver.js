
function decodeCameraImage(data)
{
    // ADD YOUR CODE HERE

    return false;
}
function convertToCharacter (morseString)
{
	//check if the message has already finished (check whether the morse code for SK exist at the end of sentence)
	
	if (morseString != '...-.-')
	{
		// will continue to display message because there is no SK morse code detected
		
		var char = morseToCharacterTable[morseString]
		displayResult.innerHTML += char
	}
	
	if (morseString == '...-.-')
	{	
		// function message finished is called to indicate the message has already finished
        
		messageFinished()
	}
	
}