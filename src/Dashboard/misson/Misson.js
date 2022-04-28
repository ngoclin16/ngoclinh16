import React from "react";
import styled from "styled-components";

const Misson = () => {
  return (
    <Container>
      <Column>
        <Img src="/image/gr1.png" />
        <Img1 src="/image/gr2.png" />
      </Column>
      <Column>
        <Img2 src="/image/Group.png" />
        <Inl>
          <Total>
            <Title1>Our</Title1>
            <Title2>Misson</Title2>
          </Total>
          <Total1>
            <Title3>TIÊN PHONG</Title3>
            <Title4>CHO CÁC DỰ ÁN</Title4>
            <Title5>NFTs</Title5>
            <Title6>ĐƯA TÁC PHẨM NGHỆ THUẬT VIỆT RA THỊ TRƯỜNG QUỐC TẾ</Title6>
          </Total1>
        </Inl>
      </Column>
      <Column>
      <Total2>
        <Total3>          
          <Title7>Our</Title7>
          <Title8>Vison</Title8>
        </Total3>             
          <Title9>Heatherwick Studio is a team of over 200 problem solvers dedicated to making the physical world around us better for everyone. Based out of our combined workshop and design studio in Central London, we create buildings, spaces, master-plans, objects and infrastructure. Focusing on large scale projects in cities all over the world, we prioritise those with the greatest positive social impact.</Title9>  
      </Total2>

       </Column>
    </Container>
  );
};
export default Misson;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 32% 30% 38%;
  padding-left: 30px 0;
  text-align: center;
  justify-content: center;
`;
const Column = styled.div`
  position: relative;
  border: solid 3px #000;
  margin-left: 20px ;
  background-color: #ffff;
  &:first-child {
    margin-left: 0;
  }
`;
const Inl = styled.div`
  width: 100%;
  position: absolute;
  top: 120px;
  z-index: 100;
  justify-content: center;
  font-weight: 700;
`;
const Total = styled.div`
  font-size: 80px;
  margin-bottom: 10px;
`;
const Title1 = styled.div`
  line-height: 0.1;
`;
const Title2 = styled.div`
  color: #3b62ff;
`;

const Total1 = styled.div`
  line-height: 1.3;
  font-weight: 700;

`;
const Title3 = styled.div`
  font-size: 35px;
  line-height: 1.0;
  color: #3b62ff;
`;
const Title4 = styled.div`
  font-size: 35px;
`;
const Title5 = styled.div`
  font-size: 150px;
  line-height: 0.9;
  color: #3b62ff;
`;
const Title6 = styled.div`
  font-size: 22px;
  line-height: 1.0;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Img1 = styled.img`
  width: 475px;
  height: auto;
  position: absolute;
  top: 70px;
  z-index: 190;
  left: 5px;
  right: 1px;
  bottom: 80px;
`;
const Img2 = styled.img`
  width: 379px;
  height: auto;
  position: absolute;
  top: 0px;
  right: 0.6000000000000014px;
  z-index: 100;
`;
const Total2 = styled.div`
  position: absolute;
  top: 40%;
  padding: 0 60px;
  text-align: center;
  justify-content: center;
  font-weight: 700;
  text-align: left;
  line-height: 1.3;

`;

const Total3 = styled.div`
  font-size: 80px;
`;
const Title7 = styled.div`
  line-height: 0.2;
`;
const Title8 = styled.div`
  color: #3b62ff;
`;
const Title9 = styled.div`
  font-size: 13.8px;
  color: #333333;
  line-height: 20px;
  font-weight: 400;
`;