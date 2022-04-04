import React, {useState, useRef} from "react";
import QRCode from "qrcode.react";
import icon from '../icons/plus.png'

import img from '../icons/qrcode_www.qr-code-generator 1.png'
import '../styles/main.scss'
import {useSelector} from "react-redux";
import RangeSlider from "../components/rangeSlider/RangeSlider";

export default function Main() {
    const [url, setUrl] = useState('')
    const [size, setSize] = useState(256)
    const [shape, setShape] = useState('L')
    const properties = useSelector(state => state.app)

    const qrRef = useRef()


    const downloadHandler = () => {
        let canvas = qrRef.current.querySelector("canvas");
        let image = canvas.toDataURL("image/png");
        let anchor = document.createElement("a");
        anchor.href = image;
        anchor.download = `qr-code.png`;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        setUrl("");
    }

    const  shapes = ['L', 'M', 'Q', 'H']
    let shapeCounter=0

    const handleShape =() =>{
        shapeCounter++
        if (shapeCounter>3){
            shapeCounter = 0
        }
        // console.log(shapeCounter)

        setShape(shapes[shapeCounter])


    }

    return (
        <main className={'main-container'}>
            <div className="main">
                <h1 className={'main-title'}>Just paste link
                    below and select style </h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder={'https://...'}
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                    />


                </div>
                <div className="qrcode-container" ref={qrRef}>
                    <QRCode

                        value={url}
                        bgColor={properties.bgColor}
                        fgColor={properties.fgColor}
                        level={shape}
                        size={size}
                        title={'Obama'}
                        // imageSettings={{
                        //     src: icon,
                        //     excavate: true,
                        //     width: 16,
                        //     height: 16,
                        // }}

                    />
                </div>
                <div className="quick-properties-container">
                    <div className=" slider-container">
                        <h3>Size</h3>
                        <RangeSlider size={size} setSize={setSize}/>
                    </div>
                    <button className="quick-property download-btn" onClick={() => downloadHandler()}>
                        Download
                    </button>


                </div>


            </div>
        </main>
    )
}