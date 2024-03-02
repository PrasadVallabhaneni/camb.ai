import React, { useEffect, useRef, useState } from 'react'
import FileHandler from './Components/FileHandler/FileHandler'
import AudioController from './Components/AudioController/AudioController'
import TrackHandler from './Components/TrackHandler/TrackHandler'

const App = () => {
  const [files,setFiles]=useState([])
  const audioPlayerRef=useRef()
  const [currentTrack,setCurrentTrack]=useState()

  const setAudioSrc=(index=null)=>{
    if(index==null){
      setCurrentTrack({src:files[0],index:0})
    }else if(Number.isInteger(index) && index>=0){
      setCurrentTrack({src:files[index],index})
    }
  
 } 


 useEffect(()=>{
  files.length && setAudioSrc()
 },[files])

 
  return (
    <div>
        <FileHandler files={files} setFiles={setFiles}/>
        <AudioController currentTrack={currentTrack} ref={audioPlayerRef}/>
        <TrackHandler ref={{audioPlayerRef:audioPlayerRef}} files={files} currentTrack={currentTrack}/>
    </div>
  )
}

export default App