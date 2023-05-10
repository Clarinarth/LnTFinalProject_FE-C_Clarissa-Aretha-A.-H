import React from "react"
import './event.css'
import laptop from '../../Assets/laptop.png'
import pc from '../../Assets/pc.png'
import chat from '../../Assets/chat.png'
const Event = () => {
    return (
      <>
      <section id="event">
        <h1 id="event">Event</h1>

        <div class="box-container">
          <div className="box">
            <p id="event2">Day 1</p>
            <small id="title">The revolution of AI and why its important to know </small>
            <br></br>
            <small>May 27 2023</small>
            <br></br>
            <small>12.00 - 13.00 WIB</small>
          </div>
          <div className="box">
          <p id="event2">Day 2</p>
            <small id="title">The breakthrough of QR code</small>
            <br></br>
            <small>May 29 2023</small>
            <br></br>
            <small>12.00 - 13.30 WIB</small>
          </div><div className="box">
          <p id="event2">Day 3</p>
            <small id="title">How to keep up with uprising technology development and utilized it to its max potential</small>
            <br></br>
            <small>May 30 2023</small>
            <br></br>
            <small>15.00 - 16.30 WIB</small>
          </div>
        </div>
    
        <div class="box-container-1">  
          <img class="brandIMG" src={laptop}/>
          <img class="brandIMG" src={pc}/>
          <img class="brandIMG" src={chat}/>
        </div>     
      </section> 
      </>
    )
  }
  
  export default Event