// recorder-worklet.js
class RecorderProcessor extends AudioWorkletProcessor {
    process(inputs) {
    const inputChannelData = inputs[0][0];
    if (inputChannelData) {
        // Send the Float32Array directly without conversion
        this.port.postMessage(inputChannelData);
    }
    return true;
    }
}
  
registerProcessor('recorder-processor', RecorderProcessor);