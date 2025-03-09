import React from 'react'

const Scroll = () => {
    window.addEventListener('scroll', () => {
        let scrollX = window.scrollX;
        let scale = 1 + scrollX / 500; // Adjust divisor for desired effect
        document.querySelector('.prac').style.transform = `scaleX(${scale})`;  
    });
    
  return (
    <div className="scrollpage h-screen w-screen">
        <div className="scrollIndicator h-3 bg-amber-300 w-screen fixed"></div>
        <div className="prac h-20 w-20 bg-amber-400 fixed"></div>
        <div className="h-[1000px] w-screen bg-amber-950"></div>
    </div>
  )
}

export default Scroll