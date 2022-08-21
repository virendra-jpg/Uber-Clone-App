import React, {useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'
import Times from './Times'
const RideSelector = (props) => {
    const [duration, setDuration ]= useState(0);

    const getDirections= (pickUpCoordinates,dropoffCoordinates)=>{
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` + 
        new URLSearchParams({
            access_token: "pk.eyJ1IjoicnNoZW9yYW4xMiIsImEiOiJja3c2M3o5ZDcyM2Z4Mm5yb2VzM2kwYjQyIn0.TQx8LsbP7x_TitEZSIfR4A",
        })
    ).then((response)=>{
        return response.json();
    }).then(data=>{
        console.log(data.routes[0].duration);
        setDuration(data.routes[0].duration);
    })
    }
useEffect(()=>{
    if(props.pick && props.drop){
        getDirections(props.pick, props.drop)
    }
},[props.pick,props.drop])


    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            {/* 🔥 FAbio */}
            {/* 🚀 Sam */}
            <CarList>
                { carList.map((car, index)=>(
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>
                                <Times 
                                duration = {duration}
                                A = {car.multiplier} />
                            </Time>
                        </CarDetails>
                        <Price>₹{(duration/1000*car.multiplier*74.31).toFixed(2)}</Price>
                    </Car>
                )) }

            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm
`

const CarImage = tw.img`
h-14 mr-4
`
// 🚀 Devlin
const Car = tw.div`
flex p-4 items-center
`

// 🔥 Heimen
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
overflow-y-scroll
`

// Emeric 🔥
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`