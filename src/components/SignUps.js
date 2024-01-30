import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

function SignUps() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  async function signUpUser() {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    // console.log(data, error);
    navigate("/login");
  }
  
  return (
    <Container className="p-5">
      <h1>Sign Up</h1>
      <Form className="p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-light">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button onClick={signUpUser} variant="primary">Submit</Button>
      </Form>
    </Container>
  );
}

export default SignUps;
