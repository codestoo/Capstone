import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Account() {
  const [userEmail, setUserEmail] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  let userid;

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
    setUserEmail(user.email);
    userid = user.id;
  }

  async function updateUser() {
    const { data, error } = await supabase.auth.updateUser({ email: email });
    console.log(data, error);
  }

  return (
    <div>
      <div>Account</div>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{userEmail}</Form.Label>
          <Form.Control
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="Enter email"
          />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button onClick={updateUser} variant="primary" type="button">
          Update Email
        </Button>
      </Form>
    </div>
  );
}

export default Account;
