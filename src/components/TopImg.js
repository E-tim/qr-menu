import React, { useState } from 'react'
import img1 from "../image/water.png"
import img2 from "../image/water1.jpg"
import img3 from "../image/water3.png"

const TopImg = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const img = [
        {img: img1, label: 'image'},
        {img: img2, label: 'image1'},
        {img: img3, label: 'image2'}
    ]

    let timer;

    // const imageSlider = () => {
    //     timer = setInterval(()=> {
    //         let nextImg = currentImg + 1;
    //         if (nextImg < img.length) {
    //             setCurrentImg(nextImg);
    //         } else {
    //             clearInterval(timer)
    //             setCurrentImg(0);
    //         }
    //     }, 1000)
    // }

    // imageSlider();
    
  return (
    <div className='topImage'>
        <img style={{width: '95%', height: '250px', marginTop: '5px'}} src={img[currentImg].img} alt='myImage' />
        
    </div>
  )
}

export default TopImg