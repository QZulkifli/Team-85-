
=======

// ADD YOUR ADDITIONAL FUNCTIONS AND GLOBAL VARIABLES HERE


/*
 * This function is called once per unit of time with camera image data.
 * 
 * Input : Image Data. An array of integers representing a sequence of pixels.
 *         Each pixel is representing by four consecutive integer values for 
 *         the 'red', 'green', 'blue' and 'alpha' values.  See the assignment
 *         instructions for more details.
 * Output: You should return a boolean denoting whether or not the image is 
 *         an 'on' (red) signal.
 */
function restartButtonClicked ()
{
	
	//Empty out all the variables (setting it to 0 or empty string)

	offCount = 0
	onCount = 0
	blueCount = 0
	redCount = 0
	displayResult.innerHTML = ""
	
}

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