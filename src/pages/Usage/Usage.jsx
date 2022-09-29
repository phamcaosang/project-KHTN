import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Usage.scss"

function Usage() {
  const [file, setFile] = useState(null)
  const navigate = useNavigate()

  const handleFile = (e)=>{
    console.log(e.target.files[0])
    setFile(e.target.files[0])
  }
  return (
    <>
      <div className='return' onClick={()=>navigate("/")}>
        Return
      </div>
    <div className='Usage'>
      <div className='Option_1 wrapper'>
        <div className='formText'>
          <h3>Classifying By Single Input</h3>
          <input type="text" placeholder='Place your review here'/>
          <div className='btn_classify'>
            Classify
          </div>
        </div>
      </div>
      <div className='Option_2 wrapper'>
        <div className='formText'>
          <h3>Classify File Input</h3>
          <div class="custom-file">
            <input id="inputGroupFile01" type="file" 
              className="custom-file-input" 
              onChange={handleFile}
            />
            <label class="custom-file-label" for="inputGroupFile01">
              {file ? "Select other file" : "Choose a csv file"}
            </label>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Usage