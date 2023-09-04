import React, { useState, useEffect } from 'react';

export const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false); //copy color value to clipboard
    const bcg = rgb.join(',');
    const  hexValue = `#${hexColor}`
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlert(false)
        }, 3000)
        return ()=> clearTimeout(timeout)
    }, [alert])
    //console.log(bcg);

    return (
    <article 
        className={`color ${index > 10 && 'color-light'}`} 
        style={{ backgroundColor: `rgb(${bcg})`}}
        onClick={()=>{
            setAlert(true)
            navigator.clipboard.writeText(hexValue)
        }}
    >
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>#{hexColor}</p>
        {alert && <p className='alert'>copied to clipboard</p>} 
    </article>
    )
}

export default SingleColor;