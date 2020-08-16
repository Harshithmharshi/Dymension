import React from 'react';
import styled from "../styles/category.module.css";


function Categroy({ categoryData }) {
    return (
        <div className={styled.container}>
            {categoryData && categoryData.length > 0 ? categoryData.map(CategroryName => {
                return <p className={styled.categoryName}>{CategroryName.source.name}</p>
            }) : 'No Category Names'}
        </div>
    )
}

export default Categroy;
