import React, { useEffect, useState } from 'react'

export default function Country() {

    const [countryData, setCountryData] = useState([])

    const fetchData = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCountryData(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='d-flex flex-wrap'>
            { 
                countryData.map((val) => {
                    return (
                        <div className='ms-3 mt-5'>
      
                            <img src={val.flags.png}/>
                            <h2>{val.name.common}</h2>
                            <p>population:{val.population}</p>
                        </div>

                        


                    )
                })
            }
        </div>
    )
}
