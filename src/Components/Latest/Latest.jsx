import React from 'react'
import "./Latest.css"
import IMG from "../../assets/images/latest.jpg"


const Latest = (props) => {
    const {dataArr} = props
    
    return dataArr.map(({ title, writer, text, date, mins}) => {
        return (
            <>
            <div className="latest">
                <div className="left">
                    <h3 className="left__header">{title}</h3>
                    <p className="left__p">{text}</p>
                    <p className="left__author">{writer}</p>
                    <div className="left__bot">
                        <p className="left_date">{date}</p>
                        <p className="left__time">{mins} min read</p>
                    </div>
                </div>
                <div className="right">
                    <img src={IMG} alt="" />
                </div>
            </div>
        </>
    )
    })
}

export default Latest
