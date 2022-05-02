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
          <p>hello abhishek</p>
        </div>
        <section className="mainSection">
          <Container>
            <div className="mainSectionHead">
              <h2>BOOST PERFORMANCE EFFORTLESSLY</h2>
              <p>
                My name is Abhishek & i love someOne how hates me so much.
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
                  <h5>Fall Asleep Easier & Ignore Stress</h5>
                </div>
              </Col>
            </Row>
          </Container>
          <div>
            <h2>
              mera naam abhishek hai
            </h2>
          </div>
        </section>
        <div>
          <VideoContainer />
        </div>
        <div className="downloadSection">
          <Container>
            <Row>
              <div className="footerSignUp">
                <h4>GET EARLY ACCESS OF MY LIFE</h4>
                <div className="signUp">
                  <form autoComplete="off">
                    <div>
                      <label for="email"></label>
                      <input
                      sdd
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"/>
                    </div>
                    <div>
                      <button type="submit">S
                      asasdIGN UP</button>
                    </div>
                  </form>
                </div>
              </div>
            </Row>
          </Container>
        </div>
        cahncuiacg
      </section>
      <HomeFooter />
    </>
  );
};
export default Home;
