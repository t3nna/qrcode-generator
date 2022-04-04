import iro from '@jaames/iro';
import {ChromePicker, CirclePicker, BlockPicker} from 'react-color'

import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function ColorPicker({dispatch, pickedColor}) {


    const handleChangeComplete = (color) => {
        dispatch(color.hex)
    }

    return (
        <>
            <ChromePicker
            color={pickedColor}
            onChange={handleChangeComplete}
            // styles={{boxShadow: 'none', borderRadius: '6px '}}
            />
        </>
    )
}