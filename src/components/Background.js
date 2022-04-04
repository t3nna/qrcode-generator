import React from "react";
import ColorPalette from "./colorPalette/ColorPalette";
import {useDispatch, useSelector} from "react-redux";
import ColorPicker from "./colorPicker/ColorPicker";

export default function Background() {
    const dispatch = useDispatch()
    const color = useSelector((state) => {
        return state.app.bgColor
    })

    function changeBackground(color) {
        dispatch({type: 'color/changeBgColor', payload: color})
    }

    return (
        <>
            <ColorPalette dispatch={changeBackground} pickedColor={color}/>
            <ColorPicker dispatch={changeBackground} pickedColor={color}/>
        </>
    )
}