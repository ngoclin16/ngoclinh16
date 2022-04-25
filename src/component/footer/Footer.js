import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return ( 
        <Container>
            <Border>
                <Text>
                    WE ARE GOING TO LAUCH OUR WEBSITE VERY SOON. PLEASE COME BACK LATER.
                </Text>
            </Border>
        </Container>
     );
}
 
export default Footer;

const Container = styled.div`
    width: auto;
    height: 50%;
    text-align:center;
    padding: 50px 0px;  
    border: 3px solid black;
`
const Border = styled.div`
    width: 100%;
    height: auto;
`
const Text = styled.div`
    width: 100%;
    text-align: center;
    font-weight: 600;
    letter-spacing: 3px;
`