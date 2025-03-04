import React, { useEffect, useState } from 'react'

const ColorGenerator = () => {
    const [typeOfColor,setTypeOfColor] = useState('hex')
    const [color,setColor] = useState('#000000')

    const generateRandom = (length)=>
    {
        return Math.floor(Math.random()*length);
    }

    const handleHexColor = ()=>{
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = '#'
        for(let i=0;i<6;i++)
        {
            hexColor+=hex[generateRandom(hex.length)]
        }
        setColor(hexColor)
    }
    const handleRgbColor = ()=>{
        const r = generateRandom(256)
        const g = generateRandom(256)
        const b = generateRandom(256)
        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(()=>{
        typeOfColor === 'hex'? handleHexColor():handleRgbColor()
    },[typeOfColor])

  return (
    <div className='main flex  justify-center h-screen w-screen' style={{
        background:color
    }} >
        <div className="btns">
        <button className='btn cursor-pointer bg-yellow-900 px-2 py-1 border-2 mr-1 text-white' onClick={()=>setTypeOfColor('hex')}>Create HEX color</button>
        <button className='btn cursor-pointer bg-yellow-900 px-2 py-1 border-2 mr-1 text-white' onClick={()=>setTypeOfColor('rgb')}>Create RGB color</button>
        <button className='btn cursor-pointer bg-yellow-900 px-2 py-1 border-2 mr-1 text-white' onClick={typeOfColor === 'hex'?handleHexColor : handleRgbColor}>Generate Random color</button>
        
        <div className="color text-white text-7xl flex flex-col gap-5 mt-50">
                {typeOfColor === 'hex'? <h1>HEX</h1>:<h1>RGB</h1>}
                <h2>{color}</h2>
        </div>
        </div>
    </div>
  )
}

export default ColorGenerator