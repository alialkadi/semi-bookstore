import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'


const Container = styled.div`
    

`

const Wrapper   = styled.div`
    padding: 50px;
    display: flex;
    margin-top: 40px;

`

const Imgcontainer = styled.div`
    flex: 2;


`

const Image = styled.img`
    width: 100%;
    height: 60vh;


`

const Infocontainer = styled.div`
    flex: 1;
    padding: 0px 50px;

`

const Title = styled.h1`
    font-weight: 200 ;

`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-left: 10px;
`;



const FilterBranch = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;


const Product = () => {
    return (
        <Container>
            
            <Announcements />
            <Navbar />
            <Wrapper>
                <Imgcontainer>
                    <Image src = "./imgs/s.jpg" />
                </Imgcontainer>
                <Infocontainer>
                    <Title>HELLO.</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusamus impedit praesentium ipsam ratione dolores mollitia quasi perferendis quam illo ipsa blanditiis quas, officiis laudantium fugiat corporis beatae eveniet pariatur.
                    </Desc>
                    <Price>20$</Price>
                    <FilterContainer>
                    <Filter>
                            <FilterTitle>Branch</FilterTitle>
                             <FilterBranch>
                                <FilterOption>Languages</FilterOption>
                                <FilterOption>math</FilterOption>
                                <FilterOption>Science</FilterOption>
                                <FilterOption>Computer</FilterOption>
                                <FilterOption>Others</FilterOption>
                            </FilterBranch>
                        </Filter>
                        <Filter>
                            <FilterTitle>Level</FilterTitle>
                             <FilterBranch>
                                <FilterOption>PRE</FilterOption>
                                <FilterOption>KG1</FilterOption>
                                <FilterOption>KG2</FilterOption>
                                <FilterOption>Elementary 1</FilterOption>
                                <FilterOption>Elementary 2</FilterOption>
                            </FilterBranch>
                        </Filter>
                </FilterContainer>
                <AddContainer>
                        <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                </AddContainer>
                </Infocontainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
