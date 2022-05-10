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
        <Column>
            <Total2>
                <Img1 src = '/image/Group-68.png'/>
                <Img2 src = '/image/Group-65.png'/>       
                <Img3 src = '/image/Group-66.png'/>
                <Img4 src = '/image/Group-67.png'/>
            </Total2>
        </Column>
            
      <Footer1>
        <Border>
            <Text>
                OVER 200 PROBLEM SOLVERS TO MAKING THE BETTER WORLD
            </Text>
        </Border>
    </Footer1>
    {/* <Hr></Hr>
      <Text>
        OVER 200 PROBLEM SOLVERS TO MAKING THE BETTER WORLD
      </Text>
    <Hr></Hr> */}
   
    </Container>
  )
}

export default Ourteam;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    display: grid;
    grid-template-columns: 32% 68%;
    /* margin-bottom: 20px;
    margin-left: -2px; */
    gap: 25px;
    @media screen and (max-width: 600px) {
        display: block; 
    }
`
const Column = styled.div`
    width: 100%;
    /* position: relative; */
    border: 3px #000;
    display: grid;
    grid-template-columns: 32% 68%;
    height: 100vh;
    &:first-child {
    margin-left: 30px;
    @media screen and (max-width: 600px) {
        grid-template-columns: 100%;
    }
  }
`
const Footer1 = styled.div`
    width: 312%;
    height: 20%;
    padding: 20px 0px;  
    text-align: justify;
    border: solid 3px black;
    margin-top: 20px;
    background: #E5E5E5;
    @media screen and (max-width:  600px){
        width: 100%;
    }
    
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

const Total = styled.div`
    margin-bottom: 30px;
    position: absolute;
    /* top: 40px; */
    font-weight: 700;
    margin-top: 80px;
    @media screen and (max-width: 600px) {
        margin-bottom: 30px;
    /* position: absolute; */
    /* top: 100px; */
        font-weight: 700;
        margin-top: 80px;
    }
`
const Title1 = styled.div`
    line-height: 0.2;
    @media screen and (max-width: 600px) {
        display: block;
    }
`
const Title2 = styled.div`
    color: #3b62ff;
    margin-bottom: -15px;
`
const Total1 = styled.div`
    font-size: 80px;
    @media screen and (max-width: 600px) {
        display: block;
    }
`

const Title3 = styled.div`
    font-size: 15px;
    font-weight: 400;
    position: absolute;
    @media screen {
        line-height: 20px;
    }

`
const Total2 = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    @media screen and (max-width: 600px) {
        width: 500px;
    }
    
` 
const Imgcontainer = styled.div`

`
const Img1 = styled.img`
    width: 450px;
    height: 450px;
    margin-right: -110px;
    @media screen and (max-width: 600px) {
        display: block;
        width: 356px;
    }
`
// const Img0 = styled.img`
//     width: 200px;
//     height: 180px;
// `
const Img2 = styled.img`
    position: relative;
    width: 450px;
    height: 450px;
    margin-right: -110px;
    filter: grayscale(1);
    &:hover{
        filter: grayscale(0);
    } 
    @media screen and (max-width: 600px) {
        width: 356px;
    }
`
const Img3 = styled.img`
    margin-right: -110px;
    width: 450px;
    height: 450px;
    filter: grayscale(1);
    &:hover{
        filter: grayscale(0);
    }@media screen and (max-width: 600px) {
        display: none;
    }
`
const Img4 = styled.img`
    width: 450px;
    height: 450px;
    filter: grayscale(1);
    &:hover{
        filter: grayscale(0);
    }@media screen and (max-width: 600px) {
        display: none;
    }   
`
const Hr = styled.hr`
    width: 1000%;
    border: solid black;
    margin: 33px -6px;  
`