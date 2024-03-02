import React, { useEffect, useRef, useState } from 'react'
import FileHandler from './Components/FileHandler/FileHandler'
import AudioController from './Components/AudioController/AudioController'
import TrackHandler from './Components/TrackHandler/TrackHandler'
export const audioFunctionsContext=React.createContext()

const App = () => {
  const [files,setFiles]=useState([])
  const audioPlayerRef=useRef()
  const [currentTrack,setCurrentTrack]=useState()
  const [liveStatus,setLiveStatus]=useState()
  const setAudioSrc=(index=null)=>{
    console.log(files)
    if(index==null){
      setCurrentTrack({src:files[0],index:0})
    }else if(Number.isInteger(index) && index>=0 && index<files.length){
      setCurrentTrack({src:files[index],index})
    }

    console.log(audioPlayerRef)
  
 } 


 useEffect(()=>{
  files.length && setAudioSrc()
 },[files])

 useEffect(()=>{
   audioPlayerRef.current.onplay=()=>{
     setLiveStatus({isPlaying:true})
   }
   audioPlayerRef.current.onpause=function(){
    setLiveStatus({isPlaying:false})
  }
 },[])

 
  return (
    <div>
        <FileHandler files={files} setFiles={setFiles}/>
        <AudioController setAudioSrc={setAudioSrc} currentTrack={currentTrack} ref={audioPlayerRef}/>
        <audioFunctionsContext.Provider value={{setAudioSrc}}>
             <TrackHandler liveStatus={liveStatus} ref={{audioPlayerRef:audioPlayerRef}} files={files} currentTrack={currentTrack}/>
        </audioFunctionsContext.Provider>
    </div>
  )
}

export default App