import React from 'react'
import './Section2.css'
import htmli from '../images/htmli.png'
import cssi from '../images/cssi.png'
import jsi from '../images/jsi.png'
import reacti from '../images/reacti.png'
import bootstrapi from '../images/bootstrapi.svg'
export default function Section2() {
    return (
        <div className="container2">
            <div className="box box1">
                <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F934963056%2F0x0.jpg" alt="none" />
            </div>
            <div className="box box2">
                <h4 >About Me</h4>
                <hr className="under" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse harum illum iure exercitationem praesentium eaque placeat, doloribus cumque tempore hic assumenda molestiae amet saepe pariatur magnam sit id labore est!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quam quo magni iusto commodi, neque reprehenderit ducimus sed dicta debitis?</p>
                <div className="skills">
                    <h6>Languages/Library/Framworks</h6>
                <div className="icon-con">
                 <img src={htmli} alt="" />
                 <img src={cssi} alt="" />
                 <img src={jsi} alt="" />
                 <img src={reacti} alt="" />
                 <img src={bootstrapi} alt="" />
                </div>
                </div>
                
               
            </div>
        </div>
        
    )
}
