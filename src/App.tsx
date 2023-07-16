import React from 'react';
import './App.css'


import { RecordOptions, useRecordWebcam} from 'react-record-webcam';
import type{
  RecordWebcamHook,
  UseRecordWebcam,


} from 'react-record-webcam'

const OPTIONS:RecordOptions = {
  filename:'test-filename',
  fileType:'mp4',
  width:1920,
  height:1080
}



function App() {

  const recordWebcam:RecordWebcamHook = useRecordWebcam(OPTIONS)

  const getRecordingFileHooks = async() => {
    const blob = await recordWebcam.getRecording()
    console.log({blob})
  }

  return (
    <>
      <div className='demo-section'>
      <h1>Google CSR Research</h1>
      <p>Camera Status:{recordWebcam.status}</p>
      <div>
        <button onClick={recordWebcam.open}>Open Camera</button>
        <button onClick={recordWebcam.close}>Close Camera</button>
        <button onClick={recordWebcam.start}> Start Recording</button>
        <button onClick={recordWebcam.stop}>Stop Recording</button>
        <button onClick={recordWebcam.retake}>Retake</button>
        <button onClick={recordWebcam.download}>Download Recording</button>
       </div>
       <video
       ref={recordWebcam.webcamRef} 
       autoPlay muted 
       src=''>
       </video>

       <video
       ref={recordWebcam.previewRef}
       autoPlay
       muted

       />
      </div>      
    </>
  )
}

export default App
