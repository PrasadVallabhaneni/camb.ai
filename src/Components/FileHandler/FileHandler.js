import React, {useEffect, useState} from "react";
import dragula from "dragula";
import {CiImport} from "react-icons/ci";
import {IoCalendar} from "react-icons/io5";
import {GrSettingsOption} from "react-icons/gr";
import {PiDotsNine} from "react-icons/pi";
import {MdOutlineDeleteOutline} from "react-icons/md";
import "./FileHandler.css";
const FileHandler = ({files, setFiles}) => {
  const [resizeTrack, setResizeTrack] = useState([]);
  const handleUploadFile = (event) => {
    if (event?.target?.files?.length) {
      let data = [...files];
      data.push(event.target.files[0]);
      setFiles(data);
    }
  };

  const deleteFile = (index) => {
    let data = [...files];
    data.splice(index, 1);
    setFiles(data);
  };

  useEffect(() => {
    var drake = dragula([document.querySelector("#dragula")], {mirrorContainer: document.querySelector("#drop-target")});
    drake.on("drop", (el, target, source, sibling) => {
      let childNodes = document.getElementById("dragula").childNodes;
      let updatedArray = [];
      childNodes.forEach((el) => {
        updatedArray.push(el.id);
      });
      setResizeTrack(updatedArray);
    });
  }, []);

  useEffect(() => {
    if (resizeTrack.length) {
      let updatedArray = [];
      resizeTrack.forEach((index) => {
        updatedArray.push(files[index]);
      });
      console.log(updatedArray);
      setFiles(updatedArray);
    }
  }, [resizeTrack]);
  return (
    <div className="audioFileController">
      <div className="right_content_menubar display_flex space_btw align_center">
        <div className="display_flex">
          <div>
            <IoCalendar />
          </div>
          <div>
            &nbsp;&nbsp;
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
        {files?.length > 0 && (
          <div>
            <label className="audioFileInputLabelButton" for="audioFileInput">
              <CiImport />
              <span>&nbsp;&nbsp;Import Audio</span>
            </label>
          </div>
        )}

        <div>
          <GrSettingsOption />
        </div>
      </div>
      {!files?.length && (
        <div className="upload_file_initial_div">
          <label className="audioFileInputLabel" for="audioFileInput">
            <CiImport />
            <p>Import Audio</p>
          </label>
        </div>
      )}
      <input onChange={handleUploadFile} type="file" id="audioFileInput" accept=".mp3,audio/*" />

      <div>
        <div>
          <div className="fileList">
            <div id="dragula">
              {files.map((file, i) => {
                return (
                  <div key={file.name + "_" + i} id={i} className="audioFileCard">
                    <div>
                      <PiDotsNine /> <span>{file.name.split("").splice(0, 60)}</span>
                    </div>
                    <div>
                      <MdOutlineDeleteOutline className="deleteFile" onClick={() => deleteFile(i)} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div id="drop-target"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileHandler;
