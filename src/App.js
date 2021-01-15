import React from 'react';
import image from './assets/challenge.jpg';
import './App.css';
import './sign.js';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Button,Alert,Container,Row,Col,Form,Image} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container fluid>
        <Row>
          <Col>
           <Image src= {image} className ="rounded float-left" style={{width:700,height:500}}></Image>
          </Col>
          <Col style={{padding:50}}>
          <Form>
           <Form.Group>
           <Alert style={{color: 'orange'}}>Join our community and start your challenge</Alert>
            <Form.Label>Email Address :</Form.Label>
            <Form.Control type="email" placeholder="exemple@email.com"></Form.Control>
            <Form.Text>we'll never share your email address, trust us!</Form.Text>
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="password"></Form.Control>
           </Form.Group>
           <Button className="btn btn-warning" type="submit">SIGN IN</Button>
           <Alert>New to START ?</Alert>
           <a href="#" onClick='sign.js'>Sign up now</a>

          </Form>
          </Col>
        </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
