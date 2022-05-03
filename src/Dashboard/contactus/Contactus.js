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

            <Input>
                <Input1 type="text" id="fname" name="fname" value="" readonly placeholder='Full name'/>
                <Br></Br>
                <Input2 type="text" id="fname" name="fname" value="" readonly placeholder='Email address'/>
                <Textarea rows="4" cols="50" name="comment" form="usrform"> 
                </Textarea>
            </Input>
            
            </Total>
          </Column>
          <Column>
                <Image src ="/image/Frame.png"/>
          </Column>

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
  text-align: center;
  justify-content: center;
`;

const Column = styled.div`
  position: relative;
  /* border: solid 3px #000; */
  margin-left: 20px ;
  background-color: #ffff;
  &:first-child {
    margin-left: 0;
  }
`;
const Title = styled.div`
    font-size: 70px;
    display: flex;
    font-weight: 700;
    padding-left: 20%;
`
const Title1 = styled.div`

`
const Title2 = styled.div`
    color: #3B62FF;

`
const Total = styled.div`
`
const Input = styled.div`
    margin-left: 20%;
    width: 400px;
`
const Input1 = styled.input``
const Input2 = styled.input``

const Textarea = styled.textarea`

`
const Br = styled.br``
const Image = styled.image`
    width: 500px;
`