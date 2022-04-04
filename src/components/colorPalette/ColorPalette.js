import React, {useEffect, useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

import './colorPalette.scss'
import {useDispatch, useSelector} from "react-redux";
export default function ColorPalette({dispatch, pickedColor}){


    const colors=[
        '#B53F3F',
        '#2D7118',
        '#41E48C',
        '#3EBCC3',
        '#0A5C60',
        '#5E32A2',
        '#6C2292',
        '#EF74B0',
    ]

    const [current, setCurrent] = useState(null)

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setCurrent(null)
            return () => clearTimeout(timeout)
        }, 3000)
    }, [current])

    return(
        <div className={'color-palette'} style={{backgroundColor: pickedColor}}>
            {current !== null && <h3 className={'color-copied'}>Copied {current}</h3>}
            <div className="palette-container">
                {
                    colors.map((color,index) =>(
                            <div className={'palette-card'} key={index}>
                                <div
                                    style={{
                                        backgroundColor: color,
                                        filter: 'brightness(85%)',
                                        boxShadow: color === pickedColor ? '0 0 5px #000': ''
                                    }}
                                    className="palette-box"
                                    onClick={()=> {
                                    dispatch(color)
                                }}/>
                                <CopyToClipboard text={color}>
                                    <p className={'palette-color-name'}
                                    onClick={()=> setCurrent(color)}
                                       // style={{color: color === background? '#fff': color}}
                                        style={{color: '#fff'}}
                                    >{color}</p>
                                </CopyToClipboard>
                            </div>
                        )

                    )
                }
            </div>
        </div>
    )
}