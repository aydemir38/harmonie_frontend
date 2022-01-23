import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Segment, Grid, Form, Button, Divider } from "semantic-ui-react";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsername = (value) => {
    setUsername(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const sendRequest = (path) => {
      console.log(path)
    fetch("auth/" + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("tokenKey"),
      },
      body: JSON.stringify({
        userName: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("tokenKey", result.message);
        localStorage.setItem("currentUser", result.userId);
        localStorage.setItem("userName", username)
      })
      .catch((err) => console.log(err));
  };

  const handleButton = (path) => {
   sendRequest(path);
    setUsername("");
    setPassword("");
    navigate("/auth")
  };

  

  return (
    <Segment placeholder>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <Form>
            <Form.Input
              icon="user"
              iconPosition="left"
              label="Username"
              placeholder="Username"
              onChange={(i) => handleUsername(i.target.value)}
              
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              label="Password"
              type="password"
              onChange={(i) => handlePassword(i.target.value)}
            />

            <Button content="Login" primary onClick={ () => handleButton("login")}/>
          </Form>
        </Grid.Column>

        <Grid.Column verticalAlign="middle">
          <Button
            content="Sign up"
            icon="signup"
            size="big"
            color="green"
            inverted
            onClick={ () => handleButton("register")}
          />
        </Grid.Column>
      </Grid>

      <Divider vertical>Or</Divider>
    </Segment>
  );
}

      