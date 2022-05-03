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
          <Img1 src = '/image/Group-68.png'/>
          {/* <Img0 src = '/image/hunglan.png'/> */}
          <Img2 src = '/image/Group-65.png'/>
          <Img3 src = '/image/Group-66.png'/>
          <Img4 src = '/image/Group-67.png'/>
      </Total2>
      <Footer1>
        <Border>
            <Text>
                OVER 200 PROBLEM SOLVERS TO MAKING THE BETTER WORLD
            </Text>
        </Border>
    </Footer1>
    </Container>
  )
}

export default Ourteam;

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 32% 68%;
    margin-bottom: 20px;
`
const Footer1 = styled.div`
    width: 312%;
    height: 20%;
    padding: 20px 0px;  
    text-align: justify;
    border: solid 3px black;
    margin-top: 20px;
    background: #E5E5E5;
    
`
const Border = styled.div`
    width: 100%;
`
const Text = styled.div`
    text-align: center;
    font-weight: 700;
    word-spacing: 5px;
    padding-right: 7%;
`
const Column = styled.div`
    position: relative;
    border: 3px #000;
    margin-left: 20px ;
    background-color: #ffff;
    &:first-child {
    margin-left: 61px;
  }
`
const Total = styled.div`
    margin-bottom: 30px;
    position: absolute;
    top: 40px;
    font-weight: 700;
    margin-top: 80px;
`
const Title1 = styled.div`
    line-height: 0.2;
`
const Title2 = styled.div`
    color: #3b62ff;
    margin-bottom: -15px;
`
const Total1 = styled.div`
    font-size: 80px;
`

const Title3 = styled.div`
    font-size: 15px;
    font-weight: 400;

`
const Total2 = styled.div`
    width: 100%;
    height: auto;
    /* position: absolute; */
    display: flex;
`
const Img1 = styled.img`
    width: 450px;
    height: 500px;
    margin-right: -135px;
`
// const Img0 = styled.img`
//     width: 200px;
//     height: 180px;
// `
const Img2 = styled.img`
    position: relative;
    width: 450px;
    height: 500px;
    margin-right: -135px;
    filter: grayscale(1);
    &:hover{
        filter: grayscale(0);
    }
`
const Img3 = styled.img`
    margin-right: -135px;
    width: 450px;
    height: 500px;
    filter: grayscale(1);
    &:hover{
        filter: grayscale(0);
    }
`
const Img4 = styled.img`
    width: 450px;
    height: 500px;
    filter: grayscale(1);
    &:hover{
        filter: grayscale(0);
    }
`