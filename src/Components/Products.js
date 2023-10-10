import React, { useEffect, useState } from 'react'

export default function Products() {

    const [product,setProduct]=useState([])

    const fetchData=()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProduct(data)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className="d-flex flex-wrap ms-5 justify-content-center">
        {
            product.map((val)=>{
                return(
                    <div className='w-25 mt-5 ms-5' >
                        <img style={{width:150}} src={val.image}/>
                         <h2>{val.title}</h2>
                         <p>{val.description}</p>
                         <button className="bg-primary text-white border boder-none">price:{val.price}</button>
                    </div>
                   
                )
            })
        }
    </div>
  )
}
