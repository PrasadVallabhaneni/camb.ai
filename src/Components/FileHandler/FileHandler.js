import React, { useEffect, useState } from 'react'
import dragula from 'dragula'
import './FileHandler.css'
const FileHandler = ({files,setFiles}) => {
  const [resizeTrack,setResizeTrack]=useState([])
  const handleUploadFile=(event)=>{
      let data=[...files]
          data.push(event.target.files[0])
          setFiles(data)
  }

  useEffect(()=>{
    var drake= dragula([document.querySelector("#dragula")],{mirrorContainer:document.getElementById("dragMir")})
    drake.on('drop',(el, target, source, sibling)=>{
        let childNodes= document.getElementById('dragula').childNodes
        let updatedArray=[]
        childNodes.forEach((el)=>{
            updatedArray.push(el.id)
        })
        setResizeTrack(updatedArray)
    })
  },[])

  useEffect(()=>{
    if(resizeTrack.length){
         let updatedArray=[]
         resizeTrack.forEach((index)=>{
              updatedArray.push(files[index])
         })
         setFiles(updatedArray)
    }
  },[resizeTrack])
  return (
    <div className='audioFileController'>
         <label className='audioFileInputLabel' for="audioFileInput">Click here to upload file</label>

          <input onChange={handleUploadFile} type="file" id="audioFileInput" name="avatar" accept=".mp3,audio/*" />


          <div className='fileList' id='dragula'>
                  {
                    files.map((file,i)=>{
                      return <div key={file.name} id={i} className='audioFileCard'>{file.name}</div>
                    })
                  }
          </div>

          <div id='dragMir' style={{visibility:'hidden'}}>

          </div>
    </div>
  )
}

export default FileHandler