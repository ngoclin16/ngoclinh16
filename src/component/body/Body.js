import React from 'react'
import styled from 'styled-components'

const Comingsoon = () =>{
  return (  
    <Container>
      <Content>
        <Img  src='../../../image/Group1189.png' />
      </Content>
    </Container>
  )
}
export default Comingsoon;

const Container = styled.div `
    width: 100%;
    height: 100vh;
    background: url('../../../image/Vector.png') no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-width: 3px 0px 0px 0px ;
    border-style: solid;

`
const Img = styled.img`
    width: 570px;
    heigth: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Content = styled.div `
  width: 100%;
  backgroud-color: red;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;  
`