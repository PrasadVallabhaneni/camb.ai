// import React, { useEffect, useRef, useState } from 'react'
// import dragula from 'dragula'

// const audioURl="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
// const App = () => {
//   const [audioFiles, setAudioFiles] = useState([
//     { itemId: 1, itemName: audioURl },
//     { itemId: 2, itemName: audioURl },
//     { itemId: 3, itemName: audioURl },
//   ]);


//     const audioPlayerRef=useRef()
//     const audioTrackLineRef=useRef()
//     const trackRef=useRef()
//     const dragulaRef=useRef()
//     const [cords, setCoords] = React.useState({})
//     const [timelineTracker,setTimelineTracker]= React.useState({xValue:0,xPercent:0})
//     const [blockDimensions,setDimensions]=useState()
//     const audioTrackTimer = useRef();

//   const onMouseMove = ({ nativeEvent }) => {
//     const { clientX } = nativeEvent
//     let x=clientX - blockDimensions.left
//     let xPercent=((x*100)/blockDimensions.width).toFixed(0)
//     x<blockDimensions.width && setCoords({xValue:x,xPercent:xPercent})

//   }
//  const startAudio=()=>{
//     audioPlayerRef?.current?.play()
//     audioTrackTimer.current=setInterval(()=>{
//          let percentage=((audioPlayerRef.current.currentTime*100)/audioPlayerRef.current.duration).toFixed(0)
//          let x=((percentage*blockDimensions.width)/100).toFixed(0)
//          setTimelineTracker({xValue:x,xPercent:percentage})
//          if(percentage>99){
//             clearInterval(audioTrackTimer.current)
//          }
//     },500)
//  } 

//  const updateAudioTimeline=()=>{
//     audioPlayerRef.current.currentTime=((audioPlayerRef.current.duration*cords.xPercent)/100).toFixed(0)
//     setTimelineTracker({xValue:cords.x,xPercent:cords.xPercent})

//  }
//  const stopAudio=()=>{
//     audioPlayerRef?.current?.pause()
//     clearInterval(audioTrackTimer.current)
//  }
// //   currentTime duration
// useEffect(()=>{
//     let clientRect = audioTrackLineRef.current.getBoundingClientRect(); 
//     setDimensions({left:clientRect.left,width:clientRect.width})

//     var drake= dragula([document.querySelector("#dragula")])
//     drake.on('drop',(el, target, source, sibling)=>{
//          console.log(el,source)
        
//     })
//    return ()=>{
//        clearInterval(audioTrackTimer.current)
//    }
 
// },[])
 
//   return (
//     <div className='parent_div'>
//       <audio ref={audioPlayerRef}>
//           <source src={audioURl} type="audio/mpeg"/>
//       </audio>
//       <button onClick={startAudio}>Start</button>
//       <button onClick={stopAudio}>Stop</button>

//         <div className='audioTrack' onClick={updateAudioTimeline} ref={audioTrackLineRef} onMouseMove={onMouseMove}>
//                       <div style={{left:`${timelineTracker.xValue}px`}} ref={trackRef} className='track_timeliner'></div>

//                       <div style={{left:`${cords.xValue}px`}} ref={trackRef} className='track_follower'></div>
//         </div>


        

//        <div id='dragula' ref={dragulaRef}>
//            {
//             audioFiles.map((el)=>{
//               return <div>{el.itemId}</div>
//             })
//            }
//        </div>

//     </div>
//   )
// }

// export default App