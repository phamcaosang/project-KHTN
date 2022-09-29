import React from 'react'
import  "./Home.scss"
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className='Home'>
        <div className='Wrapper mx-auto d-flex flex-column justify-content-around'>
            <Link to={"/intro"} className="text-decoration-none intro">
                <div className='btn_direct py-2'>
                    Introduction
                </div>
            </Link>
            <Link to={"/usage"} className="text-decoration-none usage">
                <div className='btn_direct py-2'>
                    Utilization
                </div>
            </Link>

        </div>
    </div>
  )
}

export default Home