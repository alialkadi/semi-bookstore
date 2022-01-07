import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
const Container = styled.div`
    flex: 1;
    margin: 10px;
    height: 35vh;
    position: relative;
`
const Image = styled.img`
    
    width: 100%;
    height: 100%;
    object-fit: cover;

`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const Title = styled.h1`
    color: #ff00f2;
    margin: 20px;
    letter-spacing: 2px;

`
const Button = styled.button`

    border:none;
    padding: 10px;
    background-color: rgba(255, 255, 255 ,.6);
    color: #ff00e6;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;

`

function Categoryitem({item}) {
    return (
        <Container>
      <Image src={item.imgs} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
    )
}

export default Categoryitem
