import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Container>
        <Content>
            <Img src = '../../../image/Hesman_021.png'/>
        </Content>
        <Content1>
            <Img1 src = '/image/superhero.png'/>
        </Content1>
        <Content2>
            <Img2 src = '/image/comic.png'/>
        </Content2>
        <Content3>
            <Img3 src = 'image/hesman.png'/>
        </Content3>
        <Content4>
            <Img4 src = '/image/Present.png'/>
        </Content4>
        
    </Container>
  );
}

export default Hero;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url('/image/Background.png') no-repeat center center/cover;
    position: relative;

`

const Content = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    z-index: 20;
`
const Content1 = styled.div` //superhero
    width: 100%;
    height: auto;
    padding: 100px;
    position: absolute;
    top: 0px;
    left: 40%;
    margin-top: 30px;
    z-index: 70;

`
const Content2 = styled.div` //comic
    width: 650px;
    height: 150px;
    padding: 100px;
    position: absolute;
    top: -18px;
    z-index: 10;
    margin:5% 0% 0 40%;
    left: 50px;
    margin-top: 160px;
    z-index: 90;
    

    
`
const Content3 = styled.div`
    width: 100%;
    height: auto;
    padding: 100px; 
    position: absolute; 
    top: -120px ;
`
const Content4 = styled.div`
    width: 100%;
    height: auto;
    padding: 50px;
    position: absolute;
    top: -50px;
    margin-left: 25%;
    margin-top: 8%;

`
const Img = styled.img`
    width: 650px;
    height: auto;
    top: -70px;
    left: 20px;
    position: absolute;
    z-index: 250;
`
const Img1 = styled.img` //supper
    width: 550px;
    height: 180px;
    top: 0;
    right: 0;
`
const Img2 = styled.img`
    width: 450px;
    height: 130px;
`
const Img3 = styled.img`
    width: 250px;
    height: 250px;
    margin-left:-100px;
    
`
const Img4 = styled.img` //present
    width: 300px;
    height: 250px;
    left: 150px;
    top: 0;
    position: absolute;

`