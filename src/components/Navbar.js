import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

function Nav_bar() {
  const navigate=useNavigate()
  async function logout(){
    let { error } = await supabase.auth.signOut()
    navigate("/login");
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">
          {/* React-Bootstrap */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}to="/">Home</Nav.Link>
            <Nav.Link as={Link}to="/about">About</Nav.Link>
            <Nav.Link as={Link}to="/photography">Photography</Nav.Link>
            <Nav.Link as={Link}to="/paintings">Paintings</Nav.Link>
            <Nav.Link as={Link}to="/travel-stories">Travel Stories</Nav.Link>
            {/* <Nav.Link as={Link}to="/events">Events</Nav.Link>
            <Nav.Link as={Link}to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link}to="/purchase">Purchase</Nav.Link> */}
            <Nav.Link as={Link}to="/signup">Sign Up</Nav.Link>
            <Nav.Link as={Link}to="/login">Log In</Nav.Link>
            {/* <Nav.Link as={Link}to="/account">Account</Nav.Link> */}
            <Nav.Link as={Link}to="/newestwork">Newest Work</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button variant="outline-secondary" onClick={logout}>
        Logout
      </Button>
    </Navbar>
  );
}

export default Nav_bar;
