import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Container =styled.div``

 
const Title =styled.h1`

    margin:20px;

`


const Filtercontainer =styled.div` 

    display :flex;
    justify-content: space-between;


`
const Filter =styled.div`

    margin: 20px;
`
const Filtertext = styled.span`
    font-size: 20px;
    font-weight: bolder;
    margin-right: 20px;
`

const Select =styled.select`
    padding:10px;
    margin-right: 20px;
    font-size: 16px;
    font-weight: bold;
    color: teal;
`


const Option =styled.option`
    font-size: 16px;
    font-weight: bold;
    

`


const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcements />
            <Title>Books</Title>
            <Filtercontainer>
                <Filter>
                    <Filtertext>Filter Products:</Filtertext>
                    <Select >
                        <Option disabled selected> Branch </Option>
                        <Option>Languages</Option>
                        <Option>math</Option>
                        <Option>Science</Option>
                        <Option>computer</Option>
                        <Option>Others</Option>
                    </Select>
                    <Select >
                        <Option disabled selected> Level </Option>
                        <Option>PRE</Option>
                        <Option>KG1</Option>
                        <Option>KG2</Option>
                        <Option>Elementary 1</Option>
                        <Option>Elementary 2</Option>
                    </Select>
                </Filter>
                <Filter>
                    <Filtertext>Sort Products:</Filtertext>
                    <Select >
                        <Option selected> NEWEST </Option>
                        <Option>PREICE High </Option>
                        <Option>PREICE Low</Option>
                    </Select>
                </Filter>
            </Filtercontainer>
            <Products />
            <Newsletter/>
            <Footer />
        </Container>
    )
}

export default ProductList
