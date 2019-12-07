import React from 'react'
import Rates from './Rates';




const movies = props => {
    const { titel, link, rates } = props.itemmovies;
    return (
        <div>
            <div class="card-group">
                <div class="card">
                    <img class="card-img-top width:125px" src={link} alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{titel}</h5>
                        <p class="card-text"></p>

                        <Rates rating={rates} isClickeble={false} />
                    </div>
                </div>

            </div>

        </div>
    )
}


export default movies
