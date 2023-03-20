import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./img/hsc.png";
import Card from "react-bootstrap/Card";
import "./App.css";

function App() {
  return (
    <div>
      <header className="background-img"
              style={{
                height: "100vh",
                backgroundSize: "100% 100%",
              }}>
        <Container>
          <Navbar className="pt-4">
            <Navbar.Brand href="/">
              <h3 className="font-size">
                <span className="logo ">LOGO</span>
              </h3>
            </Navbar.Brand>
          </Navbar>
        </Container>

        <Container >
          <div className="header-box text-center ">
            
              <h1>Taste and Feel Cool</h1>
              <p className="header-txt">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. 
              </p>
              <button className="menu-button">Menu</button>
          </div>
        </Container>
      </header>

      <Container className="mt-5 mb-5 d-flex flex-wrap justify-content-center gap-4">
        <Card className="mt-4 " style={{ width: "18rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Cone flavor</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-4 " style={{ width: "18rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Cone flavor</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-4" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Cone flavor</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-4" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Cone flavor</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-4" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Cone flavor</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <footer
        style={{ backgroundColor: "#252525", height: "170px", color: "white" }}
      >
        <Container
          className="d-flex justify-content-md-between align-items-center flex-wrap justify-content-center"
          style={{ height: "100%" }}
        >
          <div>
            <h1 style={{ fontSize: "18px" }}>© 2023 Snow Cones</h1>
            <p>Icon by www.wishforge.games on freeicons.io</p>
            <a
              style={{ color: "white" }}
              href="https://www.instagram.com/yardi_kitchen/"
            >
              <i
                className="fa-brands fa-instagram"
                style={{ fontSize: "30px" }}
              ></i>
            </a>
          </div>

          <div>
            <h1 style={{ fontSize: "18px" }}>
              WEB DESIGN BY LAURISSEAU JOSEPH
            </h1>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;

/*

        <Container className="header-content d-flex align-items-center justify-content-evenly ">
          <div className="title red">
            <h1>Taste and Feel Cool</h1>
            <p className="red">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button className="menu-button">Menu</button>
          </div>
        </Container>

        
*/
