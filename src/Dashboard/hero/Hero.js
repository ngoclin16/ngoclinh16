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
        <Hr></Hr>
    </Container>
  );
}

export default Hero;

const Container = styled.div`
    max-width: 100%;
    height: 100vh;
    background: url('/image/Background.png') no-repeat center center/cover;
    position: relative;
    @media screen and (max-width: 600px){
        margin-bottom: 50px; 
            
    }

`

const Content = styled.div`
    width: 100%;
    height: auto;
    position: absolute; 
    top: 0;
    z-index: 20;
    @media screen and (max-width: 600px){
        z-index: 100;
    }
`
const Content1 = styled.div` //superhero
    width: 100%;
    height: auto;
    padding: 100px;
    position: absolute;
    top: -10px;
    left: 40%;
    margin-top: 30px;
    z-index: 2;
    @media screen and (max-width: 600px){
        left: 0%;
        padding-left:0px;
        top:5rem;
    }

`
const Content2 = styled.div` //comic
    width: 550px;
    height: 150px;
    padding: 100px;
    position: absolute;
    top: -40px;
    z-index: 10;
    margin:5% 0% 0 40%;
    left: 50px;
    margin-top: 160px;
    z-index: 90;
    @media screen and (max-width: 600px){
        width: 100%;
        margin-left:0%;
        left: 0%;
        padding-left:0px;
        top:5rem;
    }

    
`
const Content3 = styled.div`
    width: 100%;
    height: auto;
    padding: 100px; 
    position: absolute; 
    top: -120px ;
    @media screen and (max-width: 600px){
       z-index:200;
    }
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
    width: 648px;
    height: 750px;
    position: absolute;
    left: 51px;
    top: 4px;
    @media screen and (max-width: 600px){
        top: -102px;
        width: 554px;
        height: 709px;
        position: relative;
        left: -118px;
        
    }
`
const Img1 = styled.img` //supper
    width: 575px;
    height: 169px;
    position: absolute;
    z-index: -10;
    @media screen and (max-width: 600px){
        width: 100%;
        height: 120px;
        z-index: 100;
    }
`
const Img2 = styled.img`
    width: 450px;
    height: 130px;
    @media screen and (max-width: 600px){
        width: 100%;
        margin-top: -78px;
        margin-left: 68px;
    }
    
`
const Img3 = styled.img`
    width: 230px;
    height: 220px;
    margin-left:-100px;
    @media screen and (max-width: 600px){
        width: 220px;
        height: 225px;
        margin-top: 17px;
    }
    
`   
const Img4 = styled.img` //present
    width: 300px;
    height: 250px;
    left: 150px;
    top: 0;
    position: absolute;

`
const Hr = styled.hr`
    width: 1000%;
    border: 2px solid black;
    margin-left: -100px;   
`