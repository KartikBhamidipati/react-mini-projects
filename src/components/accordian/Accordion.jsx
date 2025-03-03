import React, { useState } from 'react'
import data from './data'

const Accordion = () => {

    const [selected, setSelected] = useState(null)
    const [enableMulti, setEnableMulti] = useState(false)
    const [multiSelected, setMultiSelected] = useState([])
     

    const handleSingleSelection = (getCurrentId)=>{
        setSelected(getCurrentId === selected? null:getCurrentId)

    }

    const handleMultiSelection = (getCurrentId)=>{
        let cpyMultiple = [...multiSelected]
        const indexOfcurrentId = cpyMultiple.indexOf(getCurrentId)
        

        indexOfcurrentId === -1? cpyMultiple.push(getCurrentId):cpyMultiple.splice(indexOfcurrentId,1)
        setMultiSelected(cpyMultiple)
        

    }
  return (
    <div className="wrapper flex-col h-screen w-screen justify-items-center content-center">
        <button className='multiBtn bg-yellow-900 text-yellow-300 px-4 py-3 mb-3 cursor-pointer' onClick={()=>setEnableMulti(!enableMulti)}>{enableMulti?"Disable Multi Selection":"Enable Multi Selection"}</button>
        <div className="accordian w-[500px] cursor-pointer">
            {
                data && data.length > 0 ? 
                data.map(dataItem=><div key={dataItem.id} className='item bg-yellow-900 mb-3 '>
                    <div onClick={()=>enableMulti?handleMultiSelection(dataItem.id):handleSingleSelection(dataItem.id)} className="title flex justify-between p-4 text-yellow-300">
                        <h3 className='text-xl'>{dataItem.question}</h3>
                        <span>+</span>
                        </div>
                        {
                            enableMulti ? 
                            multiSelected.indexOf(dataItem.id) !== -1 &&  <div className="answer h-auto text-yellow-300 p-4">{dataItem.answer}</div>
                            :
                            selected === dataItem.id &&
                            <div className="answer h-auto text-yellow-300 p-4">{dataItem.answer}</div>  
                        }
                    
                </div> ):(
                    <div>No data found!</div>
                
            )}
        </div>
    </div>
  )
}

export default Accordion