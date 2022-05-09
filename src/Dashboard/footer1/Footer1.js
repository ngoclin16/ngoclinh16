import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Footer1 = () => {
  return (
    <Container>
        <Column>        
            <Logo src='/image/Logo_11.png'/>
                <WrapList>
                    <Ul>
                        <Li>BLOG</Li>
                        <Li>ROADMAP</Li>
                        <Li>TOKENOMIC</Li>
                        <Li>WHITE PAPER</Li>
                        <Li>TERMS OF USE</Li>
                    </Ul>
                    <Ul>
                        <Li>STARKING</Li>
                        <Li>MARTKETPLACE</Li>
                        <Li>MY PROFILE</Li>
                        <Li>TEAM</Li>
                        <Li>PITCH DECK</Li>
                    </Ul>
                </WrapList>
            <Image>
                <Img1 src="/image/Facebook.png"/>
                <Img2 src="/image/Twitter.png"/>
                <Img3 src="/image/Telegram.png"/>
                <Img4 src="/image/YouTube.png"/>
            </Image>
        </Column>
    </Container>
  );
}
export default Footer1;
const Container = styled.div`
    width: 100%; 
    display: flex;
    justify-content: center;
    gap:70px;
    &:first-child {
    margin-left: 0px;
  }
    @media screen and (max-width: 600px) {
        display: block;
    }
`
const Column = styled.div`
    width: 100%;
    display: grid;
    /* margin-left: 20px;
    margin-bottom: 20px; */
    grid-template-columns: 20% 30% 50%;
    @media screen and (max-width: 600px) {
        grid-template-columns: 100%;
    }
`
const Logo = styled.img`
    width: 200px;
    padding-left: 20px;
    @media screen and (max-width: 600px) {
        width: 50%;
        padding-left: 94px;
    }
    
`
const WrapList =  styled.div`
    display: flex;
    @media screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }
    
`
const Ul = styled.ul`
    width: 100%;
    font-size: 15px;
    @media screen and (max-width: 600px) {
        line-height: 30px;
    }
`
const Li = styled.li`
    list-style: none;
`
const Image = styled.div`
    margin: 30px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 100px);
    left: 200px;
    @media screen and (max-width: 600px) {
        width: 100%;
        text-align: center;
        left: -16px;
    }
`
const Img1 = styled.img`

`
const Img2 = styled.img`

`
const Img3 = styled.img`

`
const Img4 = styled.img`

`
