import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Usage.scss"
import "./Usage.css"
import axios from 'axios';
import { FallingLines } from  'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast';
import {BsInfoCircleFill} from "react-icons/bs";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import demo from "../../images/demo_img.png"

function Usage() {
  const allowExtenstions = ["txt"]
  const [file, setFile] = useState(null)
  const [text, setText] = useState("")
  const [resultSingle, setResultSingle] = useState(null)
  const [resultFile, setResultFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const navigate = useNavigate()

  const handleClickSingleText = async()=>{
    if (loading){
      return;
    }
    setLoading(prev => !prev)
    const dataBody = {
      textRequest: text
    }
    await axios.post("https://sentimen-khtn.herokuapp.com/single", {...dataBody}).then(
      res => {
        console.log(res.data)
        setResultSingle(res.data)
        setLoading(false)

      }
    ).catch(err =>{
      console.log(err)
      setResultSingle(null)
      toast.error("Need more info to classify")
      setLoading(false)
    })
  }

  const handleClickFile = async ()=>{
    if (loading){
      return;
    }
    setLoading(true)
    const formData = new FormData();
    formData.append('file', file);
    await axios.post("https://sentimen-khtn.herokuapp.com/file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(
      res => {
        console.log(res.data)
        setResultFile(res.data)
        setLoading(false)

      }
    ).catch(err =>{
      console.log(err)
      setResultFile(null)
      toast.error("Something went wrong!")
      setLoading(false)
    })
  }

  const handleFile = (e)=>{
    const fileExtension = e.target.files[0].name.split(".").reverse()[0]
    if(allowExtenstions.some(item => item === fileExtension)){

    }else{
      toast(`File extension needs to be: ${allowExtenstions.join(", ")}`)
      setFile(null)
    }
    console.log()
    setFile(e.target.files[0])
  }
  return (
    <>
    <Popup className='popup' open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="model">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div>
            <h5>Yêu cầu file dữ liệu:</h5>
            <ul>
              <li>Định dạng .txt</li>
              <li>Mỗi review nằm trên một hàng</li>
            </ul>
            <img src={demo} alt="" style={{border: "4px solid black", maxWidth: "100%"}}/>
            
          </div>
        </div>
      </Popup>
      <div className='return' onClick={()=>navigate("/")}>
        Return
      </div>
    <div className='Usage'>
      <div className='Option_1 wrapper'>
        <div className='formText'>
          <h3>Classifying By Single Input</h3>
          <input type="text" placeholder='Place your review here' value={text} onChange={(e)=>setText(e.target.value)}/>
          {text &&
            <div className='btn_classify' onClick={ handleClickSingleText}>
              {!loading ? 
              "Classify":
              <FallingLines
                color="#fff"
                width="35"
                visible={true}
                ariaLabel='falling-lines-loading'
              />}
            </div>
          }
          {Number.isInteger(resultSingle) && 
          <div className='text-center mt-3'>
            <div className='resultSingle' style={resultSingle === 1 ? {backgroundColor: "green"} : {backgroundColor: "red"}}>
              Result for this review: {resultSingle === 1 ? "Positive":"Negative"}  
            </div>
          </div>
          }
        </div>
      </div>
      <div className='Option_2 wrapper'>
        <div className='formText'>
          <h3>Classify File Input <BsInfoCircleFill onClick={() => setOpen(o => !o)} className='info'/></h3>
          <div className="custom-file">
            <input id="inputGroupFile01" type="file" 
              className="custom-file-input" 
              onChange={handleFile}
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              {file ? "Select other file" : "Choose a csv file"}
            </label>
          </div>
          {file &&
            <div className='btn_classify' onClick={handleClickFile}>
              {!loading ? 
              "Classify":
              <FallingLines
                color="#fff"
                width="35"
                visible={true}
                ariaLabel='falling-lines-loading'
              />}
            </div>
          }
          {
            resultFile && 
            <table className='resultFile mt-4'>
              <thead>
                <tr>
                  <th className='text-center'>No</th>
                  <th className='text-center'>Text</th>
                  <th className='text-center'>Result</th>
                </tr>
              </thead>
              <tbody>
                {
                  resultFile.map((item, index) =>{
                    return (
                      <tr key = {index}>
                        <td className='text-center'>{index}</td>
                        <td>{item[0]}</td>
                        <td
                          style={ {backgroundColor: item[1] === 1 ?"green":"red", color: "white"}}
                        >{item[1] === 1 ? "Positive" : "Negative"}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          }
          
        </div>
      </div>
      <Toaster/>
    </div>
    </>
  )
}

export default Usage