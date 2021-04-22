import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pagination = ({ totalPage , HandleClick}) => {
    const pages = [...Array(totalPage).keys()].map(num => num+1);
    return (
        <>
           {
               pages.map(num => (
                   <button  key={num} onClick={() => HandleClick(num)}> {num}
                   </button>
               ))
           }
        </>
    )
}

export default Pagination;

