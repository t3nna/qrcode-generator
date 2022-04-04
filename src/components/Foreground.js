import React from "react";
import ColorPalette from "./colorPalette/ColorPalette";
import {useDispatch, useSelector} from "react-redux";
import ColorPicker from "./colorPicker/ColorPicker";

export default function Foreground(){
    const dispatch = useDispatch()
    const color = useSelector((state) =>{
        return state.app.fgColor
    })

    function changeBackground(color) {
        dispatch({type: 'color/changeFgColor', payload: color})
    }

    return (
        <>
            <ColorPalette dispatch={changeBackground} pickedColor={color}/>
            <ColorPicker dispatch={changeBackground} pickedColor={color}/>
        </>
    );
}