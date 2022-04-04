import React, {useState} from "react";
import './slider.scss'
import {logDOM} from "@testing-library/react";

export default function RangeSlider({size, setSize}){
    const [value, setValue] = useState(200)



    return(
        <div className='sliderContainer'>
            <input
                type="range" min="60" max={'500'}
                id={'myRange'} className={'slider'}
                value={size}
                onChange={(e)=> {
                    setSize(e.target.value)
                }}
                style={{
                    background: `linear-gradient(90deg, rgb(96, 76, 162) ${(size/440)*100-13.863636}%, rgb(214, 206, 232) 0%)`

                }}
            />
            <p>Value: {size}</p>
        </div>
    )

}
