import React from "react";
import styled from "styled-components";

const Hero1 = () => {
  return (
    <Container>
      <Nglinh>
        <Column>
          <Img1 src="image/image4.png" />
        </Column>
        <Column>
          <Img2 src="image/Group21.png" />
          <AboutUs>
            <TitleContainer>
              <Title1>About</Title1>
              <Title2>Studio</Title2>
            </TitleContainer>

            <Span>The new NFT Colletions of Legendary Hesman Comic</Span>
            <Span1>
              Heatherwick Studio is a team of over 200 problem solvers dedicated
              to making the physical world around us better for everyone. Based
              out of our combined workshop and design studio in Central London,
              we create buildings, spaces, master-plans, objects and
              infrastructure. Focusing on large scale projects in cities all
              over the world, we prioritise those with the greatest positive
              social impact.
            </Span1>
          </AboutUs>
        </Column>
        <Column>
          <Img3 src="image/image3.png" />
          <Img4 src="image/lanhchuaoman.png" />
        </Column>
      </Nglinh>
    </Container>
  );
};

export default Hero1;
const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;

`;
const Nglinh = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 42% 38%;
  padding-left: 30px 0;

`;
const Column = styled.div`
  position: relative;
  z-index: 1;
  border: 3px solid #000;
  margin-left: 15px;
  background-color: #ffff;
  &:first-child {
    margin-left: 0;
  }
`;
const Img1 = styled.img`
  width: 100%;
  height: 100%;
`;
const Img2 = styled.img`
  max-width: 100%;
  height: 100%;
`;
const Img3 = styled.img`
  width: 100%;
  height: 100%;
`;
const Img4 = styled.img`
  max-width: 100%;
  height: auto;
  position: absolute;
  top: 80px;
  right: 40px;
`;
const AboutUs = styled.div`
  position: absolute;
  top: 25%;
  padding: 0 60px;
  text-align: center;
  justify-content: center;
  font-weight: 700;
  text-align: left;
`;

const Title1 = styled.span`
  font-size: 80px;
  display: block;
  line-height: 60px;
`;
const Title2 = styled.span`
  font-size: 80px;
  color: blue;
  line-height: 60px;
`;

const Span = styled.div`
  font-family: "Play", sans-serif;
  font-size: 35px;
  line-height: 35px;
  font-style: normal;
  color: #333333;
  margin-bottom: 10px;
`;
const Span1 = styled.div`
  color: #333333;
  font-size: 15px;
  line-height: 27px;
  font-weight: 400;
`;
const TitleContainer = styled.div`
  margin-bottom: 10px;
`;
