document.addEventListener('DOMContentLoaded', function() {
  // Audio element
  let audio = new Audio();
  // Ensure play button is in the correct initial state
  
  


  // Play Button functionality
  document.getElementById('playButton').addEventListener('click', function() {
    toggleVoicePlayback();
  });

  function toggleVoicePlayback() {

    let playButton = document.getElementById('playButton');
  let voiceAnimation = document.getElementById('voiceAnimation');
    
    
    if (playButton.classList.contains('playing')) {
      playButton.classList.remove('playing');
      voiceAnimation.classList.add('paused');
      stopVoiceMessage();
    } else {
      playButton.classList.add('playing');
      voiceAnimation.classList.remove('paused');
      playVoiceMessage();
    }
  }

  function playVoiceMessage() {
    audio.src = 'voicee.mp3'; // Set the audio source
    audio.load(); // Load the audio file

    audio.oncanplaythrough = function() {
      console.log('Audio file loaded and can play.');
      audio.play(); // Start playing the audio
      startVoiceAnimation();
    };

    audio.onerror = function() {
      console.error('Error occurred while loading the audio file.');
    };
  }

  function stopVoiceMessage() {
    audio.pause(); // Pause the audio playback
   // Reset audio to beginning
    // Additional stop functionality can be added as needed
    stopVoiceAnimation();
  }

  // Voice Animation with Record Button interaction
  let isRecording = false;
  let recordButton = document.getElementById('recordButton');
  let recordingMessage = document.getElementById('recordingMessage');

  recordButton.addEventListener('mousedown', function() {
    isRecording = true;
    startRecordingAnimation();
  });

  recordButton.addEventListener('mouseup', function() {
    isRecording = false;
    stopRecordingAnimation();
  });

  recordButton.addEventListener('mouseleave', function() {
    if (isRecording) {
      isRecording = false;
      stopRecordingAnimation();
    }
  });

  function startRecordingAnimation() {
    document.getElementById('voiceAnimation').classList.add('recording-animation');
    recordingMessage.style.display = 'block';
    recordingMessage.textContent = 'መልእክቶ እየተቀዳ ነው...';
  }

  function stopRecordingAnimation() {
    document.getElementById('voiceAnimation').classList.remove('recording-animation');
    recordingMessage.style.display = 'none';
    recordingMessage.textContent = '';
  }

  // Send Button functionality (if needed)
  document.getElementById('sendButton').addEventListener('click', function() {
    showMessageConfirmation();
  });

  function showMessageConfirmation() {
    let confirmationMsg = document.createElement('div');
    confirmationMsg.textContent = 'መልእክቶ ተልኳል!';
    confirmationMsg.classList.add('confirmation-message');
    document.body.appendChild(confirmationMsg);

    setTimeout(function() {
      confirmationMsg.remove();
    }, 5000); // Remove confirmation after 5 seconds
  }
});
