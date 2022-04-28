import React from 'react'
import styled from 'styled-components'

const Ourteam = () => {
  return (
    <Container>
        <Column>
        <Total>
            <Total1>          
            <Title1>Our</Title1>
            <Title2>Team</Title2>
            </Total1>             
            <Title3>Heatherwick Studio is a team of over 200 problem solvers dedicated to making the physical world around us better for everyone. Based out of our combined workshop and design studio in Central London, we create buildings, spaces, master-plans, objects and infrastructure. Focusing on large scale projects in cities all over the world, we prioritise those with the greatest positive social impact.</Title3>  
        </Total>
        </Column>
        
      <Total2>
          <Img1 src = '/image/Group9.png'/>
          <Img2 src = '/image/Group10.png'/>
          <Img3 src = '/image/Group8.png'/>
          <Img4 src = '/image/Group11.png'/>
      </Total2>
    </Container>
  )
}

export default Ourteam;

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 32% 68%;
`
const Column = styled.div`
    position: relative;
    border: 3px #000;
    margin-left: 20px ;
    background-color: #ffff;
    &:first-child {
    margin-left: 0;
  }
`
const Total = styled.div`
    margin-bottom: 30px;
    position: absolute;
    top: 40px;
    font-weight: 700;
`
const Title1 = styled.div`
    line-height: 0.2;
`
const Title2 = styled.div`
    color: blue;
    margin-bottom: 10px;
`
const Total1 = styled.div`
    font-size: 80px;
`

const Title3 = styled.div`
    font-size: 15px;
`
const Total2 = styled.div`
    width: 100%;
    height: auto;
    
    /* top: 50px; */
    left: 40%;
`
const Img1 = styled.img`
    width: 25%;

`
const Img2 = styled.img`
    width: 25%;

`
const Img3 = styled.img`
    width: 25%;

`
const Img4 = styled.img`
    width: 25%;

`