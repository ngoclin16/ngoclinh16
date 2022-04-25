import React from 'react'
import styled from 'styled-components'

const Comingsoon = () =>{
  return ( 
    <Container>
    <Content>
      <Img  src='../../../image/Group1189.png'/>
    </Content>
    </Container>
  )
}
export default Comingsoon

const Container = styled.div `
    width: 100%;
    height: auto;
    background: url('../../../image/Vector.png') no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
const Img = styled.img`
    width: 50%;
    heigth: auto;
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