import React, { useEffect, useState } from 'react'

export default function Recipe() {
    const [recipeData, setRecipeData] = useState([])
    const [fdata, setFdata] = useState("")

    const fetchData = () => {
        fetch(`https://api.edamam.com/search?q=${fdata}&app_id=a2f07843&app_key=660f6a92cca0d06896ce82a2b30b9222&from=0&to=30&calories=591-722&health=alcohol-free`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRecipeData(data.hits)
            })
    }

    useEffect(() => {
        fetchData()
    }, [fdata])


    return (
        <div>
            <div>
                <input type='text'className='w-50 mb-4 mt-2' placeholder='search' onChange={(e) => setFdata(e.target.value)} />
            </div>
            <div className='d-flex flex-wrap'>

                {
                    recipeData.map((val) => {
                        return (
                            <div>
                                <img className='ms-3' src={val.recipe.image} />
                                <h1>{val.recipe.cuisineType}</h1>
                            </div>

                        )

                    })
                }

            </div>
        </div>

    )
}
