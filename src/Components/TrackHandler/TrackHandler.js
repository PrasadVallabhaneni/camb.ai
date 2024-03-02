import React, { useEffect, useState } from 'react'
import AudioTrack from './AudioTrack'

const TrackHandler = React.forwardRef(({files,currentTrack},ref) => {
 

  useEffect(()=>{
   console.log(currentTrack)
  },[currentTrack])
  return (
    <div>
       {
        files.map((file,i)=>{
           if(i===currentTrack?.index){
            return <AudioTrack ref={ref} currentTrack={currentTrack} activeStatus={true}/>
           }else{
            return <AudioTrack ref={ref} currentTrack={currentTrack} activeStatus={false}/>
           }
        })
       }
    </div>
  )
})

export default TrackHandler