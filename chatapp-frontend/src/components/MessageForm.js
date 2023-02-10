import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import './MessageForm.css';


export default function MessageForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className='messages-output'> </div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={11}>
              <Form.Group>
                <Form.Control type="text" placeholder='Your message'></Form.Control>
              </Form.Group>
            </Col>
            <Col md={1}>
              <Button variant="primary" tye="submit" style={{ width: '100%', backgroundColor: '#7286D3', border: 'none' }}>
                <i class="fa-solid fa-paper-plane"></i>
              </Button>
            </Col>
          </Row>

        </Form>
    </>
  )
}
