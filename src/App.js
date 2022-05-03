// import Header from "./component/header/Header";
// import Comingsoon from "./component/body/Body";
// import Footer from "./component/footer/Footer";

import Header from "./Dashboard/header/Header"
import Hero from "./Dashboard/hero/Hero"
import Footer from "./Dashboard/footer/Footer";
import Hero1 from "./Dashboard/hero1/Hero1";
import Misson from "./Dashboard/misson/Misson";
import Ourteam from "./Dashboard/ourteam/Ourteam";
import Gallery from "./Dashboard/gallery/Gallery";
import Ourpartner from "./Dashboard/ourpartner/Ourpartner";
import styled from "styled-components";
import Contactus from "./Dashboard/contactus/Contactus";
const App = () => {
const ContainerApp = styled.div`
  width: 100%;
  overflow: hidden;
`
  return ( 
    <ContainerApp>

      <Header/>
      <Hero/>
      <Footer/>
      <Hero1/>
      <Misson/>
      <Ourteam/>
      <Gallery/>
      <Ourpartner/>
      <Contactus/>
      
    </ContainerApp>
   );
}
 
export default App;