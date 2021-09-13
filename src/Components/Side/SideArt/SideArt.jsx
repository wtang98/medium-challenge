import React from 'react';
import "./SideArt.css"
import sideIMG from "../../../assets/images/sideart.jpg"

const SideArt = (props) => {
    const {sideArtHead, time} = props;
    return (
        <>
            <div className="container">
                <div className="left">
                    <h4 className="left__header">{sideArtHead}</h4>
                    <p className="readTime">{time} min read</p>
                </div>
                <div className="right">
                    <img src={sideIMG} alt=""/>
                </div>
            </div>    
        </>
    )
}

export default SideArt;