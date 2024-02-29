import React, { useEffect, useRef } from 'react'
const audioURl="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
const App = () => {
    const audioPlayerRef=useRef()
    const audioTrackLineRef=useRef()
    const trackRef=useRef()
    const [cords, setCoords] = React.useState({})
    const [timelineTracker,setTimelineTracker]= React.useState(0)

  const onMouseMove = ({ nativeEvent }) => {
    const { clientX } = nativeEvent
    let clientRect = audioTrackLineRef.current.getBoundingClientRect(); 
    let x=clientX - clientRect.left
    let xPercent=((x*100)/clientRect.width).toFixed(0)
    x<clientRect.width && setCoords({xValue:x,xPercent:xPercent})

    console.log(audioPlayerRef)
  }
//   currentTime duration
useEffect(()=>{
console.log(audioPlayerRef.current.currentTime)
},[audioPlayerRef?.current?.currentTime])
 
  return (
    <div className='parent_div'>
      <audio controls ref={audioPlayerRef}>
          <source src={audioURl} type="audio/mpeg"/>
      </audio>
        <div className='audioTrack' ref={audioTrackLineRef} onMouseMove={onMouseMove}>
                         
                      <div style={{left:`${cords.xValue}px`}} ref={trackRef} className='track_follower'></div>
        </div>


    </div>
  )
}

export default App