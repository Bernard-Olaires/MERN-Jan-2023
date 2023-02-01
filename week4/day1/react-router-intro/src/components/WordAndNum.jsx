import React, {useState} from 'react';
import {useParams} from 'react-router-dom'
const WordAndNum = (props) => {
    const {color, id} = useParams()
    return (
        <div>
            <h2>The number you entered was... {id}</h2>
            <h2 style={{background:color}}>The Word you entered in the url is... {color}</h2>
        </div>
)}

export default WordAndNum;