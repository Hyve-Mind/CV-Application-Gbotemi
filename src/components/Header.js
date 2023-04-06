import React from 'react'
import dummy from './images/dummy.jpeg'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
function Header(props) {
  return (
    <header>
        <div className='header'>
              <div>
                  <img src={dummy}/><div>CV Application</div>
              </div>
              <div className='progressBar'>
                <CircularProgressbar value={props.value} text = {`${props.value}%`} />
              </div>
        </div>
        <hr />
    </header>
  )
}

export default Header