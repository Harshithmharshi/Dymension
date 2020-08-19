import React, { useState,useEffect } from 'react';
import styled from "../styles/category.module.css";
import Card from "./Card";


function Categroy({ categoryData }) {
    const [newsCard, setNewsCard] = useState([]);


    useEffect(()=>{
        setNewsCard(categoryData);
    },[categoryData])



    const sendNewsCard = (e,category_name) => {
        e.preventDefault();
        const sendNewsData = categoryData.filter((item => {
            return item.source.name === category_name
        }));
        setNewsCard(sendNewsData);
    }


    return (
        <>
        <div className={styled.container}>
            {categoryData && categoryData.length > 0 ? categoryData.map((CategroryName,index) => {
                return <button key={index} onClick={(e) => sendNewsCard(e, CategroryName.source.name)} className={styled.categoryName}>{CategroryName.source.name}</button>
            }) : 'No Category Names'}
        </div>
        <Card newsData={newsCard} />
        </>
    )
}

export default Categroy;
