import React from "react";
import "./StartWriting.css"
import firstImg from "../../assets/images/first.jpg"
import authorIMG from "../../assets/images/author.jpg"

const StartWriting = () =>{
    return(
        <>
        <section className="splash">
            <img className="splash__img" src={firstImg} alt="" />
            <h1 className="splash__head">Is it Time to Get Excited About Windows 11?</h1>
            <p className="splash__p">Big changes are coming and that might be a good thing</p>
            <div className="splash__author">
                <div className="splash__author-left">
                    <img src={authorIMG} alt="" />
                </div>
                <div className="splash__author-right">
                    <h6>Lance Ulanoff in Debugger</h6>
                    <p> Sep 2 5 min read</p>
                </div>
            </div>

        </section>
        </>
    )
}

export default StartWriting;