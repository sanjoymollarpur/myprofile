import React from 'react'
import './Section1.css'
import img from '../images/SanjoyResume.pdf'
export default function Section1() {
    return (
        <div className="container1">
            <div className="item">
                <h4>Hi, I am Sanjoy Mondal</h4>
                <h4>A Full Stack Developer </h4>
                <br />
                
                
              <p>Get ready to turn ideas into reality</p>
                <button className="btn btn1 btn-info">Hire Me</button>
                <a href={img} target='_blank' rel="noreferrer">
                <button className="btn btn-warning">Get Resume</button>
                </a>
                
            </div>
            <div className="item11 ">
                <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F934963056%2F0x0.jpg" alt="none" />
            </div>
            
        </div>
    )
}
