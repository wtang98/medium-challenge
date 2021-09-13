import React from 'react'
import "./Featured.css"
import Author from "../../assets/images/author.jpg"
import Button from "../Button/Button"
import FeaturedArti from "../FeaturedArti/FeaturedArti"

const Featured = (props) => {

    const{writer} = props

    return (
        <>
        <div className="surround">
            <h4>Featured Writer</h4>
            <div className="content">
                <div className="content__writer">
                    <img src={Author} alt="" />
                    <Button buttonClass="tertiary" buttonText = "Follow"/>
                </div>
                <div className="content__middle">
                    <h4 className="content__middle-title">{writer}</h4>
                    <p>Nicholas Cage most famous for his "oh really" picture placed in the internet meme hall of fame.</p>
                </div>
                <div className="content__arti">
                    <FeaturedArti title="Is angaar an alien?" min="99"/>
                    <FeaturedArti title="Top stock picks from God himself" min="12"/>
                    <FeaturedArti title="Quickest way to earn 10bn quid" min="4"/>
                </div>
            </div>
        </div>   
        </>
    )
}

export default Featured
