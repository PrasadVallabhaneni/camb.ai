
import React, { useEffect, useRef, useState,forwardRef } from 'react'

// const audioURl="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"

const AudioController = forwardRef(({currentTrack},ref) => {
    const [fileUrl,setFileUrl]=useState()
    const stopAudio=()=>{
          ref?.current?.pause()
    }

    const startAudio=()=>{
        console.log(ref)
        ref?.current?.play()
    }

   useEffect(()=>{
    if(currentTrack?.src){
        console.log(currentTrack?.src)
        const url = URL.createObjectURL(currentTrack?.src);
        setFileUrl(url)
    }
   },[currentTrack])
  return (
    <div>
         <audio ref={ref}>
            <source src={fileUrl} />
         </audio>

         <button onClick={startAudio}>Start</button>
         <button onClick={stopAudio}>Stop</button>
    </div>
  )
})

export default AudioController