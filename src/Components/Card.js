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
                        <p style={{color:'red'}}><b>{item.author}</b></p>
                        <p><span>{item.publishedAt}</span><a href={item.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'black'}}><span style={{marginLeft:'60px'}}>more ...</span></a></p>
                        </div>
                    </div>
                )
            }):'Please select any of the Category Name'}

        </div>
    )
}

export default Card;
