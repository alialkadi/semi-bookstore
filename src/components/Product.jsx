import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    

`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 380px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: wheat; */
    position: relative;

    &:hover ${Info}{
        opacity: 1;
        transition: all 1.2s ease ;

    }
    
    

`

const Image = styled.img`
    height: 85%;
    z-index: 4;
    border-radius: 20px;
`

const Icon = styled.div`

    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.6s ease ;
    cursor: pointer;
    &:hover{
        background-color: #b19d9d ;
        transform: scale(1.1);
    }

`


const Product = ({item}) => {
    return (
        <Container>
            
            <Image src = {item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product;
