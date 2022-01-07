import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { useState } from "react";


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };


    return (
        <div>
            <div className='contain2'>
                <div className='A' >
                    <ArrowLeftOutlined  style={{width:'50px' , height: '50px' , left:'10px' , }} className='arrow' onClick={() => handleClick("left")} />
                </div>
                <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <div className='slideAll' key = {item.id}>
                        <div className='Imagecontainer' >
                            <div className='iamge'>
                                <img src={item.img}  style={{width : '100%' , height : '100%' ,borderRadius : '50%'}}/>
                            </div>
                        </div>
                        <div className='Info'>
                            <h1 style={{fontSize:'70px'}}>{item.title}</h1 >
                            <div style={{margin: '50px 0px' , fontSize:'20px' , fontWeight:'500' , letterSpacing:'3px' }} >
                                {item.desc}
                            </div>
                            <button style={{padding : ' 10px' , fontSize : '20px' , backgroundColor: 'transparent' , cursor:' pointer'}}>Shop Now</button>
                        </div>
                    </div>
                    ))}
                    </Wrapper>
                
                <div className='A'>
                    <ArrowRightOutlined style={{width:'50px' , height: '50px' , right:'10px'}} className='arrow' onClick={() => handleClick("right")} />
                </div>
            </div>
        </div>
    )
}

export default Slider
