document.addEventListener('DOMContentLoaded', function() {
    const playAudioButton = document.getElementById('playAudio');
    const welcomeAudio = document.getElementById('welcomeAudio');

    playAudioButton.addEventListener('click', function() {
        welcomeAudio.play();
    });

    const sendTextButton = document.getElementById('sendText');
    const userInput = document.getElementById('userInput');

    sendTextButton.addEventListener('click', function() {
        let message = userInput.value;
        if (message) {
            console.log("User text message:", message);
            // Process the user input message here
        }
    });

    const recordVoiceButton = document.getElementById('recordVoice');
    const recordingMessage = document.getElementById('recordingMessage');

    recordVoiceButton.addEventListener('click', function() {
        recordingMessage.style.display = 'block';
        console.log("መልእክቶ እየተቀዳ ነው...");
        // Implement voice recording functionality here
        // Hide the message after a few seconds (for demo purposes)
        setTimeout(() => {
             recordingMessage.style.display = 'none';
        }, 5000); // Adjust the duration as needed
    });
});
       
