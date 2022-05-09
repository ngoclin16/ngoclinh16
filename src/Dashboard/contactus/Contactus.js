import React from 'react'
import styled from 'styled-components'

const Contactus = () => {
  return (
      <Container>
          <Column>
            <Title> 
                <Title1>Contact</Title1>
                <Title2>Us</Title2>
            </Title>
            <Total>
                <Input1 type="text" id="name" name="name" value="" readonly placeholder='Full name'/>
                <Br></Br>
                <Input2 type="text" id="name" name="name" value="" readonly placeholder='Email address'/>
                {/* <Textarea rows="4" cols="50" name="comment" form="usrform" placeholder='Message'> 
                </Textarea>    */}
                <Input3 type="text" id="name" name="name" value="" readonly placeholder='Message'/>
                <Input type="submit" value="SUBMIT" />           
            </Total>
          </Column>
          <Column>
                <Image src ="/image/Frame.png"/>
          </Column>
          <Hr></Hr>

      </Container>
      
  )
}
export default Contactus;

const Container = styled.div`
  width: 100%;
  display: grid;
  margin-left: 20px;
  margin-bottom: 20px;
  grid-template-columns: 50% 50%;
  padding-left: 30px 0;
  @media screen and (max-width: 600px) {
      width: 100%;
      display: block;
  }
`;

const Column = styled.div`
  position: relative;
  margin-left: 20px ;
  /* background-color: #ffff; */
  &:first-child {
    margin-left: 0;
  }
`;
const Title = styled.div`
    font-size: 70px;
    display: flex;
    font-weight: 700;
    padding-left: 20%;
    padding-top: 10%;
    @media screen and (max-width: 600px) {
      display: block;
      text-align: center;
      margin-right: 36px;
  }
`
const Title1 = styled.div`
    @media screen and (max-width: 600px) {
    }
`
const Title2 = styled.div`
    color: #3B62FF;
    @media screen and (max-width: 600px) {
        line-height:60px;
    }
`
const Total = styled.div`
    margin-left: 20%;
    padding-bottom: 50px;
    @media screen and (max-width: 600px) {
        margin: 0px;
    }
     
`
const Input1 = styled.input`
    width: 330px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid black;
    @media screen and (max-width: 600px) {
        border: solid 3px black;
    }
`
const Input2 = styled.input`
    width: 330px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid black;
    @media screen and (max-width: 600px) {
        border: solid 3px black;
    }

`
const Input = styled.input` //button
    background: #3B62FF;
    color: white;
    font-weight: 600;
    width: 160px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    position: relative;
    left: 230px;  
    @media screen and (max-width: 600px) {
        left: 90px;
    }
`

const Input3 = styled.input` //message
    width: 330px;
    padding: 60px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid black;
    @media screen and (max-width: 600px) {
        border: solid 3px black;
    }

`
const Br = styled.br``
 
const Image = styled.img`
    padding-top: 15%;
    width: 500px;
    @media screen and (max-width: 600px) {
        display: none;
    }
`
const Hr = styled.hr`
    width: 1000%;
    border: 2px solid black;
    margin-left: -100px;   
`