import React, {useState, useEffect} from 'react';
import axios from 'axios'

import css from './residents.scss.css'

const Residents = (residents) => {
    console.log(residents)

    const [apiData, setApiData] = useState({})

    function getApiLink() {
        axios.get(`${residents.residents}`)
            .then(response => {setApiData(response.data)})
    }

    getApiLink()

    return (

        <div className='imgStyle'>
            <div>{apiData.name}</div>
            <div>{apiData.status}</div>
            <div>{apiData.created}</div>
            <div>{apiData.gender}</div>
            <img src={apiData.image} alt={apiData.name}/>
        </div>

    );
};

export {Residents}