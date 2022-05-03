import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Footer1 = () => {
  return (
    <Container>
        <Logo src='/image/Logo_11.png'/>
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
        
        <Image>
            <Img1 src="/image/Facebook.png"/>
            <Img2 src="/image/Twitter.png"/>
            <Img3 src="/image/Telegram.png"/>
            <Img4 src="/image/YouTube.png"/>
        </Image>
    </Container>
  );
}
export default Footer1;
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap:70px;
`
const Logo = styled.img`
    width: 200px;
    margin-left: -200px;
`
const Ul = styled.ul`
`
const Li = styled.li`
    list-style: none;
`
const Image = styled.div`
    width: 250px;
    margin: 30px;
    position: relative;
    left: 122px;
`
const Img1 = styled.img`
    margin-right: 12px;
`
const Img2 = styled.img`
    margin-right: 12px;
`
const Img3 = styled.img`
    margin-right: 12px;
`
const Img4 = styled.img`

`
