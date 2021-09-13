import React from "react";
import "./side.css";
import Button from "../Button/Button"
import SideArt from "./SideArt/SideArt";

const Side = () => {
    return (

        <>
        <div className="side">
            <section className="main">
                <h2 className="main__title"> Programming</h2>
                <p className="main__p1">The good, the bad, the buggy</p>
                <Button buttonClass="main__btn" buttonText={"Follow"}/>
            </section>
            <p className="p2">Follow to see more stories about Programming on you homepage and in your Medium Daily Digest</p>
            <section className="related">
                <h2 className="related__header">Related Topics</h2>
                <ul className="related__list">
                    <li>JAVASCRIPT</li>
                    <li>SOFTWARE ENGINEERING</li>
                    <li>DATA SCIENCE</li>
                    <li>UX</li>
                    <li>MATH</li>
                </ul>
            </section>
            <section className="article">
                <h2 className="article__header"> POPULAR IN PROGRAMMING</h2>
                <SideArt sideArtHead={"C# is Dying"} time={13}/>
                <SideArt sideArtHead={"7 Signs of Software Engineers With High Emotional Intelligence"} time={8}/>
                <SideArt sideArtHead={"“If software engineering is in demand, why is it so hard to get a software engineering job?”"} time={7}/>
                <SideArt sideArtHead={"Learning Almost Nothing About LLVM"} time={8}/>
                <SideArt sideArtHead={"15 Must-Know Python String Methods"} time={4}/>
            </section>
            </div>
        </>
    )
}

export default Side;
