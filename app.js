import React, { useState, useEffect, useRef } from 'react';

const hooks = () => {
    const paraColor = useRef(null)
    const color = ["#CD5C5C", "grey", "#6495ED", "#CCCCFF", "red", "yellow", "blue", "orange"]

    useEffect(() => {
        console.log("paraColor", paraColor);
        console.log(paraColor.current);
    })
    const paraStyle = () => {
        const randomColor = Math.floor(Math.random() * color.length);
        console.log("randomColor", randomColor);
        paraColor.current.style.backgroundColor = color[randomColor]
    }
    return (
        <div>
            <button onClick={() => { paraStyle() }}>color</button>
            <p ref={paraColor}>this is paragraph</p>
        </div>
    )
}
export default hooks