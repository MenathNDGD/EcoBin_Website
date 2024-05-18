import React, { useEffect, useState } from 'react'
import './BackToTop.css'
import { FaArrowCircleUp } from "react-icons/fa";

const BackToTop = () => {

    const [BackToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className='backToTop'>
        {BackToTopButton && (
            <button onClick={scrollUp}><FaArrowCircleUp /></button>
        )}
      
    </div>
  )
}

export default BackToTop
