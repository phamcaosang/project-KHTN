import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Intro.scss"

function Intro() {
  const navigate = useNavigate()
  return (
    <>
      <div className='return' onClick={()=>navigate("/")}>
        Return
      </div>
    <div className='Intro mt-5'>
        <h2>Introduction</h2>
       <div className='introduction'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, doloribus. Quae quaerat at reiciendis, earum soluta magni ut repellendus ipsa, quisquam, deleniti veritatis obcaecati adipisci alias aliquam recusandae quos animi.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ullam nulla natus ab placeat nihil magni inventore iste, a ex consequuntur quas facilis incidunt unde esse nesciunt ducimus. Ex, architecto.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis sunt nulla cumque recusandae error ab, neque excepturi eligendi amet dolorum quibusdam molestias animi temporibus. Molestiae velit neque nostrum eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas necessitatibus similique, excepturi sed voluptatibus, corrupti repellat reprehenderit quam, maiores ipsum harum iste nobis voluptates! Totam corrupti laudantium culpa minima?</p>
       </div>
       <h2>Team</h2>
       <div className='team d-flex justify-content-between'>
          <div className='card'>
            <img src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg" alt="" />
            <div className='name'>Repellat doloremque</div>
          </div>
          <div className='card'>
            <img src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg" alt="" />
            <div className='name'>Repellat doloremque</div>
          </div>
          <div className='card'>
            <img src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg" alt="" />
            <div className='name'>Repellat doloremque</div>
          </div>
       </div>
       <h2>Models Used</h2>
       <div className='models'>
          <p> ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptas error laboriosam culpa beatae corrupti inventore sad autem suscipit temporibu. Quisquam, quod odio! Magni magnam odit minus repellendus dolores sit?
          </p>
          <div className='groupModel'>
            <h5>RNN/LSTM</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quis recusandae voluptates vel veritatis perspiciatis qui labore voluptas error laboriosam autem suscipit temporibu.</p>
            <div className='d-flex justify-content-between'>
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
            </div>
          </div>
          <div className='groupModel'>
            <h5>Bert base</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quis recusandae voluptates vel veritatis perspiciatis qui labore voluptas error laboriosam autem suscipit temporibu.</p>
            <div className='d-flex justify-content-between'>
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
            </div>
          </div>
          <div className='groupModel'>
            <h5>Pyspark</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quis recusandae voluptates vel veritatis perspiciatis qui labore voluptas error laboriosam autem suscipit temporibu.</p>
            <div className='d-flex justify-content-between mb-3'>
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
            </div>
            <div className='d-flex justify-content-between'>
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
            </div>
          </div>
       </div>
       <div className='thanks'>
          Thanks For Reading!
       </div>
    </div>
    </>
  )
}

export default Intro