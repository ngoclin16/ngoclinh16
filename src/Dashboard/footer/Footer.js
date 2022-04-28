import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
        <Border>
            <Text>
                OVER 200 PROBLEM SOLVERS TO MAKING THE BETTER WORLD
            </Text>
        </Border>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
    width: 100%;
    height: 20%;
    padding: 20px 0px;  
    text-align: justify;
    border: solid 3px black;
    background: #E5E5E5;
    
`
const Border = styled.div`
    width: 100%;
`
const Text = styled.div`
    text-align:right;
    font-weight: 600;
    word-spacing: 5px;
    padding-right: 7%;
`