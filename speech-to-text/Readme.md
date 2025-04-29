This folder contains the an implementation of Automatic Speech Recognition (ASR) using Vosk-browser.
This can be run in your browser locally without sending your audio to external systems.

To run this in your local setup, clone this repo to your system
1. Open this repo
2. Navigate to 'speech-to-text':
   ```
   cd speech-to-text
   ```
3. Initiate a local server to serve the html files:
   ```
   python -m http.server 8000
   ```
4. Open `localhost:8000` in your browser.
5. Click on 'load model' to load the model. Then click on 'start mic' and start speaking. You will see live transcription of the your audio input.
