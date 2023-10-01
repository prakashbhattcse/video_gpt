import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieCard = ({ key, posterpath }) => {
    return (
        <div className="w-36 md:w-48 pr-4">

            <img src={IMG_CDN_URL + posterpath} alt="" />

        </div>
    )
}

export default MovieCard