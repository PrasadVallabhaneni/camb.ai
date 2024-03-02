import React, { useEffect, useRef, useState } from 'react'

const AudioTrack = React.forwardRef(({activeStatus,currentTrack},ref) => {
  const audioTrackTimer=useRef()
  const audioTrackLineRef=useRef()
  const trackRef=useRef()
  const audioPlayerRef=ref['audioPlayerRef']
  const [cords, setCoords] = React.useState({})
  const [timelineTracker,setTimelineTracker]= React.useState({xValue:0,xPercent:0})
  const [blockDimensions,setDimensions]=useState()
 

  const onMouseMove = ({ nativeEvent }) => {
    const { clientX } = nativeEvent
    let x=clientX - blockDimensions.left
    let xPercent=((x*100)/blockDimensions.width).toFixed(0)
    x<blockDimensions.width && setCoords({xValue:x,xPercent:xPercent})

  }

  const updateAudioTimeline=()=>{
    audioPlayerRef.current.currentTime=((audioPlayerRef.current.duration*cords.xPercent)/100).toFixed(0)
    setTimelineTracker({xValue:cords.x,xPercent:cords.xPercent})

 }


useEffect(()=>{
      let clientRect = audioTrackLineRef.current.getBoundingClientRect(); 
      setDimensions({left:clientRect.left,width:clientRect.width})
    if(activeStatus){
      audioTrackTimer.current=setInterval(()=>{
        let percentage=((audioPlayerRef.current.currentTime*100)/audioPlayerRef.current.duration).toFixed(0)
        let x=((percentage*blockDimensions.width)/100).toFixed(0)
        setTimelineTracker({xValue:x,xPercent:percentage})
        if(percentage>99){
           clearInterval(audioTrackTimer.current)
        }
     },500)
 
    }else{
      clearInterval(audioTrackTimer.current)
    }
    console.log(activeStatus)

    return ()=>{
      clearInterval(audioTrackTimer.current)
    }

},[activeStatus])
  return (
    <div className='audioTrack' onClick={updateAudioTimeline} ref={audioTrackLineRef} onMouseMove={onMouseMove}>
      {
        activeStatus &&  <div style={{left:`${timelineTracker.xValue}px`}} ref={trackRef} className='track_timeliner'></div>

      }

      <div style={{left:`${cords.xValue}px`}} ref={trackRef} className='track_follower'></div>
   </div>

  )
})

export default AudioTrack