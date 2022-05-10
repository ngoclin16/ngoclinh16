import React from 'react'
import styled from 'styled-components'

const Gallery = () => {
    return (
      <Container>
        <Title >
          <Title1> Gallery </Title1> 
          <Title2 > Heatherwick Studio is a team of over 200 problem solvers dedicated to making the physical world around us better
          for everyone.Based out of our combined workshop and design studio in Central London, we create buildings, spaces, master - plans, objects and infrastructure.Focusing on large scale projects in cities all over the world... 
          </Title2> 
        </Title>

      <Total> 

      <Total1>
          <Column >
            <Img src = '/image/Rectangle21.png'/>     
          </Column> 
      </Total1>

        <Total2>         
          <Column>
            <Img1 src = '/image/HM-Banner-01.png'/>
            <Img2 src = '/image/HM-Banner-02.png'/>
            <Img3 src = '/image/HM-Banner-03.png'/>
          </Column> 
        </Total2>

      </Total>
      </Container>
    )
}
export default Gallery;

const Container = styled.div `
  width: 100%; 
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
  }
`
const Column = styled.div `
  position: relative;
  margin-left: 20px ;
  /* background-color: #ffff; */
  &:first-child {
    margin-left: 0px;
  }
  
`
const Total = styled.div `
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    display: block;  
  }
`
const Total1 = styled.div ` 
  width: 100%;
  display: flex;
`
const Total2 = styled.div `
  padding-right: 35px;
`
const Title = styled.div `
  width: 100%;
  @media screen and (max-width: 600px) {

  }
`
const Title1 = styled.div `
  font-weight: 700;
  font-size: 100px; 
  @media screen and (max-width: 600px) {
    font-size: 50px;
    line-height: 40px;
  }
`
const Title2 = styled.div `
  font-size: 18px;
  position: relative;
  text-align: center;
  margin:0 20% 5% 20%;
  font-weight: 400;
  @media screen and (max-width: 600px) {
    font-size: 12px;
    margin: 10px;
  } 
`
const Img = styled.img `
  width: 900px;
  height: auto;
  margin-left: 8px;
  @media screen and (max-width: 600px) {
    margin: 0px;
    width: 370px;
    border: solid 2px black;margin-bottom: -5px;

  }
`
const Img1 = styled.img `
  height: 162px;
  margin-bottom: 9px;
  border: solid 3px #000;
  @media screen and (max-width: 600px){
    margin-bottom: -5px;
    height: 154px;
  }
`
const Img2 = styled.img `
  height: 162px;
  margin-bottom: 9px;
  border: solid 3px #000;
  @media screen and (max-width: 600px){
    height: 154px;
    margin-bottom: -5px;
    filter: grayscale(1);
    &:hover{
        filter: grayscale(0);
    }
  }
`
const Img3 = styled.img `
  height: 162px;
  border: solid 3px #000;
  @media screen and (max-width: 600px) {
    height: 154px;
    filter: grayscale(1);
    &:hover{
        filter: grayscale(0);
    }
  }
`