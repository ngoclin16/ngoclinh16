import React from 'react'
import styled from 'styled-components'

const Ourpartner = () => {
  return (
        <Container>
                
                    {/* <Img src ='/image/Cloud.png'/> */}
                
                <Total>                
                    <Title>
                        <Title1>Our</Title1>
                        <Title2>Partners</Title2>
                    </Title>
                    <Img0>
                        <Img1 src = '/image/Stamp.png'/>
                        <Img2 src = '/image/Stamp1.png'/>
                        <Img3 src = '/image/Stamp2.png'/>
                        <Img4 src = '/image/Stamp3.png'/>
                        <Img5 src = '/image/Stamp4.png'/>
                        <Img6 src = '/image/Stamp5.png'/>
                    </Img0>
                </Total>
        </Container>
    ) ;
}
export default Ourpartner;

const Container = styled.div`
    width: 110%;
    border: solid 3px #000;
    background-image: url(/image/Cloud.png);
    background-size: contain;
    margin-left: -8px;
    background-repeat: no-repeat;
    @media screen and (max-width: 768px){
        background-image: none;  
    }
`
const Total = styled.div`
    padding-right: 100px;
    @media screen and (max-width: 768px){
        padding-right: 34px;
    }
`

const Title = styled.span`
    font-size: 70px;
    font-weight: 700;
    display: flex;
    padding-top: 70px;
    padding-bottom: 20px;
    justify-content: center;  
    @media screen and (max-width: 600px){
        width: 100%;
        font-size: 70px;
        display: block;
        line-height: 50px;
        text-align: center;
    }
`
const Title1 = styled.div`

`
const Title2 = styled.div`
    color: #3B62FF;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    @media screen and (max-width: 600px){
        display: none;
    }
`
const Img0 = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 60px;
    @media screen and (max-width: 600px){
        margin-left: 20px;
        width: 100px;
    }
`
const Img1 = styled.img`
    width: 180px;
`
const Img2 = styled.img`
    width: 180px;
`
const Img3 = styled.img`
    width: 180px;

`
const Img4 = styled.img`
    width: 180px;
`
const Img5 = styled.img`
    width: 180px;

`
const Img6 = styled.img`
    width: 180px;

`