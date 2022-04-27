import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import HomeFooter from "../HomeFooter/HomeFooter";
import HomeHeader from "../HomeHeader/HomeHeader";
import Banner from "./Banner/Banner";
import VideoContainer from "./VideoContainer/VideoContainer";
import BuildPopPup from "./HomePopPup/BuildPopUp";
import ImprovePopUp from "./HomePopPup/ImprovePopUp";
import FallPopUp from "./HomePopPup/FallPopUp";

const Home = () => {
  return (
    <>
      <section>
        <div>
          <HomeHeader />
        </div>
        <div>
          <Banner />
        </div>

        <section className="mainSection">

          <Container>

            <div className="mainSectionHead">
              <h2>BOOST PERFORMANCE EFFORTLESSLY</h2>
              <p>
                  
                  One how hates me so much.


                <br />


                but me fir bhi tumko chahuga , me fir bhi tumko chahuga.
              </p>
            </div>
            <Row>
              <Col lg={4}>
                <div className="icon">



                  <BuildPopPup />
                  <h5>Build Stress Resilience Make you Happy</h5>
                </div>

              </Col>
              <Col lg={4}>


                <div className="icon">
                  <ImprovePopUp />
                  <h5>Improve Task Focus By Maditation</h5>
                </div>
                
              </Col>
              <Col lg={4}>
                <div className="icon">
                  <FallPopUp />
                  <h5>Fall Asleep Easi
                      
                      er & Ignore Stress</h5>
                </div>
              </Col>


            </Row>
          </Container>
        </section>
        <div>
          <VideoContainer />

        </div>
        <div className="downloadSection">
          <Container>




            <Row>
              <div className="footerSignUp">
                <h4>GET EARLY ACCESS</h4>
                <div classNam
                ="signUp">
                    
                    "email"></label>
                      <input
                        type="e
                        
        </div>
      </section>
      <HomeFooter />
    </>
  );
};
export default Home;
