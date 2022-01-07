import React from 'react'
import styled from 'styled-components'
import Categoryitem from './Categoryitem'
import { categories } from '../data'
const Container = styled.div`
    
    display: flex;
    padding: 20px;
    justify-content: space-between;

`

function Categories() {
    return (
        <Container>
            {categories.map(item =>(

                <Categoryitem item = {item} key = {item.id} />

            ))}
        </Container>
    )
}

export default Categories
