import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import {Form, Button} from 'react-bootstrap';

export default function Contact() {
  return (
    <PrimaryLayout column="col-10">
      <h1>Contact Us</h1>
      <Form className="pt-5">
        <Form.Group controlId="contactForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Your Name" />
        </Form.Group>
        <Form.Group controlId="contactForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="contactForm.ControlInput1">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="name" placeholder="I wan to talk about..." />
        </Form.Group>
        <Form.Group controlId="contactForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="contactForm.Submit">
          <Button>Send</Button>
        </Form.Group>
      </Form>
    </PrimaryLayout>
)}
