import React from 'react';
import  styled from "../styles/card.module.css";


function Card({newsData}) {
    return (
        <div className={styled.container}> 
            {newsData && newsData.length ? newsData.map((item) => {
                return (
                    <div className={styled.card}>
                        <img src={item.urlToImage} alt={item.author} className={styled.imageCard} />
                        <div className={styled.containerDescription}>
                            <p><b>{item.title}</b></p>
                            <p>{item.description}</p>
                        </div>
                        <div className={styled.footer}>
                        <p style={{color:'red'}}><b>{item.source.name}</b></p>
                        <p><span>{item.publishedAt}</span><span style={{marginLeft:'60px'}}>more ...</span></p>
                        </div>
                    </div>
                )
            }):'NO DATA FOUND'}

        </div>
    )
}

export default Card;
