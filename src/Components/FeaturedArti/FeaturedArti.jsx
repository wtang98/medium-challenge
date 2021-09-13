import React from 'react'
import "./FeaturedArti.css"
import Pic from "../../assets/images/featuredArti.jpg"

const FeaturedArti = (props) => {
    const {title, min} = props
    return (
        <div className="container">
                <img className="container__img" src={Pic} alt="" />
            <div className="container__text">
                <div className="container__text-title">
                    <h4>{title}</h4>
                </div>
                <div className="container__text-min">
                    <p>{min} mins read </p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedArti
