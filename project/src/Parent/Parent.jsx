import React from 'react'
import Slider from '../Slider/Slider'
import Card from '../Card/Card'
import BigDis from '../Bigdiscount/BigDis'
import NewArrival from '../NewArrivals/NewArrival'
import BestSales from '../BestSales/BestSales'







const Parent = () => {
    return (
        <div>
            <Slider />
       
            <Card />
            <BigDis />
            <NewArrival />
            <BestSales />


        </div>
    )
}

export default Parent

